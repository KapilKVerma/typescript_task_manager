import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Project } from "../../../models/project.model";
import { AiOutlineSearch } from "react-icons/ai";
import NewProject from "../../forms/newProject/newProject";

interface Props {
  projectsList: Project[];
  projectDetail: Project | null;
  setProjectsToShow: React.Dispatch<React.SetStateAction<Project[]>>;
}

const ProjectsHeader: React.FC<Props> = (props) => {
  const { projectsList, projectDetail } = props;
  const { setProjectsToShow } = props;

  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Search projects handler
  const searchProjectsHandler = (value: string, projectsList: Project[]) => {
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
            <div className="w-75 d-flex flex-row justify-content-start">
              <div>
                <form className="search__bar">
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter project name..."
                    className="search__bar---input"
                    onChange={(e) => {
                      searchProjectsHandler(e.target.value, projectsList);
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
              <div className="m-2"></div>
              <div>
                <Button variant="info" onClick={handleShow}>
                  {show ? <span>Close</span> : <span>New Project</span>}
                </Button>
              </div>
            </div>
          )}
        </section>

        <section className="w-50 d-flex flex-row justify-content-end"></section>
      </div>

      {/* New Project  */}
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <NewProject setClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectsHeader;
