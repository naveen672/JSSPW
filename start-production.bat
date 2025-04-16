@echo off
echo Building and starting JSS Polytechnic website in production mode...
echo This may take a moment...

REM Build the project first
call npm run build

REM Set environment variable for Windows
set NODE_ENV=production

REM Run the production server
node dist/index.js