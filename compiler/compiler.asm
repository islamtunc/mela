; Bismillahirrahmanirahim 
; Esselatu ve selamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
; La ilaha illallah, Muhammadur Rasulullah
; SuphanAllah, Alhamdulillah, Allahu Akbar
; La hawla wa la quwwata illa billah
; La ilaha illallah, Muhammadur Rasulullah
; Hasbunallahu ve ni'mel vekil
; La ilaha illallah, Muhammadur Rasulullah
; Mela Compiler - Basit başlangıç iskeleti (x86-64 NASM)
; Komut satırından dosya adı alır ve "Mela Compiler çalıştı!" mesajı basar

section .data
    msg db "Mela Compiler çalıştı!", 10, 0

section .text
    global _start

_start:
    ; Yazıyı ekrana bas
    mov rax, 1          ; sys_write
    mov rdi, 1          ; stdout
    mov rsi, msg        ; mesaj adresi
    mov rdx, 23         ; mesaj uzunluğu
    syscall

    ; Programı sonlandır
    mov rax, 60         ; sys_exit
    xor rdi, rdi        ; çıkış kodu 0
    syscall
