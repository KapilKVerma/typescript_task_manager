import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AppWrapper from "../wrapperComponents/appWrapper";
import { Project, projects } from "../../models/project.model";
import ProjectsHeader from "./components/projectsHeader";
import ProjectCard from "./components/projectCard";
import ProjectDetail from "./components/projectDetail";

const Projects: React.FC = () => {
  const [projectDetail, setProjectDetail] = useState<Project | null>(null);
  const [showNewProjectForm, setShowNewProjectForm] = useState<boolean>(false);
  const [projectsToShow, setProjectsToShow] = useState<Project[]>(projects);

  return (
    <>
      <AppWrapper>
        {/* Projects Header */}
        <section>
          <ProjectsHeader
            projectDetail={projectDetail}
            showForm={showNewProjectForm}
            setShowForm={setShowNewProjectForm}
            projectsList={projects}
            setProjectsToShow={setProjectsToShow}
          />
        </section>

        {/* Projects Grid */}
        <section>
          {!projectDetail && (
            <Row className="m-0 p-0 mt-3">
              {projectsToShow.map((project, index) => {
                return (
                  <Col lg={4} md={6} sm={12} key={index} className="m-0 p-1">
                    <ProjectCard
                      project={project}
                      setProjectDetail={setProjectDetail}
                      setShowForm={setShowNewProjectForm}
                    />
                  </Col>
                );
              })}
            </Row>
          )}
        </section>

        {/* Project Detail */}
        <section className="pt-3">
          {projectDetail && (
            <ProjectDetail
              project={projectDetail}
              setProjectDetail={setProjectDetail}
            />
          )}
        </section>
      </AppWrapper>
    </>
  );
};

export default Projects;
