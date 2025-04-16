<?php
header('Content-Type: application/json');

// Include auth utilities
require_once __DIR__ . '/../includes/config.php';
require_once __DIR__ . '/../includes/database.php';
require_once __DIR__ . '/../includes/auth.php';

// Create auth handler
$auth = new Auth();

// Handle login request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($input['username']) || !isset($input['password'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Username and password are required']);
        exit;
    }
    
    $username = $input['username'];
    $password = $input['password'];
    
    // Attempt login
    $result = $auth->login($username, $password);
    
    if ($result['success']) {
        echo json_encode(['user' => $result['user']]);
    } else {
        http_response_code(401);
        echo json_encode(['error' => $result['message']]);
    }
}
