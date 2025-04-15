<?php
header('Content-Type: application/json');

// Include the database connection
require_once '../includes/config.php';
require_once '../includes/database.php';

try {
    // Create database connection
    $db = new Database();
    $conn = $db->getConnection();
    $isSqlite = $db->isSqlite();
    
    // Test database connection
    if ($isSqlite) {
        // SQLite test
        $result = $conn->query("SELECT sqlite_version() as version");
        $version = $result->fetchArray()[0];
        
        // Check if users table exists
        $tableCheck = $conn->query("SELECT name FROM sqlite_master WHERE type='table' AND name='users'");
        $tableExists = $tableCheck->fetchArray() !== false;
        
        echo json_encode([
            'success' => true,
            'message' => 'SQLite database connection successful',
            'version' => $version,
            'usersTableExists' => $tableExists,
            'timestamp' => date('Y-m-d H:i:s')
        ]);
    } else {
        // MySQL test
        $result = $conn->query("SELECT VERSION() as version");
        $row = $result->fetch_assoc();
        $version = $row['version'];
        
        // Check if users table exists
        $tableCheck = $conn->query("SHOW TABLES LIKE 'users'");
        $tableExists = $tableCheck->num_rows > 0;
        
        echo json_encode([
            'success' => true,
            'message' => 'MySQL database connection successful',
            'version' => $version,
            'usersTableExists' => $tableExists,
            'timestamp' => date('Y-m-d H:i:s')
        ]);
    }
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Database connection failed: ' . $e->getMessage(),
        'timestamp' => date('Y-m-d H:i:s')
    ]);
}
