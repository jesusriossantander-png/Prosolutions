# Pro Solutions — vigila la carpeta y sube cada cambio a GitHub solo.
# Espera 20 s de calma despues del ultimo guardado para no hacer un commit por tecla.
# Cerrar la ventana detiene la vigilancia.
$ErrorActionPreference = "Continue"
Set-Location -LiteralPath $PSScriptRoot
$espera = 20
$ignorar = '\\.git\|\node_modules\|\\.wrangler\'

function Publicar {
  git add -A | Out-Null
  git diff --cached --quiet
  if ($LASTEXITCODE -eq 0) { return }
  $msg = "Actualizacion del sitio " + (Get-Date -Format "yyyy-MM-dd HH:mm")
  git commit -m $msg | Out-Null
  $rama = (git rev-parse --abbrev-ref HEAD).Trim()
  git push origin $rama 2>&1 | Out-Null
  if ($LASTEXITCODE -eq 0) { Write-Host ("[" + (Get-Date -Format "HH:mm:ss") + "] Subido a GitHub: " + $msg) -ForegroundColor Green }
  else { Write-Host ("[" + (Get-Date -Format "HH:mm:ss") + "] El push fallo. Revisa la conexion o corre publicar.cmd para ver el error.") -ForegroundColor Red }
}

Write-Host "Vigilando cambios en $PSScriptRoot" -ForegroundColor Cyan
Write-Host "Cada cambio se sube a GitHub $espera s despues del ultimo guardado. Cierra esta ventana para detener." -ForegroundColor DarkGray

$fsw = New-Object IO.FileSystemWatcher $PSScriptRoot
$fsw.IncludeSubdirectories = $true
$fsw.EnableRaisingEvents = $true
$ultimo = $null
$handler = { if ($Event.SourceEventArgs.FullPath -notmatch $ignorar) { $script:ultimo = Get-Date } }
foreach ($ev in "Changed","Created","Deleted","Renamed") { Register-ObjectEvent $fsw $ev -Action $handler | Out-Null }

Publicar   # sube lo que haya pendiente al arrancar
while ($true) {
  Start-Sleep -Seconds 2
  if ($ultimo -and ((Get-Date) - $ultimo).TotalSeconds -ge $espera) { $ultimo = $null; Publicar }
}
