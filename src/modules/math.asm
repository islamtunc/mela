; modules/math.asm - Math module (template)
; In the name of Allah, the Most Gracious, the Most Merciful

section .text
    global math_add

math_add:
    ; Adds rdi and rsi, returns result in rax
    mov rax, rdi
    add rax, rsi
    ret
