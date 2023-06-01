import express from "express";
import validateResource from "../middleware/validateResource";
import { createSessionSchema } from "../schema/session.schema";
import {
  createSessionHandler,
  deleteSessionHandler,
  getUserSessionsHandler,
} from "../controller/session.controller";

import requireUser from "../middleware/requireUser";

const router = express.Router();

router.post(
  "/sessions",
  validateResource(createSessionSchema),
  createSessionHandler
);

router.get("/sessions", requireUser, getUserSessionsHandler);

router.delete("/sessions", requireUser, deleteSessionHandler);

export default router;
