import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { BiTrash, BiEdit, BiCheck, BiExpand } from "react-icons/bi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineTask } from "react-icons/md";
import { Task } from "../../../models/task.model";
import SelectMember from "../../UIComponents/selectMember";
import { teamMembers } from "../../../models/member.model";

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
        <div style={{ position: "relative" }}>
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
                  {task.endDate.toDateString()}&nbsp;&nbsp;|&nbsp;&nbsp;
                  {/* <SelectButton
                    title={`${member1.firstName} ${member1.lastName}`}
                    image={member1.profileImg}
                  /> */}
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
            <div className="task__menu--container">
              <Button
                size="sm"
                variant="light"
                className="mr-1"
                onClick={() => {
                  setShowDetails(!showDetails);
                  setShowMenuItems(false);
                }}
              >
                <BiExpand size={"1.25rem"} />
              </Button>

              <Button
                size="sm"
                variant="light"
                onClick={() => setShowMenuItems(!showMenuItems)}
              >
                <HiOutlineMenuAlt2 size={"1.25rem"} />
              </Button>
            </div>
            <div
              className="task__menu--list"
              style={{
                display: showMenuItems ? "block" : "none",
              }}
            >
              <Button
                size="sm"
                variant="light"
                className="w-100 text-left mb-1"
              >
                <BiCheck size={"1.25rem"} />
                &nbsp;&nbsp;Complete
              </Button>
              <br />
              <Button
                size="sm"
                variant="light"
                className="w-100 text-left mb-1"
                onClick={() => {
                  setEditTask(true);
                  setShowMenuItems(false);
                }}
              >
                <BiEdit size={"1.25rem"} />
                &nbsp;&nbsp;Edit
              </Button>
              <br />
              <Button size="sm" variant="light" className="w-100 text-left">
                <BiTrash size={"1.25rem"} />
                &nbsp;&nbsp;Delete
              </Button>
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
