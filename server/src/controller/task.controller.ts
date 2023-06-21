import { Request, Response } from "express";
import { CreateTaskInput } from "../schema/task.schema";
import {
  findAllTasks,
  changeActiveStatus,
  changeProgressStatus,
  deleteTask,
} from "../service/task.service";

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
    const tasks = await findAllTasks();
    return res.send(tasks);
  } catch (err: any) {
    return res.status(500).send(err);
  }
}

export async function updateTaskActiveStatus(req: Request, res: Response) {
  try {
    const taskId = parseInt(req.params.taskId);
    const task = req.body;
    const tasks = await changeActiveStatus(taskId, task);
    return res.send(tasks);
  } catch (err: any) {
    return res.status(500).send(err);
  }
}

export async function updateTaskProgressStatus(req: Request, res: Response) {
  try {
    const taskId = parseInt(req.params.taskId);
    const task = req.body.task;
    const status = req.body.status;
    const tasks = await changeProgressStatus(taskId, task, status);
    return res.send(tasks);
  } catch (err: any) {
    return res.status(500).send(err);
  }
}

export async function deleteTaskHandler(req: Request, res: Response) {
  try {
    const taskId = parseInt(req.params.taskId);
    const tasks = await deleteTask(taskId);
    return res.send(tasks);
  } catch (err: any) {
    return res.status(500).send(err);
  }
}
