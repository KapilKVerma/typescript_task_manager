type Task = {
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

let tasks: Task[] = [
  {
    id: 1,
    title:
      "Finish project proposal Write a detailed proposal for the upcoming project",
    description: "Write a detailed proposal for the upcoming project",
    startDate: new Date("2023-06-21"),
    endDate: new Date("2023-07-08"),
    createdOn: new Date("2023-05-23"),
    inProgress: false,
    completed: false,
    active: true,
  },
  {
    id: 2,
    title: "Prepare presentation slides",
    description: "Create slides for the upcoming client presentation",
    startDate: new Date("2023-06-03"),
    endDate: new Date("2023-06-05"),
    createdOn: new Date("2023-05-23"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 3,
    title: "Review test cases",
    description: "Go through the test cases and provide feedback",
    startDate: new Date("2023-05-27"),
    endDate: new Date("2023-05-28"),
    createdOn: new Date("2023-05-22"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 4,
    title: "Update website content",
    description:
      "Revise and update the website content for the new product launch",
    startDate: new Date("2023-06-02"),
    endDate: new Date("2023-06-04"),
    createdOn: new Date("2023-05-22"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 5,
    title: "Attend team meeting",
    description: "Participate in the weekly team meeting and provide updates",
    startDate: new Date("2023-05-24"),
    endDate: new Date("2023-05-24"),
    createdOn: new Date("2023-05-21"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 6,
    title: "Research market trends",
    description: "Gather information on current market trends and competitors",
    startDate: new Date("2023-05-23"),
    endDate: new Date("2023-05-31"),
    createdOn: new Date("2023-05-21"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 7,
    title: "Fix bugs in application",
    description:
      "Identify and fix the reported bugs in the software application",
    startDate: new Date("2023-06-05"),
    endDate: new Date("2023-06-10"),
    createdOn: new Date("2023-05-20"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 8,
    title: "Prepare financial report",
    description: "Compile and analyze financial data for the quarterly report",
    startDate: new Date("2023-05-28"),
    endDate: new Date("2023-06-01"),
    createdOn: new Date("2023-05-20"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 9,
    title: "Conduct user interviews",
    description: "Interview users to gather feedback on the new product",
    startDate: new Date("2023-05-23"),
    endDate: new Date("2023-06-02"),
    createdOn: new Date("2023-05-19"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 10,
    title: "Submit expense reimbursement",
    description:
      "Submit the reimbursement request for recent business expenses",
    startDate: new Date("2023-05-25"),
    endDate: new Date("2023-05-25"),
    createdOn: new Date("2023-05-19"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 11,
    title:
      "Finish project proposal Write a detailed proposal for the upcoming project",
    description: "Write a detailed proposal for the upcoming project",
    startDate: new Date("2023-06-21"),
    endDate: new Date("2023-07-08"),
    createdOn: new Date("2023-05-23"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 12,
    title: "Prepare presentation slides",
    description: "Create slides for the upcoming client presentation",
    startDate: new Date("2023-06-03"),
    endDate: new Date("2023-06-05"),
    createdOn: new Date("2023-05-23"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 13,
    title: "Review test cases",
    description: "Go through the test cases and provide feedback",
    startDate: new Date("2023-05-27"),
    endDate: new Date("2023-05-28"),
    createdOn: new Date("2023-05-22"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 14,
    title: "Update website content",
    description:
      "Revise and update the website content for the new product launch",
    startDate: new Date("2023-06-02"),
    endDate: new Date("2023-06-04"),
    createdOn: new Date("2023-05-22"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 15,
    title: "Attend team meeting",
    description: "Participate in the weekly team meeting and provide updates",
    startDate: new Date("2023-05-24"),
    endDate: new Date("2023-05-24"),
    createdOn: new Date("2023-05-21"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 16,
    title: "Research market trends",
    description: "Gather information on current market trends and competitors",
    startDate: new Date("2023-05-23"),
    endDate: new Date("2023-05-31"),
    createdOn: new Date("2023-05-21"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 17,
    title: "Fix bugs in application",
    description:
      "Identify and fix the reported bugs in the software application",
    startDate: new Date("2023-06-05"),
    endDate: new Date("2023-06-10"),
    createdOn: new Date("2023-05-20"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 18,
    title: "Prepare financial report",
    description: "Compile and analyze financial data for the quarterly report",
    startDate: new Date("2023-05-28"),
    endDate: new Date("2023-06-01"),
    createdOn: new Date("2023-05-20"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 19,
    title: "Conduct user interviews",
    description: "Interview users to gather feedback on the new product",
    startDate: new Date("2023-05-23"),
    endDate: new Date("2023-06-02"),
    createdOn: new Date("2023-05-19"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 20,
    title: "Submit expense reimbursement",
    description:
      "Submit the reimbursement request for recent business expenses",
    startDate: new Date("2023-05-25"),
    endDate: new Date("2023-05-25"),
    createdOn: new Date("2023-05-19"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 21,
    title:
      "Finish project proposal Write a detailed proposal for the upcoming project",
    description: "Write a detailed proposal for the upcoming project",
    startDate: new Date("2023-06-21"),
    endDate: new Date("2023-07-08"),
    createdOn: new Date("2023-05-23"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 22,
    title: "Prepare presentation slides",
    description: "Create slides for the upcoming client presentation",
    startDate: new Date("2023-06-03"),
    endDate: new Date("2023-06-05"),
    createdOn: new Date("2023-05-23"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 23,
    title: "Review test cases",
    description: "Go through the test cases and provide feedback",
    startDate: new Date("2023-05-27"),
    endDate: new Date("2023-05-28"),
    createdOn: new Date("2023-05-22"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 24,
    title: "Update website content",
    description:
      "Revise and update the website content for the new product launch",
    startDate: new Date("2023-06-02"),
    endDate: new Date("2023-06-04"),
    createdOn: new Date("2023-05-22"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 25,
    title: "Attend team meeting",
    description: "Participate in the weekly team meeting and provide updates",
    startDate: new Date("2023-05-24"),
    endDate: new Date("2023-05-24"),
    createdOn: new Date("2023-05-21"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 26,
    title: "Research market trends",
    description: "Gather information on current market trends and competitors",
    startDate: new Date("2023-05-23"),
    endDate: new Date("2023-05-31"),
    createdOn: new Date("2023-05-21"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 27,
    title: "Fix bugs in application",
    description:
      "Identify and fix the reported bugs in the software application",
    startDate: new Date("2023-06-05"),
    endDate: new Date("2023-06-10"),
    createdOn: new Date("2023-05-20"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 28,
    title: "Prepare financial report",
    description: "Compile and analyze financial data for the quarterly report",
    startDate: new Date("2023-05-28"),
    endDate: new Date("2023-06-01"),
    createdOn: new Date("2023-05-20"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 29,
    title: "Conduct user interviews",
    description: "Interview users to gather feedback on the new product",
    startDate: new Date("2023-05-23"),
    endDate: new Date("2023-06-02"),
    createdOn: new Date("2023-05-19"),
    inProgress: false,
    completed: false,
    active: false,
  },
  {
    id: 30,
    title: "Submit expense reimbursement",
    description:
      "Submit the reimbursement request for recent business expenses",
    startDate: new Date("2023-05-25"),
    endDate: new Date("2023-05-25"),
    createdOn: new Date("2023-05-19"),
    inProgress: false,
    completed: false,
    active: false,
  },
];

export async function findAllTasks() {
  return tasks.sort((a, b) => (a.endDate < b.endDate ? -1 : 1));
}

export async function changeActiveStatus(taskId: number, task: Task) {
  let updateTask = task;
  updateTask.active = true;
  const taskIndex = tasks.findIndex((item) => item.id === taskId);
  tasks[taskIndex] = updateTask;
  return tasks.sort((a, b) => (a.endDate < b.endDate ? -1 : 1));
}

export async function changeProgressStatus(
  taskId: number,
  task: Task,
  status: string
) {
  let updateTask = task;

  if (status === "start") {
    updateTask.inProgress = true;
    updateTask.completed = false;
  }

  if (status === "complete") {
    updateTask.inProgress = false;
    updateTask.completed = true;
  }

  const taskIndex = tasks.findIndex((item) => item.id === taskId);
  tasks[taskIndex] = updateTask;

  const activeTasks = tasks.filter((task: Task) => task.active === true);
  return activeTasks.sort((a, b) => (a.endDate < b.endDate ? -1 : 1));
}

export async function deleteTask(taskId: number) {
  tasks = tasks.filter((item) => item.id !== taskId);
  return tasks.sort((a, b) => (a.endDate < b.endDate ? -1 : 1));
}
