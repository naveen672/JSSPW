<?php
header('Content-Type: application/json');

// Include auth utilities
require_once __DIR__ . '/../includes/config.php';
require_once __DIR__ . '/../includes/database.php';
require_once __DIR__ . '/../includes/auth.php';

// Create auth handler
$auth = new Auth();

// Handle user request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if ($auth->isAuthenticated()) {
        $user = $auth->getCurrentUser();
        echo json_encode(['user' => $user]);
    } else {
        http_response_code(401);
        echo json_encode(['message' => 'Not authenticated']);
    }
}