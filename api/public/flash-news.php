<?php
header('Content-Type: application/json');

// Include database connection
require_once __DIR__ . '/../includes/config.php';
require_once __DIR__ . '/../includes/database.php';

// Create database connection
$db = new Database();
$conn = $db->getConnection();

// Handle GET request to get active flash news
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        if ($db->isSqlite()) {
            // Get active flash news
            $stmt = $conn->prepare("SELECT * FROM flash_news WHERE active = 1 ORDER BY createdAt DESC");
            $result = $stmt->execute();
            
            $news = [];
            while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
                $news[] = $row;
            }
        } else {
            // MySQL
            $result = $conn->query("SELECT * FROM flash_news WHERE active = 1 ORDER BY createdAt DESC");
            
            $news = [];
            while ($row = $result->fetch_assoc()) {
                $news[] = $row;
            }
        }
        
        echo json_encode(['news' => $news]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to get flash news: ' . $e->getMessage()]);
    }
}