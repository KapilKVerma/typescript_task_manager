export type Task = {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  createdOn: Date;
  inProgress: boolean;
  completed: boolean;
  active: boolean;
};
