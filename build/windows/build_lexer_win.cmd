@echo off
REM Build lexer.exe from lexer.asm using NASM and GCC (MinGW)
cd /d %~dp0
nasm -f win64 lexer.asm -o lexer.obj
if errorlevel 1 (
    echo NASM assembly failed.
    exit /b 1
)
gcc lexer.obj -o lexer.exe
if errorlevel 1 (
    echo GCC linking failed.
    exit /b 1
)
echo Build complete. lexer.exe created.
