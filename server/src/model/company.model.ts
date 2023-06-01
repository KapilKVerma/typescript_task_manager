import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface CompanyInput {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
  roles: string;
  appSettings?: {
    unitNumber?: string;
    streetAddress: string;
    postCode: string;
  };
}

export interface CompanyDocument extends CompanyInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<Boolean>;
}

const companySchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    roles: { type: String, required: true },
    address: {
      unitNumber: { type: String },
      streetAddress: { type: String },
      postCode: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

companySchema.pre("save", async function (next) {
  let company = this as CompanyDocument;

  if (!company.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));

  const hash = await bcrypt.hashSync(company.password, salt);

  company.password = hash;

  return next();
});

companySchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const company = this as CompanyDocument;

  return bcrypt
    .compare(candidatePassword, company.password)
    .catch((e) => false);
};

const CompanyModel = mongoose.model<CompanyDocument>("Company", companySchema);

export default CompanyModel;
