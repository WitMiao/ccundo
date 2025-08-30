#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import inquirer from 'inquirer';
import { SessionTracker } from '../src/core/SessionTracker.js';
import { UndoManager } from '../src/core/UndoManager.js';
import { formatDistance } from '../src/utils/formatting.js';
import { ClaudeSessionParser } from '../src/core/ClaudeSessionParser.js';
import { OperationPreview } from '../src/core/OperationPreview.js';
import { i18n } from '../src/i18n/i18n.js';
import { UndoTracker } from '../src/core/UndoTracker.js';
import { RedoManager } from '../src/core/RedoManager.js';
import path from 'path';

// Initialize i18n
await i18n.init();

const program = new Command();

program
  .name('ccundo')
  .description(i18n.t('program.description'))
  .version('1.1.1');

program
  .command('list')
  .description(i18n.t('cmd.list.description'))
  .option('-a, --all', i18n.t('opt.all'))
  .option('-s, --session <id>', i18n.t('opt.session'))
  .option('--claude', i18n.t('opt.claude'), true)
  .option('--local', i18n.t('opt.local'))
  .action(async (options) => {
    try {
      let operations = [];
      
      if (!options.local) {
        // Default: Read from Claude Code session
        const parser = new ClaudeSessionParser();
        const sessionFile = await parser.getCurrentSessionFile();
        
        if (!sessionFile) {
          console.log(chalk.yellow(i18n.t('msg.no_active_session')));
          console.log(chalk.gray(i18n.t('msg.make_sure_directory')));
          return;
        }
        
        operations = await parser.parseSessionFile(sessionFile);
        console.log(chalk.bold(`\n${i18n.t('header.operations_claude')}\n`));
      } else {
        // Use local ccundo tracking
        const sessionId = options.session || await SessionTracker.getCurrentSession();
        if (!sessionId) {
          console.log(chalk.yellow(i18n.t('msg.no_local_session')));
          return;
        }

        const tracker = new SessionTracker(sessionId);
        await tracker.init();
        operations = await tracker.getOperations(options.all);
        console.log(chalk.bold(`\n${i18n.t('header.operations_local', { sessionId })}\n`));
      }
      
      if (operations.length === 0) {
        console.log(chalk.yellow(i18n.t('msg.no_operations')));
        return;
      }

      operations.forEach((op, index) => {
        const status = op.undone ? chalk.red(i18n.t('status.undone')) : chalk.green(i18n.t('status.active'));
        const time = formatDistance(op.timestamp);
        
        console.log(`${index + 1}. ${status} ${chalk.cyan(i18n.t(`op.${op.type}`))} - ${time}`);
        console.log(`   ID: ${op.id}`);
        
        switch (op.type) {
          case 'file_create':
          case 'file_edit':
          case 'file_delete':
            console.log(`   ${i18n.t('label.file')}: ${op.data.filePath}`);
            break;
          case 'file_rename':
            console.log(`   ${i18n.t('label.from')}: ${op.data.oldPath}`);
            console.log(`   ${i18n.t('label.to')}: ${op.data.newPath}`);
            break;
          case 'directory_create':
          case 'directory_delete':
            console.log(`   ${i18n.t('label.directory')}: ${op.data.dirPath}`);
            break;
          case 'bash_command':
            console.log(`   ${i18n.t('label.command')}: ${op.data.command}`);
            break;
        }
        console.log('');
      });
    } catch (error) {
      console.error(chalk.red(i18n.t('error.general', { message: error.message })));
    }
  });

program
  .command('undo [operation-id]')
  .description(i18n.t('cmd.undo.description'))
  .option('-s, --session <id>', i18n.t('opt.session'))
  .option('-y, --yes', i18n.t('opt.yes'))
  .option('--local', i18n.t('opt.local_tracking'))
  .action(async (operationId, options) => {
    try {
      let operations = [];
      let sessionFile = null;
      
      if (options.local) {
        // Use local ccundo tracking
        const sessionId = options.session || await SessionTracker.getCurrentSession();
        if (!sessionId) {
          console.log(chalk.yellow(i18n.t('msg.no_local_session')));
          return;
        }

        const tracker = new SessionTracker(sessionId);
        await tracker.init();
        operations = await tracker.getOperations();
      } else {
        // Use Claude Code sessions
        const parser = new ClaudeSessionParser();
        sessionFile = await parser.getCurrentSessionFile();
        
        if (!sessionFile) {
          console.log(chalk.yellow(i18n.t('msg.no_active_session')));
          return;
        }
        
        operations = await parser.parseSessionFile(sessionFile);
      }
      
      if (operations.length === 0) {
        console.log(chalk.yellow(i18n.t('msg.no_operations_to_undo')));
        return;
      }

      // Reverse operations so most recent is first
      operations.reverse();
      
      let selectedIndex = 0;
      
      if (!operationId) {
        const choices = operations.map((op, index) => {
          const operationsToUndo = index + 1;
          let name = `${op.type} - ${formatDistance(op.timestamp)}`;
          
          if (operationsToUndo > 1) {
            name += chalk.red(i18n.t('ui.more_will_be_undone', { count: operationsToUndo - 1 }));
          }
          
          return {
            name: name,
            value: index,
            short: `${op.type} (${operationsToUndo} ops)`
          };
        });
        
        console.log(chalk.yellow(`\\n${i18n.t('prompt.cascading_warning')}\\n`));
        
        const answer = await inquirer.prompt([{
          type: 'list',
          name: 'selectedIndex',
          message: i18n.t('prompt.select_operation_undo'),
          choices: choices,
          pageSize: 15
        }]);
        
        selectedIndex = answer.selectedIndex;
      } else {
        selectedIndex = operations.findIndex(op => op.id === operationId);
        if (selectedIndex === -1) {
          console.log(chalk.red(i18n.t('error.operation_not_found', { id: operationId })));
          return;
        }
      }
      
      const operationsToUndo = operations.slice(0, selectedIndex + 1);
      
      if (!options.yes) {
        console.log(chalk.yellow(`\\n${i18n.t('ui.undo_preview_header', { count: operationsToUndo.length })}\\n`));
        
        for (let i = 0; i < operationsToUndo.length; i++) {
          const op = operationsToUndo[i];
          console.log(`${chalk.bold(`${i + 1}.`)} ${chalk.cyan(op.type)} - ${formatDistance(op.timestamp)}`);
          
          const preview = await OperationPreview.generatePreview(op);
          console.log(`   ${preview.preview.replace(/\\n/g, '\\n   ')}`);
          console.log('');
        }
        
        const confirm = await inquirer.prompt([{
          type: 'confirm',
          name: 'proceed',
          message: i18n.t('prompt.confirm_undo', { count: operationsToUndo.length }),
          default: false
        }]);
        
        if (!confirm.proceed) {
          console.log(chalk.yellow(i18n.t('msg.undo_cancelled')));
          return;
        }
      }

      const undoManager = new UndoManager();
      await undoManager.init();
      
      const undoTracker = new UndoTracker();
      await undoTracker.init();
      
      console.log(chalk.cyan(`\\n${i18n.t('ui.undoing_operations', { count: operationsToUndo.length })}\\n`));
      
      let successCount = 0;
      let failCount = 0;
      
      for (const operation of operationsToUndo) {
        const result = await undoManager.undo(operation);
        
        if (result.success) {
          successCount++;
          console.log(chalk.green(`✓ ${result.message}`));
          if (result.backupPath) {
            console.log(chalk.gray(`  ${i18n.t('msg.backup_saved_to', { path: result.backupPath })}`));
          }
          
          // Mark operation as undone if using Claude Code sessions
          if (sessionFile) {
            await undoTracker.markAsUndone(operation.id, sessionFile);
          }
        } else {
          failCount++;
          console.log(chalk.red(`✗ ${result.message}`));
        }
      }
      
      console.log(chalk.bold(`\\n${i18n.t('status.completed', { success: chalk.green(successCount), failed: chalk.red(failCount) })}`));
      
    } catch (error) {
      console.error(chalk.red(i18n.t('error.general', { message: error.message })));
    }
  });

program
  .command('redo [operation-id]')
  .description(i18n.t('cmd.redo.description'))
  .option('-s, --session <id>', i18n.t('opt.session'))
  .option('-y, --yes', i18n.t('opt.yes'))
  .option('--local', i18n.t('opt.local_tracking'))
  .action(async (operationId, options) => {
    try {
      let operations = [];
      let sessionFile = null;
      
      if (options.local) {
        // Use local ccundo tracking
        const sessionId = options.session || await SessionTracker.getCurrentSession();
        if (!sessionId) {
          console.log(chalk.yellow(i18n.t('msg.no_local_session')));
          return;
        }

        const tracker = new SessionTracker(sessionId);
        await tracker.init();
        // For local tracking, we'd need to implement redo tracking
        console.log(chalk.yellow(i18n.t('msg.redo_not_implemented')));
        return;
      } else {
        // Use Claude Code sessions
        const parser = new ClaudeSessionParser();
        sessionFile = await parser.getCurrentSessionFile();
        
        if (!sessionFile) {
          console.log(chalk.yellow(i18n.t('msg.no_active_session')));
          return;
        }
        
        // Get all operations first
        const allOperations = await parser.parseSessionFile(sessionFile);
        // Then get undone operations by temporarily disabling filtering
        const undoTracker = new UndoTracker();
        await undoTracker.init();
        
        // Get the original operations without filtering by calling parser method directly
        const parser2 = new ClaudeSessionParser();
        const originalOperations = [];
        
        // We need to parse the session file without the undo filtering
        const { createReadStream } = await import('fs');
        const { createInterface } = await import('readline');
        
        const fileStream = createReadStream(sessionFile);
        const rl = createInterface({
          input: fileStream,
          crlfDelay: Infinity
        });

        for await (const line of rl) {
          try {
            const entry = JSON.parse(line);
            if (entry.type === 'assistant' && entry.message?.content) {
              for (const content of entry.message.content) {
                if (content.type === 'tool_use') {
                  const operation = parser2.extractOperation(content, entry.timestamp);
                  if (operation) {
                    originalOperations.push(operation);
                  }
                }
              }
            }
          } catch (e) {
            // Skip invalid JSON lines
          }
        }
        
        operations = await undoTracker.getUndoneOperationsList(originalOperations, sessionFile);
      }
      
      if (operations.length === 0) {
        console.log(chalk.yellow(i18n.t('msg.no_operations_to_redo')));
        return;
      }

      // Operations are already in reverse order (most recent undo first)
      let selectedIndex = 0;
      
      if (!operationId) {
        const choices = operations.map((op, index) => {
          const operationsToRedo = index + 1;
          let name = `${op.type} - ${formatDistance(op.timestamp)}`;
          
          if (operationsToRedo > 1) {
            name += chalk.green(i18n.t('ui.more_will_be_redone', { count: operationsToRedo - 1 }));
          }
          
          return {
            name: name,
            value: index,
            short: `${op.type} (${operationsToRedo} ops)`
          };
        });
        
        console.log(chalk.yellow(`\\n${i18n.t('prompt.cascading_redo_warning')}\\n`));
        
        const answer = await inquirer.prompt([{
          type: 'list',
          name: 'selectedIndex',
          message: i18n.t('prompt.select_operation_redo'),
          choices: choices,
          pageSize: 15
        }]);
        
        selectedIndex = answer.selectedIndex;
      } else {
        selectedIndex = operations.findIndex(op => op.id === operationId);
        if (selectedIndex === -1) {
          console.log(chalk.red(i18n.t('error.operation_not_found', { id: operationId })));
          return;
        }
      }
      
      const operationsToRedo = operations.slice(0, selectedIndex + 1);
      
      if (!options.yes) {
        console.log(chalk.yellow(`\\n${i18n.t('header.this_will_redo', { count: operationsToRedo.length })}\\n`));
        
        for (let i = 0; i < operationsToRedo.length; i++) {
          const op = operationsToRedo[i];
          console.log(`${chalk.bold(`${i + 1}.`)} ${chalk.cyan(op.type)} - ${formatDistance(op.timestamp)}`);
          console.log('');
        }
        
        const confirm = await inquirer.prompt([{
          type: 'confirm',
          name: 'proceed',
          message: i18n.t('prompt.confirm_redo', { count: operationsToRedo.length }),
          default: false
        }]);
        
        if (!confirm.proceed) {
          console.log(chalk.yellow(i18n.t('msg.redo_cancelled')));
          return;
        }
      }

      const redoManager = new RedoManager();
      await redoManager.init();
      
      const undoTracker = new UndoTracker();
      await undoTracker.init();
      
      console.log(chalk.cyan(`\\n${i18n.t('header.redoing', { count: operationsToRedo.length })}\\n`));
      
      let successCount = 0;
      let failCount = 0;
      
      // Redo operations in reverse order (oldest undone operation first)
      for (const operation of operationsToRedo.reverse()) {
        const result = await redoManager.redo(operation);
        
        if (result.success) {
          successCount++;
          console.log(chalk.green(`✓ ${result.message}`));
          if (result.backupPath) {
            console.log(chalk.gray(`  ${i18n.t('msg.backup_saved_to', { path: result.backupPath })}`));
          }
          
          // Mark operation as redone (remove from undone list)
          if (sessionFile) {
            await undoTracker.markAsRedone(operation.id, sessionFile);
          }
        } else {
          failCount++;
          console.log(chalk.red(`✗ ${result.message}`));
        }
      }
      
      console.log(chalk.bold(`\\n${i18n.t('status.completed', { success: chalk.green(successCount), failed: chalk.red(failCount) })}`));
      
    } catch (error) {
      console.error(chalk.red(i18n.t('error.general', { message: error.message })));
    }
  });

program
  .command('preview [operation-id]')
  .description(i18n.t('cmd.preview.description'))
  .option('-s, --session <id>', i18n.t('opt.session'))
  .option('--local', i18n.t('opt.local_tracking'))
  .action(async (operationId, options) => {
    try {
      let operations = [];
      
      if (options.local) {
        const sessionId = options.session || await SessionTracker.getCurrentSession();
        if (!sessionId) {
          console.log(chalk.yellow(i18n.t('msg.no_local_session')));
          return;
        }

        const tracker = new SessionTracker(sessionId);
        await tracker.init();
        operations = await tracker.getOperations();
      } else {
        const parser = new ClaudeSessionParser();
        const sessionFile = await parser.getCurrentSessionFile();
        
        if (!sessionFile) {
          console.log(chalk.yellow(i18n.t('msg.no_active_session')));
          return;
        }
        
        operations = await parser.parseSessionFile(sessionFile);
      }
      
      if (operations.length === 0) {
        console.log(chalk.yellow(i18n.t('msg.no_operations')));
        return;
      }

      operations.reverse();
      
      let selectedIndex = 0;
      
      if (!operationId) {
        const choices = operations.map((op, index) => {
          const operationsToUndo = index + 1;
          let name = `${op.type} - ${formatDistance(op.timestamp)}`;
          
          if (operationsToUndo > 1) {
            name += chalk.gray(i18n.t('ui.more_would_be_undone', { count: operationsToUndo - 1 }));
          }
          
          return {
            name: name,
            value: index
          };
        });
        
        const answer = await inquirer.prompt([{
          type: 'list',
          name: 'selectedIndex',
          message: i18n.t('prompt.select_operation_preview'),
          choices: choices,
          pageSize: 15
        }]);
        
        selectedIndex = answer.selectedIndex;
      } else {
        selectedIndex = operations.findIndex(op => op.id === operationId);
        if (selectedIndex === -1) {
          console.log(chalk.red(i18n.t('error.operation_not_found', { id: operationId })));
          return;
        }
      }
      
      const operationsToUndo = operations.slice(0, selectedIndex + 1);
      
      console.log(chalk.blue(`\\n📋 ${i18n.t('ui.preview_undo', { count: operationsToUndo.length })}\\n`));
      
      for (let i = 0; i < operationsToUndo.length; i++) {
        const op = operationsToUndo[i];
        console.log(`${chalk.bold(`${i + 1}.`)} ${chalk.cyan(op.type)} - ${formatDistance(op.timestamp)}`);
        
        const preview = await OperationPreview.generatePreview(op);
        console.log(`   ${preview.preview.replace(/\\n/g, '\\n   ')}`);
        console.log('');
      }
      
      console.log(chalk.gray(i18n.t('tip.perform_undos')));
      
    } catch (error) {
      console.error(chalk.red(i18n.t('error.general', { message: error.message })));
    }
  });

program
  .command('sessions')
  .description(i18n.t('cmd.sessions.description'))
  .option('--local', i18n.t('opt.show_local_sessions'))
  .action(async (options) => {
    try {
      if (options.local) {
        const sessions = await SessionTracker.listSessions();
        const currentSession = await SessionTracker.getCurrentSession();
        
        if (sessions.length === 0) {
          console.log(chalk.yellow(i18n.t('msg.no_local_sessions')));
          return;
        }
        
        console.log(chalk.bold(`\n${i18n.t('header.available_sessions_local')}\n`));
        
        sessions.forEach(session => {
          const isCurrent = session === currentSession;
          const marker = isCurrent ? chalk.green('→ ') : '  ';
          console.log(`${marker}${session}`);
        });
      } else {
        const parser = new ClaudeSessionParser();
        const sessions = await parser.getAllSessions();
        
        if (sessions.length === 0) {
          console.log(chalk.yellow(i18n.t('msg.no_sessions_found')));
          return;
        }
        
        console.log(chalk.bold(`\n${i18n.t('header.available_sessions_claude')}\n`));
        
        const currentProjectDir = await parser.getCurrentProjectDir();
        const currentProjectDirName = path.basename(currentProjectDir);

        sessions.forEach(session => {
          const isCurrent = session.rawProjectDir === currentProjectDirName;
          const marker = isCurrent ? chalk.green('→ ') : '  ';
          console.log(`${marker}${chalk.cyan(session.id)}`);
          console.log(`  ${i18n.t('label.project')}: ${session.project}`);
        });
      }
    } catch (error) {
      console.error(chalk.red(i18n.t('error.general', { message: error.message })));
    }
  });

program
  .command('session <id>')
  .description(i18n.t('cmd.session.description'))
  .action(async (sessionId) => {
    try {
      await SessionTracker.setCurrentSession(sessionId);
      console.log(chalk.green(i18n.t('msg.switched_to_session', { sessionId })));
    } catch (error) {
      console.error(chalk.red(i18n.t('error.general', { message: error.message })));
    }
  });

program
  .command('language [lang]')
  .description(i18n.t('cmd.language.description'))
  .action(async (lang) => {
    try {
      if (!lang) {
        // Show current language and available options
        const current = i18n.getCurrentLanguage();
        const available = i18n.getAvailableLanguages();
        
        console.log(chalk.bold(`\\n${i18n.t('ui.current_language', { name: chalk.cyan(current.name), code: current.code })}\\n`));
        console.log(chalk.bold(i18n.t('ui.available_languages')));
        available.forEach(({ code, name }) => {
          const marker = code === current.code ? chalk.green('→ ') : '  ';
          console.log(`${marker}${code} - ${name}`);
        });
        console.log(chalk.gray(`\\n${i18n.t('ui.language_usage')}`));
        return;
      }
      
      await i18n.setLanguage(lang);
      const newLang = i18n.getCurrentLanguage();
      console.log(chalk.green(i18n.t('msg.language_set', { language: newLang.name })));
    } catch (error) {
      const available = i18n.getAvailableLanguages().map(l => l.code).join(', ');
      console.error(chalk.red(i18n.t('msg.language_invalid', { languages: available })));
    }
  });

program.parse(process.argv);