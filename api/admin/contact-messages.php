<?php
// Set headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PATCH, DELETE, OPTIONS');
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

// Handle GET request - list all contact messages
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Check if ID is provided in URL for getting a single message
    $requestUri = $_SERVER['REQUEST_URI'];
    if (preg_match('/\/contact-messages\/(\d+)$/', $requestUri, $matches)) {
        $id = $matches[1];
        $query = "SELECT id, name, email, phone, message, isRead, createdAt 
                  FROM contact_messages 
                  WHERE id = $id";
    } else {
        $query = "SELECT id, name, email, phone, message, isRead, createdAt 
                  FROM contact_messages 
                  ORDER BY createdAt DESC";
    }
    
    $result = $conn->query($query);
    
    if ($result) {
        if (isset($id)) {
            // Single message
            if ($result->num_rows > 0) {
                $message = $result->fetch_assoc();
                http_response_code(200);
                echo json_encode($message);
            } else {
                http_response_code(404); // Not Found
                echo json_encode(['error' => 'Contact message not found']);
            }
        } else {
            // All messages
            $messagesList = [];
            
            while ($row = $result->fetch_assoc()) {
                $messagesList[] = $row;
            }
            
            http_response_code(200);
            echo json_encode($messagesList);
        }
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(['error' => 'Failed to get contact messages: ' . $conn->error]);
    }
}
// Handle PATCH request - mark message as read
else if ($_SERVER['REQUEST_METHOD'] === 'PATCH') {
    // Get ID from URL
    $requestUri = $_SERVER['REQUEST_URI'];
    if (!preg_match('/\/contact-messages\/(\d+)$/', $requestUri, $matches)) {
        http_response_code(400); // Bad Request
        echo json_encode(['error' => 'Invalid URL format']);
        exit;
    }
    
    $id = $matches[1];
    
    // Check if message exists
    $result = $conn->query("SELECT id FROM contact_messages WHERE id = $id");
    if ($result->num_rows === 0) {
        http_response_code(404); // Not Found
        echo json_encode(['error' => 'Contact message not found']);
        exit;
    }
    
    // Get JSON data from request body
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Check if isRead is set
    if (!$data || !isset($data['isRead'])) {
        http_response_code(400); // Bad Request
        echo json_encode(['error' => 'isRead field is required']);
        exit;
    }
    
    $isRead = (int)$data['isRead'];
    
    // Prepare and execute query
    $stmt = $conn->prepare("UPDATE contact_messages SET isRead = ? WHERE id = ?");
    $stmt->bind_param("ii", $isRead, $id);
    
    if ($stmt->execute()) {
        // Get the updated message
        $result = $conn->query("SELECT id, name, email, phone, message, isRead, createdAt 
                                FROM contact_messages 
                                WHERE id = $id");
        $message = $result->fetch_assoc();
        
        http_response_code(200);
        echo json_encode($message);
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(['error' => 'Failed to update contact message: ' . $stmt->error]);
    }
    
    $stmt->close();
}
// Handle DELETE request - delete message
else if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Get ID from URL
    $requestUri = $_SERVER['REQUEST_URI'];
    if (!preg_match('/\/contact-messages\/(\d+)$/', $requestUri, $matches)) {
        http_response_code(400); // Bad Request
        echo json_encode(['error' => 'Invalid URL format']);
        exit;
    }
    
    $id = $matches[1];
    
    // Prepare and execute query
    $stmt = $conn->prepare("DELETE FROM contact_messages WHERE id = ?");
    $stmt->bind_param("i", $id);
    
    if ($stmt->execute()) {
        if ($stmt->affected_rows > 0) {
            http_response_code(204); // No Content
        } else {
            http_response_code(404); // Not Found
            echo json_encode(['error' => 'Contact message not found']);
        }
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(['error' => 'Failed to delete contact message: ' . $stmt->error]);
    }
    
    $stmt->close();
}
// Handle other methods
else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Method not allowed']);
}