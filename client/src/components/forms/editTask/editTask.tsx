import React from "react";
import Button from "react-bootstrap/Button";
import { Task } from "../../../models/task.model";

interface Props {
  task: Task;
  setEditTask: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditTask: React.FC<Props> = ({ task, setEditTask }) => {
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
              defaultValue={task.title}
              placeholder="Enter Task title"
              className="input__field--text"
              // value={newTaskState?.title}
              // onChange={handleInputChange}
            />
          </div>

          <div className="input__field mb-3">
            <label>Task Description:</label>
            <br></br>
            <textarea
              name="description"
              rows={2}
              defaultValue={task.description}
              placeholder="Enter Task Description"
              className="input__field--text"
              // value={newTaskState?.description}
              // onChange={handleInputChange}
            />
          </div>

          <div className="d-flex flex-row justify-content-between mb-3">
            <div className="input__field w-50">
              <label>Start Date:</label>
              <input
                type="date"
                name="startDate"
                className="input__field--date"
                // onChange={handleDateChange}
              />
            </div>
            <div className="m-2"></div>
            <div className="input__field w-50">
              <label>Completion Date:</label>
              <input
                type="date"
                name="endDate"
                className="input__field--date"
                // onChange={handleDateChange}
              />
            </div>
          </div>
        </section>

        <section>
          <div className="d-flex flex-row justify-content-end">
            <Button
              variant="outline-info"
              className="form__button"
              onClick={() => setEditTask(false)}
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
              Save
            </Button>
          </div>
        </section>
      </form>
    </>
  );
};

export default EditTask;
