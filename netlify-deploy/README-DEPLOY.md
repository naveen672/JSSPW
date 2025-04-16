# JSS Polytechnic Website - Netlify Deployment Guide

This folder contains everything you need to deploy the JSS Polytechnic website to Netlify.

## Easy Deployment Steps

1. Go to [Netlify.com](https://netlify.com) and create an account or log in
2. Click "Add New Site" → "Deploy manually"
3. Drag and drop this entire folder (the one containing this README file)
4. Wait for deployment to complete (usually takes about 1-2 minutes)
5. Your site is now live at a Netlify URL (like random-name-123.netlify.app)

## What's Included

- **dist/** folder: Contains the pre-built website files
- **netlify/functions/api.js**: A simplified API for the website
- **netlify.toml**: Configuration file that tells Netlify how to serve your site

## Important Notes

1. This deployment uses a simplified API with demo data for:
   - Visitor counter
   - Flash news
   - Faculty listings
   - Events
   - Contact form (saves submissions but doesn't send emails)

2. For a full production deployment with real data storage, you would need to:
   - Connect to a database
   - Set up proper email sending
   - Configure more advanced serverless functions

## Free vs Paid Hosting

This deployment is completely free on Netlify's free tier, which includes:
- Up to 100GB bandwidth per month
- 300 build minutes per month
- Unlimited sites
- Automatic HTTPS
- Global CDN

If your site gets very popular, you can upgrade to paid plans starting around $19/month.

## Custom Domain

To use your own domain (like jsspw.org):
1. Purchase a domain from a registrar like GoDaddy, Namecheap, or Google Domains
2. In Netlify, go to Site settings → Domain management → Add custom domain
3. Follow Netlify's instructions to connect your domain

## Need Help?

For detailed Netlify documentation, visit: https://docs.netlify.com/