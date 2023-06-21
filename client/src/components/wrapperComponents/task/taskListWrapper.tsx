import React from "react";
import { MdOutlineTask } from "react-icons/md";
import { Task } from "../../../models/task.model";
import { teamMembers } from "../../../models/member.model";
import dayjs from "dayjs";

interface Props {
  children: React.ReactNode;
  task: Task;
  showDetails: boolean;
}

const attributeTag = {
  marginRight: ".5rem",
  padding: ".4rem 1rem",
  borderRadius: "50px",
  background: "rgb(81, 151, 248, 0.25)",
  fontWeight: "500",
};

const member1 = teamMembers[8];
const member2 = teamMembers[4];

const TaskListWrapper: React.FC<Props> = ({ children, task, showDetails }) => {
  return (
    <>
      <div style={{ position: "relative", padding: ".7rem" }}>
        {/*Task Icon */}
        <section>
          <span className="tasks__list__item--icon">
            <MdOutlineTask size={"1.5rem"} />
          </span>
        </section>

        <section>
          <div style={{ width: "80%" }}>
            {!showDetails ? (
              <section>
                {/* Task title */}
                <h6 className="text-capitalize">
                  {task.title.length > 130 ? (
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {task.title.slice(0, 100)}...
                    </span>
                  ) : (
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {task.title}
                    </span>
                  )}
                  &nbsp;&nbsp;|&nbsp;&nbsp;Due:&nbsp;&nbsp;
                  {dayjs(task.endDate).format("DD/MM/YYYY")}
                </h6>
              </section>
            ) : (
              <section className="p-3 ">
                {/* Task detail */}
                <h5>{task.title}</h5>

                <h6>Description</h6>
                <p>{task.description}</p>

                <ul
                  className="d-flex flex-row justify-content-start p-0 m-0"
                  style={{ listStyleType: "none" }}
                >
                  <li style={attributeTag}>
                    Created On:&nbsp;&nbsp;
                    {dayjs(task.createdOn).format("DD/MM/YYYY")}
                  </li>
                  <li style={attributeTag}>
                    Start Date:&nbsp;&nbsp;
                    {dayjs(task.endDate).format("DD/MM/YYYY")}
                  </li>
                  <li style={attributeTag}>
                    Due Date:&nbsp;&nbsp;
                    {dayjs(task.endDate).format("DD/MM/YYYY")}
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
            )}
          </div>
        </section>

        {children}
      </div>
    </>
  );
};

export default TaskListWrapper;
