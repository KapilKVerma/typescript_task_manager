import React from "react";
import Button from "react-bootstrap/Button";
import { projects } from "../../../models/project.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, object, number, TypeOf } from "zod";

const newTaskSchema = object({
  title: string().nonempty("Title is required"),
  description: string().nonempty("Description is required"),
  startDate: string().nonempty("Start date is required"),
  endDate: string().nonempty("Completion date is required"),
  project: number().refine((value) => value > 0, "Project is required"),
}).refine((data) => new Date(data.startDate) <= new Date(data.endDate), {
  message: "End date must be greater than completion date",
  path: ["endDate"],
});

type NewTaskInput = TypeOf<typeof newTaskSchema>;

interface Props {
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewTask: React.FC<Props> = ({ setClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewTaskInput>({
    resolver: zodResolver(newTaskSchema),
    defaultValues: {
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      project: 0,
    },
  });

  const sumbit = (d: any) => {
    console.log(d);
  };

  return (
    <>
      <form className="object__form" onSubmit={handleSubmit(sumbit)}>
        <section className="mb-3">
          <div className="input__field mb-3">
            <label>Task Title:</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter Task title"
              className="input__field--text"
              {...register("title")}
            />
            {errors?.title?.message && (
              <p className="input__field--error">{errors.title.message}</p>
            )}
          </div>

          <div className="input__field mb-3">
            <label>Task Description:</label>
            <br></br>
            <textarea
              rows={2}
              placeholder="Enter Task Description"
              className="input__field--text"
              {...register("description")}
            />
            {errors?.description?.message && (
              <p className="input__field--error">
                {errors.description.message}
              </p>
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
            <label>Task Project:</label>
            <select
              className="input__field--select"
              {...register("project", { valueAsNumber: true })}
            >
              {projects.map((project, index) => {
                return (
                  <option value={project.id} key={index}>
                    {project.name}
                  </option>
                );
              })}
            </select>
            {errors?.project?.message && (
              <p className="input__field--error">{errors.project.message}</p>
            )}
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
            <Button variant="info" type="submit" className="form__button">
              Submit
            </Button>
          </div>
        </section>
      </form>
    </>
  );
};

export default NewTask;
