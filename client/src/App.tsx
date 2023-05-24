import React, { useState } from "react";
import { tasks, Task } from "./models/tasks";
import NewTask from "./components/newTask/newTask";
import TasksByCategory from "./components/tasksByCategory/tasksByCategory";

import "./App.css";

const image =
  "https://images.unsplash.com/photo-1549490316-686f9b5d359f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";

const App: React.FC = () => {
  const [tasksList, setTasksList] = useState<Task[]>(tasks);
  return (
    <div className="App">
      <div className="App__body">
        <div className="App__header--circle"></div>
        {/* <div className="mb-3 App__body--content">
          <NewTask tasks={tasksList} setTasks={setTasksList} />
        </div> */}

        {/* <div className="App__body--content">
          <TasksByCategory tasks={tasksList} />
        </div> */}
      </div>
    </div>
  );
};

export default App;
