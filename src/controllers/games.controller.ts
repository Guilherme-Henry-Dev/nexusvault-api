import type { Request, Response } from "express";
import { createGameSchema, updateGameSchema } from '../validations/games.schemas.js';
import { createGame, listGames } from '../services/games.services.js';

export async function createGameCtrl(req:Request, res: Response) {
    const parsed = createGameSchema.safeParse(req.body);
    if (!parsed.sucess) return res.status(400).json(parsed.error.format());
        const userId = (req as any).userId as number;
        const game = await createGame(parsed.data, userId);
        res.status(201).json(game);
}

export async function listGamesCtrl(req: Request, res: Response) {
  const parsed = updateGameSchema.safeParse(req.query);
  if (!parsed.success) return res.status(400).json(parsed.error.format());
  const userId = (req as any).userId as number;
  const query: { q?: string; genre?: string; ratingMin?: number } = {};
  if (parsed.data.q !== undefined) query.q = parsed.data.q;
  if (parsed.data.genre !== undefined) query.genre = parsed.data.genre;
  if (parsed.data.ratingMin !== undefined) query.ratingMin = Number(parsed.data.ratingMin);

  const items = await listGames(query, userId);
  res.json(items);
}