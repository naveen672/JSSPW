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
require_once '../includes/database.php';
require_once '../includes/email.php';

// Get JSON data from request body
$data = json_decode(file_get_contents('php://input'), true);

// Validate input data
if (!$data || !isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    http_response_code(400); // Bad Request
    echo json_encode(['error' => 'Invalid request data']);
    exit;
}

// Sanitize inputs
$name = filter_var(trim($data['name']), FILTER_SANITIZE_STRING);
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$phone = isset($data['phone']) ? filter_var(trim($data['phone']), FILTER_SANITIZE_STRING) : '';
$message = filter_var(trim($data['message']), FILTER_SANITIZE_STRING);

// Further validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400); // Bad Request
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}

// Get database connection
$db = new Database();
$conn = $db->getConnection();

// Insert contact message into database
$stmt = $conn->prepare("INSERT INTO contact_messages (name, email, phone, message) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $phone, $message);

if ($stmt->execute()) {
    $id = $stmt->insert_id;
    
    // Create contact message object for email
    $contactMessage = [
        'id' => $id,
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'message' => $message,
        'createdAt' => date('Y-m-d H:i:s')
    ];
    
    // Send confirmation email to user
    sendContactConfirmationEmail($contactMessage);
    
    // Send notification email to admin
    sendAdminNotificationEmail($contactMessage);
    
    // Return success response
    http_response_code(201); // Created
    echo json_encode(['success' => true, 'message' => 'Your message has been sent successfully.']);
} else {
    // Return error
    http_response_code(500); // Internal Server Error
    echo json_encode(['error' => 'Failed to save contact message: ' . $stmt->error]);
}

$stmt->close();