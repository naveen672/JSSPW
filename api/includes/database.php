<?php
require_once 'config.php';

class Database {
    private $conn;
    
    /**
     * Connect to the database
     * @return mysqli connection object
     */
    public function getConnection() {
        $this->conn = null;
        
        try {
            $this->conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
            
            if ($this->conn->connect_error) {
                throw new Exception("Connection failed: " . $this->conn->connect_error);
            }
            
            // Set character set
            $this->conn->set_charset("utf8");
            
        } catch(Exception $e) {
            echo "Database connection error: " . $e->getMessage();
            die();
        }
        
        return $this->conn;
    }
    
    /**
     * Create database tables if they don't exist
     */
    public function createTablesIfNotExist() {
        $conn = $this->getConnection();
        
        // Users table
        $sql = "CREATE TABLE IF NOT EXISTS users (
            id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role VARCHAR(20) NOT NULL DEFAULT 'user',
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )";
        
        if (!$conn->query($sql)) {
            echo "Error creating users table: " . $conn->error;
        }
        
        // Contact messages table
        $sql = "CREATE TABLE IF NOT EXISTS contact_messages (
            id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            subject VARCHAR(200) NOT NULL,
            message TEXT NOT NULL,
            read TINYINT(1) DEFAULT 0,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )";
        
        if (!$conn->query($sql)) {
            echo "Error creating contact_messages table: " . $conn->error;
        }
        
        // Flash news table
        $sql = "CREATE TABLE IF NOT EXISTS flash_news (
            id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
            text VARCHAR(255) NOT NULL,
            link VARCHAR(255),
            active TINYINT(1) DEFAULT 1,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )";
        
        if (!$conn->query($sql)) {
            echo "Error creating flash_news table: " . $conn->error;
        }
        
        // Events table
        $sql = "CREATE TABLE IF NOT EXISTS events (
            id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(200) NOT NULL,
            description TEXT NOT NULL,
            date DATE NOT NULL,
            time VARCHAR(50),
            location VARCHAR(200) NOT NULL,
            image VARCHAR(255),
            active TINYINT(1) DEFAULT 1,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )";
        
        if (!$conn->query($sql)) {
            echo "Error creating events table: " . $conn->error;
        }
        
        // Faculty table
        $sql = "CREATE TABLE IF NOT EXISTS faculty (
            id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
            firstName VARCHAR(100) NOT NULL,
            lastName VARCHAR(100) NOT NULL,
            designation VARCHAR(200) NOT NULL,
            department VARCHAR(200) NOT NULL,
            profile TEXT,
            image VARCHAR(255),
            email VARCHAR(100),
            phone VARCHAR(20),
            active TINYINT(1) DEFAULT 1,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )";
        
        if (!$conn->query($sql)) {
            echo "Error creating faculty table: " . $conn->error;
        }
        
        // Site stats table
        $sql = "CREATE TABLE IF NOT EXISTS site_stats (
            id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50) NOT NULL UNIQUE,
            value INT(11) NOT NULL DEFAULT 0,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )";
        
        if (!$conn->query($sql)) {
            echo "Error creating site_stats table: " . $conn->error;
        }
        
        // Insert default visitor count if it doesn't exist
        $sql = "INSERT IGNORE INTO site_stats (name, value) VALUES ('visitor_count', 0)";
        $conn->query($sql);
        
        // Create default admin user if none exists
        $this->createDefaultAdminIfNotExists();
    }
    
    /**
     * Create default admin user if no users exist
     */
    private function createDefaultAdminIfNotExists() {
        $conn = $this->getConnection();
        
        // Check if any users exist
        $result = $conn->query("SELECT COUNT(*) as count FROM users");
        $row = $result->fetch_assoc();
        
        if ($row['count'] == 0) {
            // Create default admin
            $username = 'admin';
            $password = password_hash('admin123', PASSWORD_BCRYPT, ['cost' => HASH_COST]);
            $role = 'admin';
            
            $stmt = $conn->prepare("INSERT INTO users (username, password, role) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $username, $password, $role);
            
            if ($stmt->execute()) {
                echo "Default admin user created.";
            } else {
                echo "Error creating default admin: " . $stmt->error;
            }
            
            $stmt->close();
        }
    }
}

// Initialize database
$database = new Database();