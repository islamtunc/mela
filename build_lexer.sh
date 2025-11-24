# بسم الله الرحمن الرحيم
# Elhamdu lillahi rabbil 'alamin
# Laa ilaha illallah,Muhammadur rasulullah
#!/bin/bash
# Bash Script to compile & link Mela lexer (NASM x86-64)
# Author: İslam Tunç

# Check if NASM is installed
if ! command -v nasm &> /dev/null
then
    echo "NASM not found! Please install NASM (sudo apt install nasm)"
    exit 1
fi

# Check if ld is installed
if ! command -v ld &> /dev/null
then
    echo "ld (linker) not found! Please install build-essential"
    exit 1
fi

# Lexer source file
LEXER_SRC="lexer.asm"
OBJ_FILE="lexer.o"
BIN_FILE="lexer"

echo "Compiling $LEXER_SRC..."
nasm -f elf64 "$LEXER_SRC" -o "$OBJ_FILE"
if [ $? -ne 0 ]; then
    echo "Compilation failed!"
    exit 1
fi

echo "Linking $OBJ_FILE..."
ld "$OBJ_FILE" -o "$BIN_FILE"
if [ $? -ne 0 ]; then
    echo "Linking failed!"
    exit 1
fi

echo "Lexer build successful!"
echo "Run it: ./$BIN_FILE yourfile.ميلا"
