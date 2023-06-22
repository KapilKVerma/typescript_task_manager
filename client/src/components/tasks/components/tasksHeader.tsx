import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Task } from "../../../models/task.model";
import { AiOutlineSearch } from "react-icons/ai";
import NewTask from "../../forms/newTask/newTask";

interface Props {
  activeButton: number;
  handleFilterTask: (tasks: Task[], category: number) => void;
  tasksList: Task[];
  setTasksToShow: React.Dispatch<React.SetStateAction<Task[]>>;
}

enum taskCategory {
  inactive,
  completed,
  showAll,
}

const TasksHeader: React.FC<Props> = (props) => {
  const { activeButton, handleFilterTask, tasksList } = props;
  const { setTasksToShow } = props;

  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Tasks count handler
  const handleTasksCount = (tasks: Task[], completed: boolean): number => {
    let result = [];
    if (completed)
      result = tasks.filter((task) => task.completed === completed);
    else
      result = tasks.filter(
        (task) => task.completed === completed && !task.active
      );

    return result.length;
  };

  // Search projects handler
  const searchTasksHandler = (value: string, tasksList: Task[]) => {
    let result = tasksList.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setTasksToShow(result);
  };

  return (
    <>
      <div className="d-flex flex-row justify-content-between mb-3">
        <div className="w-75 d-flex flex-row justify-content-start">
          <Button
            variant="outline-dark"
            className="category__button"
            active={activeButton === taskCategory.inactive ? true : false}
            onClick={() => handleFilterTask(tasksList, taskCategory.inactive)}
          >
            Inactive ({handleTasksCount(tasksList, false)})
          </Button>
          <div className="m-1"></div>
          <Button
            variant="outline-dark"
            className="category__button"
            active={activeButton === taskCategory.completed ? true : false}
            onClick={() => handleFilterTask(tasksList, taskCategory.completed)}
          >
            Completed ({handleTasksCount(tasksList, true)})
          </Button>
          <div className="m-1"></div>
          <Button
            variant="outline-dark"
            className="category__button"
            active={activeButton === taskCategory.showAll ? true : false}
            onClick={() => handleFilterTask(tasksList, taskCategory.showAll)}
          >
            Show All ({tasksList.length})
          </Button>
          <div className="m-2"></div>
          <div>
            <form className="search__bar">
              <input
                type="text"
                name="title"
                placeholder="Enter task name..."
                className="search__bar---input"
                onChange={(e) => {
                  searchTasksHandler(e.target.value, tasksList);
                }}
              />
              <Button
                variant="dark"
                type="submit"
                className="search__bar---button"
              >
                <AiOutlineSearch size="1.25rem" />
              </Button>
            </form>
          </div>
          <div className="m-2"></div>
          <div>
            <Button variant="info" onClick={handleShow}>
              {show ? <span>Close</span> : <span>New Task</span>}
            </Button>
          </div>
        </div>

        <div className="w-25 d-flex flex-row justify-content-end">
          <Button variant="outline-dark" style={{ border: "none" }} disabled>
            Showing 14 of 30
          </Button>
        </div>
      </div>

      {/* New Task  */}
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <NewTask setClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TasksHeader;
