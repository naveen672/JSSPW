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

// Get visitor count from database
$query = "SELECT visitorsCount FROM site_stats WHERE id = 1";
$result = $conn->query($query);

if ($result && $result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $count = (int)$row['visitorsCount'];
    
    // Return visitor count
    http_response_code(200);
    echo json_encode(['count' => $count]);
} else {
    // If no record exists, create one with count = 0
    $conn->query("INSERT INTO site_stats (id, visitorsCount) VALUES (1, 0)");
    
    // Return initial count
    http_response_code(200);
    echo json_encode(['count' => 0]);
}