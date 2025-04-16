<?php
header('Content-Type: application/json');

// Include database connection
require_once __DIR__ . '/../includes/config.php';
require_once __DIR__ . '/../includes/database.php';

// Create database connection
$db = new Database();
$conn = $db->getConnection();

// Handle GET request to get all active events
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        if ($db->isSqlite()) {
            // Get active events
            $stmt = $conn->prepare("SELECT * FROM events WHERE active = 1 ORDER BY date DESC");
            $result = $stmt->execute();
            
            $events = [];
            while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
                $events[] = $row;
            }
        } else {
            // MySQL
            $result = $conn->query("SELECT * FROM events WHERE active = 1 ORDER BY date DESC");
            
            $events = [];
            while ($row = $result->fetch_assoc()) {
                $events[] = $row;
            }
        }
        
        echo json_encode(['events' => $events]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to get events: ' . $e->getMessage()]);
    }
}