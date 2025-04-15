<?php
// Set headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PATCH, OPTIONS');
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
    $result = $conn->query("SELECT id, name, email, subject, message, `read`, createdAt FROM contact_messages ORDER BY createdAt DESC");
    
    if ($result) {
        $messages = [];
        
        while ($row = $result->fetch_assoc()) {
            $messages[] = $row;
        }
        
        // Return messages
        http_response_code(200);
        echo json_encode($messages);
    } else {
        // Return error
        http_response_code(500); // Internal Server Error
        echo json_encode(['error' => 'Failed to get contact messages: ' . $conn->error]);
    }
}
// Handle PATCH request - mark message as read
else if ($_SERVER['REQUEST_METHOD'] === 'PATCH') {
    // Get ID from URL
    $parts = explode('/', $_SERVER['REQUEST_URI']);
    $id = end($parts);
    
    if (!is_numeric($id)) {
        http_response_code(400); // Bad Request
        echo json_encode(['error' => 'Invalid ID']);
        exit;
    }
    
    // Get JSON data from request body
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Check if data is valid and contains 'read' field
    if (!$data || !isset($data['read'])) {
        http_response_code(400); // Bad Request
        echo json_encode(['error' => 'Invalid request data']);
        exit;
    }
    
    // Convert read value to integer
    $read = (int)$data['read'];
    
    // Prepare and execute query
    $stmt = $conn->prepare("UPDATE contact_messages SET `read` = ? WHERE id = ?");
    $stmt->bind_param("ii", $read, $id);
    
    if ($stmt->execute()) {
        if ($stmt->affected_rows > 0) {
            // Get the updated message
            $result = $conn->query("SELECT id, name, email, subject, message, `read`, createdAt FROM contact_messages WHERE id = $id");
            
            if ($result && $result->num_rows > 0) {
                $message = $result->fetch_assoc();
                
                // Return updated message
                http_response_code(200);
                echo json_encode($message);
            } else {
                // Return not found
                http_response_code(404); // Not Found
                echo json_encode(['error' => 'Message not found after update']);
            }
        } else {
            // Check if the record exists
            $result = $conn->query("SELECT id FROM contact_messages WHERE id = $id");
            
            if ($result && $result->num_rows > 0) {
                // No changes were made
                $result = $conn->query("SELECT id, name, email, subject, message, `read`, createdAt FROM contact_messages WHERE id = $id");
                $message = $result->fetch_assoc();
                
                // Return message with no changes
                http_response_code(200);
                echo json_encode($message);
            } else {
                // Return not found
                http_response_code(404); // Not Found
                echo json_encode(['error' => 'Message not found']);
            }
        }
    } else {
        // Return error
        http_response_code(500); // Internal Server Error
        echo json_encode(['error' => 'Failed to update message: ' . $stmt->error]);
    }
    
    $stmt->close();
}
// Handle other methods
else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Method not allowed']);
}