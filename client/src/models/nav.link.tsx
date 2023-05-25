import { ReactElement } from "react";
import { BsFillGearFill } from "react-icons/bs";
import {
  AiOutlineProject,
  AiOutlineTeam,
  AiOutlineBuild,
} from "react-icons/ai";

import { SlCalender } from "react-icons/sl";
import {
  MdOutlineDashboard,
  MdOutlineLogout,
  MdOutlineTask,
} from "react-icons/md";

export type navLink = {
  title: string;
  icon: ReactElement;
};

export const navLinks: navLink[] = [
  { title: "Dashboard", icon: <MdOutlineDashboard size={"1.25rem"} /> },
  { title: "Projects", icon: <AiOutlineProject size={"1.25rem"} /> },
  { title: "Tasks", icon: <MdOutlineTask size={"1.25rem"} /> },
  { title: "Divisions", icon: <AiOutlineBuild size={"1.25rem"} /> },
  { title: "Team Members", icon: <AiOutlineTeam size={"1.25rem"} /> },
  { title: "Calender", icon: <SlCalender size={"1.25rem"} /> },
  { title: "User Settings", icon: <BsFillGearFill size={"1.25rem"} /> },
  { title: "App Settings", icon: <BsFillGearFill size={"1.25rem"} /> },
  { title: "Logout", icon: <MdOutlineLogout size={"1.25rem"} /> },
];
