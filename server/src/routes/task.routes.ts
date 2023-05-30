import express from "express";
import validateResource from "../middleware/validateResource";
import { createTaskSchema } from "../schema/task.schema";
import { createTaskHandler } from "../controller/task.controller";

const router = express.Router();

router.post(
  "/api/tasks",
  validateResource(createTaskSchema),
  createTaskHandler
);

export default router;
