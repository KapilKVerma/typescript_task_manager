import express from "express";
import { findProjectsHanlder } from "../controller/project.controller";

const router = express.Router();

router.get("/projects", findProjectsHanlder);

export default router;
