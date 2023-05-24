import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Task } from "../../models/tasks";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const NewTask: React.FC<Props> = ({ tasks, setTasks }) => {
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
    setTasks([...tasks, newTaskState]);
  };

  return (
    <>
      <form className="task__form">
        <input
          type="text"
          name="title"
          placeholder="Task title"
          className="input__field"
          value={newTaskState?.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          rows={2}
          placeholder="Task description..."
          className="input__field"
          value={newTaskState?.description}
          onChange={handleInputChange}
        />
        <Row className="d-flex flex-row justify-content-between m-0 p-0">
          <Col style={{ color: "gray", padding: "0 .5rem" }}>
            Start Date:&nbsp;&nbsp;&nbsp;
            <input
              type="date"
              name="startDate"
              style={{ border: "none" }}
              onChange={handleDateChange}
            />
          </Col>
          <Col style={{ color: "gray", padding: "0 .5rem" }}>
            Finish Date:&nbsp;&nbsp;&nbsp;
            <input
              type="date"
              name="endDate"
              style={{ border: "none" }}
              onChange={handleDateChange}
            />
          </Col>
        </Row>

        <div className="d-flex flex-row justify-content-end">
          <Button
            variant="info"
            type="submit"
            className="submit__button"
            onClick={submitNewTask}
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default NewTask;
