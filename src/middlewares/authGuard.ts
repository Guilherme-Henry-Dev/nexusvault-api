import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function authGuard(req: Request, res: Response, next: NextFunction) {
  try {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ error: 'Missing Authorization header' });

    const [, token] = header.split(' ');
    if (!token) return res.status(401).json({ error: 'Invalid Authorization header' });

    const payload = jwt.verify(token, process.env.JWT_SECRET!) as { sub: number };
    (req as any).userId = payload.sub;
    next();
  } catch (err: any) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}
