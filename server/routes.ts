import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

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
      
      res.status(201).json({
        message: "Contact message submitted successfully",
        data: message
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
