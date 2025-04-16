Write-Host "Building and starting JSS Polytechnic website in production mode..." -ForegroundColor Green
Write-Host "This may take a moment..." -ForegroundColor Yellow

# Build the project first
npm run build

# Set environment variable for PowerShell
$env:NODE_ENV = "production"

# Run the production server
node dist/index.js