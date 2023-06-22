import React, { useState } from "react";

import { Gantt, Task, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

interface Props {
  monthViewMode: boolean;
}

let tasksList: Task[] = [
  {
    start: new Date(2023, 0, 1),
    end: new Date(2023, 0, 18),
    name: "Network Infrastructure Upgrade",
    id: "project 1",
    type: "project",
    progress: 100,
    isDisabled: true,
    hideChildren: false,
    styles: { progressColor: "#17C3A5", progressSelectedColor: "#17C3A5" },
  },
  {
    start: new Date(2023, 0, 1),
    end: new Date(2023, 0, 3),
    name: "Task 1",
    id: "task 1",
    type: "task",
    progress: 100,
    isDisabled: true,
    project: "project 1",
    styles: { progressColor: "#5096F7", progressSelectedColor: "#5096F7" },
  },
  {
    start: new Date(2023, 0, 3),
    end: new Date(2023, 0, 6),
    name: "Task 2",
    id: "task 2",
    type: "task",
    progress: 50,
    isDisabled: true,
    dependencies: ["task 1"],
    project: "project 1",
    styles: { progressColor: "#5096F7", progressSelectedColor: "#5096F7" },
  },
  {
    start: new Date(2023, 0, 4),
    end: new Date(2023, 0, 6),
    name: "Task 3",
    id: "task 3",
    type: "task",
    progress: 55,
    isDisabled: true,
    dependencies: ["task 1"],
    project: "project 1",
    styles: { progressColor: "#5096F7", progressSelectedColor: "#5096F7" },
  },
  {
    start: new Date(2023, 0, 7),
    end: new Date(2023, 0, 15),
    name: "Task 4",
    id: "task 4",
    type: "task",
    progress: 30,
    isDisabled: true,
    dependencies: ["task 2", "task 3"],
    project: "project 1",
    styles: { progressColor: "#5096F7", progressSelectedColor: "#5096F7" },
  },
  {
    start: new Date(2023, 0, 16),
    end: new Date(2023, 0, 18),
    name: "Task 5",
    id: "task 5",
    type: "task",
    progress: 10,
    isDisabled: true,
    dependencies: ["task 4"],
    project: "project 1",
    styles: { progressColor: "#5096F7", progressSelectedColor: "#5096F7" },
  },
];

const ProjectTimeline: React.FC<Props> = ({ monthViewMode }) => {
  const [tasks, setTasks] = useState<Task[]>(tasksList);

  const handleExpanderClick = (task: Task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    console.log("On expander click Id:" + task.id);
  };

  return (
    <>
      <div style={{ background: "#fff" }}>
        <Gantt
          tasks={tasks}
          viewMode={monthViewMode ? ViewMode.Month : ViewMode.Day}
          listCellWidth={""}
          onExpanderClick={handleExpanderClick}
          columnWidth={100}
        />
      </div>
    </>
  );
};

export default ProjectTimeline;
