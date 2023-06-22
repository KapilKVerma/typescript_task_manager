import React, { useState, useEffect } from "react";
import AppWrapper from "../wrapperComponents/appWrapper";
import { Task } from "../../models/task.model";
import TasksList from "./components/tasksList";
import { serverUrl } from "../../serverUrl";
import TasksHeader from "./components/tasksHeader";
import axios from "axios";

enum taskCategory {
  inactive,
  completed,
  showAll,
}

const Tasks: React.FC = () => {
  const [tasksList, setTasksList] = useState<Task[]>([]);
  const [tasksToShow, setTasksToShow] = useState<Task[]>([]);
  const [activeButton, setActiveButton] = useState<number>(
    taskCategory.inactive
  );

  // Filter Tasks
  const filterTasks = (tasks: Task[], category: number): void => {
    let result = [...tasks];

    if (category === taskCategory.inactive)
      result = tasks.filter(
        (task: Task) => task.completed === false && !task.active
      );

    if (category === taskCategory.completed)
      result = tasks.filter((task: Task) => task.completed === true);

    setTasksToShow(result);
  };

  // Task filter hanlder
  const handleFilterTask = (tasks: Task[], category: number) => {
    filterTasks(tasks, category);
    setActiveButton(category);
  };

  // Task active status handler
  const handleTaskActive = async (task: Task) => {
    try {
      const response = await axios.put(
        `${serverUrl}/api/0.1/tasks/${task.id}/activeStatus`,
        task
      );
      setTasksList(response.data);
      filterTasks(response.data, taskCategory.inactive);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  // Delete task handler
  const handleDeleteTask = async (task: Task) => {
    try {
      const response = await axios.delete(
        `${serverUrl}/api/0.1/tasks/${task.id}`
      );
      setTasksList(response.data);
      filterTasks(response.data, taskCategory.inactive);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/0.1/tasks/`);
      setTasksList(response.data);
      filterTasks(response.data, taskCategory.inactive);
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
        <section>
          <TasksHeader
            activeButton={activeButton}
            handleFilterTask={handleFilterTask}
            tasksList={tasksList}
            setTasksToShow={setTasksToShow}
          />
        </section>

        {/* Tasks List */}
        <section>
          <TasksList
            tasksList={tasksToShow}
            handleTaskActive={handleTaskActive}
            handleDeleteTask={handleDeleteTask}
          />
        </section>
      </AppWrapper>
    </>
  );
};

export default Tasks;
