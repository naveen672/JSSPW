const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Make sure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Run the normal build process
console.log('Building project...');
execSync('npm run build', { stdio: 'inherit' });

// Copy client files to the right location
console.log('Preparing client files for Netlify...');
if (fs.existsSync('client/dist')) {
  // Create client directory in dist if it doesn't exist
  if (!fs.existsSync('dist/client')) {
    fs.mkdirSync('dist/client');
  }
  
  // Copy the client build recursively
  const copyRecursiveSync = (src, dest) => {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    
    if (isDirectory) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest);
      }
      fs.readdirSync(src).forEach(childItemName => {
        copyRecursiveSync(
          path.join(src, childItemName),
          path.join(dest, childItemName)
        );
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  };
  
  copyRecursiveSync('client/dist', 'dist/client');
  console.log('Client files copied successfully.');
} else {
  console.error('ERROR: Client build directory not found. Make sure to build the client first.');
  process.exit(1);
}

console.log('Netlify build preparation complete!');