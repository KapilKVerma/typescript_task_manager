import mongoose from "mongoose";

export interface Task {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  projectId: string;
  userId: string;
}

export interface TaskDocument extends Task, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value: Date) {
          const startDate = (this as Task).startDate as Date;
          return value > startDate;
        },
        message: "endDate must be greater than startDate",
      },
    },
    projectId: { type: String, required: true },
    userId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const TaskModel = mongoose.model<Task>("Task", taskSchema);

export default TaskModel;
