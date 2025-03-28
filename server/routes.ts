import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request data
      const contactData = contactSchema.parse(req.body);
      
      // Store the contact message
      const savedContact = await storage.createContactMessage(contactData);

      res.status(200).json({ 
        success: true, 
        message: "Message sent successfully", 
        contactId: savedContact.id 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      } else {
        console.error("Error saving contact message:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again later."
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
