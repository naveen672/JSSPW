<?php
/**
 * Main entry point for the JSS Polytechnic for Women website
 * This file serves the built React app and initializes the PHP backend
 */

// Include database connection to ensure tables are set up
require_once 'api/includes/database.php';

// Redirect all requests to the React app's index.html
// The .htaccess file handles API requests separately
header('Location: /build/index.html');
exit;