import React from "react";
import Button from "react-bootstrap/Button";
import { Task } from "../../../models/task.model";
import NewTask from "../../forms/newTask/newTask";

interface Props {
  activeButton: number;
  handleFilterTask: (tasks: Task[], category: number) => void;
  tasksList: Task[];
  showNewTaskForm: boolean;
  setShowNewTaskForm: React.Dispatch<React.SetStateAction<boolean>>;
}

enum taskCategory {
  inactive,
  completed,
  showAll,
}

const TasksHeader: React.FC<Props> = (props) => {
  const { activeButton, handleFilterTask, tasksList } = props;
  const { showNewTaskForm, setShowNewTaskForm } = props;

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

  return (
    <>
      <div className="d-flex flex-row justify-content-between mb-3">
        <div className="w-50 d-flex flex-row justify-content-start">
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
        </div>

        <div
          className="w-50  d-flex flex-row justify-content-end"
          style={{ position: "relative" }}
        >
          <Button
            variant="info"
            onClick={() => setShowNewTaskForm(!showNewTaskForm)}
          >
            {showNewTaskForm ? <span>Close</span> : <span>New Task</span>}
          </Button>
          {showNewTaskForm ? (
            <div className="new__task__container">
              <NewTask setClose={setShowNewTaskForm} />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default TasksHeader;
