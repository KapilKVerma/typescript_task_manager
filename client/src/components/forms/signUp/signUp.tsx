import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const SignUp: React.FC = () => {
  return (
    <>
      <Container
        style={{ border: "1px solid rgb(23,162,184)", borderRadius: "10px" }}
        className="p-5"
      >
        <h1>Create Account</h1>
        <Form className="w-100 p-1">
          <Form.Group controlId="formBasicName" className="mb-3">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="info" className="form__button">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default SignUp;
