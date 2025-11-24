rem Bismillahirrahmanirahim
rem Elhamdulillah, this script is used to install the required packages for the project.
rem Esselatu vesselamu ala rasulina Muhammedin wa ala alihi wa sahbihi ajma'in.
rem  SUPHANALLAH, ALHAMDULILLAH, ALLAHU AKBAR
rem La hawla wa la quwwata illa billah.
rem LA ILAHA ILLALLAH, MUHAMMADUR RASULULLAH
REM ALLAHU AKBAR, ALLAHU AKBAR, ALLAHU AKBAR LA ILAHA ILLALLAH, ALLAHU AKBAR, ALLAHU AKBAR, WALILLAHIL HAMD

@echo off
setlocal

REM Define install directory
set "INSTALLDIR=%ProgramFiles%\MelaLang"

REM Create install directory
if not exist "%INSTALLDIR%" mkdir "%INSTALLDIR%"

REM Copy lexer and mela.cmd to install directory
copy /Y "lexer\lexer" "%INSTALLDIR%\lexer.exe" >nul
copy /Y "mela.cmd" "%INSTALLDIR%\mela.cmd" >nul

REM Copy standard library and framework
if exist "compiler\stdlib.asm" copy /Y "compiler\stdlib.asm" "%INSTALLDIR%\stdlib.asm" >nul
if exist "framework" xcopy /E /I /Y "framework" "%INSTALLDIR%\framework" >nul

REM Copy example files
if exist "examples" xcopy /E /I /Y "examples" "%INSTALLDIR%\examples" >nul

REM Add install directory to PATH (user scope)
setx PATH "%PATH%;%INSTALLDIR%"

@echo.
@echo Mela installed to %INSTALLDIR%.
@echo Standard library, framework, and example files are also installed.
@echo You can now run 'mela yourfile.mela' from any terminal window.
@echo If you have an open terminal, please restart it to update the PATH.

endlocal

