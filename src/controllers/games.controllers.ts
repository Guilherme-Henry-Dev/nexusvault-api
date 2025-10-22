import { Request, Response } from "express";
import { createGameSchema, queryGamesSchema } from '../validations/games.schema';
import { createGame, listGames } from '../services/games.service';

export async function createGameCtrl(req:Request, res: Response) {
    const parsed = createGameSchema.safeParse(req.body);
    if (!parsed.sucess) return res.status(400).json(parsed.error.format());
        const userId = (req as any).userId as number;
        const game = await createGame(parsed.data, userId);
        res.status(201).json(game);
}

export async function listGamesCtrl(req: Request, res: Response) {
  const parsed = queryGamesSchema.safeParse(req.query);
  if (!parsed.success) return res.status(400).json(parsed.error.format());
  const userId = (req as any).userId as number;
  const items = await listGames({
    q: parsed.data.q,
    genre: parsed.data.genre,
    ratingMin: parsed.data.ratingMin ? Number(parsed.data.ratingMin) : undefined
  }, userId);
  res.json(items);
}