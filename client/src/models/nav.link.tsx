import { ReactElement } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { AiOutlineProject, AiOutlineTeam } from "react-icons/ai";
import { GrUserAdmin } from "react-icons/gr";
import {
  MdOutlineDashboard,
  MdOutlineTask,
  MdOutlineViewTimeline,
} from "react-icons/md";
import { To } from "react-router-dom";

export type navLink = {
  title: String;
  icon: ReactElement;
  path: To;
};

export const navLinks: navLink[] = [
  {
    title: "Dashboard",
    icon: <MdOutlineDashboard size={"1.25rem"} />,
    path: "/dashboard",
  },
  {
    title: "Workboard",
    icon: <BsPersonWorkspace size={"1.15rem"} />,
    path: "/workboard",
  },

  {
    title: "My Tasks",
    icon: <MdOutlineTask size={"1.25rem"} />,
    path: "/tasks",
  },
  {
    title: "Projects",
    icon: <AiOutlineProject size={"1.25rem"} />,
    path: "/projects",
  },
  {
    title: "Timeline",
    icon: <MdOutlineViewTimeline size={"1.25rem"} />,
    path: "/timeline",
  },
  {
    title: "Team Members",
    icon: <AiOutlineTeam size={"1.25rem"} />,
    path: "/teamMembers",
  },
  {
    title: "Admin",
    icon: <GrUserAdmin size={"1.25rem"} />,
    path: "/admin",
  },
];
