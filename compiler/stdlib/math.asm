; Bismillahirrahmanirahim
; math.asm - Mela Standard Library: Math functions

section .text

global _add
; _add(a, b) -> rax = a + b
_add:
    mov rax, rdi
    add rax, rsi
    ret

global _sub
; _sub(a, b) -> rax = a - b
_sub:
    mov rax, rdi
    sub rax, rsi
    ret

global _mul
; _mul(a, b) -> rax = a * b
_mul:
    mov rax, rdi
    imul rax, rsi
    ret

global _div
; _div(a, b) -> rax = a / b, remainder in rdx
_div:
    mov rax, rdi
    cqo
    idiv rsi
    ret

; Elhamdulillahirabbulalemin
