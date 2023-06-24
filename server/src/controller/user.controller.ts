import { Request, Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
import { createUser, getUsers, getUser } from "../service/user.service";
import logger from "../utils/logger";
import { UserInput } from "../model/user.model";

const teamMembers: UserInput[] = [
  // {
  //   email: "user1@example.com",
  //   profileImg:
  //     "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  //   firstName: "John",
  //   lastName: "Doe",
  //   jobTitle: "Software Engineer",
  //   skills: ["JavaScript", "HTML", "CSS"],
  //   password: "Password@1",
  //   passwordConfirmation: "Password@1",
  //   roles: ["employee"],
  //   address: {
  //     unitNumber: "Apt 123",
  //     streetAddress: "123 Main St",
  //     postCode: "12345",
  //     state: "California",
  //   },
  //   company: "647596f59ce439bbf22012ad",
  // },
  // {
  //   email: "user2@example.com",
  //   profileImg:
  //     "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  //   firstName: "Jane",
  //   lastName: "Smith",
  //   jobTitle: "Web Designer",
  //   skills: ["UI/UX Design", "Photoshop", "Illustrator"],
  //   password: "Password@2",
  //   passwordConfirmation: "Password@2",
  //   roles: ["employee"],
  //   address: {
  //     streetAddress: "456 Elm St",
  //     postCode: "67890",
  //     state: "New York",
  //   },
  //   company: "647596f59ce439bbf22012ad",
  // },
  // {
  //   email: "user3@example.com",
  //   profileImg:
  //     "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  //   firstName: "Bob",
  //   lastName: "Johnson",
  //   jobTitle: "Data Analyst",
  //   skills: ["SQL", "Python", "Data Visualization"],
  //   password: "Password@3",
  //   passwordConfirmation: "Password@3",
  //   roles: ["employee"],
  //   company: "647596f59ce439bbf22012ad",
  // },
  // {
  //   email: "user4@example.com",
  //   profileImg:
  //     "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  //   firstName: "Sarah",
  //   lastName: "Wilson",
  //   jobTitle: "Marketing Manager",
  //   skills: ["Digital Marketing", "Social Media", "SEO"],
  //   password: "Password@4",
  //   passwordConfirmation: "Password@4",
  //   roles: ["manager"],
  //   address: {
  //     unitNumber: "Suite 200",
  //     streetAddress: "789 Market St",
  //     postCode: "54321",
  //     state: "California",
  //   },
  //   company: "647596f59ce439bbf22012ad",
  // },
  // {
  //   email: "user5@example.com",
  //   profileImg:
  //     "https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  //   firstName: "Michael",
  //   lastName: "Brown",
  //   jobTitle: "Sales Representative",
  //   skills: ["Negotiation", "Customer Relationship", "Presentation"],
  //   password: "Password@5",
  //   passwordConfirmation: "Password@5",
  //   roles: ["employee"],
  //   address: {
  //     streetAddress: "321 Oak Ave",
  //     postCode: "98765",
  //     state: "Texas",
  //   },
  //   company: "647596f59ce439bbf22012ad",
  // },
  // {
  //   email: "user6@example.com",
  //   profileImg:
  //     "https://images.unsplash.com/photo-1585581660130-73c5ab770ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  //   firstName: "Emily",
  //   lastName: "Davis",
  //   jobTitle: "Graphic Designer",
  //   skills: ["Adobe Illustrator", "Logo Design", "Typography"],
  //   password: "Password@6",
  //   passwordConfirmation: "Password@6",
  //   roles: ["employee"],
  //   company: "647596f59ce439bbf22012ad",
  // },
  // {
  //   email: "user7@example.com",
  //   profileImg:
  //     "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  //   firstName: "Daniel",
  //   lastName: "Smith",
  //   jobTitle: "Software Developer",
  //   skills: ["JavaScript", "Node.js", "React"],
  //   password: "Password@7",
  //   passwordConfirmation: "Password@7",
  //   roles: ["employee"],
  //   address: {
  //     streetAddress: "123 Main St",
  //     postCode: "12345",
  //     state: "New York",
  //   },
  //   company: "647596f59ce439bbf22012ad",
  // },
  // {
  //   email: "user8@example.com",
  //   profileImg:
  //     "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  //   firstName: "Olivia",
  //   lastName: "Johnson",
  //   jobTitle: "Data Analyst",
  //   skills: ["SQL", "Data Visualization", "Statistical Analysis"],
  //   password: "Password@8",
  //   passwordConfirmation: "Password@8",
  //   roles: ["employee"],
  //   address: {
  //     unitNumber: "Apt 10",
  //     streetAddress: "456 Elm St",
  //     postCode: "67890",
  //     state: "California",
  //   },
  //   company: "647596f59ce439bbf22012ad",
  // },
  // {
  //   email: "user9@example.com",
  //   profileImg:
  //     "https://images.unsplash.com/photo-1584996931193-59d1ddbd4cb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  //   firstName: "David",
  //   lastName: "Lee",
  //   jobTitle: "Product Manager",
  //   skills: ["Product Strategy", "Market Research", "Agile Development"],
  //   password: "Password@9",
  //   passwordConfirmation: "Password@9",
  //   roles: ["manager"],
  //   address: {
  //     streetAddress: "789 Pine St",
  //     postCode: "54321",
  //     state: "Texas",
  //   },
  //   company: "647596f59ce439bbf22012ad",
  // },
  // {
  //   email: "user10@example.com",
  //   profileImg:
  //     "https://images.unsplash.com/photo-1596591199390-8df08eae6d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
  //   firstName: "Sophia",
  //   lastName: "Anderson",
  //   jobTitle: "UX Designer",
  //   skills: ["Wireframing", "Prototyping", "Usability Testing"],
  //   password: "Password@10",
  //   passwordConfirmation: "Password@10",
  //   roles: ["employee"],
  //   company: "647596f59ce439bbf22012ad",
  // },
];

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput>,
  res: Response
) {
  try {
    const body = req.body;
    await createUser(body);
    // Add email notification here
    return res.status(200).json({ message: "New user registered" });
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getUserHandler(req: Request, res: Response) {
  try {
    const userId = req.params.id;
    const user = await getUser(userId);
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(500).send(e.message);
  }
}

// export async function getUsersHandler(req: Request, res: Response) {
//   try {
//     const companyId = req.params.compId;
//     const companyUsers = await getUsers(companyId);
//     return res.send(companyUsers);
//   } catch (e: any) {
//     logger.error(e);
//     return res.status(500).send(e.message);
//   }
// }

export async function getUsersHandler(req: Request, res: Response) {
  try {
    const companyId = req.params.compId;
    const companyUsers = await getUsers(companyId);
    return res.send(companyUsers);
  } catch (e: any) {
    logger.error(e);
    return res.status(500).send(e.message);
  }
}
