import type { Request, Response } from 'express';
import * as gameService from '../services/games.services.js';

export async function createGameCtrl(req: Request, res: Response) {
  try {
    const createdById = (req as any).userId as number;
    const {
      title,
      genre,
      platform,
      releaseYear,
      review,
      finishedAt,
    } = req.body;

    if (!title) return res.status(400).json({ error: 'title is required' });

    const game = await gameService.createGame({
      title,
      genre,
      platform,
      releaseYear: releaseYear ? Number(releaseYear) : undefined,
      review,
      finishedAt: finishedAt ? new Date(finishedAt) : null,
      createdById,
    });

    return res.status(201).json(game);
  } catch (e: any) {
    return res.status(400).json({ error: e.message });
  }
}
