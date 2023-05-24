import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiTrash, BiEdit, BiCheck, BiDetail, BiMenu } from "react-icons/bi";
import { Task } from "../../models/tasks";

interface Props {
  task: Task;
}

const TaskDetail: React.FC<Props> = ({ task }) => {
  const [showDetails, setShowDetails] = useState<Boolean>(false);
  const [showMenuItems, setShowMenuItems] = useState<Boolean>(false);
  const [editTask, setEditTask] = useState<Boolean>(false);

  return (
    <>
      {!editTask ? (
        <>
          <div style={{ width: "80%" }} className="p-2">
            <section>
              <p className="text-capitalize">
                <b>{task.title}&nbsp;&nbsp;</b>
                |&nbsp;&nbsp;Due:&nbsp;&nbsp;
                {task.endDate.toDateString()}&nbsp;&nbsp;|&nbsp;&nbsp;
                <BiDetail
                  size={"1.25rem"}
                  onClick={() => {
                    setShowDetails(!showDetails);
                    setShowMenuItems(false);
                  }}
                  style={{ cursor: "pointer" }}
                />
                &nbsp;&nbsp;
              </p>

              {showDetails ? (
                <>
                  <p
                    className="p-2 mb-2"
                    style={{ background: "rgba(23,162,184,0.25)" }}
                  >
                    {task.description}
                  </p>

                  <ul
                    className="d-flex flex-row justify-content-start"
                    style={{ listStyleType: "none", padding: "0", margin: "0" }}
                  >
                    <li style={{ width: "15rem" }}>
                      Start Date:&nbsp;&nbsp;{task.endDate.toDateString()}
                    </li>
                    <li style={{ width: "15rem" }}>
                      Created On:&nbsp;&nbsp;{task.createdOn.toDateString()}
                    </li>
                  </ul>
                </>
              ) : null}
            </section>
          </div>
          <div className="task__menu--container p-2">
            <Button size="sm" variant="light">
              <BiCheck size={"1.25rem"} />
            </Button>
            <Button size="sm" variant="light" onClick={() => setEditTask(true)}>
              <BiEdit size={"1.25rem"} />
            </Button>
            <Button size="sm" variant="light">
              <BiTrash size={"1.25rem"} />
            </Button>
          </div>
          <div className="task__menu--container2 p-2">
            <Button
              size="sm"
              variant="light"
              onClick={() => {
                setShowMenuItems(!showMenuItems);
              }}
            >
              <BiMenu size={"1.25rem"} />
            </Button>
          </div>
          <div
            className="task__menu--list"
            style={{
              display: showMenuItems ? "block" : "none",
            }}
          >
            <Button size="sm" variant="light" className="w-100 text-left mb-1">
              <BiCheck size={"1.25rem"} />
              &nbsp;&nbsp;Complete
            </Button>
            <br />
            <Button
              size="sm"
              variant="light"
              className="w-100 text-left mb-1"
              onClick={() => {
                setEditTask(true);
                setShowMenuItems(false);
              }}
            >
              <BiEdit size={"1.25rem"} />
              &nbsp;&nbsp;Edit
            </Button>
            <br />
            <Button size="sm" variant="light" className="w-100 text-left">
              <BiTrash size={"1.25rem"} />
              &nbsp;&nbsp;Delete
            </Button>
          </div>
        </>
      ) : null}

      {editTask ? (
        <div style={{ width: "100%" }}>
          <form className="task__form" style={{ border: "none" }}>
            <input
              type="text"
              name="title"
              defaultValue={task.title}
              placeholder="Task title"
              className="input__field--edit"

              // onChange={handleInputChange}
            />
            <textarea
              name="description"
              rows={2}
              defaultValue={task.description}
              placeholder="Task description..."
              className="input__field--edit"

              // onChange={handleInputChange}
            />

            <div className="d-flex flex-row justify-content-end">
              <Button
                variant="outline-info"
                type="submit"
                className="submit__button mr-2"
                onClick={() => setEditTask(false)}
              >
                Close
              </Button>
              <Button
                variant="info"
                type="submit"
                className="submit__button"

                // onClick={submitNewTask}
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default TaskDetail;
