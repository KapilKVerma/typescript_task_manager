import { Request, Response } from "express";
import { CreateCompanyInput } from "../schema/company.schema";
import { createCompany } from "../service/company.service";
import logger from "../utils/logger";

export async function createCompanyHandler(
  req: Request<{}, {}, CreateCompanyInput>, //understand this line
  res: Response
) {
  try {
    const body = req.body;
    await createCompany(body);
    return res.status(200).json({ message: "new company registered" });
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
