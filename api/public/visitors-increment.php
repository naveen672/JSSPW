<?php
// Set headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight request (OPTIONS method)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Check if request method is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Include necessary files
require_once '../includes/database.php';

// Get database connection
$db = new Database();
$conn = $db->getConnection();

// Check if site_stats record exists
$query = "SELECT visitorsCount FROM site_stats WHERE id = 1";
$result = $conn->query($query);

if ($result && $result->num_rows > 0) {
    // Increment visitor count
    $conn->query("UPDATE site_stats SET visitorsCount = visitorsCount + 1 WHERE id = 1");
    
    // Get updated count
    $result = $conn->query($query);
    $row = $result->fetch_assoc();
    $count = (int)$row['visitorsCount'];
} else {
    // If no record exists, create one with count = 1
    $conn->query("INSERT INTO site_stats (id, visitorsCount) VALUES (1, 1)");
    $count = 1;
}

// Return updated visitor count
http_response_code(200);
echo json_encode(['count' => $count]);