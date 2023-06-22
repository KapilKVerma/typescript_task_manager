import React, { useState } from "react";
import AppWrapper from "../wrapperComponents/appWrapper";

import { Gantt, Task, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

let tasksList: Task[] = [
  {
    start: new Date(2023, 0, 1),
    end: new Date(2023, 4, 18),
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
  {
    start: new Date(2023, 0, 1),
    end: new Date(2023, 2, 18),
    name: "Infrastructure Upgrade",
    id: "project 2",
    type: "project",
    progress: 100,
    isDisabled: true,
    hideChildren: false,
    styles: { progressColor: "#17C3A5", progressSelectedColor: "#17C3A5" },
  },
  {
    start: new Date(2023, 2, 1),
    end: new Date(2023, 6, 25),
    name: "Infrastructure Upgrade",
    id: "project 3",
    type: "project",
    progress: 100,
    isDisabled: true,
    hideChildren: false,
    styles: { progressColor: "#17C3A5", progressSelectedColor: "#17C3A5" },
  },

  {
    start: new Date(2023, 4, 15),
    end: new Date(2023, 7, 25),
    name: "Infrastructure Upgrade",
    id: "project 4",
    type: "project",
    progress: 100,
    isDisabled: true,
    hideChildren: false,
    styles: { progressColor: "#17C3A5", progressSelectedColor: "#17C3A5" },
  },
  {
    start: new Date(2023, 8, 5),
    end: new Date(2024, 0, 25),
    name: "Infrastructure Upgrade",
    id: "project 5",
    type: "project",
    progress: 100,
    isDisabled: true,
    hideChildren: false,
    styles: { progressColor: "#17C3A5", progressSelectedColor: "#17C3A5" },
  },
];

const TimeLine = () => {
  const [tasks, setTasks] = useState<Task[]>(tasksList);

  const handleExpanderClick = (task: Task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    console.log("On expander click Id:" + task.id);
  };

  return (
    <>
      <AppWrapper>
        <div style={{ backgroundColor: "rgba(255,255,255)" }}>
          <Gantt
            tasks={tasks}
            viewMode={ViewMode.Month}
            listCellWidth={""}
            onExpanderClick={handleExpanderClick}
            columnWidth={100}
          />
        </div>
      </AppWrapper>
    </>
  );
};

export default TimeLine;
