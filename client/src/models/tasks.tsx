export type Task = {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  createdOn: Date;
  completed: boolean;
};

export const tasks: Task[] = [
  {
    id: 1,
    title:
      "Finish project proposal Write a detailed proposal for the upcoming project Finish project proposal Write a detailed proposal for the upcoming project",
    description: "Write a detailed proposal for the upcoming project",
    startDate: new Date("2023-05-23"),
    endDate: new Date("2023-06-01"),
    createdOn: new Date("2023-05-23"),
    completed: false,
  },
  {
    id: 2,
    title: "Prepare presentation slides",
    description: "Create slides for the upcoming client presentation",
    startDate: new Date("2023-06-03"),
    endDate: new Date("2023-06-05"),
    createdOn: new Date("2023-05-23"),
    completed: false,
  },
  {
    id: 3,
    title: "Review test cases",
    description: "Go through the test cases and provide feedback",
    startDate: new Date("2023-05-27"),
    endDate: new Date("2023-05-28"),
    createdOn: new Date("2023-05-22"),
    completed: true,
  },
  {
    id: 4,
    title: "Update website content",
    description:
      "Revise and update the website content for the new product launch",
    startDate: new Date("2023-06-02"),
    endDate: new Date("2023-06-04"),
    createdOn: new Date("2023-05-22"),
    completed: false,
  },
  {
    id: 5,
    title: "Attend team meeting",
    description: "Participate in the weekly team meeting and provide updates",
    startDate: new Date("2023-05-24"),
    endDate: new Date("2023-05-24"),
    createdOn: new Date("2023-05-21"),
    completed: true,
  },
  {
    id: 6,
    title: "Research market trends",
    description: "Gather information on current market trends and competitors",
    startDate: new Date("2023-05-23"),
    endDate: new Date("2023-05-31"),
    createdOn: new Date("2023-05-21"),
    completed: false,
  },
  {
    id: 7,
    title: "Fix bugs in application",
    description:
      "Identify and fix the reported bugs in the software application",
    startDate: new Date("2023-06-05"),
    endDate: new Date("2023-06-10"),
    createdOn: new Date("2023-05-20"),
    completed: false,
  },
  {
    id: 8,
    title: "Prepare financial report",
    description: "Compile and analyze financial data for the quarterly report",
    startDate: new Date("2023-05-28"),
    endDate: new Date("2023-06-01"),
    createdOn: new Date("2023-05-20"),
    completed: true,
  },
  {
    id: 9,
    title: "Conduct user interviews",
    description: "Interview users to gather feedback on the new product",
    startDate: new Date("2023-05-23"),
    endDate: new Date("2023-06-02"),
    createdOn: new Date("2023-05-19"),
    completed: false,
  },
  {
    id: 10,
    title: "Submit expense reimbursement",
    description:
      "Submit the reimbursement request for recent business expenses",
    startDate: new Date("2023-05-25"),
    endDate: new Date("2023-05-25"),
    createdOn: new Date("2023-05-19"),
    completed: true,
  },
];
