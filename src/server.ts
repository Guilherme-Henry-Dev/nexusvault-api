import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { authRouter } from './routes/auth.routes.js';
import gamesRouter from './routes/games.routes.js';
import { errorHandler } from './middlewares/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const swaggerPath = path.join(__dirname, 'docs', 'swagger.json');
const swaggerDocument = JSON.parse(readFileSync(swaggerPath, 'utf-8'));

const app = express();
app.get('/', (_req, res) => {
  res.send('🚀 NexusVault API is running! Check /docs for documentation.');
});
app.get('/healthz', (_req, res) => res.status(200).send('ok'));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/auth', authRouter);
app.use('/games', gamesRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
  console.log(`Docs: /docs | Health: /healthz`);
});