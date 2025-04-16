<?php
header('Content-Type: application/json');

// Include database connection
require_once __DIR__ . '/../includes/config.php';
require_once __DIR__ . '/../includes/database.php';

// Create database connection
$db = new Database();
$conn = $db->getConnection();

// Handle GET request to get all active faculty members
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        if ($db->isSqlite()) {
            // Get active faculty members
            $stmt = $conn->prepare("SELECT * FROM faculty WHERE active = 1 ORDER BY department, firstName");
            $result = $stmt->execute();
            
            $faculty = [];
            while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
                $faculty[] = $row;
            }
        } else {
            // MySQL
            $result = $conn->query("SELECT * FROM faculty WHERE active = 1 ORDER BY department, firstName");
            
            $faculty = [];
            while ($row = $result->fetch_assoc()) {
                $faculty[] = $row;
            }
        }
        
        echo json_encode(['faculty' => $faculty]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to get faculty members: ' . $e->getMessage()]);
    }
}