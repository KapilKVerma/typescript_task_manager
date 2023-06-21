import express from "express";
import validateResource from "../middleware/validateResource";
import { createTaskSchema } from "../schema/task.schema";
import {
  createTaskHandler,
  getTasksHandler,
} from "../controller/task.controller";

const router = express.Router();

router.get("/tasks", getTasksHandler);
router.post("/tasks", validateResource(createTaskSchema), createTaskHandler);

export default router;
