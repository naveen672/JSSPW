<?php
header('Content-Type: application/json');

// Include database connection and email utilities
require_once __DIR__ . '/../includes/config.php';
require_once __DIR__ . '/../includes/database.php';
require_once __DIR__ . '/../includes/email.php';

// Create database connection
$db = new Database();
$conn = $db->getConnection();

// Handle POST request to submit a contact message
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Validate required fields
    if (!isset($input['name']) || !isset($input['email']) || !isset($input['message'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Name, email, and message are required']);
        exit;
    }
    
    // Extract contact data
    $name = $input['name'];
    $email = $input['email'];
    $phone = isset($input['phone']) ? $input['phone'] : '';
    $message = $input['message'];
    
    try {
        if ($db->isSqlite()) {
            // Insert contact message in SQLite
            $stmt = $conn->prepare("INSERT INTO contact_messages (name, email, phone, message, isRead) VALUES (:name, :email, :phone, :message, 0)");
            $stmt->bindValue(':name', $name, SQLITE3_TEXT);
            $stmt->bindValue(':email', $email, SQLITE3_TEXT);
            $stmt->bindValue(':phone', $phone, SQLITE3_TEXT);
            $stmt->bindValue(':message', $message, SQLITE3_TEXT);
            $result = $stmt->execute();
            
            // Get the inserted message ID
            $messageId = $conn->lastInsertRowID();
            
            // Get the message data
            $stmt = $conn->prepare("SELECT * FROM contact_messages WHERE id = :id");
            $stmt->bindValue(':id', $messageId, SQLITE3_INTEGER);
            $result = $stmt->execute();
            $contactMessage = $result->fetchArray(SQLITE3_ASSOC);
        } else {
            // Insert contact message in MySQL
            $stmt = $conn->prepare("INSERT INTO contact_messages (name, email, phone, message, isRead) VALUES (?, ?, ?, ?, 0)");
            $stmt->bind_param("ssss", $name, $email, $phone, $message);
            $stmt->execute();
            $messageId = $stmt->insert_id;
            $stmt->close();
            
            // Get the message data
            $stmt = $conn->prepare("SELECT * FROM contact_messages WHERE id = ?");
            $stmt->bind_param("i", $messageId);
            $stmt->execute();
            $result = $stmt->get_result();
            $contactMessage = $result->fetch_assoc();
            $stmt->close();
        }
        
        // Send confirmation email
        $emailService = new EmailService();
        $emailService->sendContactConfirmation($contactMessage);
        
        // Send admin notification
        $emailService->sendAdminNotification($contactMessage);
        
        // Return success response
        echo json_encode([
            'success' => true,
            'message' => 'Your message has been sent successfully. We will get back to you soon.',
            'contactId' => $messageId
        ]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to submit contact message: ' . $e->getMessage()]);
    }
}