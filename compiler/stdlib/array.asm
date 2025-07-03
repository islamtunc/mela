; Bismillahirrahmanirahim
; array.asm - Mela Standard Library: Array functions

section .text
; ...array functions to be implemented...
; Elhamdulillahirabbulalemin

global _array_init
; _array_init(arr_addr, size, value)
; arr_addr: address of array buffer
; size: number of elements
; value: initial value to fill
_array_init:
    push rbp
    mov rbp, rsp
    mov rdi, rdi        ; arr_addr
    mov rsi, rsi        ; size
    mov rdx, rdx        ; value
    xor rcx, rcx        ; index = 0
.init_loop:
    cmp rcx, rsi
    jge .init_end
    mov [rdi + rcx*8], rdx ; assuming 8-byte elements
    inc rcx
    jmp .init_loop
.init_end:
    pop rbp
    ret

global _array_get
; _array_get(arr_addr, index) -> rax = value
; arr_addr: address of array (int64*)
; index: index to get (int64)
_array_get:
    mov rax, rdi        ; arr_addr
    mov rcx, rsi        ; index
    mov rax, [rax + rcx*8]
    ret

global _array_set
; _array_set(arr_addr, index, value)
; arr_addr: address of array (int64*)
; index: index to set (int64)
; value: value to set (int64)
_array_set:
    mov rax, rdi        ; arr_addr
    mov rcx, rsi        ; index
    mov rdx, rdx        ; value (already in rdx)
    mov [rax + rcx*8], rdx
    ret

global _array_fill
; _array_fill(arr_addr, value, count)
; arr_addr: address of array (int64*)
; value: value to fill (int64)
; count: number of elements (int64)
_array_fill:
    mov rax, rdi        ; arr_addr
    mov rbx, rsi        ; value
    mov rcx, rdx        ; count
    xor rdx, rdx        ; i = 0
.fill_loop:
    cmp rdx, rcx
    jge .fill_end
    mov [rax + rdx*8], rbx
    inc rdx
    jmp .fill_loop
.fill_end:
    ret

global _array_copy
; _array_copy(src_addr, dst_addr, count)
; src_addr: address of source array (int64*)
; dst_addr: address of destination array (int64*)
; count: number of elements (int64)
_array_copy:
    mov rax, rdi        ; src_addr
    mov rbx, rsi        ; dst_addr
    mov rcx, rdx        ; count
    xor rdx, rdx        ; i = 0
.copy_loop:
    cmp rdx, rcx
    jge .copy_end
    mov r8, [rax + rdx*8]
    mov [rbx + rdx*8], r8
    inc rdx
    jmp .copy_loop
.copy_end:
    ret

global _array_find
; _array_find(arr_addr, value, count) -> rax = index or -1 if not found
; arr_addr: address of array (int64*)
; value: value to find (int64)
; count: number of elements (int64)
_array_find:
    mov rax, rdi        ; arr_addr
    mov rbx, rsi        ; value
    mov rcx, rdx        ; count
    xor rdx, rdx        ; i = 0
.find_loop:
    cmp rdx, rcx
    jge .not_found
    mov r8, [rax + rdx*8]
    cmp r8, rbx
    je .found
    inc rdx
    jmp .find_loop
.found:
    mov rax, rdx
    ret
.not_found:
    mov rax, -1
    ret
