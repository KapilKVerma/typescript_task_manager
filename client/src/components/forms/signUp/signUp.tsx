import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
interface Props {
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<Props> = ({ setShowSignIn }) => {
  return (
    <>
      <Container className="pl-5 pr-5">
        <h1>Create your account</h1>{" "}
        <h5>
          Have an account?
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => {
              setShowSignIn(true);
            }}
          >
            &nbsp;&nbsp;Sign in now
          </span>
        </h5>
        <Form className="w-100 p-1 mt-4">
          <Form.Group controlId="formBasicName" className="mb-3">
            <Form.Label>Enter Email</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-4">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="password" placeholder="" />
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
