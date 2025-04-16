Write-Host "Starting JSS Polytechnic website in Windows environment..." -ForegroundColor Green
$env:NODE_ENV = "development"
npx tsx server/index.ts