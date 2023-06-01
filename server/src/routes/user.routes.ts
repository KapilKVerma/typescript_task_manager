import express from "express";
import validateResource from "../middleware/validateResource";
import { createUserSchema } from "../schema/user.schema";
import {
  createUserHandler,
  getUserHandler,
  getUsersHandler,
} from "../controller/user.controller";

const router = express.Router();

router.post(
  "/api/users",
  validateResource(createUserSchema),
  createUserHandler
);
router.get("/users/:id", getUserHandler);
router.get("/users/company/:compId", getUsersHandler);

export default router;
