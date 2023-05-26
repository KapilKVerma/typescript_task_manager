import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import { tasks } from "../../models/task.model";
import { projects } from "../../models/project.model";
import { AiOutlineProject } from "react-icons/ai";

const Workboard: React.FC = () => {
  return (
    <>
      <h4 className="mb-0">Workboard</h4>
      <Row className="p-2">
        <Col lg={9} className="m-0 p-3">
          <Row className="mb-4">
            <Col lg={4} md={4} sm={4}>
              <div
                style={{
                  textAlign: "center",
                  padding: "1rem",
                  background: "rgb(81,151,248,.25)",
                  borderRadius: "25px",
                }}
              >
                <h5>Remaining (4)</h5>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4}>
              <div
                style={{
                  textAlign: "center",
                  padding: "1rem",
                  background: "rgb(81,151,248,.25)",
                  borderRadius: "25px",
                }}
              >
                <h5>In Progress (2)</h5>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4}>
              <div
                style={{
                  textAlign: "center",
                  padding: "1rem",
                  background: "rgb(81,151,248,.25)",
                  borderRadius: "25px",
                }}
              >
                <h5>Completed (2)</h5>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={4} md={4} sm={4}>
              <div
                style={{
                  padding: ".5rem",
                  background: "rgba(0,0,0, 0.1)",
                  borderRadius: "10px",
                  height: "80vh",
                }}
              >
                {tasks.slice(3, 7).map((task, index) => {
                  return (
                    <div
                      className="task__card mb-2 pb-1"
                      key={index}
                      style={{ borderLeft: "5px solid rgb(251,129,55)" }}
                    >
                      <h6>{task.title}</h6>
                      <p>{task.description}</p>
                      <p>
                        Due Date:&nbsp;&nbsp;
                        {new Date(task.endDate).toLocaleDateString()}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Col>
            <Col lg={4} md={4} sm={4}>
              <div
                style={{
                  padding: ".5rem",
                  background: "rgba(0,0,0, 0.1)",
                  borderRadius: "10px",
                  height: "80vh",
                }}
              >
                {tasks.slice(7, 9).map((task, index) => {
                  return (
                    <div
                      className="task__card mb-2 pb-1"
                      key={index}
                      style={{ borderLeft: "5px solid rgb(251,129,55)" }}
                    >
                      <h6>{task.title}</h6>
                      <p>{task.description}</p>
                      <p>
                        Due Date:&nbsp;&nbsp;
                        {new Date(task.endDate).toLocaleDateString()}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Col>
            <Col lg={4} md={4} sm={4}>
              <div
                style={{
                  padding: ".5rem",
                  background: "rgba(0,0,0, 0.1)",
                  borderRadius: "10px",
                  height: "80vh",
                }}
              >
                {tasks.slice(1, 3).map((task, index) => {
                  return (
                    <div
                      className="task__card mb-2 pb-1"
                      key={index}
                      style={{ borderLeft: "5px solid rgb(23,195,165)" }}
                    >
                      <h6>{task.title}</h6>
                      <p>{task.description}</p>
                      <p>
                        Completion Date:&nbsp;&nbsp;
                        {new Date(task.endDate).toLocaleDateString()}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="m-0">
          <Row className="p-2">
            {projects.slice(0, 2).map((project, index) => {
              return (
                <Col key={index} className="m-0 p-2">
                  <div className="project__card">
                    <span className="project__card--icon">
                      <AiOutlineProject size={"2rem"} />
                    </span>
                    <div>
                      <h5>{`${project.name}`}</h5>
                      <p>{`${project.description}`}</p>
                      <Row className="p-0">
                        <Col lg={6} className="m-0">
                          <h6>Progress (65%)</h6>
                          <ProgressBar>
                            <ProgressBar
                              striped
                              variant="success"
                              now={65}
                              key={1}
                            />
                          </ProgressBar>
                        </Col>

                        <Col lg={6} className="m-0">
                          <h6>Pending Tasks</h6>
                          <h6>13</h6>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Workboard;
