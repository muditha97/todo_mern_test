import express from 'express';
import {
  getTodos,
  createTask,
  updateTask,
  deleteTask,
  completeTask,
} from "../controllers/todos.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);
router.patch("/:id", completeTask);

export default router;