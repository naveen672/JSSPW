import { 
  users, 
  contactMessages, 
  flashNews, 
  events, 
  faculty, 
  siteStats,
  type User, 
  type InsertUser, 
  type ContactMessage, 
  type InsertContactMessage, 
  type SiteStats,
  type FlashNews,
  type InsertFlashNews,
  type Event,
  type InsertEvent,
  type Faculty,
  type InsertFaculty
} from "@shared/schema";
import session from "express-session";
import { IStorage } from "./storage";
import { db, pool } from "./db";
import { eq, and, desc, asc } from "drizzle-orm";
import connectPg from "connect-pg-simple";
import bcrypt from "bcrypt";

const PostgresSessionStore = connectPg(session);

export class DatabaseStorage implements IStorage {
  sessionStore: session.Store;
  
  constructor() {
    this.sessionStore = new PostgresSessionStore({ 
      pool, 
      createTableIfMissing: true,
      tableName: 'session'
    });
    
    // Initialize default data
    this.initializeDefaultData().catch(err => {
      console.error("Error initializing default data:", err);
    });
  }
  
  private async initializeDefaultData() {
    try {
      // Initialize site stats if not exist
      const existingStats = await db.select().from(siteStats);
      if (existingStats.length === 0) {
        await db.insert(siteStats).values({
          visitorCount: 1000,
          lastUpdated: new Date(),
        });
      }
      
      // Create default admin user if no users exist
      const existingUsers = await db.select().from(users);
      if (existingUsers.length === 0) {
        const hashedPassword = await bcrypt.hash("admin123", 10);
        await db.insert(users).values({
          username: "admin",
          password: hashedPassword,
          role: "admin",
        });
      }
      
      // Create default flash news if none exist
      const existingNews = await db.select().from(flashNews);
      if (existingNews.length === 0) {
        await db.insert(flashNews).values([
          {
            text: "Summer admissions now open for 2025-2026 academic year",
            link: "/admissions",
            active: true
          },
          {
            text: "⭐ Dr. B.G. Lokesha awarded National Teaching Excellence Medal",
            link: "/faculty",
            active: true
          },
          {
            text: "New Engineering Building opening September 1st",
            link: "/campus",
            active: true
          },
          {
            text: "JSS Polytechnic for Women ranks #5 in Best Technical Institutions",
            link: "/rankings",
            active: true
          }
        ]);
      }
    } catch (error) {
      console.error("Error initializing default data:", error);
    }
  }
  
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }
  
  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }
  
  async createUser(insertUser: InsertUser): Promise<User> {
    // Password should already be hashed in auth.ts
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  async getAllUsers(): Promise<User[]> {
    return await db.select().from(users);
  }
  
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const [message] = await db.insert(contactMessages).values({
      ...insertMessage,
      isRead: false,
    }).returning();
    return message;
  }
  
  async getAllContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));
  }
  
  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    const [message] = await db.select().from(contactMessages).where(eq(contactMessages.id, id));
    return message;
  }
  
  async markMessageAsRead(id: number): Promise<ContactMessage | undefined> {
    const [updatedMessage] = await db.update(contactMessages)
      .set({ isRead: true })
      .where(eq(contactMessages.id, id))
      .returning();
    return updatedMessage;
  }
  
  async getVisitorCount(): Promise<number> {
    const [stats] = await db.select().from(siteStats);
    return stats?.visitorCount || 0;
  }
  
  async incrementVisitorCount(): Promise<number> {
    const [stats] = await db.select().from(siteStats);
    if (!stats) {
      const [newStats] = await db.insert(siteStats).values({
        visitorCount: 1,
        lastUpdated: new Date(),
      }).returning();
      return newStats.visitorCount;
    }
    
    const [updatedStats] = await db.update(siteStats)
      .set({ 
        visitorCount: stats.visitorCount + 1,
        lastUpdated: new Date(),
      })
      .where(eq(siteStats.id, stats.id))
      .returning();
    return updatedStats.visitorCount;
  }
  
  async createFlashNews(news: InsertFlashNews): Promise<FlashNews> {
    const [flashNewsItem] = await db.insert(flashNews).values(news).returning();
    return flashNewsItem;
  }
  
  async getFlashNews(id: number): Promise<FlashNews | undefined> {
    const [news] = await db.select().from(flashNews).where(eq(flashNews.id, id));
    return news;
  }
  
  async getAllFlashNews(): Promise<FlashNews[]> {
    return await db.select().from(flashNews).orderBy(desc(flashNews.createdAt));
  }
  
  async getActiveFlashNews(): Promise<FlashNews[]> {
    return await db.select().from(flashNews).where(eq(flashNews.active, true)).orderBy(desc(flashNews.createdAt));
  }
  
  async updateFlashNews(id: number, news: Partial<InsertFlashNews>): Promise<FlashNews | undefined> {
    const [updatedNews] = await db.update(flashNews)
      .set(news)
      .where(eq(flashNews.id, id))
      .returning();
    return updatedNews;
  }
  
  async deleteFlashNews(id: number): Promise<boolean> {
    const result = await db.delete(flashNews).where(eq(flashNews.id, id));
    return !!result;
  }
  
  async createEvent(event: InsertEvent): Promise<Event> {
    const [newEvent] = await db.insert(events).values(event).returning();
    return newEvent;
  }
  
  async getEvent(id: number): Promise<Event | undefined> {
    const [event] = await db.select().from(events).where(eq(events.id, id));
    return event;
  }
  
  async getAllEvents(): Promise<Event[]> {
    return await db.select().from(events).orderBy(desc(events.createdAt));
  }
  
  async getActiveEvents(): Promise<Event[]> {
    return await db.select().from(events).where(eq(events.active, true)).orderBy(desc(events.createdAt));
  }
  
  async updateEvent(id: number, event: Partial<InsertEvent>): Promise<Event | undefined> {
    const [updatedEvent] = await db.update(events)
      .set(event)
      .where(eq(events.id, id))
      .returning();
    return updatedEvent;
  }
  
  async deleteEvent(id: number): Promise<boolean> {
    const result = await db.delete(events).where(eq(events.id, id));
    return !!result;
  }
  
  async createFaculty(facultyData: InsertFaculty): Promise<Faculty> {
    const [newFaculty] = await db.insert(faculty).values(facultyData).returning();
    return newFaculty;
  }
  
  async getFaculty(id: number): Promise<Faculty | undefined> {
    const [facultyMember] = await db.select().from(faculty).where(eq(faculty.id, id));
    return facultyMember;
  }
  
  async getAllFaculty(): Promise<Faculty[]> {
    return await db.select().from(faculty).orderBy(asc(faculty.name));
  }
  
  async updateFaculty(id: number, facultyUpdate: Partial<InsertFaculty>): Promise<Faculty | undefined> {
    const [updatedFaculty] = await db.update(faculty)
      .set(facultyUpdate)
      .where(eq(faculty.id, id))
      .returning();
    return updatedFaculty;
  }
  
  async deleteFaculty(id: number): Promise<boolean> {
    const result = await db.delete(faculty).where(eq(faculty.id, id));
    return !!result;
  }
}