import React from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { teamMembers } from "../../../models/member.model";
import SelectButton from "../../UIComponents/selectButton";
interface Props {
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
}
const NewProject: React.FC<Props> = ({ setClose }) => {
  return (
    <>
      <form className="object__form">
        <section className="mb-3">
          <div className="input__field mb-3">
            <label>Project Title:</label>
            <br></br>
            <input
              type="text"
              name="title"
              placeholder="Enter Project Title"
              className="input__field--text"

              //   value={newTaskState?.title}
              //   onChange={handleInputChange}
            />
          </div>

          <div className="input__field mb-3">
            <label>Project Budget:</label>
            <br></br>
            <input
              type="number"
              name="budget"
              className="input__field--number"
              placeholder="Enter budget"

              //   value={newTaskState?.title}
              //   onChange={handleInputChange}
            />
          </div>

          <div className="input__field mb-3">
            <label>Project Description:</label>
            <br></br>
            <textarea
              name="description"
              rows={2}
              placeholder="Enter Project Description"
              className="input__field--text"
              //   value={newTaskState?.description}
              //   onChange={handleInputChange}
            />
          </div>

          <div className="input__field mb-3">
            <label>Project Purpose:</label>
            <br></br>
            <textarea
              name="purpose"
              rows={2}
              placeholder="Enter Project Purpose"
              className="input__field--text"
              //   value={newTaskState?.description}
              //   onChange={handleInputChange}
            />
          </div>

          <div className="d-flex flex-row justify-content-between mb-3">
            <div className="input__field w-50">
              <label>Start Date:</label>
              <input
                type="date"
                name="startDate"
                className="input__field--date"
                //   onChange={handleDateChange}
              />
            </div>
            <div className="m-2"></div>
            <div className="input__field w-50">
              <label>Completion Date:</label>
              <input
                type="date"
                name="endDate"
                className="input__field--date"

                //   onChange={handleDateChange}
              />
            </div>
          </div>

          <div className="input__field mb-3">
            <label>Project Managers:</label>
            <Row className="input__field__select--container">
              {teamMembers.map((member, index) => {
                return (
                  <span key={index}>
                    <SelectButton
                      title={`${member.firstName} ${member.lastName}`}
                      image={member.profileImg}
                    />
                  </span>
                );
              })}
            </Row>
          </div>

          <div className="input__field">
            <label>Project Team Members:</label>
            <Row className="input__field__select--container">
              {teamMembers.map((member, index) => {
                return (
                  <span key={index}>
                    <SelectButton
                      title={`${member.firstName} ${member.lastName}`}
                      image={member.profileImg}
                    />
                  </span>
                );
              })}
            </Row>
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

export default NewProject;
