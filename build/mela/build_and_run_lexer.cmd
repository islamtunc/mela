@echo off
REM Mela lexer build and run script for Windows (with WSL)

REM Check if WSL is installed
where wsl >nul 2>nul
if errorlevel 1 (
    echo WSL (Windows Subsystem for Linux) is required. Please install WSL and Ubuntu from Microsoft Store.
    exit /b 1
)

REM Assemble lexer.asm using NASM in WSL
wsl nasm -f elf64 lexer.asm -o lexer.o
if errorlevel 1 (
    echo NASM assembly failed.
    exit /b 1
)

REM Link object file using ld in WSL
wsl ld lexer.o -o lexer
if errorlevel 1 (
    echo Linking failed.
    exit /b 1
)

echo Build successful.

echo To run the lexer on a .mela file, use:
echo wsl ./lexer yourfile.mela

echo Or for Arabic filenames:
echo wsl ./lexer مثال.ميلا
