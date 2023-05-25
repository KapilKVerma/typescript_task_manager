import React from "react";

import Dashboard from "../dashboard/dashboard";
import Projects from "../projects/projects";
import Divisions from "../divisions/divisions";
import WorkBoard from "../workboard/workBoard";
import Tasks from "../tasks/tasks";
import TeamMembers from "../teamMembers/teamMembers";

const TasksByCategory: React.FC = () => {
  return (
    <>
      {/* Dashboard */}
      <div>
        <Dashboard />
      </div>

      {/* Divisions */}
      <div className="mb-3">
        <Divisions />
      </div>

      {/* Projects */}
      <div className="mb-3">
        <Projects />
      </div>

      {/* Team members */}
      <div className="mb-3">
        <TeamMembers />
      </div>

      {/* Tasks List */}
      <div>
        <Tasks />
      </div>

      {/* Workboard */}
      <div>
        <WorkBoard />
      </div>
    </>
  );
};

export default TasksByCategory;
