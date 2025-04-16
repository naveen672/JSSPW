# Deploying to Hostinger

This guide will walk you through the process of deploying your JSS Polytechnic for Women website to Hostinger.

## Prerequisites

1. A Hostinger account with a hosting plan
2. PostgreSQL database credentials (provided by Hostinger or using a separate service like Neon)
3. Domain name (optional, but recommended)

## Step 1: Prepare Your Project for Production

Build the project locally:

```bash
# Install dependencies if not already installed
npm install

# Build the project
npm run build
```

This will create a `dist` folder with your production-ready files.

## Step 2: Database Setup

1. In your Hostinger control panel, create a new MySQL database or use their PostgreSQL service if available.
2. If using an external PostgreSQL service like Neon:
   - Sign up and create a new project at https://neon.tech
   - Create a new database
   - Save the connection string

## Step 3: Upload Files to Hostinger

1. Connect to Hostinger using FTP (FileZilla or similar FTP client)
   - Host: Your FTP hostname (provided by Hostinger)
   - Username: Your Hostinger username
   - Password: Your Hostinger password
   - Port: 21 (default)

2. Upload the contents of the `dist` folder to the `public_html` directory on your Hostinger server.

3. Create a `.env` file in your server root with the following variables:
   ```
   DATABASE_URL=postgresql://username:password@hostname:port/database
   SESSION_SECRET=your_random_session_secret
   EMAIL_USER=your_email@example.com
   EMAIL_PASSWORD=your_email_password
   ```

## Step 4: Configure Node.js Environment

1. In Hostinger's control panel, go to "Website" > "Node.js".
2. Enable Node.js for your domain.
3. Set the entry point to `dist/index.js`.
4. Save the configuration.

## Step 5: Configure Domain and SSL

1. In Hostinger's control panel, go to "Domain" > "DNS".
2. Point your domain or subdomain to your hosting server.
3. Enable SSL/TLS for secure connections:
   - Go to "SSL/TLS"
   - Select "Enable SSL" for your domain
   - Follow the prompts to complete the SSL setup

## Step 6: Verify Deployment

1. Visit your domain to verify the website is working correctly.
2. Test the admin login functionality.
3. Test the contact form to ensure emails are working.

## Troubleshooting

If you encounter issues:

1. Check Hostinger's error logs in the control panel.
2. Verify your `.env` file contains all required variables.
3. Ensure Node.js is properly configured in Hostinger.
4. Check database connection by testing DB credentials.

## Alternative Deployment Options

If you experience issues with Node.js on Hostinger, consider these alternatives:

1. **Render.com** - Easy deployment with PostgreSQL support
2. **Railway.app** - Simple deployment with integrated database
3. **Vercel** - Great for frontend with serverless functions

## Regular Maintenance

1. Regularly backup your database from Hostinger.
2. Keep your Node.js version updated as recommended by Hostinger.
3. Monitor your site for uptime and performance.