import React from "react";
import AppWrapper from "../wrapperComponents/appWrapper";

import {
  Gantt,
  Task,
  EventOption,
  StylingOption,
  ViewMode,
  DisplayOption,
} from "gantt-task-react";
import "gantt-task-react/dist/index.css";

let tasks: Task[] = [
  {
    start: new Date(2020, 1, 1),
    end: new Date(2020, 1, 18),
    name: "Project 1",
    id: "project 1",
    type: "project",
    progress: 100,
    isDisabled: true,
    styles: { progressColor: "#17C3A5", progressSelectedColor: "#17C3A5" },
  },
  {
    start: new Date(2020, 1, 1),
    end: new Date(2020, 1, 3),
    name: "Task 1",
    id: "task 1",
    type: "task",
    progress: 100,
    isDisabled: true,
    styles: { progressColor: "#5096F7", progressSelectedColor: "#5096F7" },
  },
  {
    start: new Date(2020, 1, 3),
    end: new Date(2020, 1, 6),
    name: "Task 2",
    id: "task 2",
    type: "task",
    progress: 50,
    isDisabled: true,
    dependencies: ["task 1"],
    styles: { progressColor: "#5096F7", progressSelectedColor: "#5096F7" },
  },
  {
    start: new Date(2020, 1, 4),
    end: new Date(2020, 1, 6),
    name: "Task 3",
    id: "task 3",
    type: "task",
    progress: 55,
    isDisabled: true,
    dependencies: ["task 1"],
    styles: { progressColor: "#5096F7", progressSelectedColor: "#5096F7" },
  },
  {
    start: new Date(2020, 1, 7),
    end: new Date(2020, 1, 15),
    name: "Task 4",
    id: "task 4",
    type: "task",
    progress: 30,
    isDisabled: true,
    dependencies: ["task 2", "task 3"],
    styles: { progressColor: "#5096F7", progressSelectedColor: "#5096F7" },
  },
  {
    start: new Date(2020, 1, 16),
    end: new Date(2020, 1, 18),
    name: "Task 5",
    id: "task 5",
    type: "task",
    progress: 10,
    isDisabled: true,
    dependencies: ["task 4"],
    styles: { progressColor: "#5096F7", progressSelectedColor: "#5096F7" },
  },
];

const TimeLine = () => {
  return (
    <>
      <AppWrapper>
        <div style={{ backgroundColor: "rgba(255,255,255)" }}>
          <Gantt tasks={tasks} />
        </div>
      </AppWrapper>
    </>
  );
};

export default TimeLine;
