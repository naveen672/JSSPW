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

// Handle GET request - list all faculty
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Check if ID is provided in URL for getting a single faculty
    $requestUri = $_SERVER['REQUEST_URI'];
    if (preg_match('/\/faculty\/(\d+)$/', $requestUri, $matches)) {
        $id = $matches[1];
        $query = "SELECT id, firstName, lastName, designation, department, profile, image, email, phone, active, createdAt 
                  FROM faculty 
                  WHERE id = $id";
    } else {
        $query = "SELECT id, firstName, lastName, designation, department, profile, image, email, phone, active, createdAt 
                  FROM faculty 
                  ORDER BY lastName, firstName";
    }
    
    $result = $conn->query($query);
    
    if ($result) {
        if (isset($id)) {
            // Single faculty
            if ($result->num_rows > 0) {
                $faculty = $result->fetch_assoc();
                http_response_code(200);
                echo json_encode($faculty);
            } else {
                http_response_code(404); // Not Found
                echo json_encode(['error' => 'Faculty not found']);
            }
        } else {
            // All faculty
            $facultyList = [];
            
            while ($row = $result->fetch_assoc()) {
                $facultyList[] = $row;
            }
            
            http_response_code(200);
            echo json_encode($facultyList);
        }
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(['error' => 'Failed to get faculty: ' . $conn->error]);
    }
}
// Handle POST request - create new faculty
else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON data from request body
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Check if data is valid
    if (!$data || !isset($data['firstName']) || !isset($data['lastName']) || !isset($data['designation']) || !isset($data['department'])) {
        http_response_code(400); // Bad Request
        echo json_encode(['error' => 'Invalid request data']);
        exit;
    }
    
    // Set default values if not provided
    $profile = isset($data['profile']) ? $data['profile'] : null;
    $image = isset($data['image']) ? $data['image'] : null;
    $email = isset($data['email']) ? $data['email'] : null;
    $phone = isset($data['phone']) ? $data['phone'] : null;
    $active = isset($data['active']) ? (int)$data['active'] : 1;
    
    // Prepare and execute query
    $stmt = $conn->prepare("INSERT INTO faculty (firstName, lastName, designation, department, profile, image, email, phone, active) 
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssi", 
                       $data['firstName'],
                       $data['lastName'],
                       $data['designation'],
                       $data['department'],
                       $profile,
                       $image,
                       $email,
                       $phone,
                       $active);
    
    if ($stmt->execute()) {
        $id = $stmt->insert_id;
        
        // Get the created faculty
        $result = $conn->query("SELECT id, firstName, lastName, designation, department, profile, image, email, phone, active, createdAt 
                                FROM faculty 
                                WHERE id = $id");
        $faculty = $result->fetch_assoc();
        
        http_response_code(201); // Created
        echo json_encode($faculty);
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(['error' => 'Failed to create faculty: ' . $stmt->error]);
    }
    
    $stmt->close();
}
// Handle PATCH request - update faculty
else if ($_SERVER['REQUEST_METHOD'] === 'PATCH') {
    // Get ID from URL
    $requestUri = $_SERVER['REQUEST_URI'];
    if (!preg_match('/\/faculty\/(\d+)$/', $requestUri, $matches)) {
        http_response_code(400); // Bad Request
        echo json_encode(['error' => 'Invalid URL format']);
        exit;
    }
    
    $id = $matches[1];
    
    // Check if faculty exists
    $result = $conn->query("SELECT id FROM faculty WHERE id = $id");
    if ($result->num_rows === 0) {
        http_response_code(404); // Not Found
        echo json_encode(['error' => 'Faculty not found']);
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
    
    if (isset($data['firstName'])) {
        $updates[] = "firstName = ?";
        $types .= "s";
        $params[] = $data['firstName'];
    }
    
    if (isset($data['lastName'])) {
        $updates[] = "lastName = ?";
        $types .= "s";
        $params[] = $data['lastName'];
    }
    
    if (isset($data['designation'])) {
        $updates[] = "designation = ?";
        $types .= "s";
        $params[] = $data['designation'];
    }
    
    if (isset($data['department'])) {
        $updates[] = "department = ?";
        $types .= "s";
        $params[] = $data['department'];
    }
    
    if (isset($data['profile'])) {
        $updates[] = "profile = ?";
        $types .= "s";
        $params[] = $data['profile'];
    }
    
    if (isset($data['image'])) {
        $updates[] = "image = ?";
        $types .= "s";
        $params[] = $data['image'];
    }
    
    if (isset($data['email'])) {
        $updates[] = "email = ?";
        $types .= "s";
        $params[] = $data['email'];
    }
    
    if (isset($data['phone'])) {
        $updates[] = "phone = ?";
        $types .= "s";
        $params[] = $data['phone'];
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
    $query = "UPDATE faculty SET " . implode(", ", $updates) . " WHERE id = ?";
    $stmt = $conn->prepare($query);
    
    $stmt->bind_param($types, ...$params);
    
    if ($stmt->execute()) {
        // Get the updated faculty
        $result = $conn->query("SELECT id, firstName, lastName, designation, department, profile, image, email, phone, active, createdAt 
                                FROM faculty 
                                WHERE id = $id");
        $faculty = $result->fetch_assoc();
        
        http_response_code(200);
        echo json_encode($faculty);
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(['error' => 'Failed to update faculty: ' . $stmt->error]);
    }
    
    $stmt->close();
}
// Handle DELETE request - delete faculty
else if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Get ID from URL
    $requestUri = $_SERVER['REQUEST_URI'];
    if (!preg_match('/\/faculty\/(\d+)$/', $requestUri, $matches)) {
        http_response_code(400); // Bad Request
        echo json_encode(['error' => 'Invalid URL format']);
        exit;
    }
    
    $id = $matches[1];
    
    // Prepare and execute query
    $stmt = $conn->prepare("DELETE FROM faculty WHERE id = ?");
    $stmt->bind_param("i", $id);
    
    if ($stmt->execute()) {
        if ($stmt->affected_rows > 0) {
            http_response_code(204); // No Content
        } else {
            http_response_code(404); // Not Found
            echo json_encode(['error' => 'Faculty not found']);
        }
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(['error' => 'Failed to delete faculty: ' . $stmt->error]);
    }
    
    $stmt->close();
}
// Handle other methods
else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Method not allowed']);
}