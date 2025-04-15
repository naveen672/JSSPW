<?php
/**
 * Authentication Utility Class
 */

// Include database connection
require_once 'database.php';

class Auth {
    private $db;
    
    /**
     * Constructor - initializes database connection
     */
    public function __construct() {
        $this->db = new Database();
    }
    
    /**
     * Authenticate user with username and password
     * 
     * @param string $username
     * @param string $password
     * @return array|false User data if authenticated, false otherwise
     */
    public function authenticate($username, $password) {
        $conn = $this->db->getConnection();
        
        // Prepare query
        $stmt = $conn->prepare("SELECT id, username, password, role FROM users WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($result->num_rows == 1) {
            $user = $result->fetch_assoc();
            
            // Verify password
            if (password_verify($password, $user['password'])) {
                // Don't return the password
                unset($user['password']);
                return $user;
            }
        }
        
        return false;
    }
    
    /**
     * Check if the current session has a logged-in user
     * 
     * @return bool True if user is logged in, false otherwise
     */
    public function isLoggedIn() {
        // Start session if not already started
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }
        
        return isset($_SESSION['user']);
    }
    
    /**
     * Check if the current session has a logged-in admin
     * 
     * @return bool True if user is admin, false otherwise
     */
    public function isAdmin() {
        // Check if logged in
        if (!$this->isLoggedIn()) {
            return false;
        }
        
        // Check if user is admin
        return $_SESSION['user']['role'] === 'admin';
    }
    
    /**
     * Require authentication for protected routes
     * Will send 401 Unauthorized response if not authenticated
     */
    public function requireAuth() {
        if (!$this->isLoggedIn()) {
            http_response_code(401); // Unauthorized
            echo json_encode(['error' => 'Authentication required']);
            exit;
        }
    }
    
    /**
     * Require admin authentication for protected routes
     * Will send 401 Unauthorized or 403 Forbidden response if not authorized
     */
    public function requireAdmin() {
        // First check if user is logged in
        if (!$this->isLoggedIn()) {
            http_response_code(401); // Unauthorized
            echo json_encode(['error' => 'Authentication required']);
            exit;
        }
        
        // Then check if user is admin
        if (!$this->isAdmin()) {
            http_response_code(403); // Forbidden
            echo json_encode(['error' => 'Admin privileges required']);
            exit;
        }
    }
    
    /**
     * Change user password
     * 
     * @param int $userId
     * @param string $newPassword
     * @return bool True if password changed successfully, false otherwise
     */
    public function changePassword($userId, $newPassword) {
        $conn = $this->db->getConnection();
        
        // Hash the new password
        $hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);
        
        // Prepare and execute query
        $stmt = $conn->prepare("UPDATE users SET password = ? WHERE id = ?");
        $stmt->bind_param("si", $hashedPassword, $userId);
        $result = $stmt->execute();
        $stmt->close();
        
        return $result;
    }
}

// Create global auth instance
$auth = new Auth();