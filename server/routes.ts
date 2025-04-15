import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import { sendContactConfirmationEmail, sendAdminNotificationEmail } from "./emailService";

export async function registerRoutes(app: Express): Promise<Server> {
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

  const httpServer = createServer(app);
  return httpServer;
}
