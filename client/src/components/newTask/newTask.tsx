import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Task } from "../../models/task.model";

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
          className="input__field mb-3"
          value={newTaskState?.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          rows={2}
          placeholder="Task description"
          className="input__field mb-2"
          value={newTaskState?.description}
          onChange={handleInputChange}
        />
        <Row className=" m-0 p-0">
          <Col className="p-0 pr-3" lg={3}>
            <div className="input__field--date">
              Start Date:&nbsp;&nbsp;&nbsp;
              <input
                type="date"
                name="startDate"
                style={{ border: "none" }}
                onChange={handleDateChange}
              />
            </div>
          </Col>
          <Col className="p-0 pl-1 pr-2" lg={3}>
            <div className="input__field--date">
              Finish Date:&nbsp;&nbsp;&nbsp;
              <input
                type="date"
                name="endDate"
                style={{ border: "none" }}
                onChange={handleDateChange}
              />
            </div>
          </Col>
          <Col lg={6} className="p-0 d-flex justify-content-end">
            <Button
              variant="info"
              type="submit"
              className="submit__button"
              onClick={submitNewTask}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default NewTask;
