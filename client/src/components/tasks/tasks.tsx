import React, { useState, useCallback } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { tasks, Task } from "../../models/task.model";
import TasksList from "./tasksList";
import TasksTable from "./tasksTable";
import NewTask from "../forms/newTask/newTask";

enum taskCategory {
  today,
  remaining,
  completed,
  showAll,
}

const cDate = new Date(); // Current Date

const Tasks: React.FC = () => {
  const [taskList, setTaskList] = useState<Task[]>(
    tasks.filter((task: Task) => {
      if (new Date(task.startDate).toDateString() === cDate.toDateString()) {
        return task;
      }
    })
  );
  const [activeButton, setActiveButton] = useState<number>(0);
  const [showNewTaskForm, setShowNewTaskForm] = useState<boolean>(false);

  const todaysTasksCalculator = useCallback(
    (tasks: Task[]): number => {
      // Filter tasks that have their startDate matching the current date
      const todayTasks = tasks.filter((task: Task) => {
        if (new Date(task.startDate).toDateString() === cDate.toDateString()) {
          return task; // Include task in the filtered array
        }
      });

      return todayTasks.length; // Return the count of tasks with start dates matching the current date
    },
    [tasks] // Dependency array specifying the tasks parameter
  );

  const tasksCalculator = (tasks: Task[], completed: boolean): number => {
    // Filter tasks based on the completion status
    const filteredTasks = tasks.filter((task) => task.completed === completed);

    // Return the count of filtered tasks
    return filteredTasks.length;
  };

  const filterTasks = (tasks: Task[], category: number): void => {
    let result = [...tasks];

    if (category === taskCategory.today)
      result = tasks.filter((task: Task) => {
        if (new Date(task.startDate).toDateString() === cDate.toDateString()) {
          return task;
        }
      });

    if (category === taskCategory.remaining)
      result = tasks.filter((task: Task) => task.completed === false);

    if (category === taskCategory.completed)
      result = tasks.filter((task: Task) => task.completed === true);

    setTaskList(result);
  };

  const hanldeClick = (tasks: Task[], category: number) => {
    filterTasks(tasks, category);
    setActiveButton(category);
    setShowNewTaskForm(false);
  };

  return (
    <>
      {/* Tasks  Header*/}
      <div className="d-flex flex-row justify-content-between mb-3">
        <div className="w-50 d-flex flex-row justify-content-start">
          <Button
            variant="outline-dark"
            className="category__button"
            active={activeButton === taskCategory.today ? true : false}
            onClick={() => hanldeClick(tasks, taskCategory.today)}
          >
            Today's ({todaysTasksCalculator(tasks)})
          </Button>
          <div className="m-1"></div>
          <Button
            variant="outline-dark"
            className="category__button"
            active={activeButton === taskCategory.remaining ? true : false}
            onClick={() => hanldeClick(tasks, taskCategory.remaining)}
          >
            Remaining ({tasksCalculator(tasks, false)})
          </Button>
          <div className="m-1"></div>
          <Button
            variant="outline-dark"
            className="category__button"
            active={activeButton === taskCategory.completed ? true : false}
            onClick={() => hanldeClick(tasks, taskCategory.completed)}
          >
            Completed ({tasksCalculator(tasks, true)})
          </Button>
          <div className="m-1"></div>
          <Button
            variant="outline-dark"
            className="category__button"
            active={activeButton === taskCategory.showAll ? true : false}
            onClick={() => hanldeClick(tasks, taskCategory.showAll)}
          >
            Show All ({tasks.length})
          </Button>
        </div>

        <div
          className="w-50  d-flex flex-row justify-content-end"
          style={{ position: "relative" }}
        >
          <Button
            variant="info"
            onClick={() => {
              setShowNewTaskForm(!showNewTaskForm);
            }}
          >
            {showNewTaskForm ? <span>Close</span> : <span>New Task</span>}
          </Button>
          {showNewTaskForm ? (
            <div className="new__task__container">
              <NewTask
                tasks={taskList}
                setTasks={setTaskList}
                setClose={setShowNewTaskForm}
              />
            </div>
          ) : null}
        </div>
      </div>

      {/* Tasks List */}
      <div className="mb-3">
        {activeButton !== taskCategory.showAll ? (
          <TasksList taskList={taskList} />
        ) : (
          <TasksTable tasks={taskList} />
        )}
      </div>
    </>
  );
};

export default Tasks;
