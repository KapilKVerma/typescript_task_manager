import { Request, Response } from "express";
import { CreateTaskInput } from "../schema/task.schema";
import { findTasks } from "../service/task.service";

import TaskModel from "../model/task.model";

export async function createTaskHandler(
  req: Request<{}, {}, CreateTaskInput>,
  res: Response
) {
  const body = req.body;

  try {
    console.log(body);
    // const newTask = new TaskModel({ ...body });

    return res.send("User successfully created");
  } catch (err: any) {
    if (err.code === 11000) {
      return res.status(409).send("Account already exists");
    }
    return res.status(500).send(err);
  }
}

export async function getTasksHandler(req: Request, res: Response) {
  try {
    const tasks = await findTasks();
    return res.send(tasks);
  } catch (err: any) {
    return res.status(500).send(err);
  }
}
