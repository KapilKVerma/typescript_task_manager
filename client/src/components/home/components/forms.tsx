import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import SignIn from "../../forms/signIn/signIn";
import SignUp from "../../forms/signUp/signUp";

const Forms: React.FC = () => {
  const [showSignIn, setShowSignIn] = useState<boolean>(true);
  return (
    <div style={{ height: "100vh" }} className="p-5">
      <div className="p-3 d-flex flex-row justify-content-end mb-5">
        <Button
          variant="outline-dark"
          className="mr-3 category__button"
          onClick={() => setShowSignIn(!showSignIn)}
        >
          Create Account
        </Button>
        <Button
          variant="dark"
          className="category__button"
          onClick={() => setShowSignIn(!showSignIn)}
        >
          Sign In
        </Button>
      </div>

      {showSignIn ? (
        <div className="p-3 d-flex flex-row justify-content-end">
          <SignIn />
        </div>
      ) : (
        <div className="p-3 d-flex flex-row justify-content-end">
          <SignUp />
        </div>
      )}
    </div>
  );
};

export default Forms;
