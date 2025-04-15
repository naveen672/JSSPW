# JSS Polytechnic for Women Website - Hostinger Deployment Guide

This guide will help you deploy the JSS Polytechnic for Women website to Hostinger using a shared hosting plan.

## Prerequisites

1. A Hostinger shared hosting account
2. FTP client (like FileZilla) or Hostinger's File Manager
3. Access to Hostinger's MySQL database management (phpMyAdmin)
4. Node.js and npm installed on your local machine (for building the React app)

## Step 1: Build the React Frontend

Before uploading to Hostinger, you need to build the React frontend into static files:

1. Open a terminal in your local project directory
2. Run the build command:
   ```bash
   npm run build
   ```
3. This will create a `build` folder with all the static files

## Step 2: Set Up the Database on Hostinger

1. Log in to your Hostinger control panel
2. Navigate to the MySQL Databases section
3. Create a new database (e.g., `jsspw`)
4. Create a new user and assign it to the database with all privileges
5. Note down the database name, username, and password

## Step 3: Configure the PHP Backend

1. Open the file `api/includes/config.php`
2. Update the database connection settings with your Hostinger MySQL details:
   ```php
   define('DB_SERVER', 'localhost');
   define('DB_USERNAME', 'your_db_username');
   define('DB_PASSWORD', 'your_db_password');
   define('DB_NAME', 'your_db_name');
   ```
3. Update the site configuration:
   ```php
   define('SITE_URL', 'https://your-domain.com');
   define('ADMIN_EMAIL', 'your-email@example.com');
   define('EMAIL_FROM', 'naveenravi.ch@gmail.com');
   ```
4. Generate a strong random string for the session secret:
   ```php
   define('SESSION_SECRET', 'generate_a_random_string_here');
   ```

## Step 4: Upload Files to Hostinger

### Using FTP Client (FileZilla):

1. Connect to your Hostinger account using FTP
   - Host: Your FTP hostname (from Hostinger)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21

2. Upload the following files and directories to your hosting root directory:
   - `api/` directory (all PHP backend files)
   - `build/` directory (the built React app)
   - `.htaccess` file
   - `index.php` file

### Using Hostinger File Manager:

1. Log in to your Hostinger control panel
2. Navigate to the File Manager
3. Upload the same files and directories mentioned above

## Step 5: Initialize the Database

1. Visit your website's URL (e.g., `https://your-domain.com/`)
2. The `index.php` file will automatically set up the database tables and create a default admin user
   - Username: `admin`
   - Password: `admin123`

3. **Important:** After confirming everything works, change the default admin password through the admin dashboard

## Step 6: Test the Website

1. Visit your website's URL to make sure the frontend loads correctly
2. Test the admin login at `/admin` with the default credentials
3. Test all features:
   - Navigation and page loading
   - Contact form submission
   - Admin dashboard functionality
   - Flash news display
   - Events display
   - Faculty listing

## Step 7: Security Considerations

1. Change the default admin password immediately
2. Update the `SESSION_SECRET` in `config.php` with a strong random string
3. Consider setting up HTTPS if not already enabled
4. Regularly backup your database using Hostinger's backup tools

## Troubleshooting

### PHP Error Logs

If you encounter issues, check the PHP error logs in your Hostinger control panel.

### Common Issues:

1. **Database Connection Error**:
   - Verify your database credentials in `config.php`
   - Make sure the database user has proper permissions

2. **API Endpoints Not Working**:
   - Check if mod_rewrite is enabled on Hostinger
   - Verify the `.htaccess` file was uploaded correctly

3. **React Routes Not Working**:
   - Make sure the `.htaccess` file is properly handling React Router routes

4. **Email Not Sending**:
   - Check the email settings in your Hostinger control panel
   - Consider using a service like PHPMailer or Sendgrid for more reliable email delivery

## Maintenance

1. **Updating Content**:
   - Use the admin dashboard to update content
   - No need to modify code for content changes

2. **Code Updates**:
   - For frontend changes, update the React code locally, rebuild, and upload the new `build` folder
   - For backend changes, update the PHP files and upload them

3. **Regular Backups**:
   - Set up regular database backups through Hostinger
   - Consider downloading a full site backup periodically