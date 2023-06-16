import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, object, TypeOf } from "zod";

const loginSchema = object({
  email: string()
    .min(6, "Email is required")
    .email("Invalid email format")
    .refine((value) => {
      const allowedDomain = ".com";
      return value.endsWith(`${allowedDomain}`);
    }, "Email must end with .com"),
  password: string()
    .nonempty("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Invalid password"
    ),
});

type LoginInput = TypeOf<typeof loginSchema>;

interface Props {
  setButtonActive: React.Dispatch<React.SetStateAction<number>>;
}

const SignIn: React.FC<Props> = ({ setButtonActive }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const sumbit = (d: any) => {
    console.log(d);
    navigate("/dashboard");
  };

  return (
    <>
      <div className="w-75">
        <h1>Sign in to your account</h1>
        <h5>
          Don't have an account?
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => setButtonActive(3)}
          >
            &nbsp;&nbsp;Sign Up
          </span>
        </h5>
        <Form className="w-100 p-1 mt-4" onSubmit={handleSubmit(sumbit)}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" {...register("email")} />
            {errors?.email?.message && (
              <Form.Text className="input__field--error">
                {errors.email.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" {...register("password")} />

            {errors?.password?.message && (
              <Form.Text className="input__field--error">
                {errors.password.message}
              </Form.Text>
            )}
          </Form.Group>

          <Button type="submit" variant="info" className="form__button">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default SignIn;
