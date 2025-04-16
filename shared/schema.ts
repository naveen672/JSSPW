import { pgTable, text, serial, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const siteStats = pgTable("site_stats", {
  id: serial("id").primaryKey(),
  visitorCount: integer("visitor_count").notNull().default(0),
  lastUpdated: timestamp("last_updated").defaultNow().notNull(),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  role: text("role", { enum: ["user", "admin"] }).default("user").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  role: true,
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  isRead: boolean("is_read").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).pick({
  firstName: true,
  lastName: true,
  email: true,
  subject: true,
  message: true,
});

export const flashNews = pgTable("flash_news", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  link: text("link"),
  attachmentType: text("attachment_type"),
  attachmentPath: text("attachment_path"),
  active: boolean("active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertFlashNewsSchema = createInsertSchema(flashNews).pick({
  text: true,
  link: true,
  attachmentType: true,
  attachmentPath: true,
  active: true,
});

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: text("date").notNull(),
  time: text("time"),
  location: text("location").notNull(),
  image: text("image"),
  active: boolean("active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertEventSchema = createInsertSchema(events).pick({
  title: true,
  description: true,
  date: true,
  time: true,
  location: true,
  image: true,
  active: true,
});

export const faculty = pgTable("faculty", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  designation: text("designation").notNull(),
  department: text("department").notNull(),
  qualification: text("qualification").notNull(),
  experience: text("experience").notNull(),
  image: text("image"),
  email: text("email"),
  profile: text("profile"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertFacultySchema = createInsertSchema(faculty).pick({
  name: true,
  designation: true,
  department: true,
  qualification: true,
  experience: true,
  image: true,
  email: true,
  profile: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

export type InsertFlashNews = z.infer<typeof insertFlashNewsSchema>;
export type FlashNews = typeof flashNews.$inferSelect;

export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;

export type InsertFaculty = z.infer<typeof insertFacultySchema>;
export type Faculty = typeof faculty.$inferSelect;

export type SiteStats = typeof siteStats.$inferSelect;
