; utils/string.asm - String utility routines (template)
; In the name of Allah, the Most Gracious, the Most Merciful

section .text
    global str_len

; size_t str_len(char* str)
str_len:
    ; Calculates length of zero-terminated string in rdi, returns in rax
    xor rax, rax
    mov rcx, rdi
.strlen_loop:
    cmp byte [rcx], 0
    je .strlen_done
    inc rcx
    inc rax
    jmp .strlen_loop
.strlen_done:
    ret
