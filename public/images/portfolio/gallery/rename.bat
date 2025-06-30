@echo off
setlocal enabledelayedexpansion

REM Specifica estensione file
set "EXT=jpg"

REM Inizia il contatore
set COUNT=1

REM Prima rinomina tutti i file con un nome temporaneo per evitare conflitti
for %%F in (gallery-*.%EXT%) do (
    ren "%%F" "temp-!COUNT!.%EXT%"
    set /a COUNT+=1
)

REM Resetta contatore
set COUNT=1

REM Ora rinomina i file temporanei con la numerazione corretta
for %%F in (temp-*.%EXT%) do (
    ren "%%F" "gallery-!COUNT!.%EXT%"
    set /a COUNT+=1
)

echo Fatto! Rinumerati !COUNT! file.
pause
