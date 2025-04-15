# PHP Backend Conversion Plan for JSS Polytechnic Website

## Overview

This document outlines the plan for converting the Node.js backend to PHP while keeping the React.js frontend intact. This conversion is necessary to ensure compatibility with Hostinger's shared hosting environment.

## Completed Components

### Core Infrastructure
- [x] Database connection handler with auto table creation
- [x] Authentication system with session management
- [x] Email utilities for contact form notifications
- [x] Configuration file with environment settings

### API Endpoints

#### Authentication
- [x] Login endpoint (POST /api/login)
- [x] Logout endpoint (POST /api/logout)
- [x] Current user endpoint (GET /api/user)

#### Admin API
- [x] Faculty management (GET, POST, PATCH, DELETE /api/admin/faculty)
- [x] Events management (GET, POST, PATCH, DELETE /api/admin/events)
- [x] Flash news management (GET, POST, PATCH, DELETE /api/admin/flash-news)
- [x] Contact messages (GET, PATCH, DELETE /api/admin/contact-messages)

#### Public API
- [x] Faculty listing (GET /api/public/faculty)
- [x] Events listing (GET /api/public/events)
- [x] Flash news listing (GET /api/public/flash-news)
- [x] Contact form submission (POST /api/public/contact)
- [x] Visitor counter (GET /api/public/visitors-count)
- [x] Visitor increment (POST /api/public/visitors-increment)

### Deployment Configuration
- [x] .htaccess file for URL routing
- [x] index.php entry point
- [x] Deployment guide for Hostinger

## Frontend Updates Needed

The React frontend will need to be updated to point to the new PHP endpoints. This does not require changing any components, but simply updating the API URLs in the React app.

1. No changes to component structure or logic
2. Keep the same authentication flow and protected routes
3. Update API URLs to match the PHP endpoints

## Database Schema

The PHP backend maintains the same database schema as the Node.js backend:

- `users` - Authentication and admin users
- `faculty` - Faculty member information 
- `events` - Event listings
- `flash_news` - News ticker items
- `contact_messages` - Contact form submissions
- `site_stats` - Website statistics including visitor count

## Deployment Process

1. Build the React app into static files (`npm run build`)
2. Upload the PHP backend files to the server
3. Upload the built React app to the server
4. Configure the database connection in `api/includes/config.php`
5. Access the website to initialize the database tables and default admin user

## Testing Checklist

- [ ] Verify all public API endpoints work correctly
- [ ] Test admin login functionality
- [ ] Test admin dashboard CRUD operations
- [ ] Test contact form submission and email notifications
- [ ] Test visitor counter functionality
- [ ] Ensure proper URL routing for React Router routes

## Future Enhancements

1. Implement more robust error handling and logging
2. Add CSRF protection for admin operations
3. Enhance email templates with better styling
4. Implement file upload functionality for faculty images and event images