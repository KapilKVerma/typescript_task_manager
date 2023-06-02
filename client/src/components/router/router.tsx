import React, { lazy, Suspense, useState} from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../navBar/navBar";
import Header from "../header/header";
import { navLinks } from "../../models/nav.link"


const Dashboard = lazy(() => import("../dashboard/dashboard"));
const Projects = lazy(() => import("../projects/projects"));
const Tasks = lazy(() => import("../tasks/tasks"));
const WorkBoard = lazy(() => import("../workboard/workBoard"));
const Divisions = lazy(() => import("../divisions/divisions"));
const TeamMembers = lazy(() => import("../teamMembers/teamMembers"));
const Admin = lazy(() => import("../admin/admin"));

const Router: React.FC = () => {
const [showNavTitles, setShowNavTitles] = useState<Boolean>(true);

  const AppRoutes = [
    { path: "/dashboard", component: Dashboard },
    { path: "/projects", component: Projects },
    { path: "/tasks", component: Tasks },
    { path: "/workboard", component: WorkBoard },
    { path: "/divisions", component: Divisions },
    { path: "/teamMembers", component: TeamMembers },
    { path: "/admin", component: Admin },
  ];


  return (
    <>
    
        
         
        
                <Routes>
                  {AppRoutes.map((route, index) => {
                    return (
                      <Route
                        path={route.path}
                        element={<route.component />}
                        key={index}
                      />
                    );
                  })}
                </Routes>
            
   
      
    </>
  );
};

export default Router;
