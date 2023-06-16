import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, object, TypeOf } from "zod";

const signUpSchema = object({
  name: string().nonempty("Name is required"),
  email: string().min(6, "Email is required").email("Invalid email format"),
  accountType: string()
    .nonempty("Select account type")
    .refine(
      (value) => value.toLowerCase() !== "choose account type",
      "Select account type"
    ),
  password: string()
    .nonempty("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Invalid password"
    ),
  confirmPassword: string().nonempty("Confirm password is required"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password doesn't match",
  path: ["confirmPassword"],
});

type SignUpInput = TypeOf<typeof signUpSchema>;

interface Props {
  setButtonActive: React.Dispatch<React.SetStateAction<number>>;
}

enum AccountTypes {
  personal = "Personal",
  business = "Business",
}

const SignUp: React.FC<Props> = ({ setButtonActive }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      accountType: "",
      password: "",
      confirmPassword: "",
    },
  });

  const sumbit = (d: any) => {
    console.log(d);
  };

  return (
    <>
      <div className="w-75">
        <h1>Create your account</h1>
        <h5>
          Have an account?
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => setButtonActive(2)}
          >
            &nbsp;&nbsp;Sign in now
          </span>
        </h5>
        <Form className="w-100 p-1 mt-4" onSubmit={handleSubmit(sumbit)}>
          <Form.Group className="mb-4">
            <Form.Control
              type="text"
              placeholder="Enter name"
              {...register("name")}
            />
            {errors?.name?.message && (
              <Form.Text className="input__field--error">
                {errors.name.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email")}
            />
            {errors?.email?.message && (
              <Form.Text className="input__field--error">
                {errors.email.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              as="select"
              defaultValue={"Choose account type"}
              {...register("accountType")}
            >
              <option value={""} disabled selected>
                Choose account type
              </option>
              <option value={AccountTypes.personal} className="text-capitalize">
                {AccountTypes.personal}
              </option>
              <option value={AccountTypes.business} className="text-capitalize">
                {AccountTypes.business}
              </option>
            </Form.Control>
            {errors?.accountType?.message && (
              <Form.Text className="input__field--error">
                {errors.accountType.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password")}
            />

            {errors?.password?.message && (
              <Form.Text className="input__field--error">
                {errors.password.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              type="password"
              placeholder="Confirm password"
              {...register("confirmPassword")}
            />

            {errors?.confirmPassword?.message && (
              <Form.Text className="input__field--error">
                {errors.confirmPassword.message}
              </Form.Text>
            )}
          </Form.Group>

          <Button variant="info" type="submit" className="form__button">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default SignUp;
