import { FilterQuery } from "mongoose";
import { omit } from "lodash";
import UserModel, { UserDocument, UserInput } from "../model/user.model";

export async function createUser(input: UserInput) {
  try {
    const user = await UserModel.create(input);
    return omit(user.toJSON(), "password", "passwordConfirmation");
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function getUser(input: string) {
  try {
    const user = await UserModel.findById(input).select("-password").lean();
    if (user) return user;
    return { message: "User not found" };
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function getUsers(input: string) {
  try {
    const users = await UserModel.find({ company: input })
      .select("-password")
      .lean();
    return users;
  } catch (e: any) {
    throw new Error(e);
  }
}
