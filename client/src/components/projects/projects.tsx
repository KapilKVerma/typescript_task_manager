import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Project, projects } from "../../models/project.model";
import { teamMembers } from "../../models/member.model";
import { AiOutlineProject } from "react-icons/ai";

const Projects: React.FC = () => {
  return (
    <>
      <h4>Projects</h4>
      <Row className="p-2">
        {projects.map((project, index) => {
          return (
            <Col lg={4} md={6} sm={12} key={index} className="m-0 p-2">
              <div className="project__card">
                <span className="project__card--icon">
                  <AiOutlineProject size={"2rem"} />
                </span>
                <div>
                  <h5>{`${project.name}`}</h5>
                  <h6>Description</h6>
                  <p>{`${project.description}`}</p>
                  <h6>Purpose</h6>
                  <p>{`${project.purpose}`}</p>
                </div>
                <hr />
                <Row>
                  <Col lg={6}>
                    <h6>Progress (65%)</h6>
                    <ProgressBar>
                      <ProgressBar striped variant="success" now={65} key={1} />
                    </ProgressBar>
                  </Col>

                  <Col lg={3}>
                    <h6>Started on</h6>
                    <h6>{new Date(project.startDate).toLocaleDateString()}</h6>
                  </Col>

                  <Col lg={3}>
                    <h6>Budget</h6>
                    <h6>${project.budget}</h6>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    <section className="mb-3">
                      <h6>Team Members</h6>
                      <Row className="member__skills--list m-0 p-0 ">
                        {teamMembers.slice(0, 6).map((member, index) => {
                          return (
                            <span
                              className="team__member__card--image m-0 mb-1"
                              key={index}
                              style={{
                                backgroundImage: `url(${member.profileImg})`,
                                width: "2.5rem",
                                height: "2.5rem",
                              }}
                            />
                          );
                        })}
                      </Row>
                    </section>

                    <section>
                      <h6>Project Manager(s)</h6>
                      <Row className="member__skills--list m-0 p-0 ">
                        {teamMembers.slice(6, 8).map((member, index) => {
                          return (
                            <span
                              className="team__member__card--image m-0 mb-1"
                              style={{
                                backgroundImage: `url(${member.profileImg})`,
                                width: "2.5rem",
                                height: "2.5rem",
                              }}
                            />
                          );
                        })}
                      </Row>
                    </section>
                  </Col>
                </Row>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Projects;
