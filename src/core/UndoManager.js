import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { OperationType } from './Operation.js';
import { i18n } from '../i18n/i18n.js';

export class UndoManager {
  constructor() {
    this.backupDir = path.join(os.homedir(), '.ccundo', 'backups');
  }

  async init() {
    await fs.mkdir(this.backupDir, { recursive: true });
  }

  async undo(operation) {
    switch (operation.type) {
      case OperationType.FILE_CREATE:
        return await this.undoFileCreate(operation);
      case OperationType.FILE_EDIT:
        return await this.undoFileEdit(operation);
      case OperationType.FILE_DELETE:
        return await this.undoFileDelete(operation);
      case OperationType.FILE_RENAME:
        return await this.undoFileRename(operation);
      case OperationType.DIRECTORY_CREATE:
        return await this.undoDirectoryCreate(operation);
      case OperationType.DIRECTORY_DELETE:
        return await this.undoDirectoryDelete(operation);
      case OperationType.BASH_COMMAND:
        return await this.undoBashCommand(operation);
      default:
        throw new Error(i18n.t('error.unknown_operation_type', { type: operation.type }));
    }
  }

  async undoFileCreate(operation) {
    const { filePath } = operation.data;
    const backupPath = path.join(this.backupDir, `${operation.id}-deleted`);
    
    try {
      const content = await fs.readFile(filePath, 'utf8');
      await fs.writeFile(backupPath, content);
      await fs.unlink(filePath);
      
      return {
        success: true,
        message: i18n.t('undo.file_deleted', { path: filePath }),
        backupPath
      };
    } catch (error) {
      return {
        success: false,
        message: i18n.t('undo.failed_file_creation', { error: error.message })
      };
    }
  }

  async undoFileEdit(operation) {
    const { filePath, originalContent, oldString, newString, replaceAll, edits, isMultiEdit } = operation.data;
    
    try {
      const currentContent = await fs.readFile(filePath, 'utf8');
      const backupPath = path.join(this.backupDir, `${operation.id}-current`);
      await fs.writeFile(backupPath, currentContent);
      
      let revertedContent = currentContent;
      
      if (originalContent) {
        // Legacy mode: we have the full original content (from local tracking)
        revertedContent = originalContent;
      } else if (isMultiEdit && edits) {
        // Handle MultiEdit by reversing each edit in reverse order
        for (let i = edits.length - 1; i >= 0; i--) {
          const edit = edits[i];
          if (edit.new_string && edit.old_string !== undefined) {
            // Try to replace new_string back with old_string
            if (revertedContent.includes(edit.new_string)) {
              revertedContent = revertedContent.replace(edit.new_string, edit.old_string);
            }
          }
        }
      } else if (oldString !== undefined && newString) {
        // Handle single Edit operation - reverse the string replacement
        if (replaceAll) {
          // Replace all occurrences
          revertedContent = revertedContent.split(newString).join(oldString);
        } else {
          // Replace first occurrence only
          if (revertedContent.includes(newString)) {
            revertedContent = revertedContent.replace(newString, oldString);
          } else {
            return {
              success: false,
              message: i18n.t('undo.cannot_undo_edit', { path: filePath })
            };
          }
        }
      } else {
        return {
          success: false,
          message: i18n.t('undo.cannot_undo_edit_insufficient', { path: filePath })
        };
      }
      
      await fs.writeFile(filePath, revertedContent);
      
      return {
        success: true,
        message: i18n.t('undo.file_edit_reverted', { path: filePath }),
        backupPath
      };
    } catch (error) {
      return {
        success: false,
        message: i18n.t('undo.failed_file_edit', { error: error.message })
      };
    }
  }

  async undoFileDelete(operation) {
    const { filePath, content } = operation.data;
    
    if (!content) {
      return {
        success: false,
        message: i18n.t('undo.cannot_restore_file', { path: filePath })
      };
    }
    
    try {
      await fs.writeFile(filePath, content);
      
      return {
        success: true,
        message: i18n.t('undo.file_restored', { path: filePath })
      };
    } catch (error) {
      return {
        success: false,
        message: i18n.t('undo.failed_file_restore', { error: error.message })
      };
    }
  }

  async undoFileRename(operation) {
    const { oldPath, newPath } = operation.data;
    
    try {
      await fs.rename(newPath, oldPath);
      
      return {
        success: true,
        message: i18n.t('undo.file_renamed_back', { oldPath: newPath, newPath: oldPath })
      };
    } catch (error) {
      return {
        success: false,
        message: i18n.t('undo.failed_rename', { error: error.message })
      };
    }
  }

  async undoDirectoryCreate(operation) {
    const { dirPath } = operation.data;
    
    try {
      await fs.rmdir(dirPath);
      
      return {
        success: true,
        message: i18n.t('undo.directory_removed', { path: dirPath })
      };
    } catch (error) {
      return {
        success: false,
        message: i18n.t('undo.failed_remove_directory', { error: error.message })
      };
    }
  }

  async undoDirectoryDelete(operation) {
    const { dirPath } = operation.data;
    
    try {
      await fs.mkdir(dirPath, { recursive: true });
      
      return {
        success: true,
        message: i18n.t('undo.directory_restored', { path: dirPath })
      };
    } catch (error) {
      return {
        success: false,
        message: i18n.t('undo.failed_restore_directory', { error: error.message })
      };
    }
  }

  async undoBashCommand(operation) {
    const { command } = operation.data;
    
    return {
      success: false,
      message: i18n.t('undo.cannot_undo_bash', { command: command })
    };
  }
}