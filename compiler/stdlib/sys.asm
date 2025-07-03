; Bismillahirrahmanirahim
; sys.asm - Mela Standard Library: System functions

section .text

global _exit
; _exit(code)
; code: exit code
_exit:
    mov eax, edi
    mov rdi, rax
    mov eax, 60
    syscall
    ret

; Elhamdulillahirabbulalemin
