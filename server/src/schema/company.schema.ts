import { object, string, TypeOf } from "zod";

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

// Define schema for the address subfield
const appSettingsSchema = object({
  unitNumber: string().optional(),
  streetAddress: string(),
  postCode: string(),
}).optional();

export const createCompanySchema = object({
  body: object({
    email: string().nonempty("Email is required").email("Not a valid email"),
    name: string().nonempty("Last Name is required"),
    password: string()
      .nonempty("Password is required")
      .min(minLength, "Password must be at least 8 characters long")
      .refine((value) => passwordRegex.test(value), {
        message: passwordRules,
      }),
    passwordConfirmation: string().nonempty(
      "Password confirmation is required"
    ),
    roles: string().nonempty("Role not defined"),
    appSettings: appSettingsSchema,
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

export type CreateCompanyInput = TypeOf<typeof createCompanySchema>["body"];
