import React, { useState } from "react";
import { tasks, Task } from "./models/tasks";
import NewTask from "./components/newTask/newTask";
import TasksByCategory from "./components/tasksByCategory/tasksByCategory";

import "./App.css";

const App: React.FC = () => {
  const [tasksList, setTasksList] = useState<Task[]>(tasks);
  return (
    <div className="App">
      <div className="mb-3 mt-3">
        <NewTask tasks={tasksList} setTasks={setTasksList} />
      </div>

      <div>
        <TasksByCategory tasks={tasksList} />
      </div>
    </div>
  );
};

export default App;
