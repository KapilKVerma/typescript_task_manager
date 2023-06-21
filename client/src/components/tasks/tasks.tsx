import React, { useState, useCallback, useEffect } from "react";
import Button from "react-bootstrap/Button";
import AppWrapper from "../wrapperComponents/appWrapper";
import { Task } from "../../models/task.model";
import TasksList from "./components/tasksList";
import TasksTable from "./components/tasksTable";
import NewTask from "../forms/newTask/newTask";
import axios from "axios";

enum taskCategory {
  today,
  remaining,
  completed,
  showAll,
}

const cDate = new Date(); // Current Date

const Tasks: React.FC = () => {
  const [tasksList, setTasksList] = useState<Task[]>([]);
  const [activeButton, setActiveButton] = useState<number>(0);
  const [showNewTaskForm, setShowNewTaskForm] = useState<boolean>(false);

  const todaysTasksCalculator = (tasks: Task[]): number => {
    // Filter tasks that have their startDate matching the current date
    const todayTasks = tasks.filter((task: Task) => {
      if (task.startDate === cDate) {
        return task; // Include task in the filtered array
      }
    });

    return todayTasks.length; // Return the count of tasks with start dates matching the current date
  };

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
        if (task.startDate === cDate) {
          return task;
        }
      });

    if (category === taskCategory.remaining)
      result = tasks.filter((task: Task) => task.completed === false);

    if (category === taskCategory.completed)
      result = tasks.filter((task: Task) => task.completed === true);

    setTasksList(result);
  };

  const hanldeClick = (tasks: Task[], category: number) => {
    // Call a function to filter tasks based on the category
    filterTasks(tasks, category);

    // Set the active button based on the selected category
    setActiveButton(category);

    // Hide the new task form
    setShowNewTaskForm(false);
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/0.1/tasks/`);
      setTasksList(response.data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <AppWrapper>
        {/* Tasks  Header*/}
        <div className="d-flex flex-row justify-content-between mb-3">
          <div className="w-50 d-flex flex-row justify-content-start">
            <Button
              variant="outline-dark"
              className="category__button"
              active={activeButton === taskCategory.today ? true : false}
              onClick={() => hanldeClick(tasksList, taskCategory.today)}
            >
              Today's ({todaysTasksCalculator(tasksList)})
            </Button>
            <div className="m-1"></div>
            <Button
              variant="outline-dark"
              className="category__button"
              active={activeButton === taskCategory.remaining ? true : false}
              onClick={() => hanldeClick(tasksList, taskCategory.remaining)}
            >
              Remaining ({tasksCalculator(tasksList, false)})
            </Button>
            <div className="m-1"></div>
            <Button
              variant="outline-dark"
              className="category__button"
              active={activeButton === taskCategory.completed ? true : false}
              onClick={() => hanldeClick(tasksList, taskCategory.completed)}
            >
              Completed ({tasksCalculator(tasksList, true)})
            </Button>
            <div className="m-1"></div>
            <Button
              variant="outline-dark"
              className="category__button"
              active={activeButton === taskCategory.showAll ? true : false}
              onClick={() => hanldeClick(tasksList, taskCategory.showAll)}
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

        {/* Tasks List */}
        <div>
          {activeButton !== taskCategory.showAll && tasksList ? (
            <TasksList taskList={tasksList} />
          ) : (
            <TasksTable tasks={tasksList} />
          )}
        </div>
      </AppWrapper>
    </>
  );
};

export default Tasks;
