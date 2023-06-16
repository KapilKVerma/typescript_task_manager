import React, { useState } from "react";
import { Task, TaskStatus } from "../../../models/task.model";
import RenderButton from "../../UIComponents/renderButton";

interface Props {
  task: Task;
  status: string;
}

const TaskCard: React.FC<Props> = ({ task, status }) => {
  const [showMenuItems, setShowMenuItems] = useState<Boolean>(false);

  return (
    <>
      <h6
        className="d-flex flex-row justify-content-between mb-4"
        style={{ position: "relative" }}
      >
        <div className="w-75">{`${task.title}`}</div>

        <span onClick={() => setShowMenuItems(!showMenuItems)}>
          <RenderButton title={""} type={"menuButton"} />
        </span>

        <div
          className="task__menu--list"
          style={{
            display: showMenuItems ? "block" : "none",
          }}
        >
          {status === TaskStatus.notStarted ? (
            <>
              <span onClick={() => setShowMenuItems(false)}>
                <RenderButton title={"Start"} type={"startButton"} />
              </span>
              <br />
              <span onClick={() => setShowMenuItems(false)}>
                <RenderButton title={"Edit"} type={"editButton"} />
              </span>
            </>
          ) : null}

          {status === TaskStatus.inProgress ? (
            <>
              <span onClick={() => setShowMenuItems(false)}>
                <RenderButton title={"Complete"} type={"completeButton"} />
              </span>
              <br />
              <span onClick={() => setShowMenuItems(false)}>
                <RenderButton title={"Edit"} type={"editButton"} />
              </span>
            </>
          ) : null}

          {status === TaskStatus.completed ? (
            <>
              <span onClick={() => setShowMenuItems(false)}>
                <RenderButton title={"Start"} type={"startButton"} />
              </span>
            </>
          ) : null}
        </div>
      </h6>
      <p>{task.description}</p>
      <p>
        Due Date:&nbsp;&nbsp;
        {new Date(task.endDate).toLocaleDateString()}
      </p>
    </>
  );
};

export default TaskCard;
