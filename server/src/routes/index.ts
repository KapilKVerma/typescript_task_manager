import express from "express";
import auth from "./auth.routes";
import user from "./user.routes";
import task from "./task.routes";

const router = express.Router();

router.use(auth);
router.use(user);
router.use(task);

export default router;
