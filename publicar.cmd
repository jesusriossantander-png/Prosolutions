@echo off
:: Pro Solutions — sube los cambios a GitHub con un doble clic.
:: Uso: doble clic, o desde consola:  publicar.cmd "mensaje del cambio"
setlocal
cd /d "%~dp0"

set "MSG=%~1"
if "%MSG%"=="" set "MSG=Actualizacion del sitio %date% %time:~0,5%"

git add -A
git diff --cached --quiet && (
  echo No hay cambios para subir.
  goto :fin
)
git commit -m "%MSG%" || goto :error
for /f "delims=" %%b in ('git rev-parse --abbrev-ref HEAD') do set "RAMA=%%b"
git push origin %RAMA% || goto :error
echo.
echo Listo: cambios subidos a GitHub (rama %RAMA%).
goto :fin

:error
echo.
echo Algo fallo. Lee el mensaje de arriba.
:fin
if "%~1"=="" pause
endlocal
