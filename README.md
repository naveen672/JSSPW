# JSS Polytechnic for Women Website

A comprehensive website for JSS Polytechnic for Women featuring public-facing content and an admin portal for managing various aspects of the website.

## Features

- Modern, responsive design with animations
- Dark mode support
- Admin panel for content management
- Faculty directory
- Events management
- Flash news ticker
- Contact form
- Visitor counter

## Quick Start (Windows)

1. **Install Dependencies**
   ```
   npm install
   ```

2. **Development Mode (Windows Users)**
   ```
   start-windows.bat
   ```
   
   Or if using PowerShell:
   ```
   .\start-windows.ps1
   ```
   
   This will start both the server and client on http://localhost:5000

3. **Production Mode (Windows Users)**
   ```
   start-production.bat
   ```
   
   Or if using PowerShell:
   ```
   .\start-production.ps1
   ```
   
   This will build and start the optimized production version

## Alternative Start Methods

If the batch files don't work, try:

```
npm install -g cross-env
cross-env NODE_ENV=development npx tsx server/index.ts
```

Or using PowerShell:
```
$env:NODE_ENV="development"
npx tsx server/index.ts
```

For production without the scripts:
```
npm run build
$env:NODE_ENV="production"
node dist/index.js
```

## Admin Access

- URL: http://localhost:5000/admin
- Default credentials:
  - Username: `admin`
  - Password: `admin123`

## Email Configuration

For local development, the application is configured to mock email sending and will log email content to the console instead of actually sending emails.

If you want to enable actual email sending:
1. Create a `.env` file in the root directory
2. Add the following environment variables:
   ```
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=your_app_password
   ```
3. For Gmail, you need to generate an App Password from your Google Account settings

## Project Structure

- `/client` - Frontend React application
- `/server` - Backend Express server
- `/shared` - Shared types and schemas
- `/attached_assets` - Static images and assets

## Tech Stack

- **Frontend**: React, TailwindCSS, Shadcn UI, React Query
- **Backend**: Express, Node.js
- **Database**: In-memory (for development)
- **Authentication**: Passport.js with session-based auth

## Development Notes

- The website uses an in-memory database for simplicity, so data will be lost when the server is restarted
- Environment variables are pre-configured for local development
- For production deployment, you would need to set proper environment variables

## Browser Compatibility

Tested and works on:
- Chrome
- Firefox
- Edge
- Safari