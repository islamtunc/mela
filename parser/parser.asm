; parser.asm
; Mela Parser - Basit başlangıç iskeleti (x86-64 NASM)
; "Parser çalıştı!" mesajı basar

section .data
    msg db "Parser çalıştı!", 10, 0

section .text
    global _start

_start:
    mov rax, 1
    mov rdi, 1
    mov rsi, msg
    mov rdx, 16
    syscall

    mov rax, 60
    xor rdi, rdi
    syscall
