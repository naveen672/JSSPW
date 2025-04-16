# JSSPW Website Deployment Guide for Render.com

This document provides instructions for deploying the JSS Polytechnic for Women (JSSPW) website to Render.com.

## Project Structure Overview

The JSSPW website is organized into the following major components:

1. **Client**: React-based frontend with Tailwind CSS and shadcn components
   - Located in `/client` directory
   - Uses Vite for bundling and development

2. **Server**: Express-based backend with REST APIs
   - Located in `/server` directory
   - Handles authentication, data storage, and business logic

3. **Shared**: Common code shared between client and server
   - Located in `/shared` directory
   - Contains database schema and type definitions

4. **Static Assets**: Images, fonts, and other static resources
   - Located in `/attached_assets` and `/client/public`

## Deployment to Render.com

### Prerequisites

- A Render.com account
- Git repository with your project code

### Setup Steps

1. **Fork or Clone the Repository**
   - Ensure you have the latest version of the project code

2. **Create a Web Service on Render**
   - Log in to your Render dashboard
   - Click "New" and select "Web Service"
   - Connect to your repository
   - Use the settings in the `render.yaml` file:
     - **Name**: jsspw-api
     - **Environment**: Node
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `node dist/index.js`

3. **Configure Environment Variables**
   - In the Render dashboard, navigate to your web service
   - Click on "Environment" and add the following variables:
     - `NODE_ENV`: Set to "production"
     - `SESSION_SECRET`: Generate a secure random string
     - `EMAIL_USER`: Your email address for sending notifications
     - `EMAIL_PASSWORD`: Password or app-specific password for the email account

4. **Deploy the Application**
   - Render will automatically deploy your application based on the settings provided
   - Monitor the build logs for any errors or issues

### Health Check

The application includes a health check endpoint at `/api/health` that Render will use to verify the application is running correctly. The health check returns a JSON response with the current status and timestamp.

## Project Organization

```
jsspw-website/
├── client/                  # Frontend React application
│   ├── public/              # Static assets
│   └── src/                 # React components & logic
│       ├── assets/          # Frontend-specific assets
│       ├── components/      # Reusable UI components
│       ├── hooks/           # Custom React hooks
│       ├── lib/             # Utility functions
│       ├── pages/           # Page components
│       └── sections/        # Page sections
├── server/                  # Backend Express application
│   ├── auth.ts              # Authentication logic
│   ├── emailService.ts      # Email functionality
│   ├── health.ts            # Health check endpoint
│   ├── index.ts             # Server entry point
│   ├── routes.ts            # API routes
│   ├── storage.ts           # Data storage layer
│   └── vite.ts              # Vite integration
├── shared/                  # Shared code
│   └── schema.ts            # Database schema & types
├── attached_assets/         # User-provided images and assets
├── render.yaml              # Render deployment configuration
└── package.json            # Project dependencies
```

## Accessing Admin Features

After deployment, you'll need to set up the initial admin user:

1. Send a POST request to `/api/setup/admin` with:
   ```json
   {
     "username": "admin",
     "password": "admin123"
   }
   ```

2. Access the admin dashboard at `/admin` and log in with the credentials you created.

## Managing Content

The admin interface allows you to:
- Manage faculty information
- Create and edit flash news
- Schedule events
- View and respond to contact messages
- Monitor site statistics

## Troubleshooting

- **Application not starting**: Check the build logs for errors
- **Email not working**: Verify the EMAIL_USER and EMAIL_PASSWORD environment variables are set correctly
- **Session issues**: Ensure the SESSION_SECRET environment variable is set

If you encounter any problems with the deployment or functionality, contact the development team for assistance.