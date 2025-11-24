//Bismillah-ir-Rahman-ir-Rahim
// Elhamdulillahi Rabbil 'Alamin
// Esselatu ve selamu ala resulina Muhammedin
// Allahu Akbar, Allahu Akbar, Allahu Akbar, La ilahe illallah
// This file is part of Mela project:




import * as vscode from 'vscode';
import { spawn } from 'child_process';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('mela.runLexer', async (uri?: vscode.Uri) => {
    const editor = vscode.window.activeTextEditor;
    const target = uri?.fsPath ?? editor?.document?.fileName;
    if (!target) {
      vscode.window.showErrorMessage('No active file to run lexer on.');
      return;
    }

    const workspaceFolder =
      (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders[0].uri.fsPath) || path.dirname(target);
    const script = path.join(workspaceFolder, 'build_lexer.sh');

    const out = vscode.window.createOutputChannel('Mela Lexer');
    out.clear();
    out.show(true);
    out.appendLine(`Running: bash ${script} "${target}"`);
    const proc = spawn('bash', [script, target], { cwd: workspaceFolder });

    proc.stdout.on('data', (chunk: Buffer | string) => out.append(chunk.toString()));
    proc.stderr.on('data', (chunk: Buffer | string) => out.append(chunk.toString()));
    proc.on('close', (code: number | null) => out.appendLine(`Process exited with code ${code}`));
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}