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
require_once '../includes/email.php';

// Get JSON data from request body
$data = json_decode(file_get_contents('php://input'), true);

// Check if data is valid
if (!$data || !isset($data['name']) || !isset($data['email']) || !isset($data['subject']) || !isset($data['message'])) {
    http_response_code(400); // Bad Request
    echo json_encode(['error' => 'Invalid request data']);
    exit;
}

// Validate email format
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400); // Bad Request
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}

// Get database connection
$db = new Database();
$conn = $db->getConnection();

// Prepare and execute query to save message
$stmt = $conn->prepare("INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $data['name'], $data['email'], $data['subject'], $data['message']);

if ($stmt->execute()) {
    $messageId = $stmt->insert_id;
    
    // Try to send confirmation email to user
    $emailSent = $email->sendContactConfirmationEmail($data);
    
    // Try to send notification email to admin
    $adminEmailSent = $email->sendAdminNotificationEmail($data);
    
    // Return success with message ID
    http_response_code(201); // Created
    echo json_encode([
        'id' => $messageId,
        'message' => 'Contact message submitted successfully',
        'emailSent' => $emailSent,
        'adminEmailSent' => $adminEmailSent
    ]);
} else {
    // Return error
    http_response_code(500); // Internal Server Error
    echo json_encode(['error' => 'Failed to save contact message: ' . $stmt->error]);
}

$stmt->close();