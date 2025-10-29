import { Router } from "express";
import { authGuard } from "../middlewares/authGuard.js";
import {
  createGameCtrl,
  getAllGamesCtrl,
  getGameByIdCtrl,
  updateGameCtrl,
  deleteGameCtrl,
} from "../controllers/games.controller.js";

const router = Router();

router.get("/", authGuard, getAllGamesCtrl);
router.get("/:id", authGuard, getGameByIdCtrl);
router.post("/", authGuard, createGameCtrl);
router.put("/:id", authGuard, updateGameCtrl);
router.delete("/:id", authGuard, deleteGameCtrl);

export default router;
