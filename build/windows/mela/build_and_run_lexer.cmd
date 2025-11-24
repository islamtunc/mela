@echo off
REM Mela lexer build and run script for Windows (with WSL)

REM This script helps you build and run the Mela lexer on any Windows computer.
REM For other systems (Linux, Mac), see the instructions below.

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

echo.
echo === For Linux or MacOS systems ===
echo 1. Install NASM and ld using your package manager.
echo 2. Open a terminal in this directory.
echo 3. Run: nasm -f elf64 lexer.asm -o lexer.o
echo 4. Run: ld lexer.o -o lexer
echo 5. Run: ./lexer yourfile.mela

echo For more details, see the README file.
