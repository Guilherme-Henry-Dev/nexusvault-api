import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { authRouter } from './routes/auth.routes.js';
import  gamesRouter  from './routes/games.routes.js';

const app = express();
app.use(cors())
app.use(express.json())

app.use('/auth', authRouter)
app.use('/games', gamesRouter)

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));