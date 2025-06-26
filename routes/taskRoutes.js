import express from "express";
import {
  createTask,
  getTasks,
  updateTaskStatus,
  deleteTask
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/tasks", createTask);
router.get("/tasks", getTasks);
router.put("/tasks/:id", updateTaskStatus);
router.delete("/tasks/:id", deleteTask);

export default router;