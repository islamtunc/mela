; Bismillahirrahmanirahim
; mela_add.asm - Example Mela native function for Android JNI

section .text
    global add
add:
    mov rax, rdi
    add rax, rsi
    ret
; Elhamdulillahirabbulalemin
