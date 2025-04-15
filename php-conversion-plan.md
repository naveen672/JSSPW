# PHP Conversion Plan for JSS Polytechnic Website

## Overview
This document outlines the plan to convert the Node.js backend to PHP to make the site compatible with standard shared hosting plans.

## Directory Structure
```
/
├── api/                  # PHP API endpoints (replacing Express routes)
│   ├── auth/             # Authentication endpoints
│   ├── admin/            # Admin API endpoints
│   └── public/           # Public API endpoints
├── includes/             # PHP includes and functions
│   ├── config.php        # Database and site configuration
│   ├── auth.php          # Authentication functions
│   ├── email.php         # Email functions
│   └── database.php      # Database connection and queries
├── admin/                # Admin PHP pages
├── assets/               # Static assets
└── build/                # React frontend build
```

## Conversion Tasks

### 1. Database Setup
- Create MySQL database schema based on current data models
- Implement the same tables as defined in the Drizzle schema

### 2. PHP Backend Endpoints
- Create PHP equivalents for all Express routes
- Implement proper authentication and session management
- Create file upload handling for admin functionality

### 3. Authentication System
- Convert Passport.js authentication to PHP sessions
- Implement password hashing with PHP's password_hash()
- Create login/logout functionality

### 4. Admin Dashboard Integration
- Make React admin dashboard communicate with PHP API endpoints
- Ensure all CRUD operations work through PHP APIs

### 5. Email Functionality
- Use PHP's mail() function or PHPMailer for sending emails
- Replicate the email templates

## Specific API Endpoints to Create

### Authentication Endpoints
- `/api/login.php` - Handle user login
- `/api/logout.php` - Handle user logout
- `/api/user.php` - Get current user information

### Admin Endpoints
- `/api/admin/faculty.php` - CRUD for faculty members
- `/api/admin/events.php` - CRUD for events
- `/api/admin/flash-news.php` - CRUD for flash news
- `/api/admin/contact-messages.php` - View and manage contact messages

### Public Endpoints
- `/api/visitors.php` - Handle visitor counting
- `/api/contact.php` - Process contact form submissions
- `/api/flash-news.php` - Get active flash news
- `/api/events.php` - Get active events
- `/api/faculty.php` - Get faculty information

## Frontend Modifications
- Update API call paths in React components
- Modify authentication integration
- Ensure proper handling of PHP's session cookies