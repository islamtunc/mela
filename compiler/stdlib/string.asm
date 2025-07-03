; Bismillahirrahmanirahim
; string.asm - Mela Standard Library: String functions

section .text

global _strlen
; _strlen(str_addr) -> rax = length (C-style null-terminated)
_strlen:
    mov rax, rdi
    xor rcx, rcx
.strlen_loop:
    cmp byte [rax], 0
    je .strlen_end
    inc rax
    inc rcx
    jmp .strlen_loop
.strlen_end:
    mov rax, rcx
    ret

; Elhamdulillahirabbulalemin
