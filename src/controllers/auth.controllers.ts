import type { Request, Response } from 'express';
import  bcryptjs  from 'bcryptjs';
import jwt from 'jsonwebtoken';
import  prisma  from '../utils/prisma.js';

export async function registerCtrl(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body as { name: string; email: string; password: string };

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'name, email and password are required' });
    }

    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) return res.status(400).json({ error: 'E-mail already registered' });

    const passwordHash = await bcryptjs.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, passwordHash },
      select: { id: true, name: true, email: true },
    });

    return res.status(201).json(user);
  } catch (e: any) {
    return res.status(400).json({ error: e.message });
  }
}

export async function loginCtrl(req: Request, res: Response) {
  try {
    const { email, password } = req.body as { email: string; password: string };
    if (!email || !password) return res.status(400).json({ error: 'email and password are required' });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const ok = await bcryptjs.compare(password, user.passwordHash);
    if (!ok) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET!, { expiresIn: '7d' });

    return res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (e: any) {
    return res.status(400).json({ error: e.message });
  }
}

export async function meCtrl(req: Request, res: Response) {
  const id = (req as any).userId as number;
  const user = await prisma.user.findUnique({
    where: { id },
    select: { id: true, name: true, email: true },
  });
  return res.json(user);
}
