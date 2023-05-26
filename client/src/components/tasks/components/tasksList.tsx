import React from "react";

import { Task } from "../../../models/task.model";
import TaskDetail from "./taskDetail";

interface Props {
  taskList: Task[];
}

const TasksList: React.FC<Props> = ({ taskList }) => {
  return (
    <>
      <div>
        {taskList.map((task) => {
          return (
            <div key={task.id} className="tasks__list__item">
              <TaskDetail task={task} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TasksList;
