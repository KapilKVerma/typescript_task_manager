import React from "react";
import Button from "react-bootstrap/Button";
import { Project } from "../../../models/project.model";
import { AiOutlineSearch } from "react-icons/ai";
import NewProject from "../../forms/newProject/newProject";

interface Props {
  projectsList: Project[];
  projectDetail: Project | null;
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  setProjectsToShow: React.Dispatch<React.SetStateAction<Project[]>>;
}

const ProjectsHeader: React.FC<Props> = (props) => {
  const { projectsList, projectDetail, showForm } = props;
  const { setShowForm, setProjectsToShow } = props;

  const filterProjectsList = (value: string, projectsList: Project[]) => {
    let result = projectsList.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setProjectsToShow(result);
  };

  return (
    <>
      <div className="d-flex flex-row justify-content-between">
        {/* Title and Search  */}
        <section className="w-50">
          {!projectDetail && (
            <div>
              <form className="search__bar">
                <input
                  type="text"
                  name="title"
                  placeholder="Enter project name..."
                  className="search__bar---input"
                  onChange={(e) => {
                    filterProjectsList(e.target.value, projectsList);
                  }}
                />
                <Button
                  variant="dark"
                  type="submit"
                  className="search__bar---button"
                >
                  <AiOutlineSearch size="1.25rem" />
                </Button>
              </form>
            </div>
          )}
        </section>

        {/* New Project  */}
        <section
          className="w-50  d-flex flex-row justify-content-end"
          style={{ position: "relative" }}
        >
          {!projectDetail && (
            <>
              <Button variant="info" onClick={() => setShowForm(!showForm)}>
                {showForm ? <span>Close</span> : <span>New Project</span>}
              </Button>
              {showForm ? (
                <div className="new__project__container">
                  <NewProject setClose={setShowForm} />
                </div>
              ) : null}
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default ProjectsHeader;
