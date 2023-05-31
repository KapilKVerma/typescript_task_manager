import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserInput {
  email: string;
  profileImg?: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  skills: string[];
  password: string;
  passwordConfirmation: string;
  roles: string[];
  address?: {
    unitNumber?: string;
    streetAddress: string;
    postCode: string;
    state: string;
  };
  company: string;
}

export interface UserDocument extends UserInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<Boolean>;
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    profileImg: { type: String, required: false },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    jobTitle: { type: String, required: true },
    skills: { type: Array, required: true },
    password: { type: String, required: true },
    roles: { type: Array, required: true },
    address: {
      unitNumber: { type: String },
      streetAddress: { type: String },
      postCode: { type: String },
      state: { type: String },
    },
    company: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  let user = this as UserDocument;

  if (!user.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));

  const hash = await bcrypt.hashSync(user.password, salt);

  user.password = hash;

  return next();
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const user = this as UserDocument;

  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;
