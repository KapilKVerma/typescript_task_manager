import React from "react";
import Button from "react-bootstrap/Button";
import { BiTrash, BiEdit, BiCheck, BiDetail } from "react-icons/bi";
import { Task } from "../../models/tasks";

interface Props {
  task: Task;
}

const TaskDetail: React.FC<Props> = ({ task }) => {
  return (
    <>
      <div>
        <span className="text-capitalize">
          <h6>
            {task.title}&nbsp;&nbsp;|&nbsp;&nbsp;
            <BiDetail size={"1.25rem"} />
          </h6>
        </span>

        {/* <p>{task.description}</p> */}
        <ul className="d-flex flex-row justify-content-start">
          <li style={{ width: "15rem" }}>
            Due Date:&nbsp;&nbsp;{task.endDate.toDateString()}
          </li>
          <li style={{ width: "15rem" }}>
            Created On:&nbsp;&nbsp;{task.endDate.toDateString()}
          </li>
        </ul>
      </div>

      <div style={{ position: "absolute", right: "1rem" }}>
        <span className="d-flex flex-row justify-content-between">
          <Button variant="light" className="p-1 mr-1">
            <BiCheck size={"1.25rem"} />
          </Button>
          <Button variant="light" className="p-1 mr-1">
            <BiEdit size={"1.25rem"} />
          </Button>
          <Button variant="light" className="p-1">
            <BiTrash size={"1.25rem"} />
          </Button>
        </span>
      </div>
    </>
  );
};

export default TaskDetail;
