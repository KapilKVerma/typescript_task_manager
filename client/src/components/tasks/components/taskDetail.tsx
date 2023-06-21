import React, { useState } from "react";
import { MdOutlineTask } from "react-icons/md";
import { Task } from "../../../models/task.model";
import { teamMembers } from "../../../models/member.model";
import RenderButton from "../../UIComponents/renderButton";
import EditTask from "../../forms/editTask/editTask";
import dayjs from "dayjs";

interface Props {
  task: Task;
}

const TaskDetail: React.FC<Props> = ({ task }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [showMenuItems, setShowMenuItems] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<boolean>(false);

  const member1 = teamMembers[8];
  const member2 = teamMembers[4];

  const attributeTag = {
    marginRight: ".5rem",
    padding: ".4rem 1rem",
    borderRadius: "50px",
    background: "rgb(81, 151, 248, 0.25)",
    fontWeight: "500",
  };

  return (
    <>
      {!editTask ? (
        <div style={{ position: "relative", padding: ".7rem" }}>
          {/*Task Icon */}
          <section>
            <span className="tasks__list__item--icon">
              <MdOutlineTask size={"1.5rem"} />
            </span>
          </section>

          {/*Task  Header */}
          <section>
            <div style={{ width: "80%" }}>
              <section>
                <h6 className="text-capitalize">
                  {task.title.length > 130 ? (
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {task.title.slice(0, 100)}...
                    </span>
                  ) : (
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {task.title}
                    </span>
                  )}
                  &nbsp;&nbsp;|&nbsp;&nbsp;Due:&nbsp;&nbsp;
                  {task.endDate.toDateString()}
                </h6>
              </section>

              {showDetails ? (
                <section className="p-3 ">
                  <h6>Title</h6>
                  <p>{task.title}</p>

                  <h6>Description</h6>
                  <p>{task.description}</p>

                  <ul
                    className="d-flex flex-row justify-content-start p-0 m-0"
                    style={{ listStyleType: "none" }}
                  >
                    <li style={attributeTag}>
                      Start Date:&nbsp;&nbsp;
                      {dayjs(task.endDate).format("DD/MM/YYYY")}
                    </li>
                    <li style={attributeTag}>
                      Created On:&nbsp;&nbsp;
                      {dayjs(task.createdOn).format("DD/MM/YYYY")}
                    </li>
                    <li style={attributeTag}>
                      Created By:&nbsp;&nbsp;
                      {`${member2.firstName} ${member2.lastName}`}
                    </li>
                    <li style={attributeTag}>
                      Assigned To:&nbsp;&nbsp;
                      {`${member1.firstName} ${member1.lastName}`}
                    </li>
                  </ul>
                </section>
              ) : null}
            </div>
          </section>

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
              <span onClick={() => setShowMenuItems(false)}>
                <RenderButton title={"Complete"} type={"completeButton"} />
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
              <span onClick={() => setShowMenuItems(false)}>
                <RenderButton title={"Delete"} type={"deleteButton"} />
              </span>
            </div>
          </section>
        </div>
      ) : null}

      {/* Edit form */}
      {editTask ? <EditTask task={task} setEditTask={setEditTask} /> : null}
    </>
  );
};

export default TaskDetail;
