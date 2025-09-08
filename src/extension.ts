import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('insert-timestamp.insertNow', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('No active editor');
            return;
        }

        const now = new Date();
        const timestamp = now.toISOString().replace('T', ' ').substring(0, 19);

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
