<?php
/**
 * Router for the PHP development server
 * This script handles routing for both the API endpoints and the static React files
 */

// Get the requested URI
$uri = $_SERVER['REQUEST_URI'];

// Handle API requests
if (strpos($uri, '/api/') === 0) {
    // Map API endpoints to PHP files
    $apiPath = parse_url($uri, PHP_URL_PATH);
    $apiFile = __DIR__ . $apiPath . '.php';
    
    // Strip trailing slashes for better matching
    if (substr($apiFile, -1) === '/') {
        $apiFile = substr($apiFile, 0, -1);
    }
    
    // Check if the API file exists
    if (file_exists($apiFile)) {
        // Include the API file
        include $apiFile;
        return true;
    }
    
    // Special handling for resource endpoints (e.g., /api/admin/faculty/1)
    $parts = explode('/', $apiPath);
    $lastPart = end($parts);
    
    // Check if the last part is numeric (resource ID)
    if (is_numeric($lastPart)) {
        // Remove the ID from the path
        array_pop($parts);
        $resourcePath = implode('/', $parts);
        $resourceFile = __DIR__ . $resourcePath . '.php';
        
        if (file_exists($resourceFile)) {
            // Include the resource file
            include $resourceFile;
            return true;
        }
    }
    
    // API endpoint not found
    header('Content-Type: application/json');
    http_response_code(404);
    echo json_encode(['error' => 'API endpoint not found']);
    return true;
}

// Handle static React files in dist/public
$staticPath = __DIR__ . '/dist/public' . $uri;

// If the path is a directory, look for index.html
if (is_dir($staticPath)) {
    $staticPath = rtrim($staticPath, '/') . '/index.html';
}

// If the file exists, serve it
if (file_exists($staticPath) && !is_dir($staticPath)) {
    // Get the file extension
    $extension = pathinfo($staticPath, PATHINFO_EXTENSION);
    
    // Set the appropriate Content-Type header
    switch ($extension) {
        case 'html':
            header('Content-Type: text/html');
            break;
        case 'css':
            header('Content-Type: text/css');
            break;
        case 'js':
            header('Content-Type: application/javascript');
            break;
        case 'json':
            header('Content-Type: application/json');
            break;
        case 'svg':
            header('Content-Type: image/svg+xml');
            break;
        case 'png':
            header('Content-Type: image/png');
            break;
        case 'jpg':
        case 'jpeg':
            header('Content-Type: image/jpeg');
            break;
        case 'gif':
            header('Content-Type: image/gif');
            break;
    }
    
    // Serve the file
    readfile($staticPath);
    return true;
}

// For all other routes, serve the React app's index.html (for client-side routing)
$indexPath = __DIR__ . '/dist/public/index.html';
if (file_exists($indexPath)) {
    header('Content-Type: text/html');
    readfile($indexPath);
    return true;
}

// File not found
http_response_code(404);
echo '404 Not Found';
return true;