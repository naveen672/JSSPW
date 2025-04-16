<?php
header('Content-Type: application/json');

// Include auth utilities
require_once __DIR__ . '/../includes/config.php';
require_once __DIR__ . '/../includes/database.php';
require_once __DIR__ . '/../includes/auth.php';

// Create auth handler and database connection
$auth = new Auth();
$db = new Database();
$conn = $db->getConnection();

// Check if user is authenticated and is an admin
if (!$auth->isAdmin()) {
    http_response_code(403);
    echo json_encode(['error' => 'Unauthorized. Admin access required.']);
    exit;
}

// Handle GET request to get all flash news
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        if ($db->isSqlite()) {
            // Get all flash news
            $stmt = $conn->prepare("SELECT * FROM flash_news ORDER BY createdAt DESC");
            $result = $stmt->execute();
            
            $news = [];
            while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
                $news[] = $row;
            }
        } else {
            // MySQL
            $result = $conn->query("SELECT * FROM flash_news ORDER BY createdAt DESC");
            
            $news = [];
            while ($row = $result->fetch_assoc()) {
                $news[] = $row;
            }
        }
        
        echo json_encode(['news' => $news]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to get flash news: ' . $e->getMessage()]);
    }
}

// Handle POST request to create a new flash news item
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Validate required fields
    if (!isset($input['text'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Text is required']);
        exit;
    }
    
    // Extract flash news data
    $text = $input['text'];
    $link = isset($input['link']) ? $input['link'] : '';
    $active = isset($input['active']) ? (int) $input['active'] : 1;
    
    try {
        if ($db->isSqlite()) {
            // Insert flash news in SQLite
            $stmt = $conn->prepare("INSERT INTO flash_news (text, link, active) VALUES (:text, :link, :active)");
            $stmt->bindValue(':text', $text, SQLITE3_TEXT);
            $stmt->bindValue(':link', $link, SQLITE3_TEXT);
            $stmt->bindValue(':active', $active, SQLITE3_INTEGER);
            $result = $stmt->execute();
            
            // Get the inserted news ID
            $newsId = $conn->lastInsertRowID();
            
            // Get the news data
            $stmt = $conn->prepare("SELECT * FROM flash_news WHERE id = :id");
            $stmt->bindValue(':id', $newsId, SQLITE3_INTEGER);
            $result = $stmt->execute();
            $news = $result->fetchArray(SQLITE3_ASSOC);
        } else {
            // Insert flash news in MySQL
            $stmt = $conn->prepare("INSERT INTO flash_news (text, link, active) VALUES (?, ?, ?)");
            $stmt->bind_param("ssi", $text, $link, $active);
            $stmt->execute();
            $newsId = $stmt->insert_id;
            $stmt->close();
            
            // Get the news data
            $stmt = $conn->prepare("SELECT * FROM flash_news WHERE id = ?");
            $stmt->bind_param("i", $newsId);
            $stmt->execute();
            $result = $stmt->get_result();
            $news = $result->fetch_assoc();
            $stmt->close();
        }
        
        // Return success response
        echo json_encode([
            'success' => true,
            'message' => 'Flash news created successfully',
            'news' => $news
        ]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to create flash news: ' . $e->getMessage()]);
    }
}

// Handle PUT/PATCH request to update a flash news item
if ($_SERVER['REQUEST_METHOD'] === 'PUT' || $_SERVER['REQUEST_METHOD'] === 'PATCH') {
    // Get ID from URL
    $url_parts = explode('/', $_SERVER['REQUEST_URI']);
    $id = end($url_parts);
    
    if (!is_numeric($id)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid news ID']);
        exit;
    }
    
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Build update query based on provided fields
    $updates = [];
    $params = [];
    
    if (isset($input['text'])) {
        $updates[] = "text = " . ($db->isSqlite() ? ":text" : "?");
        $params[] = $input['text'];
    }
    
    if (isset($input['link'])) {
        $updates[] = "link = " . ($db->isSqlite() ? ":link" : "?");
        $params[] = $input['link'];
    }
    
    if (isset($input['active'])) {
        $updates[] = "active = " . ($db->isSqlite() ? ":active" : "?");
        $params[] = (int) $input['active'];
    }
    
    if (empty($updates)) {
        http_response_code(400);
        echo json_encode(['error' => 'No fields to update']);
        exit;
    }
    
    try {
        if ($db->isSqlite()) {
            // Update flash news in SQLite
            $sql = "UPDATE flash_news SET " . implode(", ", $updates) . " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
            
            if (isset($input['text'])) {
                $stmt->bindValue(':text', $input['text'], SQLITE3_TEXT);
            }
            
            if (isset($input['link'])) {
                $stmt->bindValue(':link', $input['link'], SQLITE3_TEXT);
            }
            
            if (isset($input['active'])) {
                $stmt->bindValue(':active', (int) $input['active'], SQLITE3_INTEGER);
            }
            
            $result = $stmt->execute();
            
            // Check if the news exists
            $stmt = $conn->prepare("SELECT * FROM flash_news WHERE id = :id");
            $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
            $result = $stmt->execute();
            $news = $result->fetchArray(SQLITE3_ASSOC);
            
            if (!$news) {
                http_response_code(404);
                echo json_encode(['error' => 'Flash news not found']);
                exit;
            }
        } else {
            // Update flash news in MySQL
            $sql = "UPDATE flash_news SET " . implode(", ", $updates) . " WHERE id = ?";
            $stmt = $conn->prepare($sql);
            
            // Add ID as the last parameter
            $params[] = $id;
            
            // Create parameter type string (s for string, i for integer)
            $types = "";
            foreach ($params as $param) {
                $types .= is_int($param) ? "i" : "s";
            }
            
            $stmt->bind_param($types, ...$params);
            $stmt->execute();
            $stmt->close();
            
            // Check if the news exists
            $stmt = $conn->prepare("SELECT * FROM flash_news WHERE id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $result = $stmt->get_result();
            $news = $result->fetch_assoc();
            $stmt->close();
            
            if (!$news) {
                http_response_code(404);
                echo json_encode(['error' => 'Flash news not found']);
                exit;
            }
        }
        
        // Return success response
        echo json_encode([
            'success' => true,
            'message' => 'Flash news updated successfully',
            'news' => $news
        ]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to update flash news: ' . $e->getMessage()]);
    }
}

// Handle DELETE request to delete a flash news item
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Get ID from URL
    $url_parts = explode('/', $_SERVER['REQUEST_URI']);
    $id = end($url_parts);
    
    if (!is_numeric($id)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid news ID']);
        exit;
    }
    
    try {
        if ($db->isSqlite()) {
            // Check if the news exists
            $stmt = $conn->prepare("SELECT * FROM flash_news WHERE id = :id");
            $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
            $result = $stmt->execute();
            $news = $result->fetchArray(SQLITE3_ASSOC);
            
            if (!$news) {
                http_response_code(404);
                echo json_encode(['error' => 'Flash news not found']);
                exit;
            }
            
            // Delete flash news from SQLite
            $stmt = $conn->prepare("DELETE FROM flash_news WHERE id = :id");
            $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
            $result = $stmt->execute();
        } else {
            // Check if the news exists
            $stmt = $conn->prepare("SELECT * FROM flash_news WHERE id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $result = $stmt->get_result();
            $news = $result->fetch_assoc();
            $stmt->close();
            
            if (!$news) {
                http_response_code(404);
                echo json_encode(['error' => 'Flash news not found']);
                exit;
            }
            
            // Delete flash news from MySQL
            $stmt = $conn->prepare("DELETE FROM flash_news WHERE id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $stmt->close();
        }
        
        // Return success response
        echo json_encode([
            'success' => true,
            'message' => 'Flash news deleted successfully'
        ]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to delete flash news: ' . $e->getMessage()]);
    }
}