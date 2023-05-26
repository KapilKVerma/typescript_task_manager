import React from "react";
import Button from "react-bootstrap/Button";
import { Project } from "../../../models/project.model";
import { AiOutlineSearch } from "react-icons/ai";
import NewProject from "../../forms/newProject/newProject";

interface Props {
  projectDetail: Project | null;
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectsHeader: React.FC<Props> = (props) => {
  const { projectDetail, showForm, setShowForm } = props;
  return (
    <>
      <div className="d-flex flex-row justify-content-between">
        {/* Title and Search  */}
        <section className="w-50 d-flex flex-row justify-content-start">
          <h4>
            {projectDetail ? (
              <span>Project Detail</span>
            ) : (
              <span>Projects</span>
            )}
          </h4>
          <div className="m-3"></div>
          {!projectDetail && (
            <div>
              <form className="search__bar">
                <input
                  type="text"
                  name="title"
                  placeholder="Enter name..."
                  className="search__bar---input"
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
