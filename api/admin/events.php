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

// Handle GET request - list all events
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Check if ID is provided in URL for getting a single event
    $requestUri = $_SERVER['REQUEST_URI'];
    if (preg_match('/\/events\/(\d+)$/', $requestUri, $matches)) {
        $id = $matches[1];
        $query = "SELECT id, title, description, date, time, location, image, active, createdAt 
                  FROM events 
                  WHERE id = $id";
    } else {
        $query = "SELECT id, title, description, date, time, location, image, active, createdAt 
                  FROM events 
                  ORDER BY date DESC";
    }
    
    $result = $conn->query($query);
    
    if ($result) {
        if (isset($id)) {
            // Single event
            if ($result->num_rows > 0) {
                $event = $result->fetch_assoc();
                http_response_code(200);
                echo json_encode($event);
            } else {
                http_response_code(404); // Not Found
                echo json_encode(['error' => 'Event not found']);
            }
        } else {
            // All events
            $eventsList = [];
            
            while ($row = $result->fetch_assoc()) {
                $eventsList[] = $row;
            }
            
            http_response_code(200);
            echo json_encode($eventsList);
        }
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(['error' => 'Failed to get events: ' . $conn->error]);
    }
}
// Handle POST request - create new event
else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON data from request body
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Check if data is valid
    if (!$data || !isset($data['title']) || !isset($data['description']) || !isset($data['date']) || !isset($data['location'])) {
        http_response_code(400); // Bad Request
        echo json_encode(['error' => 'Invalid request data']);
        exit;
    }
    
    // Format date to MySQL format (YYYY-MM-DD)
    $date = date('Y-m-d', strtotime($data['date']));
    
    // Set default values if not provided
    $time = isset($data['time']) ? $data['time'] : null;
    $image = isset($data['image']) ? $data['image'] : null;
    $active = isset($data['active']) ? (int)$data['active'] : 1;
    
    // Prepare and execute query
    $stmt = $conn->prepare("INSERT INTO events (title, description, date, time, location, image, active) 
                            VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssi", 
                       $data['title'],
                       $data['description'],
                       $date,
                       $time,
                       $data['location'],
                       $image,
                       $active);
    
    if ($stmt->execute()) {
        $id = $stmt->insert_id;
        
        // Get the created event
        $result = $conn->query("SELECT id, title, description, date, time, location, image, active, createdAt 
                                FROM events 
                                WHERE id = $id");
        $event = $result->fetch_assoc();
        
        http_response_code(201); // Created
        echo json_encode($event);
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(['error' => 'Failed to create event: ' . $stmt->error]);
    }
    
    $stmt->close();
}
// Handle PATCH request - update event
else if ($_SERVER['REQUEST_METHOD'] === 'PATCH') {
    // Get ID from URL
    $requestUri = $_SERVER['REQUEST_URI'];
    if (!preg_match('/\/events\/(\d+)$/', $requestUri, $matches)) {
        http_response_code(400); // Bad Request
        echo json_encode(['error' => 'Invalid URL format']);
        exit;
    }
    
    $id = $matches[1];
    
    // Check if event exists
    $result = $conn->query("SELECT id FROM events WHERE id = $id");
    if ($result->num_rows === 0) {
        http_response_code(404); // Not Found
        echo json_encode(['error' => 'Event not found']);
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
    
    if (isset($data['title'])) {
        $updates[] = "title = ?";
        $types .= "s";
        $params[] = $data['title'];
    }
    
    if (isset($data['description'])) {
        $updates[] = "description = ?";
        $types .= "s";
        $params[] = $data['description'];
    }
    
    if (isset($data['date'])) {
        $date = date('Y-m-d', strtotime($data['date']));
        $updates[] = "date = ?";
        $types .= "s";
        $params[] = $date;
    }
    
    if (isset($data['time'])) {
        $updates[] = "time = ?";
        $types .= "s";
        $params[] = $data['time'];
    }
    
    if (isset($data['location'])) {
        $updates[] = "location = ?";
        $types .= "s";
        $params[] = $data['location'];
    }
    
    if (isset($data['image'])) {
        $updates[] = "image = ?";
        $types .= "s";
        $params[] = $data['image'];
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
    $query = "UPDATE events SET " . implode(", ", $updates) . " WHERE id = ?";
    $stmt = $conn->prepare($query);
    
    $stmt->bind_param($types, ...$params);
    
    if ($stmt->execute()) {
        // Get the updated event
        $result = $conn->query("SELECT id, title, description, date, time, location, image, active, createdAt 
                                FROM events 
                                WHERE id = $id");
        $event = $result->fetch_assoc();
        
        http_response_code(200);
        echo json_encode($event);
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(['error' => 'Failed to update event: ' . $stmt->error]);
    }
    
    $stmt->close();
}
// Handle DELETE request - delete event
else if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Get ID from URL
    $requestUri = $_SERVER['REQUEST_URI'];
    if (!preg_match('/\/events\/(\d+)$/', $requestUri, $matches)) {
        http_response_code(400); // Bad Request
        echo json_encode(['error' => 'Invalid URL format']);
        exit;
    }
    
    $id = $matches[1];
    
    // Prepare and execute query
    $stmt = $conn->prepare("DELETE FROM events WHERE id = ?");
    $stmt->bind_param("i", $id);
    
    if ($stmt->execute()) {
        if ($stmt->affected_rows > 0) {
            http_response_code(204); // No Content
        } else {
            http_response_code(404); // Not Found
            echo json_encode(['error' => 'Event not found']);
        }
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(['error' => 'Failed to delete event: ' . $stmt->error]);
    }
    
    $stmt->close();
}
// Handle other methods
else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Method not allowed']);
}