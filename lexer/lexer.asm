; lexer.asm
; Mela Lexer - Basit başlangıç iskeleti (x86-64 NASM)
; "Lexer çalıştı!" mesajı basar

section .data
    msg db "Lexer çalıştı!", 10, 0
    err_bismillah db "Error: First line must be بسم الله الرحمن الرحيم or Bismillahirrahmanirahim", 10, 0
    err_elhamdu db "Error: Last line must be الحمد لله رب العالمين or Elhamdulillahirabbulalemin", 10, 0
    err_ext db "Error: File extension must be .ميلا or .mela", 10, 0
    err_comment db "Error: First line must be a comment starting with !", 10, 0
    bismillah_ar db 0xD8,0xA8,0xD8,0xB3,0xD9,0x85,0x20,0xD8,0xA7,0xD9,0x84,0xD9,0x84,0xD9,0x87,0x20,0xD8,0xA7,0xD9,0x84,0xD8,0xB1,0xD8,0xAD,0xD9,0x85,0xD9,0x86,0x20,0xD8,0xA7,0xD9,0x84,0xD8,0xB1,0xD8,0xAD,0xD9,0x8A,0xD9,0x85,0 ; بسم الله الرحمن الرحيم UTF-8
    bismillah_lat db "Bismillahirrahmanirahim", 0
    elhamdu_ar db 0xD8,0xA7,0xD9,0x84,0xD8,0xAD,0xD9,0x85,0xD8,0xAF,0x20,0xD9,0x84,0xD9,0x84,0xD9,0x87,0x20,0xD8,0xB1,0xD8,0xA8,0x20,0xD8,0xA7,0xD9,0x84,0xD8,0xB9,0xD8,0xA7,0xD9,0x84,0xD9,0x85,0xD9,0x8A,0xD9,0x86,0 ; الحمد لله رب العالمين UTF-8
    elhamdu_lat db "Elhamdulillahirabbulalemin", 0
    ext_ar db 0x2E,0xD9,0x85,0xD9,0x8A,0xD9,0x84,0xD8,0xA7,0 ; .ميلا UTF-8
    ext_lat db ".mela", 0
    buf times 256 db 0
    buf_end times 256 db 0

section .bss
    fd resq 1
    readlen resq 1

section .text
    global _start

_start:
    ; argv[1] adresini al (dosya adı)
    mov rsi, [rsp+16] ; argv[1]
    mov rax, 2        ; sys_open
    mov rdi, rsi      ; filename
    mov rsi, 0        ; O_RDONLY
    syscall
    cmp rax, 0
    js .file_error
    mov [fd], rax

    ; Dosyanın ilk 64 byte'ını oku
    mov rax, 0        ; sys_read
    mov rdi, [fd]
    mov rsi, buf
    mov rdx, 64
    syscall
    cmp rax, 0
    jle .file_error
    mov [readlen], rax

    ; İlk satırı karşılaştır (Arapça veya Latin kabul)
    mov rsi, buf
    mov rdi, bismillah_ar
    mov rcx, 39
    call strncmp_bismillah
    cmp rax, 0
    je .bismillah_ok
    mov rsi, buf
    mov rdi, bismillah_lat
    mov rcx, 23
    call strncmp_bismillah
    cmp rax, 0
    je .bismillah_ok
    ; Yorum satırı kontrolü (! ile başlamalı)
    mov rsi, buf
    mov al, [rsi]
    cmp al, '!'

    jne .comment_error
    jmp .bismillah_ok
.comment_error:
    mov rax, 1
    mov rdi, 1
    mov rsi, err_comment
    mov rdx, 44
    syscall
    jmp .exit
.bismillah_ok:

    ; Dosya uzantısı kontrolü (hem .ميلا hem .mela kabul)
    mov rsi, [rsp+16] ; argv[1] (filename pointer)
    call get_filename_length
    mov rcx, rax      ; rcx = length
    mov rsi, [rsp+16] ; filename
    add rsi, rcx
    sub rsi, 10       ; .ميلا UTF-8 (10 byte)
    mov rdi, ext_ar
    mov rdx, 10
    call strncmp_ext
    cmp rax, 0
    je .ext_ok
    mov rsi, [rsp+16]
    add rsi, rcx
    sub rsi, 5        ; .mela (5 byte)
    mov rdi, ext_lat
    mov rdx, 5
    call strncmp_ext
    cmp rax, 0
    je .ext_ok
    ; Hata: uzantı yok
    mov rax, 1
    mov rdi, 1
    mov rsi, err_ext
    mov rdx, 56
    syscall
    jmp .exit
.ext_ok:

    ; Dosyanın son 256 byte'ını oku (son satır için)
    mov rax, 8        ; sys_lseek
    mov rdi, [fd]
    mov rsi, 0
    mov rdx, 2        ; SEEK_END
    syscall
    sub rax, 256
    js .file_error
    mov rsi, rax
    mov rax, 8        ; sys_lseek
    mov rdi, [fd]
    mov rsi, rsi
    mov rdx, 0        ; SEEK_SET
    syscall
    mov rax, 0        ; sys_read
    mov rdi, [fd]
    mov rsi, buf_end
    mov rdx, 256
    syscall
    cmp rax, 0
    jle .file_error

    ; Son satırı bul ve karşılaştır
    mov rsi, buf_end
    add rsi, 255
.find_newline:
    cmp rsi, buf_end
    jl .not_found
    mov al, [rsi]
    cmp al, 10
    je .found_newline
    dec rsi
    jmp .find_newline
.found_newline:
    inc rsi
    mov rdi, elhamdu_ar
    mov rcx, 37
    call strncmp_bismillah
    cmp rax, 0
    je .elhamdu_ok
    mov rdi, elhamdu_lat
    mov rcx, 26
    call strncmp_bismillah
    cmp rax, 0
    jne .elhamdu_error
.elhamdu_ok:
    ; Başarılıysa devam et
    mov rax, 1
    mov rdi, 1
    mov rsi, msg
    mov rdx, 15
    syscall
    jmp .exit
.elhamdu_error:
    mov rax, 1
    mov rdi, 1
    mov rsi, err_elhamdu
    mov rdx, 61
    syscall
    jmp .exit
.not_found:
    jmp .elhamdu_error

.file_error:
    mov rax, 60
    mov rdi, 1
    syscall

.exit:
    mov rax, 60
    xor rdi, rdi
    syscall

; rsi: buffer, rdi: bismillah, rcx: uzunluk, döner: rax=0 eşit, !=0 değil
strncmp_bismillah:
    push rbx
.loop:
    mov al, [rsi]
    mov bl, [rdi]
    cmp rcx, 0
    je .done
    cmp al, 0
    je .done
    cmp bl, 0
    je .done
    cmp al, bl
    jne .not_equal
    inc rsi
    inc rdi
    dec rcx
    jmp .loop
.done:
    xor rax, rax
    pop rbx
    ret
.not_equal:
    mov rax, 1
    pop rbx
    ret

; Dosya adının uzunluğunu bulur (rsi: ptr, döner: rax=uzunluk)
get_filename_length:
    push rsi
    xor rax, rax
.len_loop:
    mov bl, [rsi]
    cmp bl, 0
    je .len_done
    inc rsi
    inc rax
    jmp .len_loop
.len_done:
    pop rsi
    ret

; rsi: buffer, rdi: ext, rdx: len, döner: rax=0 eşit, !=0 değil
strncmp_ext:
    push rbx
    mov rcx, rdx
.loop_ext:
    cmp rcx, 0
    je .done_ext
    mov al, [rsi]
    mov bl, [rdi]
    cmp al, bl
    jne .not_equal_ext
    inc rsi
    inc rdi
    dec rcx
    jmp .loop_ext
.done_ext:
    xor rax, rax
    pop rbx
    ret
.not_equal_ext:
    mov rax, 1
    pop rbx
    ret
