import { Router } from 'express';
import { authGuard } from '../middlewares/authGuard.js';
import { createGameCtrl, listGamesCtrl } from '../controllers/games.controller.js';

export const gamesRouter = Router();
gamesRouter.use(authGuard);
gamesRouter.post('/', createGameCtrl);
gamesRouter.get('/', listGamesCtrl);