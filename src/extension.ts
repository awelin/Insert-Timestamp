import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('insert-timestamp.insertNow', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('No active editor');
            return;
        }

        // Current UTC time
        const now = new Date();

        // Convert to UTC+8
        const utc8 = new Date(now.getTime() + 8 * 60 * 60 * 1000);

        // Format YYYY-MM-DD HH:mm:ss
        const pad = (n: number) => n.toString().padStart(2, '0');
        const timestamp = `${utc8.getUTCFullYear()}-${pad(utc8.getUTCMonth() + 1)}-${pad(utc8.getUTCDate())} ${pad(utc8.getUTCHours())}:${pad(utc8.getUTCMinutes())}:${pad(utc8.getUTCSeconds())}`;

        // Insert at cursor
        editor.edit(editBuilder => {
            editor.selections.forEach(selection => {
                if (selection.isEmpty) {
                    editBuilder.insert(selection.start, timestamp);
                } else {
                    editBuilder.replace(selection, timestamp);
                }
            });
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
