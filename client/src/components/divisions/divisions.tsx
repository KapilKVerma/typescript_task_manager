import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AppWrapper from "../wrapperComponents/appWrapper";
import DivisionCardWrapper from "../wrapperComponents/divisionCardWrapper";

const Divisions: React.FC = () => {
  const divisons = [
    "Marketing",
    "Product Development",
    "Data Science",
    "IT",
    "Human Resources",
    "Procurement",
    "Sales",
    "Operations",
  ];

  const [factor, setFactor] = useState<number>(50);
  const [show, setShow] = useState<number>(0);

  return (
    <>
      <AppWrapper>
        <Row className="m-0">
          {divisons.map((division, index) => {
            return (
              <Col lg={4} md={6} sm={12} key={index} className="p-2">
                <DivisionCardWrapper>
                  <h5>{`${division}`}</h5>
                </DivisionCardWrapper>
              </Col>
            );
          })}
        </Row>
      </AppWrapper>
    </>
  );
};

export default Divisions;
