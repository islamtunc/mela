import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    let runCommand = vscode.commands.registerCommand('mela.run', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor.');
            return;
        }
        const doc = editor.document;
        if (doc.languageId !== 'mela') {
            vscode.window.showErrorMessage('Not a Mela file.');
            return;
        }
        doc.save().then(() => {
            exec(`python lexer/lexer.py "${doc.fileName}"`, { cwd: vscode.workspace.rootPath }, (err, stdout, stderr) => {
                if (err) {
                    vscode.window.showErrorMessage(`Error: ${stderr}`);
                } else {
                    vscode.window.showInformationMessage(stdout);
                }
            });
        });
    });
    context.subscriptions.push(runCommand);
}

export function deactivate() {}
