import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import { AiOutlineProject, AiOutlineClose } from "react-icons/ai";
import { teamMembers } from "../../../models/member.model";
import { Project } from "../../../models/project.model";
import { tasks } from "../../../models/task.model";
import TasksList from "../../tasks/components/tasksList";
import NewTask from "../../forms/newTask/newTask";
import dayjs from "dayjs";

interface Props {
  project: Project;
  setProjectDetail: React.Dispatch<React.SetStateAction<Project | null>>;
}

const ProjectDetail: React.FC<Props> = ({ project, setProjectDetail }) => {
  const [showNewTaskForm, setShowNewTaskForm] = useState<boolean>(false);
  return (
    <div className="project__card mt-3">
      {/* Card Icon */}
      <section>
        <span className="project__card--icon">
          <AiOutlineProject size={"2rem"} />
        </span>
      </section>

      {/* Card header */}
      <section>
        <div>
          <h5
            className="d-flex flex-row justify-content-between"
            style={{ position: "relative" }}
          >
            <div className="w-75">{`${project.name}`}</div>
            <Button
              size="sm"
              variant="dark"
              onClick={() => setProjectDetail(null)}
              style={{ position: "absolute", right: "0" }}
            >
              <AiOutlineClose size={"1.25rem"} />
            </Button>
            {/* </Link> */}
          </h5>
          <h6>Description</h6>
          <p>{`${project.description}`}</p>
          <h6>Purpose</h6>
          <p>{`${project.purpose}`}</p>
        </div>
        <hr />
      </section>

      {/* Card body */}
      {/* Project attributes */}
      <section>
        <Row>
          <Col lg={6}>
            <h6>Progress (65%)</h6>
            <ProgressBar>
              <ProgressBar striped variant="success" now={65} key={1} />
            </ProgressBar>
          </Col>

          <Col lg={2}>
            <h6>Started on</h6>
            <h6>{dayjs(project.startDate).format("DD/MM/YYYY")}</h6>
          </Col>

          <Col lg={2}>
            <h6>Ends on</h6>
            <h6>{dayjs(project.endDate).format("DD/MM/YYYY")}</h6>
          </Col>

          <Col lg={2}>
            <h6>Budget</h6>
            <h6>${project.budget}</h6>
          </Col>
        </Row>
        <hr />
      </section>

      {/* Team members */}
      <section>
        <Row>
          <Col lg={6} md={6} sm={6}>
            <section className="mb-3">
              <h6>Team Member(s)</h6>
              <Row className="member__skills--list m-0 p-0 ">
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
          </Col>
          <Col lg={6} md={6} sm={6}>
            <section>
              <h6>Project Manager(s)</h6>
              <Row className="member__skills--list m-0 p-0 ">
                {teamMembers.slice(6, 8).map((member, index) => {
                  return (
                    <span
                      className="team__member__card--image m-1"
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
        <hr />
      </section>

      {/* Associated Tasks */}
      <section>
        <div className="d-flex flex-row justify-content-between mb-2">
          <h5 className="mb-3">
            {showNewTaskForm ? (
              <span>Add New Task </span>
            ) : (
              <span>Associated Tasks </span>
            )}
          </h5>
          <Button
            variant="info"
            onClick={() => setShowNewTaskForm(!showNewTaskForm)}
          >
            {showNewTaskForm ? <span>Close</span> : <span>Add Task</span>}
          </Button>
        </div>

        <div>
          {showNewTaskForm ? (
            <NewTask tasks={tasks} setClose={setShowNewTaskForm} />
          ) : (
            <TasksList taskList={tasks.slice(0, 5)} />
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
