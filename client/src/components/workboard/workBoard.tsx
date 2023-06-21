import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import AppWrapper from "../wrapperComponents/appWrapper";
import TaskCard from "./components/taskCard";
import { Task } from "../../models/task.model";
import { projects } from "../../models/project.model";
import { AiOutlineProject } from "react-icons/ai";
import axios from "axios";

const Workboard: React.FC = () => {
  const [tasksList, setTasksList] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/0.1/tasks/`);
      setTasksList(response.data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleTaskStatus = (task: Task) => {
    let tasks = [...tasksList];
    const taskIndex = tasks.findIndex((item) => item.id === task.id);
    tasks[taskIndex] = task;
    setTasksList(tasks);
  };

  return (
    <>
      <AppWrapper>
        <Row className="m-0 p-1">
          <Col lg={9}>
            <Row className="mb-4">
              <Col lg={4} md={4} sm={4}>
                <div className="workboard__tasks__header">
                  <h5>Remaining (7)</h5>
                </div>
              </Col>
              <Col lg={4} md={4} sm={4}>
                <div className="workboard__tasks__header">
                  <h5>In Progress (2)</h5>
                </div>
              </Col>
              <Col lg={4} md={4} sm={4}>
                <div className="workboard__tasks__header">
                  <h5>Completed (2)</h5>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={4} md={4} sm={4} className="p-1">
                <div className="workboard__tasks__list--container">
                  {tasksList
                    .filter((task) => !task.completed && !task.inProgress)
                    .sort((a, b) => (a.endDate < b.endDate ? -1 : 1))
                    .map((task, index) => {
                      return (
                        <div
                          className="task__card mb-2 pb-1"
                          key={index}
                          style={{ borderLeft: "5px solid rgb(80,150,247)" }}
                        >
                          <TaskCard
                            task={task}
                            handleTaskStatus={handleTaskStatus}
                          />
                        </div>
                      );
                    })}
                </div>
              </Col>
              <Col lg={4} md={4} sm={4} className="p-1">
                <div className="workboard__tasks__list--container">
                  {tasksList
                    .filter((task) => !task.completed && task.inProgress)
                    .sort((a, b) => (a.endDate < b.endDate ? -1 : 1))
                    .map((task, index) => {
                      return (
                        <div
                          className="task__card mb-2 pb-1"
                          key={index}
                          style={{ borderLeft: "5px solid rgb(251,129,55)" }}
                        >
                          <TaskCard
                            task={task}
                            handleTaskStatus={handleTaskStatus}
                          />
                        </div>
                      );
                    })}
                </div>
              </Col>
              <Col lg={4} md={4} sm={4} className="p-1">
                <div className="workboard__tasks__list--container">
                  {tasksList
                    .filter((task) => task.completed && !task.inProgress)
                    .sort((a, b) => (a.endDate < b.endDate ? -1 : 1))
                    .map((task, index) => {
                      return (
                        <div
                          className="task__card mb-2 pb-1"
                          key={index}
                          style={{ borderLeft: "5px solid rgb(23,195,165)" }}
                        >
                          <TaskCard
                            task={task}
                            handleTaskStatus={handleTaskStatus}
                          />
                        </div>
                      );
                    })}
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={3} className="pl-4 pr-0">
            <div
              className="workboard__tasks__header"
              style={{ backgroundColor: "rgb(23,195,165)", color: "#fff" }}
            >
              <h5>Assigned Project(s)</h5>
            </div>
            <div>
              {projects.slice(0, 2).map((project, index) => {
                return (
                  <div key={index} className="mt-5">
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
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </AppWrapper>
    </>
  );
};

export default Workboard;
