<?php
header('Content-Type: application/json');

// Include database connection
require_once __DIR__ . '/../includes/config.php';
require_once __DIR__ . '/../includes/database.php';

// Create database connection
$db = new Database();
$conn = $db->getConnection();

// Handle GET request to get visitor count
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        if ($db->isSqlite()) {
            // Check if stats record exists
            $result = $conn->query("SELECT COUNT(*) as count FROM site_stats");
            $row = $result->fetchArray(SQLITE3_ASSOC);
            
            if ($row['count'] == 0) {
                // Insert initial record
                $conn->exec("INSERT INTO site_stats (visitorsCount) VALUES (0)");
            }
            
            // Get visitor count
            $result = $conn->query("SELECT visitorsCount FROM site_stats LIMIT 1");
            $row = $result->fetchArray(SQLITE3_ASSOC);
            $count = $row['visitorsCount'];
        } else {
            // MySQL
            // Check if stats record exists
            $result = $conn->query("SELECT COUNT(*) as count FROM site_stats");
            $row = $result->fetch_assoc();
            
            if ($row['count'] == 0) {
                // Insert initial record
                $conn->query("INSERT INTO site_stats (visitorsCount) VALUES (0)");
            }
            
            // Get visitor count
            $result = $conn->query("SELECT visitorsCount FROM site_stats LIMIT 1");
            $row = $result->fetch_assoc();
            $count = $row['visitorsCount'];
        }
        
        echo json_encode(['count' => (int)$count]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to get visitor count: ' . $e->getMessage()]);
    }
}

// Handle POST request to increment visitor count
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        if ($db->isSqlite()) {
            // Check if stats record exists
            $result = $conn->query("SELECT COUNT(*) as count FROM site_stats");
            $row = $result->fetchArray(SQLITE3_ASSOC);
            
            if ($row['count'] == 0) {
                // Insert initial record
                $conn->exec("INSERT INTO site_stats (visitorsCount) VALUES (1)");
                $count = 1;
            } else {
                // Increment visitor count
                $conn->exec("UPDATE site_stats SET visitorsCount = visitorsCount + 1, lastUpdated = CURRENT_TIMESTAMP");
                
                // Get new count
                $result = $conn->query("SELECT visitorsCount FROM site_stats LIMIT 1");
                $row = $result->fetchArray(SQLITE3_ASSOC);
                $count = $row['visitorsCount'];
            }
        } else {
            // MySQL
            // Check if stats record exists
            $result = $conn->query("SELECT COUNT(*) as count FROM site_stats");
            $row = $result->fetch_assoc();
            
            if ($row['count'] == 0) {
                // Insert initial record
                $conn->query("INSERT INTO site_stats (visitorsCount) VALUES (1)");
                $count = 1;
            } else {
                // Increment visitor count
                $conn->query("UPDATE site_stats SET visitorsCount = visitorsCount + 1");
                
                // Get new count
                $result = $conn->query("SELECT visitorsCount FROM site_stats LIMIT 1");
                $row = $result->fetch_assoc();
                $count = $row['visitorsCount'];
            }
        }
        
        echo json_encode(['count' => (int)$count]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to increment visitor count: ' . $e->getMessage()]);
    }
}