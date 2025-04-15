<?php
// Initialize database if needed
require_once 'api/includes/database.php';

// Create database tables if they don't exist
$database->createTablesIfNotExist();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSS Polytechnic for Women</title>
    <link rel="icon" href="assets/favicon.ico" type="image/x-icon">
    <script>
        // Redirect to the React application
        window.location.href = '/build/';
    </script>
</head>
<body>
    <noscript>
        <h1>JSS Polytechnic for Women</h1>
        <p>This website requires JavaScript to function properly. Please enable JavaScript in your browser settings.</p>
        <p><a href="/build/">Click here to continue to the website</a></p>
    </noscript>
</body>
</html>