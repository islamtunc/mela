; lexer.asm
; Mela Lexer - Basit başlangıç iskeleti (x86-64 NASM)
; "Lexer çalıştı!" mesajı basar

section .data
    msg db "Lexer çalıştı!", 10, 0
    err_bismillah db "Error: First line must be بسم الله الرحمن الرحيم or Bismillahirrahmanirahim", 10, 0
    err_elhamdu db "Error: Last line must be الحمد لله رب العالمين or Elhamdulillahirabbulalemin", 10, 0
    err_ext db "Error: File extension must be .ميلا or .mela", 10, 0
    err_comment db "Error: First line must be a comment starting with !", 10, 0
    latin_error_msg db "Error: Only first and last lines can be Latin. All other lines must be Arabic.", 10, 0
    bismillah_ar db 0xD8,0xA8,0xD8,0xB3,0xD9,0x85,0x20,0xD8,0xA7,0xD9,0x84,0xD9,0x84,0xD9,0x87,0x20,0xD8,0xA7,0xD9,0x84,0xD8,0xB1,0xD8,0xAD,0xD9,0x85,0xD9,0x86,0x20,0xD8,0xA7,0xD9,0x84,0xD8,0xB1,0xD8,0xAD,0xD9,0x8A,0xD9,0x85,0 ; بسم الله الرحمن الرحيم UTF-8
    bismillah_lat db "Bismillahirrahmanirahim", 0
    elhamdu_ar db 0xD8,0xA7,0xD9,0x84,0xD8,0xAD,0xD9,0x85,0xD8,0xAF,0x20,0xD9,0x84,0xD9,0x84,0xD9,0x87,0x20,0xD8,0xB1,0xD8,0xA8,0x20,0xD8,0xA7,0xD9,0x84,0xD8,0xB9,0xD8,0xA7,0xD9,0x84,0xD9,0x85,0xD9,0x8A,0xD9,0x86,0 ; الحمد لله رب العالمين UTF-8
    elhamdu_lat db "Elhamdulillahirabbulalemin", 0
    ext_ar db 0x2E,0xD9,0x85,0xD9,0x8A,0xD9,0x84,0xD8,0xA7,0 ; .ميلا UTF-8
    ext_lat db ".mela", 0
    buf times 256 db 0
    buf_end times 256 db 0
    import_keyword_ar db 0xD8,0xA7,0xD8,0xB3,0xD8,0xAA,0xD9,0x88,0xD8,0xB1,0xD8,0xAF,0x20,0x22,0 ; "استورد "
    import_found_msg db "Import detected (استورد)", 10, 0

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

    ; --- Import Support (Arabic Keyword) ---
    ; Bu kod, her satırı Arapça import anahtar kelimesi için tarar (استورد "filename.mela")
    ; Bulunduğunda, içe aktarılan dosyayı ana dosya gibi açar ve işler.
    ; Demo için: import tespit edilirse bir mesaj basar (tam özyinelemeli import mantığı gerektiği gibi genişletilebilir)

    mov rsi, buf
    mov rdi, import_keyword_ar
    mov rcx, 13
    call strncmp_import_ar
    cmp rax, 0
    je .import_found

    jmp .exit

.import_found:
    ; İçe aktarma anahtar kelimesi bulundu
    mov rax, 1
    mov rdi, 1
    mov rsi, import_found_msg
    mov rdx, 30
    syscall

    ; Burada, dosya adını çıkarıp içe aktarmayı işleyin (dosyayı aç, vb.)
    ; Tam içe aktarma mantığı gerektiği gibi genişletilebilir.

    jmp .exit

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

; --- Latin harf kontrolü ---
; rsi: buffer, rcx: length
; Eğer Latin harf varsa rax=1, yoksa rax=0
check_latin:
    push rcx
    push rsi
    xor rax, rax
.check_latin_loop:
    cmp rcx, 0
    je .check_latin_done
    mov bl, [rsi]
    cmp bl, 'A'
    jb .not_upper
    cmp bl, 'Z'
    jbe .latin_found
.not_upper:
    cmp bl, 'a'
    jb .not_lower
    cmp bl, 'z'
    jbe .latin_found
.not_lower:
    inc rsi
    dec rcx
    jmp .check_latin_loop
.latin_found:
    mov rax, 1
.check_latin_done:
    pop rsi
    pop rcx
    ret

; --- Ana akışta Latin harf kontrolü ---
; İlk satır ve son satır hariç, Latin harf kontrolü ekle
; İlk satır zaten okundu, şimdi kalan satırları oku ve kontrol et
.bismillah_ok:
    ; Dosyanın tamamını oku (örnek: 4096 byte)
    mov rax, 0        ; sys_read
    mov rdi, [fd]
    mov rsi, buf
    mov rdx, 4096
    syscall
    cmp rax, 0
    jle .file_error
    mov rcx, rax
    mov rsi, buf
    ; İlk satırı atla (örnek: 64 byte)
    add rsi, 64
    sub rcx, 64
    ; Son satırı hariç tutmak için (örnek: 64 byte)
    sub rcx, 64
    cmp rcx, 0
    jle .skip_latin_check
    call check_latin
    cmp rax, 1
    jne .skip_latin_check
    ; Latin harf bulundu, hata ver
    mov rax, 1
    mov rdi, 1
    mov rsi, latin_error_msg
    mov rdx, 68
    syscall
    jmp .exit
.skip_latin_check:
    ; Son satır kontrolü için dosyanın sonuna git
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
