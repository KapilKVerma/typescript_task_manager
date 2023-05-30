import { FilterQuery } from "mongoose";
import { omit } from "lodash";
import CompanyModel, {
  CompanyDocument,
  CompanyInput,
} from "../model/company.model";

export async function createCompany(input: CompanyInput) {
  try {
    const company = await CompanyModel.create(input);

    return omit(company.toJSON(), "password", "passwordConfirmation");
  } catch (e: any) {
    throw new Error(e);
  }
}
