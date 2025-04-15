import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactMessageSchema, 
  insertFlashNewsSchema, 
  insertEventSchema,
  insertFacultySchema
} from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import { sendContactConfirmationEmail, sendAdminNotificationEmail } from "./emailService";
import { setupAuth } from "./auth";
import bcrypt from "bcrypt";

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup authentication
  const { checkAdmin } = setupAuth(app);

  // Visitor counter endpoints
  app.get("/api/visitors/count", async (req, res) => {
    try {
      const count = await storage.getVisitorCount();
      res.json({ count });
    } catch (error) {
      console.error("Error getting visitor count:", error);
      res.status(500).json({ message: "Failed to get visitor count" });
    }
  });

  app.post("/api/visitors/increment", async (req, res) => {
    try {
      const count = await storage.incrementVisitorCount();
      res.json({ count });
    } catch (error) {
      console.error("Error incrementing visitor count:", error);
      res.status(500).json({ message: "Failed to increment visitor count" });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const contactData = insertContactMessageSchema.parse(req.body);
      
      // Store contact message
      const message = await storage.createContactMessage(contactData);
      
      // Send confirmation email to the user
      const userEmailResult = await sendContactConfirmationEmail(message);
      
      // Send notification email to admin
      const adminEmailResult = await sendAdminNotificationEmail(message);
      
      // Log email sending results
      console.log(`Confirmation email to user: ${userEmailResult ? 'Sent' : 'Failed'}`);
      console.log(`Notification email to admin: ${adminEmailResult ? 'Sent' : 'Failed'}`);
      
      res.status(201).json({
        message: "Contact message submitted successfully",
        data: message,
        emailSent: userEmailResult
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Error submitting contact form:", error);
        res.status(500).json({ message: "Failed to submit contact form. Please try again later." });
      }
    }
  });

  // Flash News endpoints
  app.get("/api/flash-news", async (req, res) => {
    try {
      const news = await storage.getActiveFlashNews();
      res.json(news);
    } catch (error) {
      console.error("Error fetching flash news:", error);
      res.status(500).json({ message: "Failed to fetch flash news" });
    }
  });

  // Admin API endpoints (protected)
  // Flash News Management
  app.get("/api/admin/flash-news", checkAdmin, async (req, res) => {
    try {
      const news = await storage.getAllFlashNews();
      res.json(news);
    } catch (error) {
      console.error("Error fetching all flash news:", error);
      res.status(500).json({ message: "Failed to fetch flash news" });
    }
  });

  app.post("/api/admin/flash-news", checkAdmin, async (req, res) => {
    try {
      const newsData = insertFlashNewsSchema.parse(req.body);
      const news = await storage.createFlashNews(newsData);
      res.status(201).json(news);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Error creating flash news:", error);
        res.status(500).json({ message: "Failed to create flash news" });
      }
    }
  });

  app.patch("/api/admin/flash-news/:id", checkAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID" });
      }

      const existingNews = await storage.getFlashNews(id);
      if (!existingNews) {
        return res.status(404).json({ message: "Flash news not found" });
      }

      const newsData = req.body;
      const updatedNews = await storage.updateFlashNews(id, newsData);
      res.json(updatedNews);
    } catch (error) {
      console.error("Error updating flash news:", error);
      res.status(500).json({ message: "Failed to update flash news" });
    }
  });

  app.delete("/api/admin/flash-news/:id", checkAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID" });
      }

      const existingNews = await storage.getFlashNews(id);
      if (!existingNews) {
        return res.status(404).json({ message: "Flash news not found" });
      }

      await storage.deleteFlashNews(id);
      res.status(204).end();
    } catch (error) {
      console.error("Error deleting flash news:", error);
      res.status(500).json({ message: "Failed to delete flash news" });
    }
  });

  // Events Management
  app.get("/api/events", async (req, res) => {
    try {
      const events = await storage.getActiveEvents();
      res.json(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  app.get("/api/admin/events", checkAdmin, async (req, res) => {
    try {
      const events = await storage.getAllEvents();
      res.json(events);
    } catch (error) {
      console.error("Error fetching all events:", error);
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  app.post("/api/admin/events", checkAdmin, async (req, res) => {
    try {
      const eventData = insertEventSchema.parse(req.body);
      const event = await storage.createEvent(eventData);
      res.status(201).json(event);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Error creating event:", error);
        res.status(500).json({ message: "Failed to create event" });
      }
    }
  });

  app.patch("/api/admin/events/:id", checkAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID" });
      }

      const existingEvent = await storage.getEvent(id);
      if (!existingEvent) {
        return res.status(404).json({ message: "Event not found" });
      }

      const eventData = req.body;
      const updatedEvent = await storage.updateEvent(id, eventData);
      res.json(updatedEvent);
    } catch (error) {
      console.error("Error updating event:", error);
      res.status(500).json({ message: "Failed to update event" });
    }
  });

  app.delete("/api/admin/events/:id", checkAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID" });
      }

      const existingEvent = await storage.getEvent(id);
      if (!existingEvent) {
        return res.status(404).json({ message: "Event not found" });
      }

      await storage.deleteEvent(id);
      res.status(204).end();
    } catch (error) {
      console.error("Error deleting event:", error);
      res.status(500).json({ message: "Failed to delete event" });
    }
  });

  // Faculty Management
  app.get("/api/faculty", async (req, res) => {
    try {
      const faculty = await storage.getAllFaculty();
      res.json(faculty);
    } catch (error) {
      console.error("Error fetching faculty:", error);
      res.status(500).json({ message: "Failed to fetch faculty" });
    }
  });

  app.get("/api/admin/faculty", checkAdmin, async (req, res) => {
    try {
      const faculty = await storage.getAllFaculty();
      res.json(faculty);
    } catch (error) {
      console.error("Error fetching faculty:", error);
      res.status(500).json({ message: "Failed to fetch faculty" });
    }
  });

  app.post("/api/admin/faculty", checkAdmin, async (req, res) => {
    try {
      const facultyData = insertFacultySchema.parse(req.body);
      const faculty = await storage.createFaculty(facultyData);
      res.status(201).json(faculty);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Error creating faculty:", error);
        res.status(500).json({ message: "Failed to create faculty" });
      }
    }
  });

  app.patch("/api/admin/faculty/:id", checkAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID" });
      }

      const existingFaculty = await storage.getFaculty(id);
      if (!existingFaculty) {
        return res.status(404).json({ message: "Faculty not found" });
      }

      const facultyData = req.body;
      const updatedFaculty = await storage.updateFaculty(id, facultyData);
      res.json(updatedFaculty);
    } catch (error) {
      console.error("Error updating faculty:", error);
      res.status(500).json({ message: "Failed to update faculty" });
    }
  });

  app.delete("/api/admin/faculty/:id", checkAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID" });
      }

      const existingFaculty = await storage.getFaculty(id);
      if (!existingFaculty) {
        return res.status(404).json({ message: "Faculty not found" });
      }

      await storage.deleteFaculty(id);
      res.status(204).end();
    } catch (error) {
      console.error("Error deleting faculty:", error);
      res.status(500).json({ message: "Failed to delete faculty" });
    }
  });

  // Contact Messages Management
  app.get("/api/admin/contact-messages", checkAdmin, async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ message: "Failed to fetch contact messages" });
    }
  });

  app.get("/api/admin/contact-messages/:id", checkAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID" });
      }

      const message = await storage.getContactMessage(id);
      if (!message) {
        return res.status(404).json({ message: "Contact message not found" });
      }

      res.json(message);
    } catch (error) {
      console.error("Error fetching contact message:", error);
      res.status(500).json({ message: "Failed to fetch contact message" });
    }
  });
  
  app.patch("/api/admin/contact-messages/:id/read", checkAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID" });
      }

      const message = await storage.getContactMessage(id);
      if (!message) {
        return res.status(404).json({ message: "Contact message not found" });
      }

      // Mark message as read
      const updatedMessage = await storage.markMessageAsRead(id);
      res.json(updatedMessage);
    } catch (error) {
      console.error("Error marking message as read:", error);
      res.status(500).json({ message: "Failed to mark message as read" });
    }
  });

  // Admin Users Management
  app.post("/api/admin/users", checkAdmin, async (req, res) => {
    try {
      const { username, password, role } = req.body;
      
      // Check if username already exists
      const existingUser = await storage.getUserByUsername(username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }
      
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // Create user
      const user = await storage.createUser({
        username,
        password: hashedPassword,
        role: role || "user"
      });
      
      // Return user without password
      const { password: _, ...userWithoutPassword } = user;
      res.status(201).json(userWithoutPassword);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Failed to create user" });
    }
  });

  app.get("/api/admin/users", checkAdmin, async (req, res) => {
    try {
      const users = await storage.getAllUsers();
      // Remove passwords from response
      const sanitizedUsers = users.map(({ password, ...user }) => user);
      res.json(sanitizedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Failed to fetch users" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
