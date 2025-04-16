<?php
/**
 * Authentication Utilities
 */

// Start session if not already started
if (session_status() === PHP_SESSION_NONE) {
    // Set session save path if needed
    if (!is_dir(__DIR__ . '/../../tmp')) {
        mkdir(__DIR__ . '/../../tmp', 0755, true);
    }
    ini_set('session.save_path', __DIR__ . '/../../tmp');
    session_start();
}

class Auth {
    private $db;
    private $conn;
    
    /**
     * Constructor - initializes database connection
     */
    public function __construct() {
        $this->db = new Database();
        $this->conn = $this->db->getConnection();
    }
    
    /**
     * Authenticate user and create session
     */
    public function login($username, $password) {
        if ($this->db->isSqlite()) {
            // SQLite query
            $stmt = $this->conn->prepare("SELECT * FROM users WHERE username = :username");
            $stmt->bindValue(':username', $username, SQLITE3_TEXT);
            $result = $stmt->execute();
            $user = $result->fetchArray(SQLITE3_ASSOC);
        } else {
            // MySQL query
            $stmt = $this->conn->prepare("SELECT * FROM users WHERE username = ?");
            $stmt->bind_param("s", $username);
            $stmt->execute();
            $result = $stmt->get_result();
            $user = $result->fetch_assoc();
            $stmt->close();
        }
        
        if (!$user) {
            return [
                'success' => false,
                'message' => 'Invalid username or password'
            ];
        }
        
        // Verify password
        if (password_verify($password, $user['password'])) {
            // Password is correct, create session
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['role'] = $user['role'];
            
            // Don't return password in response
            unset($user['password']);
            
            return [
                'success' => true,
                'user' => $user
            ];
        } else {
            return [
                'success' => false,
                'message' => 'Invalid username or password'
            ];
        }
    }
    
    /**
     * Check if user is authenticated
     */
    public function isAuthenticated() {
        return isset($_SESSION['user_id']);
    }
    
    /**
     * Check if user is an admin
     */
    public function isAdmin() {
        return $this->isAuthenticated() && $_SESSION['role'] === 'admin';
    }
    
    /**
     * Get current authenticated user
     */
    public function getCurrentUser() {
        if (!$this->isAuthenticated()) {
            return null;
        }
        
        $userId = $_SESSION['user_id'];
        
        if ($this->db->isSqlite()) {
            // SQLite query
            $stmt = $this->conn->prepare("SELECT id, username, role, createdAt FROM users WHERE id = :id");
            $stmt->bindValue(':id', $userId, SQLITE3_INTEGER);
            $result = $stmt->execute();
            return $result->fetchArray(SQLITE3_ASSOC);
        } else {
            // MySQL query
            $stmt = $this->conn->prepare("SELECT id, username, role, createdAt FROM users WHERE id = ?");
            $stmt->bind_param("i", $userId);
            $stmt->execute();
            $result = $stmt->get_result();
            $user = $result->fetch_assoc();
            $stmt->close();
            return $user;
        }
    }
    
    /**
     * Log out current user
     */
    public function logout() {
        // Unset session variables
        $_SESSION = [];
        
        // Destroy the session
        session_destroy();
        
        return [
            'success' => true,
            'message' => 'Logged out successfully'
        ];
    }
}
