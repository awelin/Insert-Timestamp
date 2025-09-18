import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('insert-timestamp.insertNow', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('No active editor');
            return;
        }

        const config = vscode.workspace.getConfiguration('insertTimestamp');
        const tz = config.get<string>('timezone', 'UTC+8'); // Default UTC+8

        const now = new Date();
        let timestamp: string;

        if (tz.toLowerCase() === 'local') {
            timestamp = now.toLocaleString();
        } else {
            // Parse UTC offset like "UTC", "UTC+8", "UTC-5"
            const match = tz.match(/^UTC([+-]?\d+)?$/i);
            if (match) {
                const offset = match[1] ? parseInt(match[1], 10) : 0;
                const utcTime = new Date(now.getTime() + offset * 60 * 60 * 1000);
                const pad = (n: number) => n.toString().padStart(2, '0');
                timestamp = `${utcTime.getUTCFullYear()}-${pad(utcTime.getUTCMonth() + 1)}-${pad(utcTime.getUTCDate())} ${pad(utcTime.getUTCHours())}:${pad(utcTime.getUTCMinutes())}:${pad(utcTime.getUTCSeconds())}`;
            } else {
                // Fallback to ISO string
                timestamp = now.toISOString().replace('T', ' ').substring(0, 19);
            }
        }

        // Insert or replace timestamp at each selection
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
