export type Project = {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  started: boolean;
  completed: boolean;
  budget: number;
  division: string;
  projectManager: string;
  purpose: string;
};
