; Bismillahirrahmanirahim
; random.asm - Mela Standard Library: Random functions

section .text

extern rand

global _rand
; _rand() -> rax = random int
_rand:
    call rand
    mov rax, eax
    ret

; Elhamdulillahirabbulalemin
