import { FilterQuery } from "mongoose";
import { omit } from "lodash";
import UserModel, { UserDocument, UserInput } from "../model/user.model";

type TeamMember = {
  id: number;
  firstName: string;
  lastName: string;
  jobTitle: string;
  skills: string[];
  profileImg: string;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    jobTitle: "Software Engineer",
    skills: ["JavaScript", "React", "Node.js"],
    profileImg:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    jobTitle: "UX Designer",
    skills: ["UI/UX Design", "Wireframing", "Prototyping"],
    profileImg:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Johnson",
    jobTitle: "Data Scientist",
    skills: ["Python", "Machine Learning", "Data Analysis"],
    profileImg:
      "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Brown",
    jobTitle: "Marketing Specialist",
    skills: ["Digital Marketing", "SEO", "Social Media"],
    profileImg:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 5,
    firstName: "David",
    lastName: "Wilson",
    jobTitle: "Project Manager",
    skills: ["Agile Methodologies", "Stakeholder Management", "Scrum"],
    profileImg:
      "https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 6,
    firstName: "Sarah",
    lastName: "Taylor",
    jobTitle: "Graphic Designer",
    skills: ["Adobe Photoshop", "Illustrator", "Typography"],
    profileImg:
      "https://images.unsplash.com/photo-1585581660130-73c5ab770ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 7,
    firstName: "Daniel",
    lastName: "Clark",
    jobTitle: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    profileImg:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 8,
    firstName: "Olivia",
    lastName: "Anderson",
    jobTitle: "Content Writer",
    skills: ["Copywriting", "Blogging", "SEO Writing"],
    profileImg:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 9,
    firstName: "Alex",
    lastName: "Martinez",
    jobTitle: "Database Administrator",
    skills: ["SQL", "Database Management", "Data Backup"],
    profileImg:
      "https://images.unsplash.com/photo-1584996931193-59d1ddbd4cb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 10,
    firstName: "Sophia",
    lastName: "Lee",
    jobTitle: "QA Analyst",
    skills: ["Manual Testing", "Automated Testing", "Bug Tracking"],
    profileImg:
      "https://images.unsplash.com/photo-1596591199390-8df08eae6d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
  },
];

export async function createUser(input: UserInput) {
  try {
    const user = await UserModel.create(input);
    return omit(user.toJSON(), "password");
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function getUser(input: string) {
  try {
    const user = await UserModel.findById(input).select("-password").lean();
    if (user) return user;
    return { message: "User not found" };
  } catch (e: any) {
    throw new Error(e);
  }
}

// export async function getUsers(input: string) {
//   try {
//     const users = await UserModel.find({ company: input })
//       .select("-password")
//       .lean();
//     return users;
//   } catch (e: any) {
//     throw new Error(e);
//   }
// }

export async function getUsers(input: string) {
  try {
    return teamMembers.sort((a, b) => (a.firstName > b.firstName ? -1 : 1));
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function validatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await UserModel.findOne({ email });

  if (!user) {
    return false;
  }

  const isValid = await user.comparePassword(password);

  if (!isValid) return false;

  return omit(user.toJSON(), "password");
}

export async function findUser(query: FilterQuery<UserDocument>) {
  return UserModel.findOne(query).lean();
}
