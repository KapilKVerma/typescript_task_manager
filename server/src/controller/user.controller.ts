import { Request, Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.service";
import UserModel, { User } from "../model/user.model";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput>,
  res: Response
) {
  const body = req.body;

  try {
    const user = await UserModel.create(body);

    // await sendEmail({
    //   to: user.email,
    //   from: "test@example.com",
    //   subject: "Verify your email",
    //   text: `verification code: ${user.verificationCode}. Id: ${user._id}`,
    // });

    return res.send("User successfully created");
  } catch (err: any) {
    if (err.code === 11000) {
      return res.status(409).send("Account already exists");
    }
    return res.status(500).send(err);
  }
}
