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

// Check if upcoming filter is provided
$upcoming = isset($_GET['upcoming']) ? filter_var($_GET['upcoming'], FILTER_VALIDATE_BOOLEAN) : false;

// Get today's date in MySQL format
$today = date('Y-m-d');

// Build query
$query = "SELECT id, title, description, date, time, location, image 
          FROM events 
          WHERE active = 1";

// Add upcoming filter if requested
if ($upcoming) {
    $query .= " AND date >= '$today'";
}

$query .= " ORDER BY date " . ($upcoming ? "ASC" : "DESC");

// Execute query
$result = $conn->query($query);

if ($result) {
    $eventsList = [];
    
    while ($row = $result->fetch_assoc()) {
        $eventsList[] = $row;
    }
    
    // Return events list
    http_response_code(200);
    echo json_encode($eventsList);
} else {
    // Return error
    http_response_code(500); // Internal Server Error
    echo json_encode(['error' => 'Failed to get events: ' . $conn->error]);
}