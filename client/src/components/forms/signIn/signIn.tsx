import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container
        style={{ border: "1px solid rgb(23,162,184)", borderRadius: "10px" }}
        className="p-5"
      >
        <h1>Sign In</h1>
        <Form className="w-100 p-1">
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
