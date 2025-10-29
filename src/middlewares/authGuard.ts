import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authGuard(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: "Missing Authorization header" });
  const parts = header.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(401).json({ error: "Invalid Authorization header" });
  }
  const token = parts[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as { sub: number };
    (req as any).userId = payload.sub;
    next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
