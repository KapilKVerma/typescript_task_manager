import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Task } from "../../../models/task.model";
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
              key={task.id}
              style={{
                background: "rgba(255, 255, 255, 0.5)",
                paddingBottom: "0",
              }}
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
