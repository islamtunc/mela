; lexer.asm
; Mela Lexer - Basit başlangıç iskeleti (x86-64 NASM)
; "Lexer çalıştı!" mesajı basar

section .data
    msg db "Lexer çalıştı!", 10, 0

section .text
    global _start

_start:
    mov rax, 1
    mov rdi, 1
    mov rsi, msg
    mov rdx, 15
    syscall

    mov rax, 60
    xor rdi, rdi
    syscall
