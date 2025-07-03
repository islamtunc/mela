; Bismillahirrahmanirahim
; datetime.asm - Mela Standard Library: Date/Time functions

section .text

extern time

global _now
; _now() -> rax = unix timestamp
_now:
    xor rdi, rdi ; NULL
    call time
    mov rax, rax ; unix timestamp
    ret

; Elhamdulillahirabbulalemin
