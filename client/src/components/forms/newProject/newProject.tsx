import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { TeamMember, handleFunction } from "../../../models/member.model";
import SelectMember from "../../UIComponents/selectMember";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, object, number, TypeOf } from "zod";

import { serverUrl } from "../../../serverUrl";
import axios from "axios";

const newProjectSchema = object({
  title: string().nonempty("Title is required"),
  budget: number()
    .nonnegative()
    .refine((value) => value > 0, "Budget is required"),
  description: string().nonempty("Description is required"),
  purpose: string().nonempty("Purpose is required"),
  startDate: string().nonempty("Start date is required"),
  endDate: string().nonempty("Completion date is required"),
}).refine((data) => new Date(data.startDate) <= new Date(data.endDate), {
  message: "End date must be greater than completion date",
  path: ["endDate"],
});

type NewProjectInput = TypeOf<typeof newProjectSchema>;

interface Props {
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
}
const NewProject: React.FC<Props> = ({ setClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProjectInput>({
    resolver: zodResolver(newProjectSchema),
    defaultValues: {
      title: "",
      budget: 0,
      description: "",
      purpose: "",
      startDate: "",
      endDate: "",
    },
  });

  const [projectManagers, setProjectManagers] = useState<TeamMember[]>([]);
  const [managersError, setManagersError] = useState<string>("");

  // const [projectTmMembers, setProjectTmMembers] = useState<TeamMember[]>([]);
  // const [tMemberError, setTMemberError] = useState<string>("");

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  const addMember: handleFunction = (value) => {
    let itemsList = [...projectManagers];

    let check = itemsList.filter((item) => item.id === value.id);

    if (check.length === 0) {
      itemsList.push(value);
      setManagersError("");
    }
    setProjectManagers(itemsList);

    console.log("added", itemsList);
  };

  const removeMember: handleFunction = (value) => {
    let itemsList = [...projectManagers];
    if (itemsList.length === 0) {
      setManagersError("Project manager not selected");
    }
    if (itemsList.length > 0) {
      let check = itemsList.filter((member) => member.id !== value.id);
      setProjectManagers(check);
      console.log("removed", check);
    }
  };

  const sumbit = (data: any) => {
    if (projectManagers.length === 0) {
      setManagersError("Project manager not selected");
      return;
    }

    if (projectManagers.length >= 2) {
      setManagersError("Only 2 manager should be selected");
      return;
    }

    data.managers = projectManagers;
    console.log("new project", data);
  };

  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/0.1/users/company/1`);

      setTeamMembers(response.data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);
  return (
    <>
      <form className="object__form" onSubmit={handleSubmit(sumbit)}>
        <section className="mb-3">
          <div className="input__field mb-3">
            <label>Project Title:</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter Project Title"
              className="input__field--text"
              {...register("title")}
            />
            {errors?.title?.message && (
              <p className="input__field--error">{errors.title.message}</p>
            )}
          </div>

          <div className="input__field mb-3">
            <label>Project Budget:</label>
            <br></br>
            <input
              type="number"
              className="input__field--number"
              placeholder="Enter budget"
              {...register("budget", { valueAsNumber: true })}
            />
            {errors?.budget?.message && (
              <p className="input__field--error">{errors.budget.message}</p>
            )}
          </div>

          <div className="input__field mb-3">
            <label>Project Description:</label>
            <br></br>
            <textarea
              rows={2}
              placeholder="Enter Project Description"
              className="input__field--text"
              {...register("description")}
            />
            {errors?.description?.message && (
              <p className="input__field--error">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="input__field mb-3">
            <label>Project Purpose:</label>
            <br></br>
            <textarea
              rows={2}
              placeholder="Enter Project Purpose"
              className="input__field--text"
              {...register("purpose")}
            />
            {errors?.purpose?.message && (
              <p className="input__field--error">{errors.purpose.message}</p>
            )}
          </div>

          <div className="d-flex flex-row justify-content-between mb-3">
            <div className="input__field w-50">
              <label>Start Date:</label>
              <input
                type="date"
                className="input__field--date"
                {...register("startDate", { valueAsDate: false })}
              />
              {errors?.startDate?.message && (
                <p className="input__field--error">
                  {errors.startDate.message}
                </p>
              )}
            </div>
            <div className="m-2"></div>
            <div className="input__field w-50">
              <label>Completion Date:</label>
              <input
                type="date"
                className="input__field--date"
                {...register("endDate", { valueAsDate: false })}
              />
              {errors?.endDate?.message && (
                <p className="input__field--error">{errors.endDate.message}</p>
              )}
            </div>
          </div>

          <div className="input__field mb-3">
            <label>Project Managers:</label>
            <Row className="input__field__select--container">
              {teamMembers.map((member, index) => {
                return (
                  <span key={index}>
                    <SelectMember
                      member={member}
                      addMember={addMember}
                      removeMember={removeMember}
                    />
                  </span>
                );
              })}
            </Row>
            {managersError && (
              <p className="input__field--error">{managersError}</p>
            )}
          </div>

          {/* <div className="input__field">
            <label>Project Team Members:</label>
            <Row className="input__field__select--container">
              {teamMembers.map((member, index) => {
                return (
                  <span key={index}>
                    <SelectButton member={member} addMember={addMember} />
                  </span>
                );
              })}
            </Row>
          </div> */}
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
            <Button variant="info" type="submit" className="form__button">
              Submit
            </Button>
          </div>
        </section>
      </form>
    </>
  );
};

export default NewProject;
