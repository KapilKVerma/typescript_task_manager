import { Request, Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.service";
import logger from "../utils/logger";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput>,
  res: Response
) {
  try {
    const body = req.body;
    console.log(body);
    const newUser = await createUser(body);
    return res.send("newUser");
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
