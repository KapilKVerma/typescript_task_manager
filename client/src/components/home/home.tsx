import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Title from "./components/title";
import Forms from "./components/forms";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Row className="Home">
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
