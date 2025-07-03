# Bismillahirrahmanirahim
# Elhamdulillah! This script installs Mela Language on your system.
# SuphanAllah ul Azim ve bihamdihi
# LA ILAHA ILLALLAH MUHAMMADUR RASULULLAH
# ALLAHU AKBAR VE LA HAWLA VE LA QUWWATA ILLA BILLAAH
# VELHAMDULILLAH

import os
import shutil
import sys
import subprocess
import tkinter as tk
from tkinter import messagebox, scrolledtext

def is_admin():
    try:
        return os.getuid() == 0
    except AttributeError:
        import ctypes
        try:
            return ctypes.windll.shell32.IsUserAnAdmin()
        except:
            return False

if not is_admin():
    import subprocess
    script = os.path.abspath(__file__)
    params = ' '.join([f'"{arg}"' for arg in sys.argv])
    try:
        subprocess.run(['powershell', '-Command', f'Start-Process pythonw.exe \"{script}\" -Verb RunAs'], check=True)
    except Exception as e:
        print("Failed to elevate:", e)
    sys.exit()

# Remove all top-level install/copy logic. Only GUI will perform installation.

# Only keep the GUI logic and definitions below.

class InstallerGUI:
    def __init__(self, root):
        self.root = root
        # Always resolve src_dir to the project root (two levels up from this script)
        self.src_dir = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
        self.install_dir = os.path.join(os.path.expanduser('~'), 'MelaLang')
        self.items = [
            'lexer/lexer.asm',
            'lexer/hello_mela.py',
            'lexer/build_and_run_lexer.cmd',
            'lexer/build_lexer_win.cmd',
            'mela.cmd',
            'compiler/stdlib.asm',
            'framework',
            'examples',
            'README.md',
        ]
        root.title("Mela Language Installer")
        root.geometry("600x400")
        self.text = scrolledtext.ScrolledText(root, wrap=tk.WORD, width=70, height=20)
        self.text.pack(padx=10, pady=10, fill=tk.BOTH, expand=True)
        self.install_btn = tk.Button(root, text="Install Mela", command=self.run_install)
        self.install_btn.pack(pady=5)
        self.quit_btn = tk.Button(root, text="Exit", command=root.quit)
        self.quit_btn.pack(pady=2)

    def log(self, msg):
        self.text.insert(tk.END, msg + "\n")
        self.text.see(tk.END)
        self.root.update()

    def run_install(self):
        try:
            self.log("Bismillahirrahmanirahim\nMela Language Simple Installer\nElhamdulillah!\n")
            self.log(f"Installing Mela to: {self.install_dir}\n")
            os.makedirs(self.install_dir, exist_ok=True)
            # Try to build lexer.exe using build_lexer_win.cmd first
            lexer_build_script = os.path.join(self.src_dir, 'lexer', 'build_lexer_win.cmd')
            if os.path.exists(lexer_build_script):
                self.log("Running build_lexer_win.cmd...")
                if not try_run_script_gui(lexer_build_script, 'Build lexer.exe (Windows)', self):
                    lexer_build_script2 = os.path.join(self.src_dir, 'lexer', 'build_and_run_lexer.cmd')
                    if os.path.exists(lexer_build_script2):
                        self.log("Running build_and_run_lexer.cmd...")
                        try_run_script_gui(lexer_build_script2, 'Build lexer (WSL/Linux)', self)
                    else:
                        self.log('No build script found for lexer.')
            else:
                self.log('No build_lexer_win.cmd found, skipping lexer.exe build.')
            # Copy files
            for item in self.items:
                try:
                    copy_item_gui(item, self)
                except Exception as e:
                    self.log(f"Error copying {item}: {e}")
            # Add install dir to PATH (user only)
            try:
                import winreg
                with winreg.OpenKey(winreg.HKEY_CURRENT_USER,
                                    r'Environment', 0, winreg.KEY_SET_VALUE) as key:
                    current_path = winreg.QueryValueEx(key, 'Path')[0]
                    if self.install_dir not in current_path:
                        new_path = current_path + ';' + self.install_dir
                        winreg.SetValueEx(key, 'Path', 0, winreg.REG_EXPAND_SZ, new_path)
                        self.log("Added MelaLang to user PATH. Please restart your terminal or computer.")
                    else:
                        self.log("MelaLang is already in your PATH.")
            except Exception as e:
                self.log(f"Could not update PATH automatically: {e}")
            self.log("\nMela installation complete! You can now use mela from the command prompt.")
            messagebox.showinfo("Success", "Mela installation complete!\nYou can now use mela from the command prompt.")
        except Exception as e:
            self.log(f"Installation failed: {e}")
            messagebox.showerror("Error", f"Installation failed: {e}")

def try_run_script_gui(script_path, description, gui):
    gui.log(f"\nRunning: {description} ({script_path})")
    try:
        result = subprocess.run([script_path], shell=True, check=True, capture_output=True, text=True)
        gui.log(result.stdout)
        gui.log(f"{description} completed successfully.")
        return True
    except Exception as e:
        gui.log(f"{description} failed: {e}")
        if hasattr(e, 'output') and e.output:
            gui.log(e.output)
        return False

def copy_item_gui(item, gui):
    src_path = os.path.join(gui.src_dir, item)
    dst_path = os.path.join(gui.install_dir, os.path.basename(item))
    if os.path.isdir(src_path):
        if os.path.exists(dst_path):
            shutil.rmtree(dst_path)
        shutil.copytree(src_path, dst_path)
        gui.log(f"Copied folder: {item}")
    elif os.path.isfile(src_path):
        shutil.copy2(src_path, dst_path)
        gui.log(f"Copied file: {item}")
    else:
        gui.log(f"Warning: {item} not found.")

if __name__ == "__main__":
    root = tk.Tk()
    app = InstallerGUI(root)
    root.mainloop()
