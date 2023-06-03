import React, { useState } from "react";
import SignIn from "../../forms/signIn/signIn";
import SignUp from "../../forms/signUp/signUp";
import { SiOpenproject } from "react-icons/si";

const Forms: React.FC = () => {
  const [showSignIn, setShowSignIn] = useState<boolean>(true);
  return (
    <div style={{ height: "100vh" }} className="p-5">
      <div className="Home__logo p-5">
        <SiOpenproject />
        <span>&nbsp;sthana</span>
      </div>

      {showSignIn ? (
        <div>
          <SignIn setShowSignIn={setShowSignIn} />
        </div>
      ) : (
        <div>
          <SignUp setShowSignIn={setShowSignIn} />
        </div>
      )}
    </div>
  );
};

export default Forms;
