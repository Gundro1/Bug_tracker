@echo off
echo ============================================
echo   PrimBooks QA - Push Bug Tracker
echo   Azeez Test Lab
echo ============================================
echo.

cd /d "%~dp0"

echo Step 1: Reading bug data from clipboard...
echo.

powershell -ExecutionPolicy Bypass -Command ^
  "$clip = Get-Clipboard -Raw;" ^
  "if (-not $clip -or $clip -notmatch 'BEGIN_BUG_DATA') {" ^
  "  Write-Host 'ERROR: No bug data in clipboard!' -ForegroundColor Red;" ^
  "  Write-Host 'Click the [Copy for Push] button in the tracker first.' -ForegroundColor Yellow;" ^
  "  exit 1;" ^
  "}" ^
  "$content = [System.IO.File]::ReadAllText((Join-Path $PWD 'bug_tracker.html'), [System.Text.Encoding]::UTF8);" ^
  "$pattern = '(?s)// ===BEGIN_BUG_DATA===.*?// ===END_BUG_DATA===';" ^
  "$newContent = [regex]::Replace($content, $pattern, $clip);" ^
  "$utf8NoBom = New-Object System.Text.UTF8Encoding $false;" ^
  "[System.IO.File]::WriteAllText((Join-Path $PWD 'bug_tracker.html'), $newContent, $utf8NoBom);" ^
  "Write-Host 'File updated with your bugs!' -ForegroundColor Green;"

if errorlevel 1 (
    echo.
    echo Push cancelled - no data to push.
    echo.
    pause
    exit /b
)

echo.
echo Step 2: Pushing to GitHub...
echo.

git add bug_tracker.html

set /p MSG="Commit message (or press Enter for auto): "
if "%MSG%"=="" (
    set MSG=Bug tracker update - %date% %time:~0,5%
)

git commit -m "%MSG%"
git push origin main

echo.
echo ============================================
echo   DONE! Changes are now LIVE on GitHub.
echo   Devs will see your updates immediately.
echo ============================================
echo.
pause
