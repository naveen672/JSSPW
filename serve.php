<?php
/**
 * Development server for running the PHP backend locally
 * This script allows testing the PHP backend without deploying to a production server
 */

// Set the port to serve on
$port = 5000;

// Change to the directory containing this file
chdir(__DIR__);

// Make sure built files exist
if (!file_exists('./dist/public/index.html')) {
    die("Error: Built React files not found. Please run 'npm run build' first.\n");
}

// Configure session storage
ini_set('session.save_path', __DIR__ . '/tmp');
if (!is_dir(__DIR__ . '/tmp')) {
    mkdir(__DIR__ . '/tmp');
}

// Start the built-in PHP server
echo "Starting PHP server on port $port...\n";
echo "Access the website at http://localhost:$port\n";
echo "Press Ctrl+C to stop the server\n";

// Use the router.php file to handle routing
$command = sprintf('php -S 0.0.0.0:%d -t ./ ./router.php', $port);
system($command);