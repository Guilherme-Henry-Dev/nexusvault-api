import type { Request, Response } from 'express';
import * as gameService from '../services/games.services.js';

export async function getAllGamesCtrl(req: Request, res: Response) {
  try {
    const games = await gameService.getAllGames();
    return res.json(games);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}

export async function getGameByIdCtrl(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const game = await gameService.getGameById(id);
    if (!game) return res.status(404).json({ error: "Jogo não encontrado" });
    return res.json(game);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}

export async function createGameCtrl(req: Request, res: Response) {
  try {
    const createdById = (req as any).userId;
    const game = await gameService.createGame({ ...req.body, createdById });
    return res.status(201).json(game);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}

export async function updateGameCtrl(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const game = await gameService.updateGame(id, req.body);
    return res.json(game);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}

export async function deleteGameCtrl(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await gameService.deleteGame(id);
    return res.status(204).send();
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}