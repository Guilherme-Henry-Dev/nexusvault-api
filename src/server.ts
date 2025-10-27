import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { authRouter } from './routes/auth.routes.js';
import  gamesRouter  from './routes/games.routes.js';
import { errorHandler } from "./middlewares/errorHandler.js";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger.json" assert { type: "json" };

const app = express();

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors())
app.use(express.json())
app.use(morgan("dev"));

app.use('/auth', authRouter)
app.use('/games', gamesRouter)
app.use(errorHandler);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));