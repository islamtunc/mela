; In the name of Allah, the Most Gracious, the Most Merciful
; Peace and blessings be upon our Prophet Muhammad and his family and companions
; There is no god but Allah, Muhammad is the Messenger of Allah
; Glory be to Allah, Praise be to Allah, Allah is the Greatest
; There is no power and no strength except with Allah
; There is no god but Allah, Muhammad is the Messenger of Allah
; Allah is Sufficient for us and He is the Best Disposer of affairs
; There is no god but Allah, Muhammad is the Messenger of Allah
; Mela Compiler - Simple starter skeleton (x86-64 NASM)
; Takes filename from command line and prints "Mela Compiler started!"

section .data
    msg db "Mela Compiler started!", 10, 0

section .text
    global _start

_start:
    ; Print the message
    mov rax, 1          ; sys_write
    mov rdi, 1          ; stdout
    mov rsi, msg        ; message address
    mov rdx, 23         ; message length
    syscall

    ; Exit the program
    mov rax, 60         ; sys_exit
    xor rdi, rdi        ; exit code 0
    syscall
; All praise is due to Allah, Lord of the Worlds
