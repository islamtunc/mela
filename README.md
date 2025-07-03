Bismillahirrahmanirahim


Elhamdulillahirabbulalemin


Esselatu ve selamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain


La ilaha illallah, Muhammadur Rasulullah


SuphanAllah, Alhamdulillah, Allahu Akbar


La hawla wa la quwwata illa billah


La ilaha illallah, Muhammadur Rasulullah


Hasbunallahu ve ni'mel vekil


La ilaha illallah, Muhammadur Rasulullah


# Mela Programming Language

This project was started to develop a new programming language that runs on assembly, supports OOP, and is written in the Arabic alphabet.

## Folders
- lexer: Tokenizer and lexical analyzer code (Assembly)
- parser: Syntax analyzer code (Assembly)
- compiler: Compiler and code that generates assembly output (Assembly)
- examples: Example .mela files

## Features
- Intermediate-level, assembly-based
- OOP support
- Written in the Arabic alphabet
- File extension: .mela
- All tools and the compiler are written in assembly language.

## Build and Run
To compile a .mela file, assemble the relevant assembly files with an assembler:
```
; Example (for NASM):
nasm -f elf64 compiler/compiler.asm -o compiler.o
ld compiler.o -o mela_compiler
./mela_compiler examples/ornek.mela
```
The output will be an assembly (.asm) file. You can convert this file to machine code with a suitable assembler.

## Using the Build Script (Windows/WSL)
If you are on Windows, you can use the provided script to build and run the lexer easily:
```
cd lexer
build_and_run_lexer.cmd
```
This script will automatically assemble and link the lexer using WSL. After building, you can run the lexer on a .mela file with:
```
mela example.mela
```
Or for Arabic filenames:
```
mela مثال.ميلا
```
(You can create a batch file named `mela.cmd` in the project root to forward the command to WSL, so you can use `mela` directly in the Windows command prompt.)

For Linux or MacOS, see the instructions in `lexer/build_and_run_lexer.cmd` or the lexer README.
