import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { MdOutlineTask } from "react-icons/md";
import { Task } from "../../../models/task.model";
import { teamMembers } from "../../../models/member.model";
import RenderButton from "../../UIComponents/renderButton";

interface Props {
  task: Task;
}

const TaskDetail: React.FC<Props> = ({ task }) => {
  const [showDetails, setShowDetails] = useState<Boolean>(false);
  const [showMenuItems, setShowMenuItems] = useState<Boolean>(false);
  const [editTask, setEditTask] = useState<Boolean>(false);

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
                      Start Date:&nbsp;&nbsp;{task.endDate.toDateString()}
                    </li>
                    <li style={attributeTag}>
                      Created On:&nbsp;&nbsp;{task.createdOn.toDateString()}
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
      {editTask ? (
        <form className="object__form">
          <section className="mb-3">
            <div className="input__field mb-3">
              <label>Task Title:</label>
              <br></br>
              <input
                type="text"
                name="title"
                defaultValue={task.title}
                placeholder="Enter Task title"
                className="input__field--text"
                // value={newTaskState?.title}
                // onChange={handleInputChange}
              />
            </div>

            <div className="input__field mb-3">
              <label>Task Description:</label>
              <br></br>
              <textarea
                name="description"
                rows={2}
                defaultValue={task.description}
                placeholder="Enter Task Description"
                className="input__field--text"
                // value={newTaskState?.description}
                // onChange={handleInputChange}
              />
            </div>

            <div className="d-flex flex-row justify-content-between mb-3">
              <div className="input__field w-50">
                <label>Start Date:</label>
                <input
                  type="date"
                  name="startDate"
                  className="input__field--date"
                  // onChange={handleDateChange}
                />
              </div>
              <div className="m-2"></div>
              <div className="input__field w-50">
                <label>Completion Date:</label>
                <input
                  type="date"
                  name="endDate"
                  className="input__field--date"
                  // onChange={handleDateChange}
                />
              </div>
            </div>
          </section>

          <section>
            <div className="d-flex flex-row justify-content-end">
              <Button
                variant="outline-info"
                type="submit"
                className="form__button"
                onClick={() => setEditTask(false)}
              >
                Close
              </Button>
              <div className="m-1"></div>
              <Button
                variant="info"
                type="submit"
                className="form__button"
                // onClick={submitNewTask}
              >
                Save
              </Button>
            </div>
          </section>
        </form>
      ) : null}
    </>
  );
};

export default TaskDetail;
