<?php
/**
 * Database Connection and Table Setup
 */

// Include config file
require_once 'config.php';

class Database {
    private $conn;
    
    /**
     * Constructor - establishes database connection and sets up tables if needed
     */
    public function __construct() {
        // Create connection
        $this->conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD);
        
        // Check connection
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
        
        // Create database if it doesn't exist
        $this->createDatabase();
        
        // Select database
        $this->conn->select_db(DB_NAME);
        
        // Create tables if they don't exist
        $this->createTables();
    }
    
    /**
     * Get database connection
     */
    public function getConnection() {
        return $this->conn;
    }
    
    /**
     * Create database if it doesn't exist
     */
    private function createDatabase() {
        $sql = "CREATE DATABASE IF NOT EXISTS " . DB_NAME;
        $this->conn->query($sql);
    }
    
    /**
     * Create required tables if they don't exist
     */
    private function createTables() {
        // Create users table
        $sql = "CREATE TABLE IF NOT EXISTS users (
            id INT(11) NOT NULL AUTO_INCREMENT,
            username VARCHAR(50) NOT NULL,
            password VARCHAR(255) NOT NULL,
            role VARCHAR(20) NOT NULL DEFAULT 'user',
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            UNIQUE KEY (username)
        )";
        $this->conn->query($sql);
        
        // Create contact_messages table
        $sql = "CREATE TABLE IF NOT EXISTS contact_messages (
            id INT(11) NOT NULL AUTO_INCREMENT,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            phone VARCHAR(20),
            message TEXT NOT NULL,
            isRead TINYINT(1) NOT NULL DEFAULT 0,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
        )";
        $this->conn->query($sql);
        
        // Create flash_news table
        $sql = "CREATE TABLE IF NOT EXISTS flash_news (
            id INT(11) NOT NULL AUTO_INCREMENT,
            text TEXT NOT NULL,
            link VARCHAR(255),
            active TINYINT(1) NOT NULL DEFAULT 1,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
        )";
        $this->conn->query($sql);
        
        // Create events table
        $sql = "CREATE TABLE IF NOT EXISTS events (
            id INT(11) NOT NULL AUTO_INCREMENT,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            date DATE NOT NULL,
            time VARCHAR(50),
            location VARCHAR(255) NOT NULL,
            image VARCHAR(255),
            active TINYINT(1) NOT NULL DEFAULT 1,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
        )";
        $this->conn->query($sql);
        
        // Create faculty table
        $sql = "CREATE TABLE IF NOT EXISTS faculty (
            id INT(11) NOT NULL AUTO_INCREMENT,
            firstName VARCHAR(50) NOT NULL,
            lastName VARCHAR(50) NOT NULL,
            designation VARCHAR(100) NOT NULL,
            department VARCHAR(100) NOT NULL,
            profile TEXT,
            image VARCHAR(255),
            email VARCHAR(100),
            phone VARCHAR(20),
            active TINYINT(1) NOT NULL DEFAULT 1,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
        )";
        $this->conn->query($sql);
        
        // Create site_stats table
        $sql = "CREATE TABLE IF NOT EXISTS site_stats (
            id INT(11) NOT NULL AUTO_INCREMENT,
            visitorsCount INT(11) NOT NULL DEFAULT 0,
            lastUpdated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
        )";
        $this->conn->query($sql);
        
        // Create default admin user if no users exist
        $result = $this->conn->query("SELECT COUNT(*) as count FROM users");
        $row = $result->fetch_assoc();
        
        if ($row['count'] == 0) {
            // Hash the default admin password
            $hashedPassword = password_hash(DEFAULT_ADMIN_PASSWORD, PASSWORD_DEFAULT);
            
            // Insert default admin user
            $sql = "INSERT INTO users (username, password, role) VALUES (?, ?, 'admin')";
            $stmt = $this->conn->prepare($sql);
            $stmt->bind_param("ss", DEFAULT_ADMIN_USERNAME, $hashedPassword);
            $stmt->execute();
            $stmt->close();
        }
    }
}