import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Task } from "../../models/tasks";
import TaskDetail from "./taskDetail";

interface Props {
  taskList: Task[];
}

const TasksList: React.FC<Props> = ({ taskList }) => {
  return (
    <>
      <ListGroup>
        {taskList.map((task) => {
          return (
            <ListGroup.Item
              className="d-flex flex-row justify-content-between p-0"
              style={{ position: "relative" }}
              key={task.id}
            >
              <TaskDetail task={task} />
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
};

export default TasksList;
