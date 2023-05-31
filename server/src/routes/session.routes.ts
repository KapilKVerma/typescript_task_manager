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
  "/api/sessions",
  validateResource(createSessionSchema),
  createSessionHandler
);

router.get("/api/sessions", requireUser, getUserSessionsHandler);

router.delete("/api/sessions", requireUser, deleteSessionHandler);

export default router;
