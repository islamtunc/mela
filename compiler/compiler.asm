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

section .bss
    fd resq 1
    readlen resq 1
    buf times 4096 db 0

section .data
    msg db "Mela Compiler started!", 10, 0
    import_keyword_ar db 0xD8,0xA7,0xD8,0xB3,0xD8,0xAA,0xD9,0x88,0xD8,0xB1,0xD8,0xAF,0x20,0x22,0 ; "استورد "
    import_found_msg db "Import detected (استورد)", 10, 0
    file_open_err db "Error: cannot open file", 10, 0

section .text
    global _start

; --- Command-line argument handling and file reading ---
_start:
    ; Print the message
    mov rax, 1          ; sys_write
    mov rdi, 1          ; stdout
    mov rsi, msg        ; message address
    mov rdx, 23         ; message length
    syscall

    ; Get filename from argv[1]
    mov rsi, [rsp+16]   ; argv[1]
    mov rax, 2          ; sys_open
    mov rdi, rsi        ; filename
    mov rsi, 0          ; O_RDONLY
    syscall
    cmp rax, 0
    js .file_error
    mov [fd], rax

    ; Read up to 4096 bytes from file
    mov rax, 0          ; sys_read
    mov rdi, [fd]
    mov rsi, buf
    mov rdx, 4096
    syscall
    cmp rax, 0
    jle .file_error
    mov [readlen], rax

    ; Check for Arabic import keyword at start of buffer (demo)
    mov rsi, buf
    mov rdi, import_keyword_ar
    mov rcx, 13
    call strncmp_import_ar
    cmp rax, 0
    jne .no_import
    ; Import detected
    mov rax, 1
    mov rdi, 1
    mov rsi, import_found_msg
    mov rdx, 30
    syscall
.no_import:
    ; ...continue with parsing/compiling...

    ; Exit
    mov rax, 60
    xor rdi, rdi
    syscall

.file_error:
    mov rax, 1
    mov rdi, 1
    mov rsi, file_open_err
    mov rdx, 26
    syscall
    mov rax, 60
    mov rdi, 1
    syscall

; strncmp_import_ar: rsi=buf, rdi=import_keyword_ar, rcx=length, returns rax=0 if equal
strncmp_import_ar:
    push rbx
.loop_import:
    cmp rcx, 0
    je .done_import
    mov al, [rsi]
    mov bl, [rdi]
    cmp al, bl
    jne .not_equal_import
    inc rsi
    inc rdi
    dec rcx
    jmp .loop_import
.done_import:
    xor rax, rax
    pop rbx
    ret
.not_equal_import:
    mov rax, 1
    pop rbx
    ret

; All praise is due to Allah, Lord of the Worlds
