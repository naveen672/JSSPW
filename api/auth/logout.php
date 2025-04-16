<?php
header('Content-Type: application/json');

// Include auth utilities
require_once __DIR__ . '/../includes/config.php';
require_once __DIR__ . '/../includes/database.php';
require_once __DIR__ . '/../includes/auth.php';

// Create auth handler
$auth = new Auth();

// Handle logout request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $result = $auth->logout();
    echo json_encode(['message' => $result['message']]);
}