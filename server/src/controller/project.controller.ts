import { Request, Response } from "express";
import { findProjects } from "../service/project.service";

export async function findProjectsHanlder(req: Request, res: Response) {
  const projects = await findProjects();
  return res.send(projects);
}
