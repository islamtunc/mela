; Mela Programming Language NSIS Installer Script
; Bismillahirrahmanirahim

Name "Mela Programming Language"
OutFile "MelaSetup.exe"
InstallDir "$PROGRAMFILES\MelaLang"
RequestExecutionLevel admin

Page directory
Page instfiles

Section "Install Mela"
    SetOutPath "$INSTDIR"
    File /r "lexer\lexer.exe"
    File /r "mela.cmd"
    File /r "compiler\stdlib.asm"
    File /r "framework\*.*"
    File /r "examples\*.*"

    ; Add install dir to PATH (system-wide)
    WriteRegExpandStr HKLM "SYSTEM\CurrentControlSet\Control\Session Manager\Environment" "Path" "$%PATH%;$INSTDIR"

    ; Optional: Create desktop shortcut
    CreateShortCut "$DESKTOP\Mela.lnk" "$INSTDIR\mela.cmd"

    MessageBox MB_OK "Mela has been installed to $INSTDIR.\nYou can now use 'mela' from any terminal. Please restart your terminal or computer to update the PATH."
SectionEnd
