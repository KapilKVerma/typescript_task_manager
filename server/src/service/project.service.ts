type Project = {
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

const projects: Project[] = [
  {
    id: 1,
    name: "Website Redesign",
    description:
      "Redesigning the company website for improved user experience and modern look.",
    startDate: new Date("2023-01-15"),
    endDate: new Date("2023-03-31"),
    started: true,
    completed: true,
    budget: 50000,
    division: "Marketing",
    projectManager: "John Smith",
    purpose: "Enhance brand presence and drive more conversions.",
  },
  {
    id: 2,
    name: "Mobile App Development",
    description:
      "Building a mobile app to provide seamless access to our services on iOS and Android.",
    startDate: new Date("2023-02-10"),
    endDate: new Date("2023-06-30"),
    started: true,
    completed: false,
    budget: 100000,
    division: "Product Development",
    projectManager: "Sarah Johnson",
    purpose: "Expand our reach and engage with mobile users.",
  },
  {
    id: 3,
    name: "Data Analytics Platform",
    description:
      "Creating a centralized platform for analyzing and visualizing business data.",
    startDate: new Date("2023-03-01"),
    endDate: new Date("2023-09-30"),
    started: true,
    completed: false,
    budget: 150000,
    division: "Data Science",
    projectManager: "Michael Davis",
    purpose: "Improve decision-making through data-driven insights.",
  },
  {
    id: 4,
    name: "E-commerce Integration",
    description:
      "Integrating our online store with a third-party payment gateway and inventory system.",
    startDate: new Date("2023-04-15"),
    endDate: new Date("2023-07-31"),
    started: false,
    completed: false,
    budget: 75000,
    division: "IT",
    projectManager: "Emily Wilson",
    purpose:
      "Streamline the online purchasing process and inventory management.",
  },
  {
    id: 5,
    name: "Social Media Campaign",
    description:
      "Launching a targeted social media campaign to increase brand awareness and engagement.",
    startDate: new Date("2023-05-10"),
    endDate: new Date("2023-06-30"),
    started: true,
    completed: true,
    budget: 25000,
    division: "Marketing",
    projectManager: "Daniel Anderson",
    purpose:
      "Grow our social media following and drive traffic to our website.",
  },
  {
    id: 6,
    name: "Network Infrastructure Upgrade",
    description:
      "Upgrading our network infrastructure to improve performance and security.",
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-08-31"),
    started: true,
    completed: false,
    budget: 120000,
    division: "IT",
    projectManager: "Olivia Thompson",
    purpose: "Enhance network reliability and protect against cyber threats.",
  },
  {
    id: 7,
    name: "Training and Development Program",
    description:
      "Implementing a comprehensive training and development program for employees.",
    startDate: new Date("2023-07-15"),
    endDate: new Date("2023-12-31"),
    started: false,
    completed: false,
    budget: 80000,
    division: "Human Resources",
    projectManager: "David Johnson",
    purpose: "Invest in employee growth and improve overall performance.",
  },
  {
    id: 8,
    name: "New Product Launch",
    description: "Launching a new product line targeting the youth market.",
    startDate: new Date("2023-08-10"),
    endDate: new Date("2024-01-31"),
    started: true,
    completed: false,
    budget: 200000,
    division: "Product Development",
    projectManager: "Sophia Lee",
    purpose: "Expand our product offerings and capture a new customer segment.",
  },
  {
    id: 9,
    name: "Customer Support Portal",
    description:
      "Building an online portal for customers to access support resources and submit tickets.",
    startDate: new Date("2023-09-01"),
    endDate: new Date("2023-11-30"),
    started: true,
    completed: false,
    budget: 60000,
    division: "IT",
    projectManager: "Emma Harris",
    purpose: "Improve customer experience and streamline support processes.",
  },
  {
    id: 10,
    name: "Market Research Study",
    description:
      "Conducting a comprehensive market research study to identify new business opportunities.",
    startDate: new Date("2023-10-15"),
    endDate: new Date("2024-02-28"),
    started: false,
    completed: false,
    budget: 90000,
    division: "Marketing",
    projectManager: "Liam Wilson",
    purpose: "Gain insights into market trends and customer preferences.",
  },
  {
    id: 11,
    name: "IT Infrastructure Audit",
    description:
      "Performing an audit of our IT infrastructure to identify vulnerabilities and recommend improvements.",
    startDate: new Date("2023-11-10"),
    endDate: new Date("2023-12-31"),
    started: true,
    completed: true,
    budget: 30000,
    division: "IT",
    projectManager: "Mia Anderson",
    purpose: "Ensure the security and efficiency of our IT systems.",
  },
  {
    id: 12,
    name: "Content Marketing Campaign",
    description:
      "Launching a content marketing campaign to attract and engage our target audience.",
    startDate: new Date("2023-12-01"),
    endDate: new Date("2024-03-31"),
    started: false,
    completed: false,
    budget: 50000,
    division: "Marketing",
    projectManager: "Noah Thompson",
    purpose:
      "Build brand authority and generate leads through valuable content.",
  },
  {
    id: 13,
    name: "Supplier Evaluation and Selection",
    description:
      "Evaluating and selecting new suppliers to improve the quality and cost-effectiveness of our materials.",
    startDate: new Date("2024-01-15"),
    endDate: new Date("2024-04-30"),
    started: true,
    completed: false,
    budget: 70000,
    division: "Procurement",
    projectManager: "Ava Martin",
    purpose: "Optimize our supply chain and reduce costs.",
  },
  {
    id: 14,
    name: "Employee Wellness Program",
    description:
      "Implementing a wellness program to promote the physical and mental well-being of our employees.",
    startDate: new Date("2024-02-10"),
    endDate: new Date("2024-06-30"),
    started: true,
    completed: false,
    budget: 40000,
    division: "Human Resources",
    projectManager: "James Wilson",
    purpose: "Improve employee morale and productivity.",
  },
  {
    id: 15,
    name: "Sales Performance Dashboard",
    description:
      "Developing a dashboard to track and analyze sales performance metrics in real-time.",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-08-31"),
    started: false,
    completed: false,
    budget: 80000,
    division: "Sales",
    projectManager: "Ella Davis",
    purpose: "Monitor sales performance and identify areas for improvement.",
  },
  {
    id: 16,
    name: "Inventory Management System",
    description:
      "Building a centralized system to manage inventory across multiple locations.",
    startDate: new Date("2024-04-15"),
    endDate: new Date("2024-09-30"),
    started: true,
    completed: false,
    budget: 100000,
    division: "Operations",
    projectManager: "Henry Thompson",
    purpose: "Optimize inventory levels and improve supply chain efficiency.",
  },
  {
    id: 17,
    name: "Website Localization",
    description:
      "Localizing our website to target international markets and support multiple languages.",
    startDate: new Date("2024-05-10"),
    endDate: new Date("2024-07-31"),
    started: true,
    completed: true,
    budget: 60000,
    division: "Marketing",
    projectManager: "Aria Johnson",
    purpose: "Expand our global reach and cater to diverse customer segments.",
  },
  {
    id: 18,
    name: "Cybersecurity Training Program",
    description:
      "Implementing a comprehensive cybersecurity training program for employees.",
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-08-31"),
    started: false,
    completed: false,
    budget: 50000,
    division: "IT",
    projectManager: "Logan Wilson",
    purpose: "Enhance employee awareness and mitigate security risks.",
  },
  {
    id: 19,
    name: "Product Packaging Redesign",
    description:
      "Redesigning product packaging to enhance brand appeal and stand out on store shelves.",
    startDate: new Date("2024-07-15"),
    endDate: new Date("2024-09-30"),
    started: true,
    completed: false,
    budget: 30000,
    division: "Product Development",
    projectManager: "Luna Smith",
    purpose: "Improve product visibility and attract more customers.",
  },
  {
    id: 20,
    name: "Customer Satisfaction Survey",
    description:
      "Conducting a customer satisfaction survey to gather feedback and identify areas for improvement.",
    startDate: new Date("2024-08-10"),
    endDate: new Date("2024-10-31"),
    started: true,
    completed: false,
    budget: 20000,
    division: "Marketing",
    projectManager: "Leo Johnson",
    purpose: "Enhance customer experience and drive customer loyalty.",
  },
  {
    id: 21,
    name: "Supply Chain Optimization",
    description:
      "Optimizing our supply chain processes to reduce lead times and improve cost-efficiency.",
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-12-31"),
    started: false,
    completed: false,
    budget: 80000,
    division: "Operations",
    projectManager: "Stella Brown",
    purpose:
      "Streamline operations and increase overall supply chain performance.",
  },
];

export async function findProjects() {
  return projects.sort((a, b) => (a.endDate < b.endDate ? -1 : 1));
}
