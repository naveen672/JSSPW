import { 
  users, 
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
import createMemoryStore from "memorystore";

const MemoryStore = createMemoryStore(session);

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  sessionStore: session.Store;
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllUsers(): Promise<User[]>;
  
  // Contact message methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
  getContactMessage(id: number): Promise<ContactMessage | undefined>;
  markMessageAsRead(id: number): Promise<ContactMessage | undefined>;
  
  // Visitor counter methods
  getVisitorCount(): Promise<number>;
  incrementVisitorCount(): Promise<number>;
  
  // Flash news methods
  createFlashNews(news: InsertFlashNews): Promise<FlashNews>;
  getFlashNews(id: number): Promise<FlashNews | undefined>;
  getAllFlashNews(): Promise<FlashNews[]>;
  getActiveFlashNews(): Promise<FlashNews[]>;
  updateFlashNews(id: number, news: Partial<InsertFlashNews>): Promise<FlashNews | undefined>;
  deleteFlashNews(id: number): Promise<boolean>;
  
  // Events methods
  createEvent(event: InsertEvent): Promise<Event>;
  getEvent(id: number): Promise<Event | undefined>;
  getAllEvents(): Promise<Event[]>;
  getActiveEvents(): Promise<Event[]>;
  updateEvent(id: number, event: Partial<InsertEvent>): Promise<Event | undefined>;
  deleteEvent(id: number): Promise<boolean>;
  
  // Faculty methods
  createFaculty(faculty: InsertFaculty): Promise<Faculty>;
  getFaculty(id: number): Promise<Faculty | undefined>;
  getAllFaculty(): Promise<Faculty[]>;
  updateFaculty(id: number, faculty: Partial<InsertFaculty>): Promise<Faculty | undefined>;
  deleteFaculty(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private flashNews: Map<number, FlashNews>;
  private events: Map<number, Event>;
  private faculty: Map<number, Faculty>;
  private siteStats: SiteStats;
  
  sessionStore: session.Store;
  
  currentUserId: number;
  currentContactMessageId: number;
  currentFlashNewsId: number;
  currentEventId: number;
  currentFacultyId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.flashNews = new Map();
    this.events = new Map();
    this.faculty = new Map();
    
    // Initialize session store
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000 // Prune expired entries every 24h
    });
    
    this.currentUserId = 1;
    this.currentContactMessageId = 1;
    this.currentFlashNewsId = 1;
    this.currentEventId = 1;
    this.currentFacultyId = 1;
    
    this.siteStats = {
      id: 1,
      visitorCount: 1000, // Start with an initial count
      lastUpdated: new Date()
    };
    
    // Create an admin user for testing
    this.users.set(this.currentUserId, {
      id: this.currentUserId,
      username: "admin",
      password: "$2b$10$G62LkLCbHDtFCI/ceyeJzOFlmQZqLX7/8y1po97C30uNhePfu8IHy", // "admin123" - fresh bcrypt hash
      role: "admin",
      createdAt: new Date()
    });
    this.currentUserId++;
    
    // Add some initial flash news
    this.createFlashNews({
      text: "Summer admissions now open for 2025-2026 academic year",
      link: "/admissions",
      active: true
    });
    
    this.createFlashNews({
      text: "⭐ Dr. B.G. Lokesha awarded National Teaching Excellence Medal",
      link: "/faculty",
      active: true
    });
    
    this.createFlashNews({
      text: "New Engineering Building opening September 1st",
      link: "/campus",
      active: true
    });
    
    this.createFlashNews({
      text: "JSS Polytechnic for Women ranks #5 in Best Technical Institutions",
      link: "/rankings",
      active: true
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    // Ensure role is assigned
    const role = insertUser.role || "user";
    const user: User = { 
      ...insertUser, 
      role,
      id, 
      createdAt: new Date() 
    };
    this.users.set(id, user);
    return user;
  }
  
  async getAllUsers(): Promise<User[]> {
    return Array.from(this.users.values());
  }
  
  // Contact message methods
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const now = new Date();
    const message: ContactMessage = { 
      ...insertMessage, 
      id,
      isRead: false,
      createdAt: now 
    };
    this.contactMessages.set(id, message);
    return message;
  }
  
  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  
  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    return this.contactMessages.get(id);
  }
  
  async markMessageAsRead(id: number): Promise<ContactMessage | undefined> {
    const message = this.contactMessages.get(id);
    if (message) {
      const updatedMessage = { ...message, isRead: true };
      this.contactMessages.set(id, updatedMessage);
      return updatedMessage;
    }
    return undefined;
  }

  // Visitor counter methods
  async getVisitorCount(): Promise<number> {
    return this.siteStats.visitorCount;
  }

  async incrementVisitorCount(): Promise<number> {
    this.siteStats.visitorCount += 1;
    this.siteStats.lastUpdated = new Date();
    return this.siteStats.visitorCount;
  }
  
  // Flash news methods
  async createFlashNews(news: InsertFlashNews): Promise<FlashNews> {
    const id = this.currentFlashNewsId++;
    // Ensure active is defined
    const active = news.active ?? true;
    const flashNews: FlashNews = {
      ...news,
      active,
      id,
      createdAt: new Date()
    };
    this.flashNews.set(id, flashNews);
    return flashNews;
  }
  
  async getFlashNews(id: number): Promise<FlashNews | undefined> {
    return this.flashNews.get(id);
  }
  
  async getAllFlashNews(): Promise<FlashNews[]> {
    return Array.from(this.flashNews.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  
  async getActiveFlashNews(): Promise<FlashNews[]> {
    return Array.from(this.flashNews.values())
      .filter(news => news.active)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  
  async updateFlashNews(id: number, news: Partial<InsertFlashNews>): Promise<FlashNews | undefined> {
    const existingNews = this.flashNews.get(id);
    if (existingNews) {
      const updatedNews = { ...existingNews, ...news };
      this.flashNews.set(id, updatedNews);
      return updatedNews;
    }
    return undefined;
  }
  
  async deleteFlashNews(id: number): Promise<boolean> {
    return this.flashNews.delete(id);
  }
  
  // Events methods
  async createEvent(event: InsertEvent): Promise<Event> {
    const id = this.currentEventId++;
    // Ensure active is defined
    const active = event.active ?? true;
    const newEvent: Event = {
      ...event,
      active,
      id,
      createdAt: new Date()
    };
    this.events.set(id, newEvent);
    return newEvent;
  }
  
  async getEvent(id: number): Promise<Event | undefined> {
    return this.events.get(id);
  }
  
  async getAllEvents(): Promise<Event[]> {
    return Array.from(this.events.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  
  async getActiveEvents(): Promise<Event[]> {
    return Array.from(this.events.values())
      .filter(event => event.active)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  
  async updateEvent(id: number, event: Partial<InsertEvent>): Promise<Event | undefined> {
    const existingEvent = this.events.get(id);
    if (existingEvent) {
      const updatedEvent = { ...existingEvent, ...event };
      this.events.set(id, updatedEvent);
      return updatedEvent;
    }
    return undefined;
  }
  
  async deleteEvent(id: number): Promise<boolean> {
    return this.events.delete(id);
  }
  
  // Faculty methods
  async createFaculty(faculty: InsertFaculty): Promise<Faculty> {
    const id = this.currentFacultyId++;
    const newFaculty: Faculty = {
      ...faculty,
      // Handle optional fields
      email: faculty.email || null,
      image: faculty.image || null,
      profile: faculty.profile || null,
      id,
      createdAt: new Date()
    };
    this.faculty.set(id, newFaculty);
    return newFaculty;
  }
  
  async getFaculty(id: number): Promise<Faculty | undefined> {
    return this.faculty.get(id);
  }
  
  async getAllFaculty(): Promise<Faculty[]> {
    return Array.from(this.faculty.values())
      .sort((a, b) => a.name.localeCompare(b.name));
  }
  
  async updateFaculty(id: number, faculty: Partial<InsertFaculty>): Promise<Faculty | undefined> {
    const existingFaculty = this.faculty.get(id);
    if (existingFaculty) {
      const updatedFaculty = { ...existingFaculty, ...faculty };
      this.faculty.set(id, updatedFaculty);
      return updatedFaculty;
    }
    return undefined;
  }
  
  async deleteFaculty(id: number): Promise<boolean> {
    return this.faculty.delete(id);
  }
}

// Import the database storage
import { DatabaseStorage } from "./db-storage";

// Choose which storage implementation to use
// Set to true to use database, false to use memory storage
const USE_DATABASE = true;

export const storage: IStorage = USE_DATABASE 
  ? new DatabaseStorage()
  : new MemStorage();
