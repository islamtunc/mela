; arch/x86_64.asm - x86-64 specific routines (template)
; In the name of Allah, the Most Gracious, the Most Merciful

section .text
    global arch_init

arch_init:
    ; Simple x86-64 init: return 42 in rax
    mov rax, 42
    ret
