import React, { useState } from "react";
import { Task } from "../../../models/task.model";
import TaskListWrapper from "../../wrapperComponents/task/taskListWrapper";
import RenderButton from "../../UIComponents/renderButton";
import EditTask from "../../forms/editTask/editTask";

interface Props {
  task: Task;
  handleDeleteTask: (task: Task) => Promise<void>;
}

const TaskDetail: React.FC<Props> = (props) => {
  const { task, handleDeleteTask } = props;

  const [showDetails, setShowDetails] = useState<boolean>(false);
  //   const [showMenuItems, setShowMenuItems] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<boolean>(false);

  return (
    <>
      {!editTask ? (
        <TaskListWrapper task={task} showDetails={showDetails}>
          {/* Menu Button */}
          <section>
            <div className="task__menu--container d-flex flex-row justify-content-start">
              <span
                className="mr-1"
                onClick={() => setShowDetails(!showDetails)}
              >
                <RenderButton title={""} type={"expandButton"} />
              </span>

              <span onClick={() => handleDeleteTask(task)}>
                <RenderButton title={""} type={"deleteButton"} />
              </span>
            </div>
          </section>
        </TaskListWrapper>
      ) : null}

      {/* Edit form */}
      {editTask ? <EditTask task={task} setEditTask={setEditTask} /> : null}
    </>
  );
};

export default TaskDetail;
