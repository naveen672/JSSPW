# React Frontend + PHP Backend Conversion Plan

## Current Structure:
- React.js frontend (client-side components)
- Node.js Express backend (REST API)
- In-memory storage

## New Structure:
- **Keep** React.js frontend (client-side components)
- Replace Node.js with PHP backend (REST API)
- MySQL database storage

## Steps for PHP Backend Conversion:
1. Create PHP REST API endpoints to match all existing Node.js Express endpoints
2. Build frontend React app into static files
3. Set up PHP to serve the built React app
4. Configure Hostinger to handle both the PHP API and the React frontend

## Directory Structure:
```
/
├── api/                      # PHP API endpoints (replacing Node.js)
│   ├── admin/                # Admin APIs
│   │   ├── contact-messages.php
│   │   ├── events.php
│   │   ├── faculty.php
│   │   └── flash-news.php
│   ├── auth/                 # Authentication
│   │   ├── login.php
│   │   ├── logout.php
│   │   └── user.php
│   ├── includes/             # Shared PHP code
│   │   ├── auth.php
│   │   ├── config.php
│   │   ├── database.php
│   │   └── email.php
│   └── public/               # Public APIs
│       ├── contact.php
│       ├── events.php
│       ├── faculty.php
│       ├── flash-news.php
│       ├── visitors-count.php
│       └── visitors-increment.php
├── build/                    # Built React frontend (static files)
│   ├── assets/
│   ├── index.html
│   └── ...
└── index.php                 # Entry point (redirects to React app)
```

## Key Tasks:
1. Complete PHP API endpoints that match current Node.js functionality
2. Build React app to static files
3. Configure PHP to serve the static React app
4. Update React API calls to use the new PHP endpoints
5. Create `.htaccess` for URL routing on Hostinger
6. Create a deployment guide for Hostinger