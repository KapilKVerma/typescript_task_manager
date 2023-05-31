import { array, object, string, TypeOf } from "zod";
import { z } from "zod";

// Password Rules
// At least one lowercase letter
// At least one uppercase letter
// At least one digit
// At least one special character
// Minimum length of 8 characters

const minLength = 8;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?])[a-zA-Z\d!@#$%^&*()_\-+=<>?]{8,}$/;
const passwordRules =
  "Password must contain at least one lowercase letter, one uppercase letter, and one digit";

// Define enumeration for valid state values
const StateEnum = z.enum(["ACT", "NSW", "NT", "Qld", "SA", "Vic", "Tas", "WA"]);

// Define schema for the address subfield
const addressSchema = object({
  unitNumber: string().optional(),
  streetAddress: string(),
  postCode: string(),
  state: StateEnum,
}).optional();

// Define enumeration for valid role values
const roles = z.enum(["manager", "employee", "Manager", "Employee"]);

export const createUserSchema = object({
  body: object({
    email: string().nonempty("Email is required").email("Not a valid email"),
    profileImg: string().optional(),
    firstName: string().nonempty("First Name is required"),
    lastName: string().nonempty("Last Name is required"),
    jobTitle: string().nonempty("Job Title is required"),
    skills: array(string()),
    password: string()
      .nonempty("Password is required")
      .min(minLength, "Password must be at least 8 characters long")
      .refine((value) => passwordRegex.test(value), {
        message: passwordRules,
      }),
    passwordConfirmation: string().nonempty(
      "Password confirmation is required"
    ),
    roles: array(roles).nonempty("User role not defined"),
    address: addressSchema,
    company: string().refine((value) => /^[a-fA-F0-9]{24}$/.test(value), {
      message: "Invalid ObjectId",
    }),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>["body"];
