import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Project } from "../../../models/project.model";
import { AiOutlineProject } from "react-icons/ai";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { teamMembers } from "../../../models/member.model";

interface Props {
  project: Project;
  setProjectDetail: React.Dispatch<React.SetStateAction<Project | null>>;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectCard: React.FC<Props> = (props) => {
  const { project, setProjectDetail, setShowForm } = props;
  return (
    <>
      <div className="project__card">
        {/* Card Icon */}
        <section>
          <span className="project__card--icon">
            <AiOutlineProject size={"2rem"} />
          </span>
        </section>

        {/* Card header */}
        <section>
          <h5
            className="d-flex flex-row justify-content-between"
            style={{ position: "relative" }}
          >
            <div className="w-75">{`${project.name}`}</div>
            <Button
              size="sm"
              variant="light"
              onClick={() => {
                setProjectDetail(project);
                setShowForm(false);
              }}
              style={{ position: "absolute", right: "0" }}
            >
              <HiOutlineMenuAlt2 size={"1.25rem"} />
            </Button>
          </h5>
          <h6>Description</h6>
          <p>{`${project.description}`}</p>
          <h6>Purpose</h6>
          <p>{`${project.purpose}`}</p>
          <hr />
        </section>

        {/* Card body */}
        <section>
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
                <h6>Team Member(s)</h6>
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
        </section>
      </div>
    </>
  );
};

export default ProjectCard;
