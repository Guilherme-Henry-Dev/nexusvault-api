import { Router } from "express";
import { authGuard } from "../middlewares/authGuard.js";
import {
  createGameCtrl,
  getAllGamesCtrl,
  getGameByIdCtrl,
  updateGameCtrl,
  deleteGameCtrl,
} from "../controllers/games.controller.js";

const gamesRouter = Router();

gamesRouter.post("/", authGuard, createGameCtrl);
gamesRouter.get("/", authGuard, getAllGamesCtrl);
gamesRouter.get("/:id", authGuard, getGameByIdCtrl);
gamesRouter.put("/:id", authGuard, updateGameCtrl);
gamesRouter.delete("/:id", authGuard, deleteGameCtrl);

export default gamesRouter;
