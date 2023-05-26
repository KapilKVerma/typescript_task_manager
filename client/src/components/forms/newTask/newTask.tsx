import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Task } from "../../../models/task.model";
import { projects } from "../../../models/project.model";

interface Props {
  tasks?: Task[];
  setTasks?: React.Dispatch<React.SetStateAction<Task[]>>;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewTask: React.FC<Props> = ({ tasks, setTasks, setClose }) => {
  const [newTaskState, setNewTaskState] = useState<Task>({
    id: 0,
    title: "",
    description: "",
    startDate: new Date(),
    endDate: new Date(),
    createdOn: new Date(),
    completed: false,
  });

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setNewTaskState({ ...newTaskState, [name]: value });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setNewTaskState({ ...newTaskState, [name]: new Date(value) });
  };

  const getRandomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const submitNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    setNewTaskState({ ...newTaskState, id: getRandomInt(10000, 20000) });
    // setTasks([...tasks, newTaskState]);
  };

  return (
    <>
      <form className="object__form">
        <section className="mb-3">
          <div className="input__field mb-3">
            <label>Task Title:</label>
            <br></br>
            <input
              type="text"
              name="title"
              placeholder="Enter Task title"
              className="input__field--text"
              value={newTaskState?.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="input__field mb-3">
            <label>Task Description:</label>
            <br></br>
            <textarea
              name="description"
              rows={2}
              placeholder="Enter Task Description"
              className="input__field--text"
              value={newTaskState?.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="d-flex flex-row justify-content-between mb-3">
            <div className="input__field w-50">
              <label>Start Date:</label>
              <input
                type="date"
                name="startDate"
                className="input__field--date"
                onChange={handleDateChange}
              />
            </div>
            <div className="m-2"></div>
            <div className="input__field w-50">
              <label>Completion Date:</label>
              <input
                type="date"
                name="endDate"
                className="input__field--date"
                onChange={handleDateChange}
              />
            </div>
          </div>

          <div className="input__field mb-3">
            <label>Task Project:</label>
            <select name="project" className="input__field--select">
              {projects.map((project, index) => {
                return (
                  <option value={project.name} key={index}>
                    {project.name}
                  </option>
                );
              })}
            </select>
          </div>
        </section>

        <section>
          <div className="d-flex flex-row justify-content-end">
            <Button
              variant="outline-info"
              type="submit"
              className="form__button"
              onClick={() => setClose(false)}
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
              Submit
            </Button>
          </div>
        </section>
      </form>
    </>
  );
};

export default NewTask;
