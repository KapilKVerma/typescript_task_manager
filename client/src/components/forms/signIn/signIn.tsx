import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

interface Props {
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignIn: React.FC<Props> = ({ setShowSignIn }) => {
  const navigate = useNavigate();
  return (
    <>
      <Container className="pl-5 pr-5">
        <h1>Sign in to your account</h1>
        <h5>
          Don't have an account?
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => {
              setShowSignIn(false);
            }}
          >
            &nbsp;&nbsp;Sign Up
          </span>
        </h5>
        <Form className="w-100 p-1 mt-4">
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button
            variant="info"
            className="form__button"
            onClick={() => navigate("/dashboard")}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default SignIn;
