import { users, type User, type InsertUser, type ContactMessage, type InsertContactMessage, type SiteStats } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getVisitorCount(): Promise<number>;
  incrementVisitorCount(): Promise<number>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private siteStats: SiteStats;
  currentUserId: number;
  currentContactMessageId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.currentUserId = 1;
    this.currentContactMessageId = 1;
    this.siteStats = {
      id: 1,
      visitorCount: 1000, // Start with an initial count
      lastUpdated: new Date()
    };
  }

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
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const now = new Date();
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: now 
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getVisitorCount(): Promise<number> {
    return this.siteStats.visitorCount;
  }

  async incrementVisitorCount(): Promise<number> {
    this.siteStats.visitorCount += 1;
    this.siteStats.lastUpdated = new Date();
    return this.siteStats.visitorCount;
  }
}

export const storage = new MemStorage();
