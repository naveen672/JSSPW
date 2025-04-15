<?php
// Set headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight request (OPTIONS method)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Check if request method is GET
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Include necessary files
require_once '../includes/database.php';

// Get database connection
$db = new Database();
$conn = $db->getConnection();

// Get active flash news
$result = $conn->query("SELECT id, text, link, active, createdAt FROM flash_news WHERE active = 1 ORDER BY createdAt DESC");

if ($result) {
    $flashNews = [];
    
    while ($row = $result->fetch_assoc()) {
        $flashNews[] = $row;
    }
    
    // Return flash news
    http_response_code(200);
    echo json_encode($flashNews);
} else {
    // Return error
    http_response_code(500); // Internal Server Error
    echo json_encode(['error' => 'Failed to get flash news: ' . $conn->error]);
}