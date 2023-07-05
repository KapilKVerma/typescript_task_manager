import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppWrapper from "../wrapperComponents/appWrapper";

const Dashboard = lazy(() => import("../dashboard/dashboard"));
const Projects = lazy(() => import("../projects/projects"));
const Tasks = lazy(() => import("../tasks/tasks"));
const WorkBoard = lazy(() => import("../workboard/workBoard"));
const Divisions = lazy(() => import("../divisions/divisions"));
const TeamMembers = lazy(() => import("../teamMembers/teamMembers"));
const TimeLine = lazy(() => import("../timeLine/timeLine"));
const Admin = lazy(() => import("../admin/admin"));
const PageNotFound = lazy(() => import("../pageNotFound/pageNotFound"));

const AppRouter: React.FC = () => {
  const AppRoutes = [
    { path: "/dashboard", component: Dashboard },
    { path: "/projects", component: Projects },
    { path: "/tasks", component: Tasks },
    { path: "/workboard", component: WorkBoard },
    { path: "/divisions", component: Divisions },
    { path: "/teamMembers", component: TeamMembers },
    { path: "/timeline", component: TimeLine },
    { path: "/admin", component: Admin },
  ];

  return (
    <>
      <AppWrapper>
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
      </AppWrapper>
    </>
  );
};

export default AppRouter;
