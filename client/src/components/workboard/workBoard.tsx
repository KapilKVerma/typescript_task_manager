import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import TaskCard from "./components/taskCard";
import { Task } from "../../models/task.model";
import { Project } from "../../models/project.model";
import { AiOutlineProject } from "react-icons/ai";
import { serverUrl } from "../../serverUrl";
import axios from "axios";

enum taskFilters {
  remaining,
  inProgress,
  completed,
}

const Workboard: React.FC = () => {
  const [tasksList, setTasksList] = useState<Task[]>([]);
  const [projectsList, setProjectsList] = useState<Project[]>([]);

  // Tasks filter handler
  const filterTasks = (tasks: Task[], status: number): Task[] => {
    let result: Task[] = [];
    if (status === taskFilters.remaining)
      result = tasks.filter((task) => !task.completed && !task.inProgress);

    if (status === taskFilters.inProgress)
      result = tasks.filter((task) => !task.completed && task.inProgress);

    if (status === taskFilters.completed)
      result = tasks.filter((task) => task.completed && !task.inProgress);

    return result;
  };

  //  Task progress status handler
  const handleTaskStatus = async (task: Task, status: string) => {
    try {
      const response = await axios.put(
        `${serverUrl}/api/0.1/tasks/${task.id}/progressStatus`,
        { task, status }
      );
      setTasksList(response.data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  // Fetch Tasks
  const fetchData = async () => {
    try {
      const apiCalls = [
        axios.get(`${serverUrl}/api/0.1/tasks/`), // fetch tasks
        axios.get(`${serverUrl}/api/0.1/projects/`), // fetch projects
      ];

      const responses = await Promise.all(apiCalls);

      setTasksList(
        responses[0].data.filter((item: Task) => item.active === true)
      );
      setProjectsList(responses[1].data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Row className="m-0 p-1">
        <Col lg={9}>
          <Row className="mb-4">
            <Col lg={4} md={4} sm={4}>
              <div className="workboard__tasks__header">
                <h5>
                  Remaining (
                  {filterTasks(tasksList, taskFilters.remaining).length})
                </h5>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4}>
              <div className="workboard__tasks__header">
                <h5>
                  In Progress (
                  {filterTasks(tasksList, taskFilters.inProgress).length})
                </h5>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4}>
              <div className="workboard__tasks__header">
                <h5>
                  Completed (
                  {filterTasks(tasksList, taskFilters.completed).length})
                </h5>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={4} md={4} sm={4} className="p-1">
              <div className="workboard__tasks__list--container">
                {filterTasks(tasksList, taskFilters.remaining).map(
                  (task, index) => {
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
                  }
                )}
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} className="p-1">
              <div className="workboard__tasks__list--container">
                {filterTasks(tasksList, taskFilters.inProgress).map(
                  (task, index) => {
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
                  }
                )}
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} className="p-1">
              <div className="workboard__tasks__list--container">
                {filterTasks(tasksList, taskFilters.completed).map(
                  (task, index) => {
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
                  }
                )}
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
            {projectsList.slice(0, 2).map((project, index) => {
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
    </React.Fragment>
  );
};

export default Workboard;
