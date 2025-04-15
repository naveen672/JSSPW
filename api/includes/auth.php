<?php
require_once 'config.php';
require_once 'database.php';

class Auth {
    private $db;
    private $conn;
    
    public function __construct() {
        $this->db = new Database();
        $this->conn = $this->db->getConnection();
        
        // Start session if not already started
        if (session_status() == PHP_SESSION_NONE) {
            session_name(SESSION_NAME);
            session_start();
        }
    }
    
    /**
     * Login user
     * @param string $username
     * @param string $password
     * @return array User data or error message
     */
    public function login($username, $password) {
        // Validate input
        if (empty($username) || empty($password)) {
            return ['error' => 'Username and password are required'];
        }
        
        $stmt = $this->conn->prepare("SELECT id, username, password, role FROM users WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();
            
            if (password_verify($password, $user['password'])) {
                // Don't store password in session
                unset($user['password']);
                
                // Set session variables
                $_SESSION['user'] = $user;
                $_SESSION['loggedin'] = true;
                
                return ['user' => $user];
            } else {
                return ['error' => 'Invalid password'];
            }
        } else {
            return ['error' => 'User not found'];
        }
    }
    
    /**
     * Register a new user
     * @param string $username
     * @param string $password
     * @param string $role
     * @return array User data or error message
     */
    public function register($username, $password, $role = 'user') {
        // Validate input
        if (empty($username) || empty($password)) {
            return ['error' => 'Username and password are required'];
        }
        
        // Check if username already exists
        $stmt = $this->conn->prepare("SELECT id FROM users WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($result->num_rows > 0) {
            return ['error' => 'Username already exists'];
        }
        
        // Hash password
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT, ['cost' => HASH_COST]);
        
        // Insert new user
        $stmt = $this->conn->prepare("INSERT INTO users (username, password, role) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $username, $hashedPassword, $role);
        
        if ($stmt->execute()) {
            $userId = $stmt->insert_id;
            
            // Fetch the created user
            $stmt = $this->conn->prepare("SELECT id, username, role FROM users WHERE id = ?");
            $stmt->bind_param("i", $userId);
            $stmt->execute();
            $result = $stmt->get_result();
            $user = $result->fetch_assoc();
            
            return ['user' => $user];
        } else {
            return ['error' => 'Registration failed: ' . $stmt->error];
        }
    }
    
    /**
     * Logout user
     * @return boolean Success status
     */
    public function logout() {
        // Unset all session variables
        $_SESSION = [];
        
        // Destroy the session
        session_destroy();
        
        return true;
    }
    
    /**
     * Check if user is logged in
     * @return boolean
     */
    public function isLoggedIn() {
        return isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true;
    }
    
    /**
     * Get current logged in user
     * @return array|null User data or null
     */
    public function getCurrentUser() {
        if ($this->isLoggedIn()) {
            return $_SESSION['user'];
        }
        return null;
    }
    
    /**
     * Check if current user is admin
     * @return boolean
     */
    public function isAdmin() {
        $user = $this->getCurrentUser();
        return $user && $user['role'] === 'admin';
    }
    
    /**
     * Require user to be logged in
     * @param boolean $returnJson Whether to return JSON response or redirect
     * @return mixed
     */
    public function requireLogin($returnJson = true) {
        if (!$this->isLoggedIn()) {
            if ($returnJson) {
                header('Content-Type: application/json');
                echo json_encode(['error' => 'Not authenticated']);
                exit;
            } else {
                header('Location: /login.php');
                exit;
            }
        }
        return true;
    }
    
    /**
     * Require user to be admin
     * @param boolean $returnJson Whether to return JSON response or redirect
     * @return mixed
     */
    public function requireAdmin($returnJson = true) {
        $this->requireLogin($returnJson);
        
        if (!$this->isAdmin()) {
            if ($returnJson) {
                header('Content-Type: application/json');
                echo json_encode(['error' => 'Not authorized']);
                exit;
            } else {
                header('Location: /unauthorized.php');
                exit;
            }
        }
        return true;
    }
}

// Initialize auth
$auth = new Auth();