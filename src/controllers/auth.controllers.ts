import type { Request, Response } from "express";
import { registerSchema, loginSchema } from "../validations/auth.schemas.js";
import { loginUser, registerUser } from "../services/auth.service.js";

export async function register(req: Request, res: Response) {
  const parsed = registerSchema.safeParse(req.body);

  if (!parsed.success)
    return res.status(400).json(parsed.error.format());

  const { name, email, password } = parsed.data;

  try {
    const user = await registerUser(name, email, password);
    res.status(201).json({ id: user.id, name: user.name, email: user.email });
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
}

export async function login(req: Request, res: Response) {
  const parsed = loginSchema.safeParse(req.body);

  // ✅ correção aqui (success)
  if (!parsed.success)
    return res.status(400).json(parsed.error.format());

  const { email, password } = parsed.data;

  try {
    const result = await loginUser(email, password);
    res.json(result);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
}