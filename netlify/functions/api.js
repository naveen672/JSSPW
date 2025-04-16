// This is a simple proxy to your API
const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);

// Import your actual application routes
const { setupAuth } = require('../../server/auth');
const { storage } = require('../../server/storage');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Session configuration for serverless
app.use(session({
  secret: process.env.SESSION_SECRET || 'dev-secret',
  resave: false,
  saveUninitialized: false,
  store: new MemoryStore({
    checkPeriod: 86400000 // prune expired entries every 24h
  })
}));

// Setup authentication
setupAuth(app);

// API routes
app.get('/api/user', (req, res) => {
  if (!req.isAuthenticated()) return res.status(401).json({ message: 'Not authenticated' });
  res.json(req.user);
});

// Contact messages
app.post('/api/contact', async (req, res) => {
  try {
    const message = await storage.createContactMessage(req.body);
    res.status(201).json({
      message: 'Contact message submitted successfully',
      contactMessage: message
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Visitor counter
app.post('/api/visitors/increment', async (req, res) => {
  try {
    const count = await storage.incrementVisitorCount();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Flash news
app.get('/api/flash-news', async (req, res) => {
  try {
    const news = await storage.getActiveFlashNews();
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Events
app.get('/api/events', async (req, res) => {
  try {
    const events = await storage.getActiveEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Faculty
app.get('/api/faculty', async (req, res) => {
  try {
    const faculty = await storage.getAllFaculty();
    res.json(faculty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Admin routes
app.get('/api/admin/contact-messages', async (req, res) => {
  if (!req.isAuthenticated()) return res.status(401).json({ message: 'Not authenticated' });
  try {
    const messages = await storage.getAllContactMessages();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Export the serverless handler
module.exports.handler = serverless(app);