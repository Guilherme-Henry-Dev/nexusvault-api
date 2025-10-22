import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { authRouther } from './routes/auth.routes';
import { gamesRouter } from './routes/games.routes';

const app = express();
app.use(cors())
app.use(express.json())

app.use('/auth', authRouther)
app.use('/games', gamesRouter)

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));