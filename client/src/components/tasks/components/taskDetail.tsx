import React, { useState } from "react";
import { Task } from "../../../models/task.model";
import TaskListWrapper from "../../wrapperComponents/task/taskListWrapper";
import RenderButton from "../../UIComponents/renderButton";
import EditTask from "../../forms/editTask/editTask";

interface Props {
  task: Task;
  handleTaskActive: (task: Task) => Promise<void>;
  handleDeleteTask: (task: Task) => Promise<void>;
}

const TaskDetail: React.FC<Props> = (props) => {
  const { task, handleTaskActive, handleDeleteTask } = props;

  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [showMenuItems, setShowMenuItems] = useState<boolean>(false);
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
                onClick={() => {
                  setShowDetails(!showDetails);
                  setShowMenuItems(false);
                }}
              >
                <RenderButton title={""} type={"expandButton"} />
              </span>

              <span onClick={() => setShowMenuItems(!showMenuItems)}>
                <RenderButton title={""} type={"menuButton"} />
              </span>
            </div>
            <div
              className="task__menu--list"
              style={{
                display: showMenuItems ? "block" : "none",
              }}
            >
              <span
                onClick={() => {
                  setShowMenuItems(false);
                  handleTaskActive(task);
                }}
              >
                <RenderButton title={"Active"} type={"completeButton"} />
              </span>
              <br />
              <span
                onClick={() => {
                  setEditTask(true);
                  setShowMenuItems(false);
                }}
              >
                <RenderButton title={"Edit"} type={"editButton"} />
              </span>
              <br />
              <span
                onClick={() => {
                  setShowMenuItems(false);
                  handleDeleteTask(task);
                }}
              >
                <RenderButton title={"Delete"} type={"deleteButton"} />
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
