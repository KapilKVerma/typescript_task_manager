import React from "react";
import { AiOutlineProject } from "react-icons/ai";

interface Props {
  children: React.ReactNode;
}

const ProjectCardWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="project__card">
        {/* Card Icon */}
        <section>
          <span className="project__card--icon">
            <AiOutlineProject size={"2rem"} />
          </span>
        </section>

        {/* Card Body */}
        {children}
      </div>
    </div>
  );
};

export default ProjectCardWrapper;
