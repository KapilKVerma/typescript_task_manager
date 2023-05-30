import { Request, Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
import { createUser, getUsers, getUser } from "../service/user.service";
import logger from "../utils/logger";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput>,
  res: Response
) {
  try {
    const body = req.body;
    const newUser = await createUser(body);
    return res.send(newUser);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getUserHandler(req: Request, res: Response) {
  try {
    const userId = req.params.id;
    const user = await getUser(userId);
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getUsersHandler(req: Request, res: Response) {
  try {
    const companyId = req.params.compId;
    const companyUsers = await getUsers(companyId);
    return res.send(companyUsers);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
