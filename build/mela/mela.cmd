@echo off
REM Mela interactive shell for Windows CMD - forwards to WSL
REM Usage: mela [file.mela] or just mela for interactive mode

if "%1"=="" (
    echo Mela Interactive Shell
    echo Type 'exit' to quit.
    :loop
    set /p MELALINE=mela! ^>
    if /i "%MELALINE%"=="exit" exit /b 0
    REM Write MELALINE to a temp file
    echo !%MELALINE%!> %TEMP%\mela_temp.mela
    REM Run lexer on the temp file
    wsl ./lexer/lexer %TEMP%/mela_temp.mela
    goto loop
) else (
    REM Forward the command to WSL for file execution
    wsl ./lexer/lexer %*
)
