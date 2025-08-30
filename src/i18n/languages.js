export const languages = {
  en: {
    name: 'English',
    messages: {
      // Program description
      'program.description': 'Undo individual steps performed by Claude Code within a session',
      
      // Command descriptions
      'cmd.list.description': 'List all operations in the current Claude Code session',
      'cmd.undo.description': 'Undo operations from the current Claude Code session',
      'cmd.redo.description': 'Redo previously undone operations',
      'cmd.preview.description': 'Preview what would be undone without making changes',
      'cmd.sessions.description': 'List all available Claude Code sessions',
      'cmd.session.description': 'Switch to a different session',
      'cmd.language.description': 'Set the interface language',
      
      // Options
      'opt.all': 'Show all operations including undone ones',
      'opt.session': 'Specify session ID',
      'opt.claude': 'Show operations from Claude Code session (default)',
      'opt.local': 'Show operations from local ccundo tracking',
      'opt.yes': 'Skip confirmation',
      'opt.local_tracking': 'Use local ccundo tracking instead of Claude sessions',
      'opt.show_local_sessions': 'Show local ccundo sessions instead of Claude sessions',
      
      // Messages
      'msg.no_active_session': 'No active Claude Code session found in this directory.',
      'msg.make_sure_directory': 'Make sure you are in a directory where Claude Code has been used.',
      'msg.no_local_session': 'No local ccundo session found.',
      'msg.no_operations': 'No operations found.',
      'msg.no_operations_to_undo': 'No operations to undo.',
      'msg.no_operations_to_redo': 'No operations to redo.',
      'msg.operation_not_found': 'Operation {id} not found.',
      'msg.already_undone': 'This operation has already been undone.',
      'msg.undo_cancelled': 'Undo cancelled.',
      'msg.no_sessions_found': 'No Claude Code sessions found.',
      'msg.no_local_sessions': 'No local sessions found.',
      'msg.language_set': 'Language set to {language}.',
      'msg.language_invalid': 'Invalid language. Available languages: {languages}',
      
      // Prompts
      'prompt.select_operation_undo': 'Select operation to undo:',
      'prompt.select_operation_redo': 'Select operation to redo:',
      'prompt.select_operation_preview': 'Select operation to preview:',
      'prompt.confirm_undo': 'Are you sure you want to undo these {count} operations?',
      'prompt.confirm_redo': 'Are you sure you want to redo these {count} operations?',
      'prompt.cascading_warning': '⚠️  Cascading undo: Selecting an operation will undo it and ALL operations that came after it.',
      
      // Operation types
      'op.file_create': 'file_create',
      'op.file_edit': 'file_edit',
      'op.file_delete': 'file_delete',
      'op.file_rename': 'file_rename',
      'op.directory_create': 'directory_create',
      'op.directory_delete': 'directory_delete',
      'op.bash_command': 'bash_command',
      
      // Operation actions
      'action.will_delete_file': 'Will delete file:',
      'action.will_revert_file': 'Will revert file:',
      'action.will_restore_file': 'Will restore file:',
      'action.will_rename_back': 'Will rename back:',
      'action.will_remove_directory': 'Will remove directory:',
      'action.will_restore_directory': 'Will restore directory:',
      'action.cannot_undo_bash': 'Cannot auto-undo bash command:',
      'action.manual_intervention': 'Manual intervention required',
      
      // Headers
      'header.operations_claude': 'Operations from Claude Code session:',
      'header.operations_local': 'Operations in local session {sessionId}:',
      'header.available_sessions_claude': 'Available Claude Code sessions:',
      'header.available_sessions_local': 'Available local sessions:',
      'header.preview': '📋 Preview: Would undo {count} operation(s):',
      'header.undoing': 'Undoing {count} operations...',
      'header.redoing': 'Redoing {count} operations...',
      'header.this_will_undo': 'This will undo {count} operation(s):',
      'header.this_will_redo': 'This will redo {count} operation(s):',
      
      // Status
      'status.active': '[ACTIVE]',
      'status.undone': '[UNDONE]',
      'status.current_content': 'Current content:',
      'status.content_to_restore': 'Content to restore:',
      'status.original_not_available': '(Original content not available from session)',
      'status.content_not_available': '(Content not available from session)',
      'status.completed': 'Completed: {success} successful, {failed} failed',
      
      // Time
      'time.seconds_ago': '{seconds}s ago',
      'time.minutes_ago': '{minutes}m ago',
      'time.hours_ago': '{hours}h ago',
      'time.days_ago': '{days}d ago',
      
      // Suffixes
      'suffix.more_operations': '(+ {count} more will be undone)',
      'suffix.more_would_be_undone': '(+ {count} more would be undone)',
      'suffix.tip_to_undo': '💡 To actually perform these undos, run: ccundo undo',
      
      // Labels
      'label.file': 'File',
      'label.from': 'From',
      'label.to': 'To',
      'label.directory': 'Directory',
      'label.command': 'Command',
      'label.project': 'Project',
      
      // Error messages
      'error.operation_not_found': 'Operation {id} not found.',
      'error.save_config_failed': 'Failed to save language config:',
      'error.track_operation_failed': 'Failed to track operation:',
      'error.general': 'Error: {message}',
      
      // UI messages
      'ui.undo_preview_header': 'This will undo {count} operation(s):',
      'ui.undoing_operations': 'Undoing {count} operations...',
      'ui.preview_undo': 'Preview: Would undo {count} operation(s):',
      'ui.current_language': 'Current language: {name} ({code})',
      'ui.available_languages': 'Available languages:',
      'ui.language_usage': 'Usage: ccundo language <code>',
      
      // Additional messages
      'msg.redo_not_implemented': 'Redo for local tracking is not yet implemented.',
      'msg.redo_cancelled': 'Redo cancelled.',
      'msg.switched_to_session': 'Switched to session: {sessionId}',
      
      // Tips
      'tip.perform_undos': 'To actually perform these undos, run: ccundo undo',
      
      // Cascading warnings
      'prompt.cascading_redo_warning': 'Cascading redo: Selecting an operation will redo it and ALL undone operations that came before it.',
      
      // Backup and file operations (New i18n keys)
      'msg.backup_saved_to': 'Backup saved to: {path}',
      
      // Preview messages (New i18n keys)
      'preview.string_replacements_reversed': 'String replacements to be reversed:',
      'preview.string_replacement_reversed': 'String replacement to be reversed:',
      'preview.all_occurrences': ' (all occurrences)',
      'preview.context': 'Context:',
      
      // Additional error messages (New i18n keys)
      'error.unknown_operation': 'Unknown operation: {type}',
      'error.file_not_exist': 'File does not exist:',
      'error.reading_file': 'Error reading file:',
      'error.unknown_operation_type': 'Unknown operation type: {type}',
      'error.unsupported_language': 'Unsupported language: {language}',
      
      // Additional status messages (New i18n keys)
      'status.directory_already_removed': 'Directory already removed:',
      
      // UndoManager success messages (New i18n keys)
      'undo.file_deleted': 'File deleted: {path}',
      'undo.file_edit_reverted': 'File edit reverted: {path}',
      'undo.file_restored': 'File restored: {path}',
      'undo.file_renamed_back': 'File renamed back: {oldPath} → {newPath}',
      'undo.directory_removed': 'Directory removed: {path}',
      'undo.directory_restored': 'Directory restored: {path}',
      
      // UndoManager failure messages (New i18n keys)
      'undo.failed_file_creation': 'Failed to undo file creation: {error}',
      'undo.failed_file_edit': 'Failed to undo file edit: {error}',
      'undo.failed_file_restore': 'Failed to restore file: {error}',
      'undo.failed_rename': 'Failed to undo rename: {error}',
      'undo.failed_remove_directory': 'Failed to remove directory: {error}',
      'undo.failed_restore_directory': 'Failed to restore directory: {error}',
      'undo.cannot_undo_edit': 'Cannot undo edit: expected string not found in {path}',
      'undo.cannot_undo_edit_insufficient': 'Cannot undo file edit: insufficient data for {path}',
      'undo.cannot_restore_file': 'Cannot restore file: content not available for {path}',
      'undo.cannot_undo_bash': 'Cannot auto-undo bash command: {command}\nPlease manually revert any changes.',
      
      // RedoManager success messages (New i18n keys)
      'redo.file_recreated': 'File recreated: {path}',
      'redo.file_edit_redone': 'File edit redone: {path}',
      'redo.file_deleted_again': 'File deleted again: {path}',
      'redo.file_renamed_again': 'File renamed again: {oldPath} → {newPath}',
      'redo.directory_created_again': 'Directory created again: {path}',
      'redo.directory_deleted_again': 'Directory deleted again: {path}',
      
      // RedoManager failure messages (New i18n keys)
      'redo.cannot_redo_file_exists': 'Cannot redo file creation: {path} already exists',
      'redo.cannot_redo_no_content': 'Cannot redo file creation: no content available for {path}',
      'redo.failed_file_creation': 'Failed to redo file creation: {error}',
      'redo.cannot_redo_legacy_edit': 'Cannot redo legacy file edit: insufficient data for {path}',
      'redo.cannot_redo_edit': 'Cannot redo edit: original string not found in {path}',
      'redo.cannot_redo_edit_insufficient': 'Cannot redo file edit: insufficient data for {path}',
      'redo.failed_file_edit': 'Failed to redo file edit: {error}',
      'redo.cannot_redo_file_not_exist': 'Cannot redo file deletion: {path} does not exist',
      'redo.failed_file_deletion': 'Failed to redo file deletion: {error}',
      'redo.cannot_redo_rename_not_exist': 'Cannot redo rename: {path} does not exist',
      'redo.cannot_redo_rename_exists': 'Cannot redo rename: {path} already exists',
      'redo.failed_rename': 'Failed to redo rename: {error}',
      'redo.cannot_redo_dir_exists': 'Cannot redo directory creation: {path} already exists',
      'redo.failed_directory_creation': 'Failed to redo directory creation: {error}',
      'redo.cannot_redo_dir_not_exist': 'Cannot redo directory deletion: {path} does not exist',
      'redo.failed_directory_deletion': 'Failed to redo directory deletion: {error}',
      'redo.cannot_redo_bash': 'Cannot redo bash command: {command}\nPlease manually re-run the command.',
      
      // Additional UI messages (New i18n keys)
      'ui.more_will_be_undone': ' (+ {count} more will be undone)',
      'ui.more_will_be_redone': ' (+ {count} more will be redone)',
      'ui.more_would_be_undone': ' (+ {count} more would be undone)',
      'ui.more_lines': '... ({count} more lines)',
      'ui.unknown_language': 'Unknown'
    }
  },
  
  ja: {
    name: '日本語',
    messages: {
      // Program description
      'program.description': 'Claude Codeセッション内で実行された個別のステップを元に戻す',
      
      // Command descriptions
      'cmd.list.description': '現在のClaude Codeセッションのすべての操作を一覧表示',
      'cmd.undo.description': '現在のClaude Codeセッションの操作を元に戻す',
      'cmd.redo.description': '以前に元に戻した操作をやり直し',
      'cmd.preview.description': '変更を加えずに元に戻される内容をプレビュー',
      'cmd.sessions.description': '利用可能なすべてのClaude Codeセッションを一覧表示',
      'cmd.session.description': '別のセッションに切り替え',
      'cmd.language.description': 'インターフェース言語を設定',
      
      // Options
      'opt.all': '元に戻された操作も含めてすべての操作を表示',
      'opt.session': 'セッションIDを指定',
      'opt.claude': 'Claude Codeセッションの操作を表示（デフォルト）',
      'opt.local': 'ローカルccundo追跡の操作を表示',
      'opt.yes': '確認をスキップ',
      'opt.local_tracking': 'Claudeセッションの代わりにローカルccundo追跡を使用',
      'opt.show_local_sessions': 'Claudeセッションの代わりにローカルccundoセッションを表示',
      
      // Messages
      'msg.no_active_session': 'このディレクトリでアクティブなClaude Codeセッションが見つかりません。',
      'msg.make_sure_directory': 'Claude Codeが使用されたディレクトリにいることを確認してください。',
      'msg.no_local_session': 'ローカルccundoセッションが見つかりません。',
      'msg.no_operations': '操作が見つかりません。',
      'msg.no_operations_to_undo': '元に戻す操作がありません。',
      'msg.no_operations_to_redo': 'やり直す操作がありません。',
      'msg.operation_not_found': '操作 {id} が見つかりません。',
      'msg.already_undone': 'この操作は既に元に戻されています。',
      'msg.undo_cancelled': '元に戻す操作がキャンセルされました。',
      'msg.no_sessions_found': 'Claude Codeセッションが見つかりません。',
      'msg.no_local_sessions': 'ローカルセッションが見つかりません。',
      'msg.language_set': '言語が{language}に設定されました。',
      'msg.language_invalid': '無効な言語です。利用可能な言語: {languages}',
      
      // Prompts
      'prompt.select_operation_undo': '元に戻す操作を選択:',
      'prompt.select_operation_redo': 'やり直す操作を選択:',
      'prompt.select_operation_preview': 'プレビューする操作を選択:',
      'prompt.confirm_undo': 'これら{count}個の操作を本当に元に戻しますか？',
      'prompt.confirm_redo': 'これら{count}個の操作を本当にやり直しますか？',
      'prompt.cascading_warning': '⚠️  カスケード元に戻し: 操作を選択すると、その操作とその後のすべての操作が元に戻されます。',
      
      // Operation types
      'op.file_create': 'ファイル作成',
      'op.file_edit': 'ファイル編集',
      'op.file_delete': 'ファイル削除',
      'op.file_rename': 'ファイル名変更',
      'op.directory_create': 'ディレクトリ作成',
      'op.directory_delete': 'ディレクトリ削除',
      'op.bash_command': 'bashコマンド',
      
      // Operation actions
      'action.will_delete_file': 'ファイルを削除します:',
      'action.will_revert_file': 'ファイルを元に戻します:',
      'action.will_restore_file': 'ファイルを復元します:',
      'action.will_rename_back': '名前を元に戻します:',
      'action.will_remove_directory': 'ディレクトリを削除します:',
      'action.will_restore_directory': 'ディレクトリを復元します:',
      'action.cannot_undo_bash': 'bashコマンドを自動で元に戻せません:',
      'action.manual_intervention': '手動での対応が必要です',
      
      // Headers
      'header.operations_claude': 'Claude Codeセッションの操作:',
      'header.operations_local': 'ローカルセッション {sessionId} の操作:',
      'header.available_sessions_claude': '利用可能なClaude Codeセッション:',
      'header.available_sessions_local': '利用可能なローカルセッション:',
      'header.preview': '📋 プレビュー: {count}個の操作を元に戻します:',
      'header.undoing': '{count}個の操作を元に戻しています...',
      'header.redoing': '{count}個の操作をやり直しています...',
      'header.this_will_undo': 'これにより{count}個の操作が元に戻されます:',
      'header.this_will_redo': 'これにより{count}個の操作がやり直されます:',
      
      // Status
      'status.active': '[アクティブ]',
      'status.undone': '[元に戻し済み]',
      'status.current_content': '現在の内容:',
      'status.content_to_restore': '復元する内容:',
      'status.original_not_available': '（セッションから元の内容を取得できません）',
      'status.content_not_available': '（セッションから内容を取得できません）',
      'status.completed': '完了: {success}個成功、{failed}個失敗',
      
      // Time
      'time.seconds_ago': '{seconds}秒前',
      'time.minutes_ago': '{minutes}分前',
      'time.hours_ago': '{hours}時間前',
      'time.days_ago': '{days}日前',
      
      // Suffixes
      'suffix.more_operations': '（+ {count}個も元に戻されます）',
      'suffix.more_would_be_undone': '（+ {count}個も元に戻されます）',
      'suffix.tip_to_undo': '💡 実際に元に戻すには次を実行: ccundo undo',
      
      // Labels
      'label.file': 'ファイル',
      'label.from': '元',
      'label.to': '先',
      'label.directory': 'ディレクトリ',
      'label.command': 'コマンド',
      'label.project': 'プロジェクト',
      
      // Error messages
      'error.operation_not_found': '操作 {id} が見つかりません。',
      'error.save_config_failed': '言語設定の保存に失敗しました：',
      'error.track_operation_failed': '操作の追跡に失敗しました：',
      'error.general': 'エラー：{message}',
      
      // UI messages
      'ui.undo_preview_header': 'これにより{count}個の操作が元に戻されます：',
      'ui.undoing_operations': '{count}個の操作を元に戻しています...',
      'ui.preview_undo': 'プレビュー：{count}個の操作を元に戻します：',
      'ui.current_language': '現在の言語：{name} ({code})',
      'ui.available_languages': '利用可能な言語：',
      'ui.language_usage': '使用方法：ccundo language <code>',
      
      // Additional messages
      'msg.redo_not_implemented': 'ローカル追跡のやり直しはまだ実装されていません。',
      'msg.redo_cancelled': 'やり直しがキャンセルされました。',
      'msg.switched_to_session': 'セッションを切り替えました：{sessionId}',
      
      // Tips
      'tip.perform_undos': '実際に元に戻すには次を実行：ccundo undo',
      
      // Cascading warnings
      'prompt.cascading_redo_warning': 'カスケードやり直し：操作を選択すると、その操作とその前のすべての取り消された操作がやり直されます。',
      
      // Backup and file operations (New i18n keys)
      'msg.backup_saved_to': 'バックアップを保存しました：{path}',
      
      // Preview messages (New i18n keys)
      'preview.string_replacements_reversed': '元に戻される文字列置換：',
      'preview.string_replacement_reversed': '元に戻される文字列置換：',
      'preview.all_occurrences': '（すべての出現箇所）',
      'preview.context': 'コンテキスト：',
      
      // Additional error messages (New i18n keys)
      'error.unknown_operation': '不明な操作：{type}',
      'error.file_not_exist': 'ファイルが存在しません：',
      'error.reading_file': 'ファイル読み込みエラー：',
      'error.unknown_operation_type': '不明な操作タイプ：{type}',
      'error.unsupported_language': 'サポートされていない言語：{language}',
      
      // Additional status messages (New i18n keys)
      'status.directory_already_removed': 'ディレクトリは既に削除済み：',
      
      // UndoManager success messages (New i18n keys)
      'undo.file_deleted': 'ファイルを削除しました：{path}',
      'undo.file_edit_reverted': 'ファイル編集を元に戻しました：{path}',
      'undo.file_restored': 'ファイルを復元しました：{path}',
      'undo.file_renamed_back': 'ファイル名を元に戻しました：{oldPath} → {newPath}',
      'undo.directory_removed': 'ディレクトリを削除しました：{path}',
      'undo.directory_restored': 'ディレクトリを復元しました：{path}',
      
      // UndoManager failure messages (New i18n keys)
      'undo.failed_file_creation': 'ファイル作成の取り消しに失敗しました：{error}',
      'undo.failed_file_edit': 'ファイル編集の取り消しに失敗しました：{error}',
      'undo.failed_file_restore': 'ファイルの復元に失敗しました：{error}',
      'undo.failed_rename': '名前変更の取り消しに失敗しました：{error}',
      'undo.failed_remove_directory': 'ディレクトリの削除に失敗しました：{error}',
      'undo.failed_restore_directory': 'ディレクトリの復元に失敗しました：{error}',
      'undo.cannot_undo_edit': '編集を取り消せません：{path}で期待される文字列が見つかりません',
      'undo.cannot_undo_edit_insufficient': 'ファイル編集を取り消せません：{path}のデータが不十分です',
      'undo.cannot_restore_file': 'ファイルを復元できません：{path}のコンテンツが利用できません',
      'undo.cannot_undo_bash': 'bashコマンドを自動で取り消せません：{command}\n手動で変更を元に戻してください。',

      // RedoManager success messages (New i18n keys)
      'redo.file_recreated': 'ファイルを再作成しました：{path}',
      'redo.file_edit_redone': 'ファイル編集をやり直しました：{path}',
      'redo.file_deleted_again': 'ファイルを再び削除しました：{path}',
      'redo.file_renamed_again': 'ファイルを再び名前変更しました：{oldPath} → {newPath}',
      'redo.directory_created_again': 'ディレクトリを再び作成しました：{path}',
      'redo.directory_deleted_again': 'ディレクトリを再び削除しました：{path}',

      // RedoManager failure messages (New i18n keys)
      'redo.cannot_redo_file_exists': 'ファイル作成をやり直せません：{path}は既に存在します',
      'redo.cannot_redo_no_content': 'ファイル作成をやり直せません：{path}のコンテンツが利用できません',
      'redo.failed_file_creation': 'ファイル作成のやり直しに失敗しました：{error}',
      'redo.cannot_redo_legacy_edit': 'レガシーファイル編集をやり直せません：{path}のデータが不十分です',
      'redo.cannot_redo_edit': '編集をやり直せません：{path}で元の文字列が見つかりません',
      'redo.cannot_redo_edit_insufficient': 'ファイル編集をやり直せません：{path}のデータが不十分です',
      'redo.failed_file_edit': 'ファイル編集のやり直しに失敗しました：{error}',
      'redo.cannot_redo_file_not_exist': 'ファイル削除をやり直せません：{path}が存在しません',
      'redo.failed_file_deletion': 'ファイル削除のやり直しに失敗しました：{error}',
      'redo.cannot_redo_rename_not_exist': '名前変更をやり直せません：{path}が存在しません',
      'redo.cannot_redo_rename_exists': '名前変更をやり直せません：{path}が既に存在します',
      'redo.failed_rename': '名前変更のやり直しに失敗しました：{error}',
      'redo.cannot_redo_dir_exists': 'ディレクトリ作成をやり直せません：{path}が既に存在します',
      'redo.failed_directory_creation': 'ディレクトリ作成のやり直しに失敗しました：{error}',
      'redo.cannot_redo_dir_not_exist': 'ディレクトリ削除をやり直せません：{path}が存在しません',
      'redo.failed_directory_deletion': 'ディレクトリ削除のやり直しに失敗しました：{error}',
      'redo.cannot_redo_bash': 'bashコマンドをやり直せません：{command}\n手動でコマンドを再実行してください。',

      // Additional UI messages (New i18n keys)
      'ui.more_will_be_undone': '（+ {count}個も元に戻されます）',
      'ui.more_will_be_redone': '（+ {count}個もやり直されます）',
      'ui.more_would_be_undone': '（+ {count}個も元に戻されます）',
      'ui.more_lines': '... （{count}行続く）',
      'ui.unknown_language': '不明'
    }
  },

  fr: {
    name: 'Français',
    messages: {
      // Program description
      'program.description': 'Annuler les étapes individuelles effectuées par Claude Code dans une session',
      
      // Command descriptions
      'cmd.list.description': 'Lister toutes les opérations de la session Claude Code actuelle',
      'cmd.undo.description': 'Annuler les opérations de la session Claude Code actuelle',
      'cmd.redo.description': 'Rétablir les opérations précédemment annulées',
      'cmd.preview.description': 'Prévisualiser ce qui serait annulé sans appliquer les changements',
      'cmd.sessions.description': 'Lister toutes les sessions Claude Code disponibles',
      'cmd.session.description': 'Changer de session',
      'cmd.language.description': 'Définir la langue de l\'interface',

      // Options
      'opt.all': 'Afficher toutes les opérations, y compris celles annulées',
      'opt.session': 'Spécifier l\'ID de session',
      'opt.claude': 'Afficher les opérations de la session Claude Code (par défaut)',
      'opt.local': 'Afficher les opérations du suivi local ccundo',
      'opt.yes': 'Ignorer la confirmation',
      'opt.local_tracking': 'Utiliser le suivi local ccundo au lieu des sessions Claude',
      'opt.show_local_sessions': 'Afficher les sessions locales ccundo au lieu des sessions Claude',

      // Messages
      'msg.no_active_session': 'Aucune session Claude Code active trouvée dans ce répertoire.',
      'msg.make_sure_directory': 'Assurez-vous d\'être dans un répertoire où Claude Code a été utilisé.',
      'msg.no_local_session': 'Aucune session ccundo locale trouvée.',
      'msg.no_operations': 'Aucune opération trouvée.',
      'msg.no_operations_to_undo': 'Aucune opération à annuler.',
      'msg.no_operations_to_redo': 'Aucune opération à rétablir.',
      'msg.operation_not_found': 'Opération {id} introuvable.',
      'msg.already_undone': 'Cette opération a déjà été annulée.',
      'msg.undo_cancelled': 'Annulation annulée.',
      'msg.no_sessions_found': 'Aucune session Claude Code trouvée.',
      'msg.no_local_sessions': 'Aucune session locale trouvée.',
      'msg.language_set': 'Langue définie sur {language}.',
      'msg.language_invalid': 'Langue invalide. Langues disponibles : {languages}',

      // Prompts
      'prompt.select_operation_undo': 'Sélectionner l\'opération à annuler :',
      'prompt.select_operation_redo': 'Sélectionner l\'opération à rétablir :',
      'prompt.select_operation_preview': 'Sélectionner l\'opération à prévisualiser :',
      'prompt.confirm_undo': 'Êtes-vous sûr de vouloir annuler ces {count} opérations ?',
      'prompt.confirm_redo': 'Êtes-vous sûr de vouloir rétablir ces {count} opérations ?',
      'prompt.cascading_warning': '⚠️ Annulation en cascade : Sélectionner une opération l\'annulera ainsi que TOUTES les opérations qui l\'ont suivie.',

      // Operation types
      'op.file_create': 'création_fichier',
      'op.file_edit': 'édition_fichier',
      'op.file_delete': 'suppression_fichier',
      'op.file_rename': 'renommage_fichier',
      'op.directory_create': 'création_répertoire',
      'op.directory_delete': 'suppression_répertoire',
      'op.bash_command': 'commande_bash',

      // Operation actions
      'action.will_delete_file': 'Va supprimer le fichier :',
      'action.will_revert_file': 'Va annuler les modifications du fichier :',
      'action.will_restore_file': 'Va restaurer le fichier :',
      'action.will_rename_back': 'Va renommer en arrière :',
      'action.will_remove_directory': 'Va supprimer le répertoire :',
      'action.will_restore_directory': 'Va restaurer le répertoire :',
      'action.cannot_undo_bash': 'Impossible d\'annuler automatiquement la commande bash :',
      'action.manual_intervention': 'Intervention manuelle requise',

      // Headers
      'header.operations_claude': 'Opérations de la session Claude Code :',
      'header.operations_local': 'Opérations de la session locale {sessionId} :',
      'header.available_sessions_claude': 'Sessions Claude Code disponibles :',
      'header.available_sessions_local': 'Sessions locales disponibles :',
      'header.preview': '📋 Prévisualisation : Annulerait {count} opération(s) :',
      'header.undoing': 'Annulation de {count} opérations...',
      'header.redoing': 'Rétablissement de {count} opérations...',
      'header.this_will_undo': 'Ceci annulera {count} opération(s) :',
      'header.this_will_redo': 'Ceci rétablira {count} opération(s) :',

      // Status
      'status.active': '[ACTIF]',
      'status.undone': '[ANNULÉ]',
      'status.current_content': 'Contenu actuel :',
      'status.content_to_restore': 'Contenu à restaurer :',
      'status.original_not_available': '(Contenu original non disponible depuis la session)',
      'status.content_not_available': '(Contenu non disponible depuis la session)',
      'status.completed': 'Terminé : {success} réussi(s), {failed} échoué(s)',

      // Time
      'time.seconds_ago': 'il y a {seconds}s',
      'time.minutes_ago': 'il y a {minutes}m',
      'time.hours_ago': 'il y a {hours}h',
      'time.days_ago': 'il y a {days}j',

      // Suffixes
      'suffix.more_operations': '(+ {count} de plus seront annulées)',
      'suffix.more_would_be_undone': '(+ {count} de plus seraient annulées)',
      'suffix.tip_to_undo': '💡 Pour effectuer réellement ces annulations, exécutez : ccundo undo',
      
      // Labels
      'label.file': 'Fichier',
      'label.from': 'De',
      'label.to': 'Vers',
      'label.directory': 'Répertoire',
      'label.command': 'Commande',
      'label.project': 'Projet',
      
      // Error messages
      'error.operation_not_found': 'Opération {id} introuvable.',
      'error.save_config_failed': 'Échec de sauvegarde de la configuration linguistique :',
      'error.track_operation_failed': 'Échec du suivi de l\'opération :',
      'error.general': 'Erreur : {message}',
      
      // UI messages
      'ui.undo_preview_header': 'Ceci annulera {count} opération(s) :',
      'ui.undoing_operations': 'Annulation de {count} opérations...',
      'ui.preview_undo': 'Prévisualisation : Annulerait {count} opération(s) :',
      'ui.current_language': 'Langue actuelle : {name} ({code})',
      'ui.available_languages': 'Langues disponibles :',
      'ui.language_usage': 'Usage : ccundo language <code>',
      
      // Additional messages
      'msg.redo_not_implemented': 'Le rétablissement pour le suivi local n\'est pas encore implémenté.',
      'msg.redo_cancelled': 'Rétablissement annulé.',
      'msg.switched_to_session': 'Basculé vers la session : {sessionId}',
      
      // Tips
      'tip.perform_undos': 'Pour effectuer réellement ces annulations, exécutez : ccundo undo',
      
      // Cascading warnings
      'prompt.cascading_redo_warning': 'Rétablissement en cascade : Sélectionner une opération la rétablira ainsi que TOUTES les opérations annulées qui l\'ont précédée.',
      
      // Backup and file operations (New i18n keys)
      'msg.backup_saved_to': 'Sauvegarde enregistrée dans : {path}',
      
      // Preview messages (New i18n keys)
      'preview.string_replacements_reversed': 'Remplacements de chaînes à annuler :',
      'preview.string_replacement_reversed': 'Remplacement de chaîne à annuler :',
      'preview.all_occurrences': ' (toutes les occurrences)',
      'preview.context': 'Contexte :',
      
      // Additional error messages (New i18n keys)
      'error.unknown_operation': 'Opération inconnue : {type}',
      'error.file_not_exist': 'Le fichier n\'existe pas :',
      'error.reading_file': 'Erreur de lecture du fichier :',
      'error.unknown_operation_type': 'Type d\'opération inconnu : {type}',
      'error.unsupported_language': 'Langue non supportée : {language}',
      
      // Additional status messages (New i18n keys)
      'status.directory_already_removed': 'Répertoire déjà supprimé :',
      
      // UndoManager success messages (New i18n keys)
      'undo.file_deleted': 'Fichier supprimé : {path}',
      'undo.file_edit_reverted': 'Modification de fichier annulée : {path}',
      'undo.file_restored': 'Fichier restauré : {path}',
      'undo.file_renamed_back': 'Fichier renommé en arrière : {oldPath} → {newPath}',
      'undo.directory_removed': 'Répertoire supprimé : {path}',
      'undo.directory_restored': 'Répertoire restauré : {path}',
      
      // UndoManager failure messages (New i18n keys)
      'undo.failed_file_creation': 'Échec de l\'annulation de la création de fichier : {error}',
      'undo.failed_file_edit': 'Échec de l\'annulation de la modification de fichier : {error}',
      'undo.failed_file_restore': 'Échec de la restauration de fichier : {error}',
      'undo.failed_rename': 'Échec de l\'annulation du renommage : {error}',
      'undo.failed_remove_directory': 'Échec de la suppression de répertoire : {error}',
      'undo.failed_restore_directory': 'Échec de la restauration de répertoire : {error}',
      'undo.cannot_undo_edit': 'Impossible d\'annuler la modification : chaîne attendue non trouvée dans {path}',
      'undo.cannot_undo_edit_insufficient': 'Impossible d\'annuler la modification de fichier : données insuffisantes pour {path}',
      'undo.cannot_restore_file': 'Impossible de restaurer le fichier : contenu non disponible pour {path}',
      'undo.cannot_undo_bash': 'Impossible d\'annuler automatiquement la commande bash : {command}\nVeuillez annuler manuellement les modifications.',

      // RedoManager success messages (New i18n keys)
      'redo.file_recreated': 'Fichier recréé : {path}',
      'redo.file_edit_redone': 'Modification de fichier rétablie : {path}',
      'redo.file_deleted_again': 'Fichier supprimé à nouveau : {path}',
      'redo.file_renamed_again': 'Fichier renommé à nouveau : {oldPath} → {newPath}',
      'redo.directory_created_again': 'Répertoire créé à nouveau : {path}',
      'redo.directory_deleted_again': 'Répertoire supprimé à nouveau : {path}',

      // RedoManager failure messages (New i18n keys)
      'redo.cannot_redo_file_exists': 'Impossible de rétablir la création de fichier : {path} existe déjà',
      'redo.cannot_redo_no_content': 'Impossible de rétablir la création de fichier : aucun contenu disponible pour {path}',
      'redo.failed_file_creation': 'Échec du rétablissement de la création de fichier : {error}',
      'redo.cannot_redo_legacy_edit': 'Impossible de rétablir la modification de fichier héritée : données insuffisantes pour {path}',
      'redo.cannot_redo_edit': 'Impossible de rétablir la modification : chaîne originale non trouvée dans {path}',
      'redo.cannot_redo_edit_insufficient': 'Impossible de rétablir la modification de fichier : données insuffisantes pour {path}',
      'redo.failed_file_edit': 'Échec du rétablissement de la modification de fichier : {error}',
      'redo.cannot_redo_file_not_exist': 'Impossible de rétablir la suppression de fichier : {path} n\'existe pas',
      'redo.failed_file_deletion': 'Échec du rétablissement de la suppression de fichier : {error}',
      'redo.cannot_redo_rename_not_exist': 'Impossible de rétablir le renommage : {path} n\'existe pas',
      'redo.cannot_redo_rename_exists': 'Impossible de rétablir le renommage : {path} existe déjà',
      'redo.failed_rename': 'Échec du rétablissement du renommage : {error}',
      'redo.cannot_redo_dir_exists': 'Impossible de rétablir la création de répertoire : {path} existe déjà',
      'redo.failed_directory_creation': 'Échec du rétablissement de la création de répertoire : {error}',
      'redo.cannot_redo_dir_not_exist': 'Impossible de rétablir la suppression de répertoire : {path} n\'existe pas',
      'redo.failed_directory_deletion': 'Échec du rétablissement de la suppression de répertoire : {error}',
      'redo.cannot_redo_bash': 'Impossible de rétablir la commande bash : {command}\nVeuillez réexécuter la commande manuellement.',

      // Additional UI messages (New i18n keys)
      'ui.more_will_be_undone': ' (+ {count} de plus seront annulées)',
      'ui.more_will_be_redone': ' (+ {count} de plus seront rétablies)',
      'ui.more_would_be_undone': ' (+ {count} de plus seraient annulées)',
      'ui.more_lines': '... ({count} lignes supplémentaires)',
      'ui.unknown_language': 'Inconnu'
    }
  },

  es: {
    name: 'Español',
    messages: {
      // Program description
      'program.description': 'Deshacer pasos individuales realizados por Claude Code dentro de una sesión',
      
      // Command descriptions
      'cmd.list.description': 'Listar todas las operaciones en la sesión actual de Claude Code',
      'cmd.undo.description': 'Deshacer operaciones de la sesión actual de Claude Code',
      'cmd.redo.description': 'Rehacer operaciones previamente deshechas',
      'cmd.preview.description': 'Previsualizar lo que se desharía sin hacer cambios',
      'cmd.sessions.description': 'Listar todas las sesiones de Claude Code disponibles',
      'cmd.session.description': 'Cambiar a una sesión diferente',
      'cmd.language.description': 'Establecer el idioma de la interfaz',

      // Options
      'opt.all': 'Mostrar todas las operaciones, incluidas las deshechas',
      'opt.session': 'Especificar ID de sesión',
      'opt.claude': 'Mostrar operaciones de la sesión de Claude Code (predeterminado)',
      'opt.local': 'Mostrar operaciones del seguimiento local de ccundo',
      'opt.yes': 'Omitir confirmación',
      'opt.local_tracking': 'Usar seguimiento local ccundo en lugar de sesiones Claude',
      'opt.show_local_sessions': 'Mostrar sesiones locales ccundo en lugar de sesiones Claude',

      // Messages
      'msg.no_active_session': 'No se encontró ninguna sesión activa de Claude Code en este directorio.',
      'msg.make_sure_directory': 'Asegúrate de estar en un directorio donde se haya usado Claude Code.',
      'msg.no_local_session': 'No se encontró ninguna sesión local de ccundo.',
      'msg.no_operations': 'No se encontraron operaciones.',
      'msg.no_operations_to_undo': 'No hay operaciones para deshacer.',
      'msg.no_operations_to_redo': 'No hay operaciones para rehacer.',
      'msg.operation_not_found': 'Operación {id} no encontrada.',
      'msg.already_undone': 'Esta operación ya ha sido deshecha.',
      'msg.undo_cancelled': 'Deshacer cancelado.',
      'msg.no_sessions_found': 'No se encontraron sesiones de Claude Code.',
      'msg.no_local_sessions': 'No se encontraron sesiones locales.',
      'msg.language_set': 'Idioma establecido a {language}.',
      'msg.language_invalid': 'Idioma inválido. Idiomas disponibles: {languages}',

      // Prompts
      'prompt.select_operation_undo': 'Seleccionar operación para deshacer:',
      'prompt.select_operation_redo': 'Seleccionar operación para rehacer:',
      'prompt.select_operation_preview': 'Seleccionar operación para previsualizar:',
      'prompt.confirm_undo': '¿Estás seguro de que quieres deshacer estas {count} operaciones?',
      'prompt.confirm_redo': '¿Estás seguro de que quieres rehacer estas {count} operaciones?',
      'prompt.cascading_warning': '⚠️ Deshacer en cascada: Seleccionar una operación la deshará a ella y a TODAS las operaciones que vinieron después.',

      // Operation types
      'op.file_create': 'creación_archivo',
      'op.file_edit': 'edición_archivo',
      'op.file_delete': 'eliminación_archivo',
      'op.file_rename': 'renombrar_archivo',
      'op.directory_create': 'creación_directorio',
      'op.directory_delete': 'eliminación_directorio',
      'op.bash_command': 'comando_bash',

      // Operation actions
      'action.will_delete_file': 'Se eliminará el archivo:',
      'action.will_revert_file': 'Se revertirá el archivo:',
      'action.will_restore_file': 'Se restaurará el archivo:',
      'action.will_rename_back': 'Se renombrará de vuelta:',
      'action.will_remove_directory': 'Se eliminará el directorio:',
      'action.will_restore_directory': 'Se restaurará el directorio:',
      'action.cannot_undo_bash': 'No se puede deshacer automáticamente el comando bash:',
      'action.manual_intervention': 'Intervención manual requerida',

      // Headers
      'header.operations_claude': 'Operaciones de la sesión de Claude Code:',
      'header.operations_local': 'Operaciones en la sesión local {sessionId}:',
      'header.available_sessions_claude': 'Sesiones de Claude Code disponibles:',
      'header.available_sessions_local': 'Sesiones locales disponibles:',
      'header.preview': '📋 Previsualización: Desharía {count} operación(es):',
      'header.undoing': 'Deshaciendo {count} operaciones...',
      'header.redoing': 'Rehaciendo {count} operaciones...',
      'header.this_will_undo': 'Esto deshará {count} operación(es):',
      'header.this_will_redo': 'Esto rehacerá {count} operación(es):',

      // Status
      'status.active': '[ACTIVO]',
      'status.undone': '[DESHECHO]',
      'status.current_content': 'Contenido actual:',
      'status.content_to_restore': 'Contenido a restaurar:',
      'status.original_not_available': '(Contenido original no disponible desde la sesión)',
      'status.content_not_available': '(Contenido no disponible desde la sesión)',
      'status.completed': 'Completado: {success} exitoso(s), {failed} fallido(s)',

      // Time
      'time.seconds_ago': 'hace {seconds}s',
      'time.minutes_ago': 'hace {minutes}m',
      'time.hours_ago': 'hace {hours}h',
      'time.days_ago': 'hace {days}d',

      // Suffixes
      'suffix.more_operations': '(+ {count} más serán deshechas)',
      'suffix.more_would_be_undone': '(+ {count} más serían deshechas)',
      'suffix.tip_to_undo': '💡 Para realizar realmente estos deshacer, ejecuta: ccundo undo',
      
      // Labels
      'label.file': 'Archivo',
      'label.from': 'De',
      'label.to': 'A',
      'label.directory': 'Directorio',
      'label.command': 'Comando',
      'label.project': 'Proyecto',
      
      // Error messages
      'error.operation_not_found': 'Operación {id} no encontrada.',
      'error.save_config_failed': 'Error al guardar la configuración de idioma:',
      'error.track_operation_failed': 'Error al rastrear la operación:',
      'error.general': 'Error: {message}',
      
      // UI messages
      'ui.undo_preview_header': 'Esto deshará {count} operación(es):',
      'ui.undoing_operations': 'Deshaciendo {count} operaciones...',
      'ui.preview_undo': 'Previsualización: Desharía {count} operación(es):',
      'ui.current_language': 'Idioma actual: {name} ({code})',
      'ui.available_languages': 'Idiomas disponibles:',
      'ui.language_usage': 'Uso: ccundo language <code>',
      
      // Additional messages
      'msg.redo_not_implemented': 'Rehacer para seguimiento local aún no está implementado.',
      'msg.redo_cancelled': 'Rehacer cancelado.',
      'msg.switched_to_session': 'Cambiado a la sesión: {sessionId}',
      
      // Tips
      'tip.perform_undos': 'Para realizar realmente estos deshacer, ejecuta: ccundo undo',
      
      // Cascading warnings
      'prompt.cascading_redo_warning': 'Rehacer en cascada: Seleccionar una operación la rehará y TODAS las operaciones deshacidas que vinieron antes.',
      
      // Backup and file operations (New i18n keys)
      'msg.backup_saved_to': 'Copia de seguridad guardada en: {path}',
      
      // Preview messages (New i18n keys)
      'preview.string_replacements_reversed': 'Reemplazos de cadena a revertir:',
      'preview.string_replacement_reversed': 'Reemplazo de cadena a revertir:',
      'preview.all_occurrences': ' (todas las ocurrencias)',
      'preview.context': 'Contexto:',
      
      // Additional error messages (New i18n keys)
      'error.unknown_operation': 'Operación desconocida: {type}',
      'error.file_not_exist': 'El archivo no existe:',
      'error.reading_file': 'Error leyendo archivo:',
      'error.unknown_operation_type': 'Tipo de operación desconocido: {type}',
      'error.unsupported_language': 'Idioma no soportado: {language}',
      
      // Additional status messages (New i18n keys)
      'status.directory_already_removed': 'Directorio ya eliminado:',
      
      // UndoManager success messages (New i18n keys)
      'undo.file_deleted': 'Archivo eliminado: {path}',
      'undo.file_edit_reverted': 'Edición de archivo revertida: {path}',
      'undo.file_restored': 'Archivo restaurado: {path}',
      'undo.file_renamed_back': 'Archivo renombrado de vuelta: {oldPath} → {newPath}',
      'undo.directory_removed': 'Directorio eliminado: {path}',
      'undo.directory_restored': 'Directorio restaurado: {path}',
      
      // UndoManager failure messages (New i18n keys)
      'undo.failed_file_creation': 'Error al deshacer creación de archivo: {error}',
      'undo.failed_file_edit': 'Error al deshacer edición de archivo: {error}',
      'undo.failed_file_restore': 'Error al restaurar archivo: {error}',
      'undo.failed_rename': 'Error al deshacer renombrado: {error}',
      'undo.failed_remove_directory': 'Error al eliminar directorio: {error}',
      'undo.failed_restore_directory': 'Error al restaurar directorio: {error}',
      'undo.cannot_undo_edit': 'No se puede deshacer edición: cadena esperada no encontrada en {path}',
      'undo.cannot_undo_edit_insufficient': 'No se puede deshacer edición de archivo: datos insuficientes para {path}',
      'undo.cannot_restore_file': 'No se puede restaurar archivo: contenido no disponible para {path}',
      'undo.cannot_undo_bash': 'No se puede deshacer automáticamente comando bash: {command}\nPor favor revierta los cambios manualmente.',

      // RedoManager success messages (New i18n keys)
      'redo.file_recreated': 'Archivo recreado: {path}',
      'redo.file_edit_redone': 'Edición de archivo rehecha: {path}',
      'redo.file_deleted_again': 'Archivo eliminado de nuevo: {path}',
      'redo.file_renamed_again': 'Archivo renombrado de nuevo: {oldPath} → {newPath}',
      'redo.directory_created_again': 'Directorio creado de nuevo: {path}',
      'redo.directory_deleted_again': 'Directorio eliminado de nuevo: {path}',

      // RedoManager failure messages (New i18n keys)
      'redo.cannot_redo_file_exists': 'No se puede rehacer creación de archivo: {path} ya existe',
      'redo.cannot_redo_no_content': 'No se puede rehacer creación de archivo: sin contenido disponible para {path}',
      'redo.failed_file_creation': 'Error al rehacer creación de archivo: {error}',
      'redo.cannot_redo_legacy_edit': 'No se puede rehacer edición de archivo heredado: datos insuficientes para {path}',
      'redo.cannot_redo_edit': 'No se puede rehacer edición: cadena original no encontrada en {path}',
      'redo.cannot_redo_edit_insufficient': 'No se puede rehacer edición de archivo: datos insuficientes para {path}',
      'redo.failed_file_edit': 'Error al rehacer edición de archivo: {error}',
      'redo.cannot_redo_file_not_exist': 'No se puede rehacer eliminación de archivo: {path} no existe',
      'redo.failed_file_deletion': 'Error al rehacer eliminación de archivo: {error}',
      'redo.cannot_redo_rename_not_exist': 'No se puede rehacer renombrado: {path} no existe',
      'redo.cannot_redo_rename_exists': 'No se puede rehacer renombrado: {path} ya existe',
      'redo.failed_rename': 'Error al rehacer renombrado: {error}',
      'redo.cannot_redo_dir_exists': 'No se puede rehacer creación de directorio: {path} ya existe',
      'redo.failed_directory_creation': 'Error al rehacer creación de directorio: {error}',
      'redo.cannot_redo_dir_not_exist': 'No se puede rehacer eliminación de directorio: {path} no existe',
      'redo.failed_directory_deletion': 'Error al rehacer eliminación de directorio: {error}',
      'redo.cannot_redo_bash': 'No se puede rehacer comando bash: {command}\nPor favor vuelva a ejecutar el comando manualmente.',

      // Additional UI messages (New i18n keys)
      'ui.more_will_be_undone': ' (+ {count} más serán deshachas)',
      'ui.more_will_be_redone': ' (+ {count} más serán rehechas)',
      'ui.more_would_be_undone': ' (+ {count} más serían deshachas)',
      'ui.more_lines': '... ({count} líneas más)',
      'ui.unknown_language': 'Desconocido'
    }
  },

  de: {
    name: 'Deutsch',
    messages: {
      // Program description
      'program.description': 'Individuelle Schritte rückgängig machen, die von Claude Code in einer Sitzung ausgeführt wurden',
      
      // Command descriptions
      'cmd.list.description': 'Alle Operationen in der aktuellen Claude Code Sitzung auflisten',
      'cmd.undo.description': 'Operationen aus der aktuellen Claude Code Sitzung rückgängig machen',
      'cmd.redo.description': 'Zuvor rückgängig gemachte Operationen wiederherstellen',
      'cmd.preview.description': 'Vorschau anzeigen, was rückgängig gemacht würde, ohne Änderungen vorzunehmen',
      'cmd.sessions.description': 'Alle verfügbaren Claude Code Sitzungen auflisten',
      'cmd.session.description': 'Zu einer anderen Sitzung wechseln',
      'cmd.language.description': 'Die Sprache der Benutzeroberfläche einstellen',

      // Options
      'opt.all': 'Alle Operationen anzeigen, einschließlich der rückgängig gemachten',
      'opt.session': 'Sitzungs-ID angeben',
      'opt.claude': 'Operationen aus der Claude Code Sitzung anzeigen (Standard)',
      'opt.local': 'Operationen aus der lokalen ccundo Verfolgung anzeigen',
      'opt.yes': 'Bestätigung überspringen',
      'opt.local_tracking': 'Lokale ccundo Verfolgung anstelle von Claude Sitzungen verwenden',
      'opt.show_local_sessions': 'Lokale ccundo Sitzungen anstelle von Claude Sitzungen anzeigen',

      // Messages
      'msg.no_active_session': 'Keine aktive Claude Code Sitzung in diesem Verzeichnis gefunden.',
      'msg.make_sure_directory': 'Stellen Sie sicher, dass Sie sich in einem Verzeichnis befinden, in dem Claude Code verwendet wurde.',
      'msg.no_local_session': 'Keine lokale ccundo Sitzung gefunden.',
      'msg.no_operations': 'Keine Operationen gefunden.',
      'msg.no_operations_to_undo': 'Keine Operationen zum Rückgängigmachen vorhanden.',
      'msg.no_operations_to_redo': 'Keine Operationen zum Wiederherstellen vorhanden.',
      'msg.operation_not_found': 'Operation {id} nicht gefunden.',
      'msg.already_undone': 'Diese Operation wurde bereits rückgängig gemacht.',
      'msg.undo_cancelled': 'Rückgängigmachen abgebrochen.',
      'msg.no_sessions_found': 'Keine Claude Code Sitzungen gefunden.',
      'msg.no_local_sessions': 'Keine lokalen Sitzungen gefunden.',
      'msg.language_set': 'Sprache auf {language} eingestellt.',
      'msg.language_invalid': 'Ungültige Sprache. Verfügbare Sprachen: {languages}',

      // Prompts
      'prompt.select_operation_undo': 'Operation zum Rückgängigmachen auswählen:',
      'prompt.select_operation_redo': 'Operation zum Wiederherstellen auswählen:',
      'prompt.select_operation_preview': 'Operation zur Vorschau auswählen:',
      'prompt.confirm_undo': 'Sind Sie sicher, dass Sie diese {count} Operationen rückgängig machen möchten?',
      'prompt.confirm_redo': 'Sind Sie sicher, dass Sie diese {count} Operationen wiederherstellen möchten?',
      'prompt.cascading_warning': '⚠️ Kaskadierendes Rückgängigmachen: Das Auswählen einer Operation macht diese und ALLE nachfolgenden Operationen rückgängig.',

      // Operation types
      'op.file_create': 'Datei_erstellen',
      'op.file_edit': 'Datei_bearbeiten',
      'op.file_delete': 'Datei_löschen',
      'op.file_rename': 'Datei_umbenennen',
      'op.directory_create': 'Verzeichnis_erstellen',
      'op.directory_delete': 'Verzeichnis_löschen',
      'op.bash_command': 'bash_Befehl',

      // Operation actions
      'action.will_delete_file': 'Wird Datei löschen:',
      'action.will_revert_file': 'Wird Datei zurücksetzen:',
      'action.will_restore_file': 'Wird Datei wiederherstellen:',
      'action.will_rename_back': 'Wird zurück umbenennen:',
      'action.will_remove_directory': 'Wird Verzeichnis entfernen:',
      'action.will_restore_directory': 'Wird Verzeichnis wiederherstellen:',
      'action.cannot_undo_bash': 'Kann bash Befehl nicht automatisch rückgängig machen:',
      'action.manual_intervention': 'Manuelle Intervention erforderlich',

      // Headers
      'header.operations_claude': 'Operationen aus der Claude Code Sitzung:',
      'header.operations_local': 'Operationen in lokaler Sitzung {sessionId}:',
      'header.available_sessions_claude': 'Verfügbare Claude Code Sitzungen:',
      'header.available_sessions_local': 'Verfügbare lokale Sitzungen:',
      'header.preview': '📋 Vorschau: Würde {count} Operation(en) rückgängig machen:',
      'header.undoing': 'Mache {count} Operationen rückgängig...',
      'header.redoing': 'Stelle {count} Operationen wieder her...',
      'header.this_will_undo': 'Dies wird {count} Operation(en) rückgängig machen:',
      'header.this_will_redo': 'Dies wird {count} Operation(en) wiederherstellen:',

      // Status
      'status.active': '[AKTIV]',
      'status.undone': '[RÜCKGÄNGIG]',
      'status.current_content': 'Aktueller Inhalt:',
      'status.content_to_restore': 'Wiederherzustellender Inhalt:',
      'status.original_not_available': '(Originalinhalt nicht aus Sitzung verfügbar)',
      'status.content_not_available': '(Inhalt nicht aus Sitzung verfügbar)',
      'status.completed': 'Abgeschlossen: {success} erfolgreich, {failed} fehlgeschlagen',

      // Time
      'time.seconds_ago': 'vor {seconds}s',
      'time.minutes_ago': 'vor {minutes}m',
      'time.hours_ago': 'vor {hours}h',
      'time.days_ago': 'vor {days}T',

      // Suffixes
      'suffix.more_operations': '(+ {count} weitere werden rückgängig gemacht)',
      'suffix.more_would_be_undone': '(+ {count} weitere würden rückgängig gemacht)',
      'suffix.tip_to_undo': '💡 Um diese Rückgängigmachungen tatsächlich durchzuführen, führe aus: ccundo undo',
      
      // Labels
      'label.file': 'Datei',
      'label.from': 'Von',
      'label.to': 'Nach',
      'label.directory': 'Verzeichnis',
      'label.command': 'Befehl',
      'label.project': 'Projekt',
      
      // Error messages
      'error.operation_not_found': 'Operation {id} nicht gefunden.',
      'error.save_config_failed': 'Fehler beim Speichern der Sprachkonfiguration:',
      'error.track_operation_failed': 'Fehler beim Verfolgen der Operation:',
      'error.general': 'Fehler: {message}',
      
      // UI messages
      'ui.undo_preview_header': 'Dies wird {count} Operation(en) rückgängig machen:',
      'ui.undoing_operations': 'Mache {count} Operationen rückgängig...',
      'ui.preview_undo': 'Vorschau: Würde {count} Operation(en) rückgängig machen:',
      'ui.current_language': 'Aktuelle Sprache: {name} ({code})',
      'ui.available_languages': 'Verfügbare Sprachen:',
      'ui.language_usage': 'Verwendung: ccundo language <code>',
      
      // Additional messages
      'msg.redo_not_implemented': 'Wiederherstellen für lokale Verfolgung ist noch nicht implementiert.',
      'msg.redo_cancelled': 'Wiederherstellen abgebrochen.',
      'msg.switched_to_session': 'Zu Sitzung gewechselt: {sessionId}',
      
      // Tips
      'tip.perform_undos': 'Um diese Rückgängigmachungen tatsächlich durchzuführen, führe aus: ccundo undo',
      
      // Cascading warnings
      'prompt.cascading_redo_warning': 'Kaskadierendes Wiederherstellen: Das Auswählen einer Operation stellt diese und ALLE rückgängig gemachten Operationen davor wieder her.',
      
      // Backup and file operations (New i18n keys)
      'msg.backup_saved_to': 'Sicherung gespeichert in: {path}',
      
      // Preview messages (New i18n keys)
      'preview.string_replacements_reversed': 'Zeichenkette-Ersetzungen zum Rückgängigmachen:',
      'preview.string_replacement_reversed': 'Zeichenkette-Ersetzung zum Rückgängigmachen:',
      'preview.all_occurrences': ' (alle Vorkommen)',
      'preview.context': 'Kontext:',
      
      // Additional error messages (New i18n keys)
      'error.unknown_operation': 'Unbekannte Operation: {type}',
      'error.file_not_exist': 'Datei existiert nicht:',
      'error.reading_file': 'Fehler beim Lesen der Datei:',
      'error.unknown_operation_type': 'Unbekannter Operationstyp: {type}',
      'error.unsupported_language': 'Nicht unterstützte Sprache: {language}',
      
      // Additional status messages (New i18n keys)
      'status.directory_already_removed': 'Verzeichnis bereits entfernt:',
      
      // UndoManager success messages (New i18n keys)
      'undo.file_deleted': 'Datei gelöscht: {path}',
      'undo.file_edit_reverted': 'Dateibearbeitung rückgängig gemacht: {path}',
      'undo.file_restored': 'Datei wiederhergestellt: {path}',
      'undo.file_renamed_back': 'Datei zurück umbenannt: {oldPath} → {newPath}',
      'undo.directory_removed': 'Verzeichnis entfernt: {path}',
      'undo.directory_restored': 'Verzeichnis wiederhergestellt: {path}',
      
      // UndoManager failure messages (New i18n keys)
      'undo.failed_file_creation': 'Fehler beim Rückgängigmachen der Dateierstellung: {error}',
      'undo.failed_file_edit': 'Fehler beim Rückgängigmachen der Dateibearbeitung: {error}',
      'undo.failed_file_restore': 'Fehler beim Wiederherstellen der Datei: {error}',
      'undo.failed_rename': 'Fehler beim Rückgängigmachen der Umbenennung: {error}',
      'undo.failed_remove_directory': 'Fehler beim Entfernen des Verzeichnisses: {error}',
      'undo.failed_restore_directory': 'Fehler beim Wiederherstellen des Verzeichnisses: {error}',
      'undo.cannot_undo_edit': 'Bearbeitung kann nicht rückgängig gemacht werden: erwartete Zeichenkette nicht gefunden in {path}',
      'undo.cannot_undo_edit_insufficient': 'Dateibearbeitung kann nicht rückgängig gemacht werden: unzureichende Daten für {path}',
      'undo.cannot_restore_file': 'Datei kann nicht wiederhergestellt werden: Inhalt nicht verfügbar für {path}',
      'undo.cannot_undo_bash': 'Bash-Befehl kann nicht automatisch rückgängig gemacht werden: {command}\nBitte machen Sie die Änderungen manuell rückgängig.',

      // RedoManager success messages (New i18n keys)
      'redo.file_recreated': 'Datei neu erstellt: {path}',
      'redo.file_edit_redone': 'Dateibearbeitung wiederholt: {path}',
      'redo.file_deleted_again': 'Datei erneut gelöscht: {path}',
      'redo.file_renamed_again': 'Datei erneut umbenannt: {oldPath} → {newPath}',
      'redo.directory_created_again': 'Verzeichnis erneut erstellt: {path}',
      'redo.directory_deleted_again': 'Verzeichnis erneut gelöscht: {path}',

      // RedoManager failure messages (New i18n keys)
      'redo.cannot_redo_file_exists': 'Dateierstellung kann nicht wiederholt werden: {path} existiert bereits',
      'redo.cannot_redo_no_content': 'Dateierstellung kann nicht wiederholt werden: kein Inhalt verfügbar für {path}',
      'redo.failed_file_creation': 'Fehler beim Wiederholen der Dateierstellung: {error}',
      'redo.cannot_redo_legacy_edit': 'Legacy-Dateibearbeitung kann nicht wiederholt werden: unzureichende Daten für {path}',
      'redo.cannot_redo_edit': 'Bearbeitung kann nicht wiederholt werden: ursprüngliche Zeichenkette nicht gefunden in {path}',
      'redo.cannot_redo_edit_insufficient': 'Dateibearbeitung kann nicht wiederholt werden: unzureichende Daten für {path}',
      'redo.failed_file_edit': 'Fehler beim Wiederholen der Dateibearbeitung: {error}',
      'redo.cannot_redo_file_not_exist': 'Dateilöschung kann nicht wiederholt werden: {path} existiert nicht',
      'redo.failed_file_deletion': 'Fehler beim Wiederholen der Dateilöschung: {error}',
      'redo.cannot_redo_rename_not_exist': 'Umbenennung kann nicht wiederholt werden: {path} existiert nicht',
      'redo.cannot_redo_rename_exists': 'Umbenennung kann nicht wiederholt werden: {path} existiert bereits',
      'redo.failed_rename': 'Fehler beim Wiederholen der Umbenennung: {error}',
      'redo.cannot_redo_dir_exists': 'Verzeichniserstellung kann nicht wiederholt werden: {path} existiert bereits',
      'redo.failed_directory_creation': 'Fehler beim Wiederholen der Verzeichniserstellung: {error}',
      'redo.cannot_redo_dir_not_exist': 'Verzeichnislöschung kann nicht wiederholt werden: {path} existiert nicht',
      'redo.failed_directory_deletion': 'Fehler beim Wiederholen der Verzeichnislöschung: {error}',
      'redo.cannot_redo_bash': 'Bash-Befehl kann nicht wiederholt werden: {command}\nBitte führen Sie den Befehl manuell erneut aus.',

      // Additional UI messages (New i18n keys)
      'ui.more_will_be_undone': ' (+ {count} weitere werden rückgängig gemacht)',
      'ui.more_will_be_redone': ' (+ {count} weitere werden wiederholt)',
      'ui.more_would_be_undone': ' (+ {count} weitere würden rückgängig gemacht)',
      'ui.more_lines': '... ({count} weitere Zeilen)',
      'ui.unknown_language': 'Unbekannt'
    }
  },

  zh: {
    name: '简体中文',
    messages: {
      // Program description
      'program.description': '撤销 Claude Code 会话中执行的单个步骤',
      
      // Command descriptions
      'cmd.list.description': '列出当前 Claude Code 会话中的所有操作',
      'cmd.undo.description': '撤销当前 Claude Code 会话中的操作',
      'cmd.redo.description': '重做之前撤销的操作',
      'cmd.preview.description': '预览将要撤销的内容，但不进行更改',
      'cmd.sessions.description': '列出所有可用的 Claude Code 会话',
      'cmd.session.description': '切换到不同的会话',
      'cmd.language.description': '设置界面语言',

      // Options
      'opt.all': '显示所有操作，包括已撤销的',
      'opt.session': '指定会话 ID',
      'opt.claude': '显示 Claude Code 会话的操作（默认）',
      'opt.local': '显示本地 ccundo 跟踪的操作',
      'opt.yes': '跳过确认',
      'opt.local_tracking': '使用本地 ccundo 跟踪而不是 Claude 会话',
      'opt.show_local_sessions': '显示本地 ccundo 会话而不是 Claude 会话',

      // Messages
      'msg.no_active_session': '在此目录中未找到活动的 Claude Code 会话。',
      'msg.make_sure_directory': '请确保您在已使用 Claude Code 的目录中。',
      'msg.no_local_session': '未找到本地 ccundo 会话。',
      'msg.no_operations': '未找到操作。',
      'msg.no_operations_to_undo': '没有可撤销的操作。',
      'msg.no_operations_to_redo': '没有可重做的操作。',
      'msg.operation_not_found': '未找到操作 {id}。',
      'msg.already_undone': '此操作已被撤销。',
      'msg.undo_cancelled': '撤销已取消。',
      'msg.no_sessions_found': '未找到 Claude Code 会话。',
      'msg.no_local_sessions': '未找到本地会话。',
      'msg.language_set': '语言已设置为 {language}。',
      'msg.language_invalid': '无效的语言。可用语言：{languages}',

      // Prompts
      'prompt.select_operation_undo': '选择要撤销的操作：',
      'prompt.select_operation_redo': '选择要重做的操作：',
      'prompt.select_operation_preview': '选择要预览的操作：',
      'prompt.confirm_undo': '确定要撤销这 {count} 个操作吗？',
      'prompt.confirm_redo': '确定要重做这 {count} 个操作吗？',
      'prompt.cascading_warning': '⚠️ 级联撤销：选择一个操作将撤销该操作及其之后的所有操作。',

      // Operation types
      'op.file_create': '创建文件',
      'op.file_edit': '编辑文件',
      'op.file_delete': '删除文件',
      'op.file_rename': '重命名文件',
      'op.directory_create': '创建目录',
      'op.directory_delete': '删除目录',
      'op.bash_command': 'bash 命令',

      // Operation actions
      'action.will_delete_file': '将删除文件：',
      'action.will_revert_file': '将还原文件：',
      'action.will_restore_file': '将恢复文件：',
      'action.will_rename_back': '将重命名回：',
      'action.will_remove_directory': '将删除目录：',
      'action.will_restore_directory': '将恢复目录：',
      'action.cannot_undo_bash': '无法自动撤销 bash 命令：',
      'action.manual_intervention': '需要手动干预',

      // Headers
      'header.operations_claude': 'Claude Code 会话的操作：',
      'header.operations_local': '本地会话 {sessionId} 的操作：',
      'header.available_sessions_claude': '可用的 Claude Code 会话：',
      'header.available_sessions_local': '可用的本地会话：',
      'header.preview': '📋 预览：将撤销 {count} 个操作：',
      'header.undoing': '正在撤销 {count} 个操作...',
      'header.redoing': '正在重做 {count} 个操作...',
      'header.this_will_undo': '这将撤销 {count} 个操作：',
      'header.this_will_redo': '这将重做 {count} 个操作：',

      // Status
      'status.active': '[活动]',
      'status.undone': '[已撤销]',
      'status.current_content': '当前内容：',
      'status.content_to_restore': '要恢复的内容：',
      'status.original_not_available': '（会话中原始内容不可用）',
      'status.content_not_available': '（会话中内容不可用）',
      'status.completed': '完成：{success} 个成功，{failed} 个失败',

      // Time
      'time.seconds_ago': '{seconds} 秒前',
      'time.minutes_ago': '{minutes} 分钟前',
      'time.hours_ago': '{hours} 小时前',
      'time.days_ago': '{days} 天前',

      // Suffixes
      'suffix.more_operations': '（+ 还将撤销 {count} 个操作）',
      'suffix.more_would_be_undone': '（+ 还将撤销 {count} 个操作）',
      'suffix.tip_to_undo': '💡 要实际执行这些撤销，请运行：ccundo undo',
      
      // Labels
      'label.file': '文件',
      'label.from': '从',
      'label.to': '到',
      'label.directory': '目录',
      'label.command': '命令',
      'label.project': '项目',
      
      // Error messages
      'error.operation_not_found': '未找到操作 {id}。',
      'error.save_config_failed': '保存语言配置失败：',
      'error.track_operation_failed': '跟踪操作失败：',
      'error.general': '错误：{message}',
      
      // UI messages
      'ui.undo_preview_header': '这将撤销 {count} 个操作：',
      'ui.undoing_operations': '正在撤销 {count} 个操作...',
      'ui.preview_undo': '预览：将撤销 {count} 个操作：',
      'ui.current_language': '当前语言：{name} ({code})',
      'ui.available_languages': '可用语言：',
      'ui.language_usage': '用法：ccundo language <code>',
      
      // Additional messages
      'msg.redo_not_implemented': '本地跟踪的重做功能尚未实现。',
      'msg.redo_cancelled': '重做已取消。',
      'msg.switched_to_session': '已切换到会话：{sessionId}',
      
      // Tips
      'tip.perform_undos': '要实际执行这些撤销，请运行：ccundo undo',
      
      // Cascading warnings
      'prompt.cascading_redo_warning': '级联重做：选择一个操作将重做该操作以及之前的所有撤销操作。',
      
      // Backup and file operations (New i18n keys)
      'msg.backup_saved_to': '备份已保存到：{path}',
      
      // Preview messages (New i18n keys)
      'preview.string_replacements_reversed': '将要撤销的字符串替换：',
      'preview.string_replacement_reversed': '将要撤销的字符串替换：',
      'preview.all_occurrences': '（所有匹配项）',
      'preview.context': '上下文：',
      
      // Additional error messages (New i18n keys)
      'error.unknown_operation': '未知操作：{type}',
      'error.file_not_exist': '文件不存在：',
      'error.reading_file': '读取文件错误：',
      'error.unknown_operation_type': '未知操作类型：{type}',
      'error.unsupported_language': '不支持的语言：{language}',
      
      // Additional status messages (New i18n keys)
      'status.directory_already_removed': '目录已被删除：',
      
      // UndoManager success messages (New i18n keys)
      'undo.file_deleted': '文件已删除：{path}',
      'undo.file_edit_reverted': '文件编辑已撤销：{path}',
      'undo.file_restored': '文件已恢复：{path}',
      'undo.file_renamed_back': '文件已重命名回：{oldPath} → {newPath}',
      'undo.directory_removed': '目录已删除：{path}',
      'undo.directory_restored': '目录已恢复：{path}',
      
      // UndoManager failure messages (New i18n keys)
      'undo.failed_file_creation': '撤销文件创建失败：{error}',
      'undo.failed_file_edit': '撤销文件编辑失败：{error}',
      'undo.failed_file_restore': '恢复文件失败：{error}',
      'undo.failed_rename': '撤销重命名失败：{error}',
      'undo.failed_remove_directory': '删除目录失败：{error}',
      'undo.failed_restore_directory': '恢复目录失败：{error}',
      'undo.cannot_undo_edit': '无法撤销编辑：在 {path} 中未找到预期字符串',
      'undo.cannot_undo_edit_insufficient': '无法撤销文件编辑：{path} 数据不足',
      'undo.cannot_restore_file': '无法恢复文件：{path} 内容不可用',
      'undo.cannot_undo_bash': '无法自动撤销 bash 命令：{command}\n请手动撤销更改。',

      // RedoManager success messages (New i18n keys)
      'redo.file_recreated': '文件已重新创建：{path}',
      'redo.file_edit_redone': '文件编辑已重做：{path}',
      'redo.file_deleted_again': '文件已再次删除：{path}',
      'redo.file_renamed_again': '文件已再次重命名：{oldPath} → {newPath}',
      'redo.directory_created_again': '目录已再次创建：{path}',
      'redo.directory_deleted_again': '目录已再次删除：{path}',

      // RedoManager failure messages (New i18n keys)
      'redo.cannot_redo_file_exists': '无法重做文件创建：{path} 已存在',
      'redo.cannot_redo_no_content': '无法重做文件创建：{path} 内容不可用',
      'redo.failed_file_creation': '重做文件创建失败：{error}',
      'redo.cannot_redo_legacy_edit': '无法重做旧版文件编辑：{path} 数据不足',
      'redo.cannot_redo_edit': '无法重做编辑：在 {path} 中未找到原始字符串',
      'redo.cannot_redo_edit_insufficient': '无法重做文件编辑：{path} 数据不足',
      'redo.failed_file_edit': '重做文件编辑失败：{error}',
      'redo.cannot_redo_file_not_exist': '无法重做文件删除：{path} 不存在',
      'redo.failed_file_deletion': '重做文件删除失败：{error}',
      'redo.cannot_redo_rename_not_exist': '无法重做重命名：{path} 不存在',
      'redo.cannot_redo_rename_exists': '无法重做重命名：{path} 已存在',
      'redo.failed_rename': '重做重命名失败：{error}',
      'redo.cannot_redo_dir_exists': '无法重做目录创建：{path} 已存在',
      'redo.failed_directory_creation': '重做目录创建失败：{error}',
      'redo.cannot_redo_dir_not_exist': '无法重做目录删除：{path} 不存在',
      'redo.failed_directory_deletion': '重做目录删除失败：{error}',
      'redo.cannot_redo_bash': '无法重做 bash 命令：{command}\n请手动重新运行命令。',

      // Additional UI messages (New i18n keys)
      'ui.more_will_be_undone': '（+ 还将撤销 {count} 个操作）',
      'ui.more_will_be_redone': '（+ 还将重做 {count} 个操作）',
      'ui.more_would_be_undone': '（+ 还将撤销 {count} 个操作）',
      'ui.more_lines': '... （还有 {count} 行）',
      'ui.unknown_language': '未知'
    }
  },

  tw: {
    name: '繁體中文',
    messages: {
      // Program description
      'program.description': '撤銷 Claude Code 會話中執行的單個步驟',
      
      // Command descriptions
      'cmd.list.description': '列出目前 Claude Code 會話中的所有操作',
      'cmd.undo.description': '撤銷目前 Claude Code 會話中的操作',
      'cmd.redo.description': '重做之前撤銷的操作',
      'cmd.preview.description': '預覽將要撤銷的內容，但不作更改',
      'cmd.sessions.description': '列出所有可用的 Claude Code 會話',
      'cmd.session.description': '切換到不同的會話',
      'cmd.language.description': '設定介面語言',

      // Options
      'opt.all': '顯示所有操作，包括已撤銷的',
      'opt.session': '指定會話 ID',
      'opt.claude': '顯示 Claude Code 會話的操作（預設）',
      'opt.local': '顯示本地 ccundo 跟蹤的操作',
      'opt.yes': '跳過確認',
      'opt.local_tracking': '使用本地 ccundo 跟蹤而不是 Claude 會話',
      'opt.show_local_sessions': '顯示本地 ccundo 會話而不是 Claude 會話',

      // Messages
      'msg.no_active_session': '在此目錄中未找到活動的 Claude Code 會話。',
      'msg.make_sure_directory': '請確保您在使用過 Claude Code 的目錄中。',
      'msg.no_local_session': '未找到本地 ccundo 會話。',
      'msg.no_operations': '未找到操作。',
      'msg.no_operations_to_undo': '沒有可撤銷的操作。',
      'msg.no_operations_to_redo': '沒有可重做的操作。',
      'msg.operation_not_found': '未找到操作 {id}。',
      'msg.already_undone': '此操作已被撤銷。',
      'msg.undo_cancelled': '撤銷已取消。',
      'msg.no_sessions_found': '未找到 Claude Code 會話。',
      'msg.no_local_sessions': '未找到本地會話。',
      'msg.language_set': '語言已設定為 {language}。',
      'msg.language_invalid': '無效的語言。可用語言：{languages}',

      // Prompts
      'prompt.select_operation_undo': '選擇要撤銷的操作：',
      'prompt.select_operation_redo': '選擇要重做的操作：',
      'prompt.select_operation_preview': '選擇要預覽的操作：',
      'prompt.confirm_undo': '確定要撤銷這 {count} 個操作嗎？',
      'prompt.confirm_redo': '確定要重做這 {count} 個操作嗎？',
      'prompt.cascading_warning': '⚠️ 級聯撤銷：選擇一個操作將撤銷該操作及其之後的所有操作。',

      // Operation types
      'op.file_create': '創建文件',
      'op.file_edit': '編輯文件',
      'op.file_delete': '刪除文件',
      'op.file_rename': '重命名文件',
      'op.directory_create': '創建目錄',
      'op.directory_delete': '刪除目錄',
      'op.bash_command': 'bash 命令',

      // Operation actions
      'action.will_delete_file': '將刪除文件：',
      'action.will_revert_file': '將還原文件：',
      'action.will_restore_file': '將恢復文件：',
      'action.will_rename_back': '將重命名回：',
      'action.will_remove_directory': '將刪除目錄：',
      'action.will_restore_directory': '將恢復目錄：',
      'action.cannot_undo_bash': '無法自動撤銷 bash 命令：',
      'action.manual_intervention': '需要手動干預',

      // Headers
      'header.operations_claude': 'Claude Code 會話的操作：',
      'header.operations_local': '本地會話 {sessionId} 的操作：',
      'header.available_sessions_claude': '可用的 Claude Code 會話：',
      'header.available_sessions_local': '可用的本地會話：',
      'header.preview': '📋 預覽：將撤銷 {count} 個操作：',
      'header.undoing': '正在撤銷 {count} 個操作...',
      'header.redoing': '正在重做 {count} 個操作...',
      'header.this_will_undo': '這將撤銷 {count} 個操作：',
      'header.this_will_redo': '這將重做 {count} 個操作：',

      // Status
      'status.active': '[活動]',
      'status.undone': '[已撤銷]',
      'status.current_content': '當前內容：',
      'status.content_to_restore': '要恢復的內容：',
      'status.original_not_available': '（會話中原始內容不可用）',
      'status.content_not_available': '（會話中內容不可用）',
      'status.completed': '完成：{success} 個成功，{failed} 個失敗',

      // Time
      'time.seconds_ago': '{seconds} 秒前',
      'time.minutes_ago': '{minutes} 分鐘前',
      'time.hours_ago': '{hours} 小時前',
      'time.days_ago': '{days} 天前',

      // Suffixes
      'suffix.more_operations': '（+ 還將撤銷 {count} 個操作）',
      'suffix.more_would_be_undone': '（+ 還將撤銷 {count} 個操作）',
      'suffix.tip_to_undo': '💡 要實際執行這些撤銷，請運行：ccundo undo',
      
      // Labels
      'label.file': '文件',
      'label.from': '從',
      'label.to': '到',
      'label.directory': '目錄',
      'label.command': '命令',
      'label.project': '專案',
      
      // Error messages
      'error.operation_not_found': '未找到操作 {id}。',
      'error.save_config_failed': '儲存語言設定失敗：',
      'error.track_operation_failed': '追蹤操作失敗：',
      'error.general': '錯誤：{message}',
      
      // UI messages
      'ui.undo_preview_header': '這將撤銷 {count} 個操作：',
      'ui.undoing_operations': '正在撤銷 {count} 個操作...',
      'ui.preview_undo': '預覽：將撤銷 {count} 個操作：',
      'ui.current_language': '目前語言：{name} ({code})',
      'ui.available_languages': '可用語言：',
      'ui.language_usage': '用法：ccundo language <code>',
      
      // Additional messages
      'msg.redo_not_implemented': '本地追蹤的重做功能尚未實現。',
      'msg.redo_cancelled': '重做已取消。',
      'msg.switched_to_session': '已切換到會話：{sessionId}',
      
      // Tips
      'tip.perform_undos': '要實際執行這些撤銷，請運行：ccundo undo',
      
      // Cascading warnings
      'prompt.cascading_redo_warning': '級聯重做：選擇一個操作將重做該操作以及之前的所有撤銷操作。',
      
      // Backup and file operations (New i18n keys)
      'msg.backup_saved_to': '備份已儲存至：{path}',
      
      // Preview messages (New i18n keys)
      'preview.string_replacements_reversed': '將要撤銷的字串替換：',
      'preview.string_replacement_reversed': '將要撤銷的字串替換：',
      'preview.all_occurrences': '（所有符合項）',
      'preview.context': '上下文：',
      
      // Additional error messages (New i18n keys)
      'error.unknown_operation': '未知操作：{type}',
      'error.file_not_exist': '檔案不存在：',
      'error.reading_file': '讀取檔案錯誤：',
      'error.unknown_operation_type': '未知操作類型：{type}',
      'error.unsupported_language': '不支援的語言：{language}',
      
      // Additional status messages (New i18n keys)
      'status.directory_already_removed': '目錄已被刪除：',
      
      // UndoManager success messages (New i18n keys)
      'undo.file_deleted': '檔案已刪除：{path}',
      'undo.file_edit_reverted': '檔案編輯已撤銷：{path}',
      'undo.file_restored': '檔案已恢復：{path}',
      'undo.file_renamed_back': '檔案已重新命名回：{oldPath} → {newPath}',
      'undo.directory_removed': '目錄已刪除：{path}',
      'undo.directory_restored': '目錄已恢復：{path}',
      
      // UndoManager failure messages (New i18n keys)
      'undo.failed_file_creation': '撤銷檔案建立失敗：{error}',
      'undo.failed_file_edit': '撤銷檔案編輯失敗：{error}',
      'undo.failed_file_restore': '恢復檔案失敗：{error}',
      'undo.failed_rename': '撤銷重新命名失敗：{error}',
      'undo.failed_remove_directory': '刪除目錄失敗：{error}',
      'undo.failed_restore_directory': '恢復目錄失敗：{error}',
      'undo.cannot_undo_edit': '無法撤銷編輯：在 {path} 中未找到預期字串',
      'undo.cannot_undo_edit_insufficient': '無法撤銷檔案編輯：{path} 資料不足',
      'undo.cannot_restore_file': '無法恢復檔案：{path} 內容不可用',
      'undo.cannot_undo_bash': '無法自動撤銷 bash 命令：{command}\n請手動撤銷更改。',

      // RedoManager success messages (New i18n keys)
      'redo.file_recreated': '檔案已重新建立：{path}',
      'redo.file_edit_redone': '檔案編輯已重做：{path}',
      'redo.file_deleted_again': '檔案已再次刪除：{path}',
      'redo.file_renamed_again': '檔案已再次重新命名：{oldPath} → {newPath}',
      'redo.directory_created_again': '目錄已再次建立：{path}',
      'redo.directory_deleted_again': '目錄已再次刪除：{path}',

      // RedoManager failure messages (New i18n keys)
      'redo.cannot_redo_file_exists': '無法重做檔案建立：{path} 已存在',
      'redo.cannot_redo_no_content': '無法重做檔案建立：{path} 內容不可用',
      'redo.failed_file_creation': '重做檔案建立失敗：{error}',
      'redo.cannot_redo_legacy_edit': '無法重做舊版檔案編輯：{path} 資料不足',
      'redo.cannot_redo_edit': '無法重做編輯：在 {path} 中未找到原始字串',
      'redo.cannot_redo_edit_insufficient': '無法重做檔案編輯：{path} 資料不足',
      'redo.failed_file_edit': '重做檔案編輯失敗：{error}',
      'redo.cannot_redo_file_not_exist': '無法重做檔案刪除：{path} 不存在',
      'redo.failed_file_deletion': '重做檔案刪除失敗：{error}',
      'redo.cannot_redo_rename_not_exist': '無法重做重新命名：{path} 不存在',
      'redo.cannot_redo_rename_exists': '無法重做重新命名：{path} 已存在',
      'redo.failed_rename': '重做重新命名失敗：{error}',
      'redo.cannot_redo_dir_exists': '無法重做目錄建立：{path} 已存在',
      'redo.failed_directory_creation': '重做目錄建立失敗：{error}',
      'redo.cannot_redo_dir_not_exist': '無法重做目錄刪除：{path} 不存在',
      'redo.failed_directory_deletion': '重做目錄刪除失敗：{error}',
      'redo.cannot_redo_bash': '無法重做 bash 命令：{command}\n請手動重新執行命令。',

      // Additional UI messages (New i18n keys)
      'ui.more_will_be_undone': '（+ 還將撤銷 {count} 個操作）',
      'ui.more_will_be_redone': '（+ 還將重做 {count} 個操作）',
      'ui.more_would_be_undone': '（+ 還將撤銷 {count} 個操作）',
      'ui.more_lines': '... （還有 {count} 行）',
      'ui.unknown_language': '未知'
    }
  }
};