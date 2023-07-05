import React from "react";
import { SiOpenproject } from "react-icons/si";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const PageNotFound: React.FC = () => {
  return (
    <React.Fragment>
      <div className="p-5 text-center">
        <section className="Home__logo mb-4">
          <SiOpenproject />
          <span>&nbsp;sthana</span>
        </section>

        <section>
          <h2>404</h2>
          <p>Page not found!</p>
          <p className="p-3">
            <Link to="/">
              <Button variant="dark">Go to home</Button>
            </Link>
          </p>
        </section>
      </div>
    </React.Fragment>
  );
};

export default PageNotFound;
