; This directory contains parser (syntax analyzer) code written in assembly for the Mela programming language.

; Key Concepts:
; - Parser: The component that analyzes the syntax of source code and builds meaningful structures.
; - Token: The smallest meaningful unit produced by the lexer (e.g., keyword, operator, number).
; - AST (Abstract Syntax Tree): A tree structure built by the parser to represent the program's structure.
; - Grammar: Defines the rules of the language and which sequences are valid.
; - Error Handling: The process of producing meaningful error messages when invalid syntax is encountered.
; - Statement: A single meaningful command in the program, usually written on one line (e.g., assignment, function call).
; - Expression: A piece of code that computes a value (e.g., 2+2, a*b).
; - Function/Procedure: A reusable block of code that performs a specific task.
; - Class: In object-oriented programming, a structure that groups data and functions together.
; - Syntax Error: When the source code does not conform to the language's rules.

; The parser.asm file in this directory analyzes Mela source code based on these concepts and passes it to the compiler.
