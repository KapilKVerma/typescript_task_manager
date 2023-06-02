import React from "react";
import AppWrapper from "../wrapperComponents/appWrapper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const Dashboard: React.FC = () => {
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

  const statistics = [
    { title: "Projects", status: "increased", percentageChange: 4.5 },
    { title: "Tasks", status: "increased", percentageChange: 14.25 },
    { title: "Registrations", status: "decreased", percentageChange: 54.5 },
    { title: "Budgets", status: "decreased", percentageChange: 44 },
  ];
  return (
    <>
    <AppWrapper>
      <Row className="m-0 p-0">
        <Col lg={10} className="p-1">
          <Row className="p-0 m-0">
            {divisons.slice(0, 4).map((division, index) => {
              return (
                <Col lg={6} md={6} sm={12} key={index} className="p-1">
                  <div className="graph__card2">
                    <h5>{`${division}`}</h5>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col lg={2} className="p-1">
          <Row className="p-0 m-0">
            {statistics.map((stat, index) => {
              return (
                <Col lg={12} md={12} sm={12} key={index} className="p-1">
                  <div
                    className="graph__card"
                    style={{
                      backgroundColor: `${
                        stat.status !== "increased"
                          ? "rgba(231,1,39,.5)"
                          : "rgba(23,195,165,.5)"
                      }`,
                    }}
                  >
                    <h5>{`${stat.title}`}</h5>
                    <h3>
                      {stat.status === "increased" ? (
                        <AiOutlineArrowUp />
                      ) : (
                        <AiOutlineArrowDown />
                      )}
                      &nbsp;&nbsp;
                      {stat.percentageChange}%
                    </h3>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
      </AppWrapper>
    </>
  );
};

export default Dashboard;
