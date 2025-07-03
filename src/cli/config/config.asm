; In the name of Allah, the Most Gracious, the Most Merciful
; config.asm - CLI configuration logic

section .text

; Load configuration
; cli_load_config(config_path)
; rdi = pointer to config file path
cli_load_config:
    ; ...load config file...
    ret

; Save configuration
; cli_save_config(config_path)
; rdi = pointer to config file path
cli_save_config:
    ; ...save config file...
    ret

; Set configuration option
; cli_set_config_option(key_ptr, value_ptr)
; rdi = key, rsi = value
cli_set_config_option:
    ; ...set config option...
    ret

; ...add more config-related functions as needed...

; All praise is due to Allah, Lord of the Worlds
