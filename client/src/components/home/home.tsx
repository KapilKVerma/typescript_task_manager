import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import SignIn from "../forms/signIn/signIn";
import SignUp from "../forms/signUp/signUp";
import {
  MdOutlineManageHistory,
  MdOutlineViewKanban,
  MdOutlineDashboard,
  MdOutlineViewTimeline,
} from "react-icons/md";

const Home: React.FC = () => {
  const [showSignIn, setShowSignIn] = useState<boolean>(true);

  const image =
    "https://images.unsplash.com/photo-1656274404460-14427bdd5fff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1992&q=80";

  return (
    <div>
      <Row style={{ height: "100vh" }} className="m-0 p-0">
        <Col lg={8} className="p-0">
          <div
            style={{
              backgroundImage: `url(${image})`,
              height: "100vh",
              backgroundPosition: "center",
            }}
            className="p-5"
          >
            <div
              style={{
                background: "rgba(255,255,255,.25)",
                borderRadius: "10px",
                height: "100%",
              }}
              className="p-5"
            >
              <MdOutlineManageHistory size={"2rem"} />
              <div className="p-5 m-5">
                <h1 className="text-capitalize text-center">
                  Manage project with ease
                </h1>
                <p className="m-5" style={{ fontSize: "1.25rem" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Urna nunc id cursus metus aliquam eleifend mi.
                </p>

                <div>
                  <h4 className="text-center">Features</h4>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="m-3 w-100">
                      <Card
                        style={{
                          background: "rgba(255,255,255,.25)",
                          borderRadius: "10px",
                          height: "100%",
                        }}
                        className="w-100"
                      >
                        <Card.Body>
                          <Card.Title>
                            <MdOutlineDashboard size={"5rem"} />
                          </Card.Title>
                          <Card.Text>
                            <h5>Analysis Dashboard</h5>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="m-3 w-100">
                      <Card
                        style={{
                          background: "rgba(255,255,255,.25)",
                          borderRadius: "10px",
                          height: "100%",
                        }}
                        className="w-100"
                      >
                        <Card.Body>
                          <Card.Title>
                            <MdOutlineViewKanban size={"5rem"} />
                          </Card.Title>
                          <Card.Text>
                            <h5>Kanban</h5>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="m-3 w-100">
                      <Card
                        style={{
                          background: "rgba(255,255,255,.25)",
                          borderRadius: "10px",
                          height: "100%",
                        }}
                        className="w-100"
                      >
                        <Card.Body>
                          <Card.Title>
                            <MdOutlineViewTimeline size={"5rem"} />
                          </Card.Title>
                          <Card.Text>
                            <h5>Projects Timeline</h5>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4} className="p-0">
          <div style={{ height: "100vh" }} className="p-5">
            <div className="p-3 d-flex flex-row justify-content-end mb-5">
              <Button
                variant="outline-dark"
                className="mr-3 form__button"
                onClick={() => setShowSignIn(!showSignIn)}
              >
                Create Account
              </Button>
              <Button
                variant="dark"
                className="form__button"
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
        </Col>
      </Row>
    </div>
  );
};

export default Home;
