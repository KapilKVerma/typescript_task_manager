import React, { useState, useCallback } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Task } from "../../models/tasks";
import TasksList from "./tasksList";
import TasksTable from "./tasksTable";

interface Props {
  tasks: Task[];
}

enum taskCategory {
  today,
  remaining,
  completed,
  showAll,
}

const cDate = new Date(); // Current Date

const TasksByCategory: React.FC<Props> = ({ tasks }) => {
  const [taskList, setTaskList] = useState<Task[]>(
    tasks.filter((task: Task) => {
      if (new Date(task.startDate).toDateString() === cDate.toDateString()) {
        return task;
      }
    })
  );
  const [activeButton, setActiveButton] = useState<number>(0);

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

  return (
    <>
      <div className="mb-3">
        <Row>
          <Col lg={3} md={6}>
            <Button
              variant="outline-dark"
              className="category__button"
              active={activeButton === taskCategory.today ? true : false}
              onClick={() => {
                filterTasks(tasks, taskCategory.today);
                setActiveButton(taskCategory.today);
              }}
            >
              Today's Tasks ({todaysTasksCalculator(tasks)})
            </Button>
          </Col>
          <Col lg={3} md={6}>
            <Button
              variant="outline-dark"
              className="category__button"
              active={activeButton === taskCategory.remaining ? true : false}
              onClick={() => {
                filterTasks(tasks, taskCategory.remaining);
                setActiveButton(taskCategory.remaining);
              }}
            >
              Remaining ({tasksCalculator(tasks, false)})
            </Button>
          </Col>
          <Col lg={3} md={6}>
            <Button
              variant="outline-dark"
              className="category__button"
              active={activeButton === taskCategory.completed ? true : false}
              onClick={() => {
                filterTasks(tasks, taskCategory.completed);
                setActiveButton(taskCategory.completed);
              }}
            >
              Completed ({tasksCalculator(tasks, true)})
            </Button>
          </Col>
          <Col lg={3} md={6}>
            <Button
              variant="outline-dark"
              className="category__button"
              active={activeButton === taskCategory.showAll ? true : false}
              onClick={() => {
                filterTasks(tasks, taskCategory.showAll);
                setActiveButton(taskCategory.showAll);
              }}
            >
              Show All ({tasks.length})
            </Button>
          </Col>
        </Row>
      </div>

      <div className="mb-3">
        {activeButton !== taskCategory.showAll ? (
          <TasksList taskList={taskList} />
        ) : (
          <div
            style={{
              background: "white",
              borderRadius: "5px",
              padding: ".5rem",
            }}
          >
            <TasksTable tasks={taskList} />
          </div>
        )}
      </div>
    </>
  );
};

export default TasksByCategory;
