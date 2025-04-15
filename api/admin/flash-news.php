<?php
// Set headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight request (OPTIONS method)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Include necessary files
require_once '../includes/auth.php';
require_once '../includes/database.php';

// Require admin authentication
$auth->requireAdmin();

// Get database connection
$db = new Database();
$conn = $db->getConnection();

// Handle GET request - list all flash news
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Check if ID is provided in URL for getting a single flash news
    $requestUri = $_SERVER['REQUEST_URI'];
    if (preg_match('/\/flash-news\/(\d+)$/', $requestUri, $matches)) {
        $id = $matches[1];
        $query = "SELECT id, text, link, active, createdAt 
                  FROM flash_news 
                  WHERE id = $id";
    } else {
        $query = "SELECT id, text, link, active, createdAt 
                  FROM flash_news 
                  ORDER BY createdAt DESC";
    }
    
    $result = $conn->query($query);
    
    if ($result) {
        if (isset($id)) {
            // Single flash news
            if ($result->num_rows > 0) {
                $flashNews = $result->fetch_assoc();
                http_response_code(200);
                echo json_encode($flashNews);
            } else {
                http_response_code(404); // Not Found
                echo json_encode(['error' => 'Flash news not found']);
            }
        } else {
            // All flash news
            $flashNewsList = [];
            
            while ($row = $result->fetch_assoc()) {
                $flashNewsList[] = $row;
            }
            
            http_response_code(200);
            echo json_encode($flashNewsList);
        }
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(['error' => 'Failed to get flash news: ' . $conn->error]);
    }
}
// Handle POST request - create new flash news
else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON data from request body
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Check if data is valid
    if (!$data || !isset($data['text'])) {
        http_response_code(400); // Bad Request
        echo json_encode(['error' => 'Invalid request data']);
        exit;
    }
    
    // Set default values if not provided
    $link = isset($data['link']) ? $data['link'] : null;
    $active = isset($data['active']) ? (int)$data['active'] : 1;
    
    // Prepare and execute query
    $stmt = $conn->prepare("INSERT INTO flash_news (text, link, active) 
                            VALUES (?, ?, ?)");
    $stmt->bind_param("ssi", 
                       $data['text'],
                       $link,
                       $active);
    
    if ($stmt->execute()) {
        $id = $stmt->insert_id;
        
        // Get the created flash news
        $result = $conn->query("SELECT id, text, link, active, createdAt 
                                FROM flash_news 
                                WHERE id = $id");
        $flashNews = $result->fetch_assoc();
        
        http_response_code(201); // Created
        echo json_encode($flashNews);
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(['error' => 'Failed to create flash news: ' . $stmt->error]);
    }
    
    $stmt->close();
}
// Handle PATCH request - update flash news
else if ($_SERVER['REQUEST_METHOD'] === 'PATCH') {
    // Get ID from URL
    $requestUri = $_SERVER['REQUEST_URI'];
    if (!preg_match('/\/flash-news\/(\d+)$/', $requestUri, $matches)) {
        http_response_code(400); // Bad Request
        echo json_encode(['error' => 'Invalid URL format']);
        exit;
    }
    
    $id = $matches[1];
    
    // Check if flash news exists
    $result = $conn->query("SELECT id FROM flash_news WHERE id = $id");
    if ($result->num_rows === 0) {
        http_response_code(404); // Not Found
        echo json_encode(['error' => 'Flash news not found']);
        exit;
    }
    
    // Get JSON data from request body
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Check if data is valid
    if (!$data) {
        http_response_code(400); // Bad Request
        echo json_encode(['error' => 'Invalid request data']);
        exit;
    }
    
    // Build update query
    $updates = [];
    $types = "";
    $params = [];
    
    if (isset($data['text'])) {
        $updates[] = "text = ?";
        $types .= "s";
        $params[] = $data['text'];
    }
    
    if (isset($data['link'])) {
        $updates[] = "link = ?";
        $types .= "s";
        $params[] = $data['link'];
    }
    
    if (isset($data['active'])) {
        $updates[] = "active = ?";
        $types .= "i";
        $params[] = (int)$data['active'];
    }
    
    if (empty($updates)) {
        http_response_code(400); // Bad Request
        echo json_encode(['error' => 'No fields to update']);
        exit;
    }
    
    // Add ID to params
    $types .= "i";
    $params[] = $id;
    
    // Prepare and execute query
    $query = "UPDATE flash_news SET " . implode(", ", $updates) . " WHERE id = ?";
    $stmt = $conn->prepare($query);
    
    $stmt->bind_param($types, ...$params);
    
    if ($stmt->execute()) {
        // Get the updated flash news
        $result = $conn->query("SELECT id, text, link, active, createdAt 
                                FROM flash_news 
                                WHERE id = $id");
        $flashNews = $result->fetch_assoc();
        
        http_response_code(200);
        echo json_encode($flashNews);
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(['error' => 'Failed to update flash news: ' . $stmt->error]);
    }
    
    $stmt->close();
}
// Handle DELETE request - delete flash news
else if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Get ID from URL
    $requestUri = $_SERVER['REQUEST_URI'];
    if (!preg_match('/\/flash-news\/(\d+)$/', $requestUri, $matches)) {
        http_response_code(400); // Bad Request
        echo json_encode(['error' => 'Invalid URL format']);
        exit;
    }
    
    $id = $matches[1];
    
    // Prepare and execute query
    $stmt = $conn->prepare("DELETE FROM flash_news WHERE id = ?");
    $stmt->bind_param("i", $id);
    
    if ($stmt->execute()) {
        if ($stmt->affected_rows > 0) {
            http_response_code(204); // No Content
        } else {
            http_response_code(404); // Not Found
            echo json_encode(['error' => 'Flash news not found']);
        }
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(['error' => 'Failed to delete flash news: ' . $stmt->error]);
    }
    
    $stmt->close();
}
// Handle other methods
else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Method not allowed']);
}