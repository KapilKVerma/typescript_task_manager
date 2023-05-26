import React, { useState, useRef } from "react";
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

  const [factor, setFactor] = useState<number>(50);
  const [show, setShow] = useState<number>(0);

  const circleContainer = useRef();
  return (
    <>
      <Row className="m-0">
        {divisons.map((division, index) => {
          return (
            <Col lg={4} md={6} sm={12} key={index} className="p-2">
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

      <div
        className="p-5 d-flex flex-row justify-content-start"
        style={{ position: "relative" }}
      >
        {["", "", ""].map((_, index) => {
          let number = index * factor;
          return (
            <div
              className="circle"
              style={{ left: number, opacity: show }}
            ></div>
          );
        })}
      </div>
      <div className="mt-5">
        <button
          onClick={() => {
            setFactor(90);
            setShow(1);
          }}
        >
          Expand
        </button>
      </div>

      <div className="mt-2">
        <button
          onClick={() => {
            setFactor(50);
            setShow(0);
          }}
        >
          Squeez
        </button>
      </div>
    </>
  );
};

export default Divisions;
