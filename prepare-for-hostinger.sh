#!/bin/bash

# This script prepares your project for deployment to Hostinger

echo "Preparing JSS Polytechnic for Women website for Hostinger deployment..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building project for production..."
npm run build

# Create necessary directories
mkdir -p deploy

# Copy production files
echo "Copying production files to deploy directory..."
cp -r dist deploy/
cp -r client/public/uploads deploy/
cp Procfile deploy/
cp package.json deploy/
cp .env.example deploy/.env

# Create a ZIP file for easy upload
echo "Creating ZIP archive for upload..."
cd deploy
zip -r ../jsspw-deploy.zip .
cd ..

echo "Deployment package created: jsspw-deploy.zip"
echo "Upload this ZIP file to your Hostinger hosting account"
echo "Don't forget to configure your .env file on Hostinger with proper database credentials and email settings"
echo "See hostinger-deployment-guide.md for detailed instructions"