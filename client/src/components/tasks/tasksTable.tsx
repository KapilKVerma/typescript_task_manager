import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Task } from "../../models/task.model";

interface Props {
  tasks: Task[];
}

const TasksTable: React.FC<Props> = ({ tasks }) => {
  return (
    <Table responsive bordered style={{ background: "white" }}>
      <thead>
        <tr>
          {Array.from({ length: 12 }).map((_, index) => {
            let date = new Date(
              new Date().setDate(new Date().getDate() + index)
            );

            return (
              <th key={index} style={{ minWidth: "12rem" }}>
                {date.toDateString()}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          {tasks.map((task) => {
            return (
              <td key={task.id} className="p-2">
                <Button
                  variant="info"
                  className="task__lable text-capitalize"
                  active={false}
                >
                  {task.title.length > 16
                    ? task.title.slice(0, 16) + "..."
                    : task.title}
                </Button>
              </td>
            );
          })}
        </tr>
        <tr>
          {tasks.map((task) => {
            return (
              <td key={task.id} className="p-2">
                <Button
                  variant="info"
                  className="task__lable text-capitalize"
                  active={false}
                >
                  {task.title.length > 16
                    ? task.title.slice(0, 16) + "..."
                    : task.title}
                </Button>
              </td>
            );
          })}
        </tr>
        <tr>
          {tasks.map((task) => {
            return (
              <td key={task.id} className="p-2">
                <Button
                  variant="info"
                  className="task__lable text-capitalize"
                  active={false}
                >
                  {task.title.length > 16
                    ? task.title.slice(0, 16) + "..."
                    : task.title}
                </Button>
              </td>
            );
          })}
        </tr>
      </tbody>
    </Table>
  );
};

export default TasksTable;
