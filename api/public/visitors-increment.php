<?php
// Set headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
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

// Start transaction
$conn->begin_transaction();

try {
    // Get current visitor count
    $result = $conn->query("SELECT value FROM site_stats WHERE name = 'visitor_count' FOR UPDATE");
    
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $count = (int)$row['value'] + 1;
        
        // Update visitor count
        $stmt = $conn->prepare("UPDATE site_stats SET value = ? WHERE name = 'visitor_count'");
        $stmt->bind_param("i", $count);
        
        if ($stmt->execute()) {
            // Commit transaction
            $conn->commit();
            
            // Return updated count
            http_response_code(200);
            echo json_encode(['count' => $count]);
        } else {
            // Rollback transaction
            $conn->rollback();
            
            // Return error
            http_response_code(500); // Internal Server Error
            echo json_encode(['error' => 'Failed to update visitor count: ' . $stmt->error]);
        }
        
        $stmt->close();
    } else {
        // Create visitor count record if it doesn't exist
        $stmt = $conn->prepare("INSERT INTO site_stats (name, value) VALUES ('visitor_count', 1)");
        
        if ($stmt->execute()) {
            // Commit transaction
            $conn->commit();
            
            // Return initial count
            http_response_code(200);
            echo json_encode(['count' => 1]);
        } else {
            // Rollback transaction
            $conn->rollback();
            
            // Return error
            http_response_code(500); // Internal Server Error
            echo json_encode(['error' => 'Failed to create visitor count: ' . $stmt->error]);
        }
        
        $stmt->close();
    }
} catch (Exception $e) {
    // Rollback transaction on exception
    $conn->rollback();
    
    // Return error
    http_response_code(500); // Internal Server Error
    echo json_encode(['error' => 'An error occurred: ' . $e->getMessage()]);
}