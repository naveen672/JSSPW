<?php
/**
 * Router for PHP built-in web server
 * This file handles both API and frontend routes
 */

// Set session path in tmp directory
ini_set('session.save_path', __DIR__ . '/tmp');

// Get the URL path
$url_path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Handle API requests
if (strpos($url_path, '/api/') === 0) {
    // Remove '/api/' from the path
    $api_path = substr($url_path, 5);
    
    // Map API routes to PHP files
    $file_path = __DIR__ . '/api/' . $api_path;
    
    // First try direct file match
    if (file_exists($file_path)) {
        include $file_path;
        return true;
    } 
    // Then try with .php extension
    else if (file_exists($file_path . '.php')) {
        include $file_path . '.php';
        return true;
    } 
    // Special case for auth/login endpoint
    else if ($api_path === 'auth/login') {
        include __DIR__ . '/api/auth/login.php';
        return true;
    }
    // Special case for other auth endpoints
    else if (strpos($api_path, 'auth/') === 0) {
        $auth_path = substr($api_path, 5);
        if (file_exists(__DIR__ . '/api/auth/' . $auth_path . '.php')) {
            include __DIR__ . '/api/auth/' . $auth_path . '.php';
            return true;
        }
    }
    // API endpoint not found
    header('HTTP/1.1 404 Not Found');
    header('Content-Type: application/json');
    echo json_encode(['error' => 'API endpoint not found: ' . $api_path]);
    return true;
}

// Handle static files (CSS, JS, images)
$extension = pathinfo($url_path, PATHINFO_EXTENSION);
if ($extension !== '') {
    $file_path = __DIR__ . $url_path;
    if (file_exists($file_path)) {
        // Serve the file with appropriate content type
        $content_types = [
            'js' => 'application/javascript',
            'css' => 'text/css',
            'jpg' => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'png' => 'image/png',
            'gif' => 'image/gif',
            'svg' => 'image/svg+xml',
            'woff' => 'font/woff',
            'woff2' => 'font/woff2',
            'ttf' => 'font/ttf',
            'eot' => 'application/vnd.ms-fontobject',
            'otf' => 'font/otf',
            'ico' => 'image/x-icon',
            'json' => 'application/json',
        ];
        
        if (isset($content_types[$extension])) {
            header('Content-Type: ' . $content_types[$extension]);
        }
        
        readfile($file_path);
        return true;
    } else {
        header('HTTP/1.1 404 Not Found');
        echo '404 File Not Found';
        return true;
    }
}

// For all other requests, serve the index.html (SPA) if it exists
$index_path = __DIR__ . '/client/dist/index.html';
if (file_exists($index_path)) {
    readfile($index_path);
    return true;
} else {
    // Otherwise serve a fallback page
    echo '<!DOCTYPE html>
    <html>
    <head>
        <title>JSS Polytechnic for Women</title>
        <style>
            body { font-family: Arial, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; flex-direction: column; }
            .message { text-align: center; max-width: 600px; padding: 20px; }
            h1 { color: #0A2463; }
            p { margin-bottom: 20px; line-height: 1.5; }
        </style>
    </head>
    <body>
        <div class="message">
            <h1>JSS Polytechnic for Women</h1>
            <p>The website is currently under maintenance or not built yet. Please check back soon.</p>
            <p>If you are a developer, make sure to run <code>npm run build</code> in the client directory to build the frontend.</p>
        </div>
    </body>
    </html>';
    return true;
}