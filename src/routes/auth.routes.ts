import { Router } from 'express';
import { loginCtrl, registerCtrl, meCtrl } from '../controllers/auth.controllers.js';
import { authGuard } from '../middlewares/authGuard.js';

export const authRouter = Router();

authRouter.post('/register', registerCtrl);
authRouter.post('/login', loginCtrl);
authRouter.get('/me', authGuard, meCtrl);
