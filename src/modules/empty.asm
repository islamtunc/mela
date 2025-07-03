; modules/empty.asm - Empty module (template)
; In the name of Allah, the Most Gracious, the Most Merciful

section .text
    global empty_func

empty_func:
    ; Returns 0 in rax as a placeholder
    xor rax, rax
    ret
