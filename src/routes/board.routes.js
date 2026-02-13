import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  createBoard,
  getBoards,
  updateTasks,
} from "../controllers/board.controller.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", createBoard);
router.get("/", getBoards);
router.put("/:boardId/tasks", updateTasks);

export default router;
