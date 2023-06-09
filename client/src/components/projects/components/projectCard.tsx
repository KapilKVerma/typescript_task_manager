import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Project } from "../../../models/project.model";
import ProjectCardWrapper from "../../wrapperComponents/projectCardWrapper";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { TeamMember } from "../../../models/member.model";
import dayjs from "dayjs";

import { serverUrl } from "../../../serverUrl";
import axios from "axios";

interface Props {
  project: Project;
  setProjectDetail: React.Dispatch<React.SetStateAction<Project | null>>;
}

const ProjectCard: React.FC<Props> = (props) => {
  const { project, setProjectDetail } = props;

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/0.1/users/company/1`);

      setTeamMembers(response.data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);
  return (
    <>
      <ProjectCardWrapper>
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
              onClick={() => setProjectDetail(project)}
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
              <h6>{dayjs(project.startDate).format("DD/MM/YYYY")}</h6>
            </Col>

            <Col lg={3}>
              <h6>Budget</h6>
              <h6>${project.budget}</h6>
            </Col>
          </Row>
          <hr />

          {/* Assinged Team Members */}
          <section className="mb-3">
            <h6>Team Member(s)</h6>
            <Row className="member__skills--list m-0 p-0">
              {teamMembers.slice(0, 6).map((member, index) => {
                return (
                  <span
                    className="team__member__card--image m-1"
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

          {/* Assigned Project Managers */}
          <section>
            <h6>Project Manager(s)</h6>
            <Row className="member__skills--list m-0 p-0">
              {teamMembers.slice(6, 8).map((member, index) => {
                return (
                  <span
                    className="team__member__card--image m-1"
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
        </section>
      </ProjectCardWrapper>
    </>
  );
};

export default ProjectCard;
