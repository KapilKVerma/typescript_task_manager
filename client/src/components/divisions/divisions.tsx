import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineBuild } from "react-icons/ai";

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

  return (
    <>
      <h4>Divisions</h4>
      <hr className="mb-0" />
      <Row className="p-2">
        {divisons.map((division, index) => {
          return (
            <Col lg={4} md={6} sm={12} key={index} className="m-0 p-2">
              <div className="division__card">
                <span className="division__card--icon">
                  <AiOutlineBuild size={"2rem"} />
                </span>

                <h5>{`${division}`}</h5>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Divisions;
