import { Request, Response } from 'express';

// Simple health check endpoint for Render
export function setupHealthEndpoint(app: any) {
  app.get('/api/health', (_req: Request, res: Response) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
  });
}