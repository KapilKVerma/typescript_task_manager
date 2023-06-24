import React, { useState } from "react";
import Modal from "react-bootstrap/modal";
import { Task } from "../../../models/task.model";
import RenderButton from "../../UIComponents/renderButton";
import EditTask from "../../forms/editTask/editTask";
import dayjs from "dayjs";

interface Props {
  task: Task;
  handleTaskStatus: (task: Task, status: string) => void;
}

const TaskCard: React.FC<Props> = ({ task, handleTaskStatus }) => {
  const [showMenuItems, setShowMenuItems] = useState<Boolean>(false);
  const [editTask, setEditTask] = useState<boolean>(false);

  const handleShow = () => setEditTask(true);
  const handleClose = () => setEditTask(false);

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
          {!task.completed && !task.inProgress ? (
            <>
              <span
                onClick={() => {
                  setShowMenuItems(false);
                  handleTaskStatus(task, "start");
                }}
              >
                <RenderButton title={"Start"} type={"startButton"} />
              </span>
              <br />
              <span
                onClick={() => {
                  setShowMenuItems(false);
                  handleShow();
                }}
              >
                <RenderButton title={"Edit"} type={"editButton"} />
              </span>
            </>
          ) : null}

          {!task.completed && task.inProgress ? (
            <>
              <span
                onClick={() => {
                  setShowMenuItems(false);
                  handleTaskStatus(task, "complete");
                }}
              >
                <RenderButton title={"Complete"} type={"completeButton"} />
              </span>
              <br />
              <span
                onClick={() => {
                  setShowMenuItems(false);
                  handleShow();
                }}
              >
                <RenderButton title={"Edit"} type={"editButton"} />
              </span>
            </>
          ) : null}

          {task.completed && !task.inProgress ? (
            <>
              <span
                onClick={() => {
                  setShowMenuItems(false);
                  handleTaskStatus(task, "start");
                }}
              >
                <RenderButton title={"Start"} type={"startButton"} />
              </span>
            </>
          ) : null}
        </div>
      </h6>
      {/* Body */}
      <p>{task.description}</p>
      <p>
        Due Date:&nbsp;&nbsp;
        {dayjs(task.endDate).format("DD/MM/YYYY")}
      </p>

      {/* Update Modal */}
      <Modal size="lg" show={editTask} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="text-capitalize">Edit task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <EditTask task={task} setEditTask={setEditTask} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TaskCard;
