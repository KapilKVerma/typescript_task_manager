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
    state: string;
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
      state: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

companySchema.pre("save", async function (next) {
  let user = this as CompanyDocument;

  if (!user.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));

  const hash = await bcrypt.hashSync(user.password, salt);

  user.password = hash;

  return next();
});

companySchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const user = this as CompanyDocument;

  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

const Company = mongoose.model<CompanyDocument>("Company", companySchema);

export default Company;
