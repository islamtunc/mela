; Bismillahirrahmanirahim
; os.asm - Mela Standard Library: OS/system functions

section .text

extern system

global _system
; _system(cmd_addr)
; cmd_addr: address of command string
_system:
    call system
    ret

; Elhamdulillahirabbulalemin
