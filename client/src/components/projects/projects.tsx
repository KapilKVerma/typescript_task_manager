import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Project } from "../../models/project.model";
import ProjectsHeader from "./components/projectsHeader";
import ProjectCard from "./components/projectCard";
import ProjectDetail from "./components/projectDetail";
import { serverUrl } from "../../serverUrl";
import axios from "axios";

const Projects: React.FC = () => {
  const [projectDetail, setProjectDetail] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectsToShow, setProjectsToShow] = useState<Project[]>([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/0.1/projects`);
      setProjects(response.data);
      setProjectsToShow(response.data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <React.Fragment>
      {/* Projects Header */}
      <section>
        <ProjectsHeader
          projectDetail={projectDetail}
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
    </React.Fragment>
  );
};

export default Projects;
