; This directory contains the lexer code for the Mela programming language, written in x86-64 NASM assembly.

; Usage Guide (Linux/WSL):
; 1. Install NASM and ld (linker) on your system.
; 2. Open a terminal and navigate to this directory.
; 3. Assemble the lexer:
;    nasm -f elf64 lexer.asm -o lexer.o
; 4. Link the object file:
;    ld lexer.o -o lexer
; 5. Run the lexer on a Mela source file:
;    ./lexer yourfile.mela
;    (You can use Arabic filenames and extensions, e.g., ./lexer مثال.ميلا)

; Windows Support:
; - The lexer is designed for Linux/WSL. For Windows, use WSL (Windows Subsystem for Linux) to run the above commands.
; - Alternatively, port the code to use Windows API calls for native support (advanced).

; Requirements for Mela source files:
; - The first line must be a comment starting with ! and contain بسم الله الرحمن الرحيم or Bismillahirrahmanirahim.
; - The last line must be الحمد لله رب العالمين or Elhamdulillahirabbulalemin.
; - The file extension must be .ميلا or .mela (Arabic or Latin).

; For more details, see the code comments in lexer.asm.
