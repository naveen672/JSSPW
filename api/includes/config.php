<?php
/**
 * Site Configuration Settings
 */

// Database Configuration
define('DB_TYPE', 'sqlite'); // Use 'mysql' for production
define('SQLITE_PATH', __DIR__ . '/../../db.sqlite');

// MySQL configurations (for production)
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root'); // Change this for production
define('DB_PASSWORD', ''); // Change this for production
define('DB_NAME', 'jsspw_db');

// Site Configuration
define('SITE_URL', 'http://localhost:5001'); // Change this for production
define('SITE_NAME', 'JSS Polytechnic for Women');
define('ADMIN_EMAIL', 'admin@jsspwmys.org'); // Change this for production
define('EMAIL_FROM', 'naveenravi.ch@gmail.com');
define('SITE_LOGO', 'logo_jss.jpeg');

// Session Configuration
define('SESSION_SECRET', 'jsspw_secret_key_change_this_in_production');
define('SESSION_LIFETIME', 86400); // 24 hours

// Default Admin User (only used for initial setup)
define('DEFAULT_ADMIN_USERNAME', 'admin');
define('DEFAULT_ADMIN_PASSWORD', 'admin123');

// Error Reporting
// Set to false in production
define('DISPLAY_ERRORS', true);

if (DISPLAY_ERRORS) {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
} else {
    ini_set('display_errors', 0);
    error_reporting(0);
}