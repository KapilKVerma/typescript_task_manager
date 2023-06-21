import express from "express";
import validateResource from "../middleware/validateResource";
import { createTaskSchema } from "../schema/task.schema";
import {
  createTaskHandler,
  getTasksHandler,
  updateTaskActiveStatus,
  updateTaskProgressStatus,
  deleteTaskHandler,
} from "../controller/task.controller";

const router = express.Router();

router.get("/tasks", getTasksHandler);
router.post("/tasks", validateResource(createTaskSchema), createTaskHandler);
router.put("/tasks/:taskId/activeStatus", updateTaskActiveStatus);
router.put("/tasks/:taskId/progressStatus", updateTaskProgressStatus);
router.delete("/tasks/:taskId", deleteTaskHandler);

export default router;
