; In the name of Allah, the Most Gracious, the Most Merciful
; ast_nodes.asm - AST node definitions for the Mela language

section .data
; Node type constants
NODE_INT_LITERAL   equ 1
NODE_VAR           equ 2
NODE_BIN_OP        equ 3
NODE_ASSIGN        equ 4
; ...add more as needed...

section .bss
; Example: reserve space for nodes if needed

section .text
; Build an integer literal node
; build_int_literal(value) -> returns pointer to node
; rdi = value
; returns rax = pointer to node
build_int_literal:
    ; Allocate memory for node (pseudo, replace with real allocator)
    ; mov rax, ...
    ; mov [rax], NODE_INT_LITERAL
    ; mov [rax+8], rdi ; value
    ; ret
    ret

; Build a variable node
; build_var(name_ptr) -> returns pointer to node
; rdi = pointer to variable name string
; returns rax = pointer to node
build_var:
    ; mov rax, ...
    ; mov [rax], NODE_VAR
    ; mov [rax+8], rdi ; name pointer
    ; ret
    ret

; Build a binary operation node
; build_bin_op(op_type, left_ptr, right_ptr) -> returns pointer to node
; rdi = op_type, rsi = left_ptr, rdx = right_ptr
; returns rax = pointer to node
build_bin_op:
    ; mov rax, ...
    ; mov [rax], NODE_BIN_OP
    ; mov [rax+8], rdi ; op_type
    ; mov [rax+16], rsi ; left
    ; mov [rax+24], rdx ; right
    ; ret
    ret

; ...add more node constructors as needed...

; All praise is due to Allah, Lord of the Worlds
