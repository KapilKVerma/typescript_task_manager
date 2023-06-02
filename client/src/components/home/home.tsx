import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Title from "./components/title";
import Forms from "./components/forms";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Row style={{ height: "100vh" }} className="m-0 p-0">
        <Col lg={8} className="p-0">
          <Title />
        </Col>
        <Col lg={4} className="p-0">
          <Forms />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Home;
