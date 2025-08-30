import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { OperationType } from './Operation.js';
import { i18n } from '../i18n/i18n.js';

export class RedoManager {
  constructor() {
    this.backupDir = path.join(os.homedir(), '.ccundo', 'backups');
  }

  async init() {
    await fs.mkdir(this.backupDir, { recursive: true });
  }

  async redo(operation) {
    switch (operation.type) {
      case OperationType.FILE_CREATE:
        return await this.redoFileCreate(operation);
      case OperationType.FILE_EDIT:
        return await this.redoFileEdit(operation);
      case OperationType.FILE_DELETE:
        return await this.redoFileDelete(operation);
      case OperationType.FILE_RENAME:
        return await this.redoFileRename(operation);
      case OperationType.DIRECTORY_CREATE:
        return await this.redoDirectoryCreate(operation);
      case OperationType.DIRECTORY_DELETE:
        return await this.redoDirectoryDelete(operation);
      case OperationType.BASH_COMMAND:
        return await this.redoBashCommand(operation);
      default:
        throw new Error(i18n.t('error.unknown_operation_type', { type: operation.type }));
    }
  }

  async redoFileCreate(operation) {
    const { filePath, content } = operation.data;
    
    try {
      // Check if file already exists
      const exists = await fs.access(filePath).then(() => true).catch(() => false);
      if (exists) {
        return {
          success: false,
          message: i18n.t('redo.cannot_redo_file_exists', { path: filePath })
        };
      }

      // Try to restore from backup first
      const backupPath = path.join(this.backupDir, `${operation.id}-deleted`);
      let fileContent = content || '';
      
      try {
        fileContent = await fs.readFile(backupPath, 'utf8');
      } catch (e) {
        // If no backup, use original content if available
        if (!content) {
          return {
            success: false,
            message: i18n.t('redo.cannot_redo_no_content', { path: filePath })
          };
        }
      }

      await fs.writeFile(filePath, fileContent);
      
      return {
        success: true,
        message: i18n.t('redo.file_recreated', { path: filePath })
      };
    } catch (error) {
      return {
        success: false,
        message: i18n.t('redo.failed_file_creation', { error: error.message })
      };
    }
  }

  async redoFileEdit(operation) {
    const { filePath, originalContent, oldString, newString, replaceAll, edits, isMultiEdit } = operation.data;
    
    try {
      const currentContent = await fs.readFile(filePath, 'utf8');
      const backupPath = path.join(this.backupDir, `${operation.id}-redo`);
      await fs.writeFile(backupPath, currentContent);
      
      let redoneContent = currentContent;
      
      if (originalContent) {
        // This was a legacy full-content edit, but we can't safely redo it
        // because we don't know what the "new" content should be
        return {
          success: false,
          message: i18n.t('redo.cannot_redo_legacy_edit', { path: filePath })
        };
      } else if (isMultiEdit && edits) {
        // Redo MultiEdit by applying each edit in original order
        for (const edit of edits) {
          if (edit.old_string !== undefined && edit.new_string) {
            if (redoneContent.includes(edit.old_string)) {
              redoneContent = redoneContent.replace(edit.old_string, edit.new_string);
            }
          }
        }
      } else if (oldString !== undefined && newString) {
        // Redo single Edit operation - apply the original string replacement
        if (replaceAll) {
          // Replace all occurrences
          redoneContent = redoneContent.split(oldString).join(newString);
        } else {
          // Replace first occurrence only
          if (redoneContent.includes(oldString)) {
            redoneContent = redoneContent.replace(oldString, newString);
          } else {
            return {
              success: false,
              message: i18n.t('redo.cannot_redo_edit', { path: filePath })
            };
          }
        }
      } else {
        return {
          success: false,
          message: i18n.t('redo.cannot_redo_edit_insufficient', { path: filePath })
        };
      }
      
      await fs.writeFile(filePath, redoneContent);
      
      return {
        success: true,
        message: i18n.t('redo.file_edit_redone', { path: filePath }),
        backupPath
      };
    } catch (error) {
      return {
        success: false,
        message: i18n.t('redo.failed_file_edit', { error: error.message })
      };
    }
  }

  async redoFileDelete(operation) {
    const { filePath } = operation.data;
    
    try {
      const exists = await fs.access(filePath).then(() => true).catch(() => false);
      if (!exists) {
        return {
          success: false,
          message: i18n.t('redo.cannot_redo_file_not_exist', { path: filePath })
        };
      }

      // Backup the file before deleting
      const backupPath = path.join(this.backupDir, `${operation.id}-redo-deleted`);
      const content = await fs.readFile(filePath, 'utf8');
      await fs.writeFile(backupPath, content);
      
      await fs.unlink(filePath);
      
      return {
        success: true,
        message: i18n.t('redo.file_deleted_again', { path: filePath }),
        backupPath
      };
    } catch (error) {
      return {
        success: false,
        message: i18n.t('redo.failed_file_deletion', { error: error.message })
      };
    }
  }

  async redoFileRename(operation) {
    const { oldPath, newPath } = operation.data;
    
    try {
      const oldExists = await fs.access(oldPath).then(() => true).catch(() => false);
      const newExists = await fs.access(newPath).then(() => true).catch(() => false);
      
      if (!oldExists) {
        return {
          success: false,
          message: i18n.t('redo.cannot_redo_rename_not_exist', { path: oldPath })
        };
      }
      
      if (newExists) {
        return {
          success: false,
          message: i18n.t('redo.cannot_redo_rename_exists', { path: newPath })
        };
      }

      await fs.rename(oldPath, newPath);
      
      return {
        success: true,
        message: i18n.t('redo.file_renamed_again', { oldPath: oldPath, newPath: newPath })
      };
    } catch (error) {
      return {
        success: false,
        message: i18n.t('redo.failed_rename', { error: error.message })
      };
    }
  }

  async redoDirectoryCreate(operation) {
    const { dirPath } = operation.data;
    
    try {
      const exists = await fs.access(dirPath).then(() => true).catch(() => false);
      if (exists) {
        return {
          success: false,
          message: i18n.t('redo.cannot_redo_dir_exists', { path: dirPath })
        };
      }

      await fs.mkdir(dirPath, { recursive: true });
      
      return {
        success: true,
        message: i18n.t('redo.directory_created_again', { path: dirPath })
      };
    } catch (error) {
      return {
        success: false,
        message: i18n.t('redo.failed_directory_creation', { error: error.message })
      };
    }
  }

  async redoDirectoryDelete(operation) {
    const { dirPath } = operation.data;
    
    try {
      const exists = await fs.access(dirPath).then(() => true).catch(() => false);
      if (!exists) {
        return {
          success: false,
          message: i18n.t('redo.cannot_redo_dir_not_exist', { path: dirPath })
        };
      }

      await fs.rmdir(dirPath);
      
      return {
        success: true,
        message: i18n.t('redo.directory_deleted_again', { path: dirPath })
      };
    } catch (error) {
      return {
        success: false,
        message: i18n.t('redo.failed_directory_deletion', { error: error.message })
      };
    }
  }

  async redoBashCommand(operation) {
    const { command } = operation.data;
    
    return {
      success: false,
      message: i18n.t('redo.cannot_redo_bash', { command: command })
    };
  }
}