import express from "express";
import validateResource from "../middleware/validateResource";
import { createCompanySchema } from "../schema/company.schema";
import { createCompanyHandler } from "../controller/company.controller";

const router = express.Router();

router.post(
  "/companies",
  validateResource(createCompanySchema),
  createCompanyHandler
);

export default router;
