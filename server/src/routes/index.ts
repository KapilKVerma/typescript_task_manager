import express from "express";
import auth from "./auth.routes";
import company from "./company.routes";
import user from "./user.routes";
import task from "./task.routes";
import session from "./session.routes";

const router = express.Router();

router.use(auth);
router.use(session);
router.use(company);
router.use(user);
router.use(task);

export default router;
