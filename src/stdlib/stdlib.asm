; stdlib.asm - Mela Standard Library (x86-64 NASM)
; Provides basic functions for Mela programs

section .text
    global mela_print
    global mela_strlen
    global mela_add

; void mela_print(char* str)
mela_print:
    ; rdi = pointer to string
    mov rax, 1      ; sys_write
    mov rdi, 1      ; stdout
    mov rsi, rdi    ; string pointer
    mov rdx, 256    ; max length (for demo)
    syscall
    ret

; int mela_strlen(char* str)
mela_strlen:
    ; rdi = pointer to string
    xor rcx, rcx
.strlen_loop:
    mov al, [rdi]
    cmp al, 0
    je .strlen_done
    inc rcx
    inc rdi
    jmp .strlen_loop
.strlen_done:
    mov rax, rcx
    ret

; int mela_add(int a, int b)
mela_add:
    ; rdi = a, rsi = b
    mov rax, rdi
    add rax, rsi
    ret
