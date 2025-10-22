import { Router } from 'express';
import { authGuard } from '../middlewares/authGuard';
import { createGameCtrl, listGamesCtrl } from '../controllers/games.controller';

export const gamesRouter = Router();
gamesRouter.use(authGuard);
gamesRouter.post('/', createGameCtrl);
gamesRouter.get('/', listGamesCtrl);