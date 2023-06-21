import React from "react";

import { Task } from "../../../models/task.model";
import TaskDetail from "./taskDetail";

interface Props {
  tasksList: Task[];
  handleTaskActive: (task: Task) => Promise<void>;
  handleDeleteTask: (task: Task) => Promise<void>;
}

const TasksList: React.FC<Props> = (props) => {
  const { tasksList, handleTaskActive, handleDeleteTask } = props;
  return (
    <>
      <div className="tasks__list__container">
        {tasksList.map((task) => {
          return (
            <div key={task.id} className="tasks__list__item">
              <TaskDetail
                task={task}
                handleTaskActive={handleTaskActive}
                handleDeleteTask={handleDeleteTask}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TasksList;
