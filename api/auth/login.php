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
require_once '../includes/auth.php';
require_once '../includes/database.php';

// Get JSON data from request body
$data = json_decode(file_get_contents('php://input'), true);

// Validate input data
if (!$data || !isset($data['username']) || !isset($data['password'])) {
    http_response_code(400); // Bad Request
    echo json_encode(['error' => 'Invalid request data']);
    exit;
}

// Attempt to authenticate
$user = $auth->authenticate($data['username'], $data['password']);

if ($user) {
    // Start session if not already started
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }
    
    // Set user in session
    $_SESSION['user'] = $user;
    
    // Return user data
    http_response_code(200);
    echo json_encode(['user' => $user]);
} else {
    // Authentication failed
    http_response_code(401); // Unauthorized
    echo json_encode(['error' => 'Invalid username or password']);
}