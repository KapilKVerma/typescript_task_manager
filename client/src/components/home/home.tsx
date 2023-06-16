import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Title from "./components/title";
import SignIn from "../forms/signIn/signIn";
import SignUp from "../forms/signUp/signUp";
import { SiOpenproject } from "react-icons/si";
import {
  MdOutlineViewKanban,
  MdOutlineDashboard,
  MdOutlineViewTimeline,
} from "react-icons/md";

const Home: React.FC = () => {
  const [buttonActive, setButtonActive] = useState<number>(0);
  return (
    <React.Fragment>
      <Row className="Home">
        <Col lg={8} className="p-0">
          <Title />
        </Col>
        <Col lg={4} className="p-0" style={{ position: "relative" }}>
          <section className="d-flex flex-row justify-content-start p-3">
            <ButtonGroup aria-label="Basic example">
              <Button
                variant={buttonActive === 0 ? "dark" : "light"}
                className="form__button"
                size="lg"
                onClick={() => {
                  setButtonActive(0);
                }}
              >
                Home
              </Button>
              <Button
                variant={buttonActive === 1 ? "dark" : "light"}
                className="form__button"
                size="lg"
                onClick={() => {
                  setButtonActive(1);
                }}
              >
                About
              </Button>
              <Button
                variant={buttonActive === 2 ? "dark" : "light"}
                className="form__button"
                size="lg"
                onClick={() => {
                  setButtonActive(2);
                }}
              >
                Sign In
              </Button>
              <Button
                variant={buttonActive === 3 ? "dark" : "light"}
                className="form__button"
                size="lg"
                onClick={() => {
                  setButtonActive(3);
                }}
              >
                Sign Up
              </Button>
            </ButtonGroup>
          </section>

          <section className="p-5">
            <div className="Home__logo mb-4">
              <SiOpenproject />
              <span>&nbsp;sthana</span>
            </div>

            <div style={{ minHeight: "30rem" }}>
              {buttonActive === 0 ? (
                <Container>
                  <div className="p-1" style={{ fontSize: "1.25rem" }}>
                    A comprehensive project management solution designed to
                    streamline and simplify project management processes.
                  </div>

                  <div className="m-5"></div>

                  <div className="d-flex flex-row justify-content between mb-3">
                    <div className="p-1 w-50">
                      <MdOutlineDashboard size={"3rem"} />
                      <div className="p-1">
                        <h5>Analysis Dashboard</h5>
                        <p>
                          Provides valuable insights and visualizations to
                          analyze data and make informed decisions.
                        </p>
                      </div>
                    </div>
                    <div className="p-1 w-50">
                      <MdOutlineViewKanban size={"3rem"} />
                      <div className="p-1">
                        <h5>Kanban Board</h5>
                        <p>
                          Improves workflow, increase productivity, and enhance
                          collaboration.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-row justify-content between">
                    <div className="p-1 w-50">
                      <MdOutlineViewTimeline size={"3rem"} />{" "}
                      <div className="p-1">
                        <h5>Projects Timeline</h5>
                        <p>
                          Provides a clear overview of project milestones,
                          tasks, and dependencies.
                        </p>
                      </div>
                    </div>
                    <div className="p-1 w-50"></div>
                  </div>
                </Container>
              ) : null}
              {buttonActive === 1 ? (
                <Container>
                  <h4>Manage projects with ease</h4>
                  <p style={{ fontSize: "1rem" }}>
                    A comprehensive project management solution designed to
                    streamline and simplify project management processes.
                  </p>
                  <div className="m-4"></div>
                  <h4>Manage projects with ease</h4>
                  <p style={{ fontSize: "1.25rem" }}>
                    A comprehensive project management solution designed to
                    streamline and simplify project management processes.
                  </p>
                </Container>
              ) : null}
              {buttonActive === 2 ? (
                <SignIn setButtonActive={setButtonActive} />
              ) : null}
              {buttonActive === 3 ? (
                <SignUp setButtonActive={setButtonActive} />
              ) : null}
            </div>
          </section>

          <section
            className="p-3 w-100"
            style={{ position: "absolute", bottom: "0" }}
          >
            <div className="d-flex flex-row justify-content-between">
              <small>Developed by Kapil Verma</small>
              <small>&copy; Copyright 2023, Example Corporation</small>
            </div>
          </section>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Home;
