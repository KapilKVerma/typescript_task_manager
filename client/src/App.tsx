import React, { ReactElement, useState } from "react";
import { tasks, Task } from "./models/tasks";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import NewTask from "./components/newTask/newTask";
import TasksByCategory from "./components/tasksByCategory/tasksByCategory";
import { BsFillGearFill } from "react-icons/bs";
import { AiOutlineProject, AiOutlineTeam } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { MdOutlineDashboard, MdOutlineLogout } from "react-icons/md";
import "./App.css";

const App: React.FC = () => {
  const [tasksList, setTasksList] = useState<Task[]>(tasks);

  type navLink = {
    title: string;
    icon: ReactElement;
  };

  const navLinks: navLink[] = [
    { title: "Dashboard", icon: <MdOutlineDashboard size={"1.25rem"} /> },
    { title: "Projects", icon: <AiOutlineProject size={"1.25rem"} /> },
    { title: "Team Members", icon: <AiOutlineTeam size={"1.25rem"} /> },
    { title: "Calender", icon: <SlCalender size={"1.25rem"} /> },
    { title: "Settings", icon: <BsFillGearFill size={"1.25rem"} /> },
    { title: "Logout", icon: <MdOutlineLogout size={"1.25rem"} /> },
  ];
  return (
    <div className="App">
      <div className="App__body">
        <div className="App__header">
          <h2>Task Manager</h2>
          <div className="App__header--circle"></div>
        </div>

        <Row className="p-2">
          <Col
            lg={2}
            md={3}
            sm={4}
            style={{ height: "80vh" }}
            className="p-0 m-0 p-2"
          >
            {navLinks.map((link, index) => {
              return (
                <Button
                  variant="light"
                  className="w-100 text-left mb-2 p-3 font-weight-bold"
                  key={index}
                >
                  {link.icon}
                  &nbsp;&nbsp;{link.title}
                </Button>
              );
            })}
          </Col>
          <Col lg={10} md={9} sm={8} className="p-0 m-0 p-2">
            <div></div>
            <div className="mb-3 App__body--content">
              <NewTask tasks={tasksList} setTasks={setTasksList} />
            </div>

            <div className="App__body--content">
              <TasksByCategory tasks={tasksList} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default App;
