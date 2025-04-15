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

// Check if department filter is provided
$department = isset($_GET['department']) ? $_GET['department'] : null;

// Build query
$query = "SELECT id, firstName, lastName, designation, department, profile, image, email, phone 
          FROM faculty 
          WHERE active = 1";

// Add department filter if provided
if ($department) {
    $query .= " AND department = '" . $conn->real_escape_string($department) . "'";
}

$query .= " ORDER BY lastName, firstName";

// Execute query
$result = $conn->query($query);

if ($result) {
    $facultyList = [];
    
    while ($row = $result->fetch_assoc()) {
        $facultyList[] = $row;
    }
    
    // Return faculty list
    http_response_code(200);
    echo json_encode($facultyList);
} else {
    // Return error
    http_response_code(500); // Internal Server Error
    echo json_encode(['error' => 'Failed to get faculty: ' . $conn->error]);
}