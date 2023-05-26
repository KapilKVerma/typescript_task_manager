import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("../dashboard/dashboard"));
const Projects = lazy(() => import("../projects/projects"));
const Tasks = lazy(() => import("../tasks/tasks"));
const WorkBoard = lazy(() => import("../workboard/workboard"));
const Divisions = lazy(() => import("../divisions/divisions"));
const TeamMembers = lazy(() => import("../teamMembers/teamMembers"));
const Admin = lazy(() => import("../admin/admin"));

const Router: React.FC = () => {
  const AppRoutes = [
    { path: "/", component: Dashboard },
    { path: "/dashboard", component: Dashboard },
    { path: "/projects", component: Projects },
    { path: "/tasks", component: Tasks },
    { path: "/workboard", component: WorkBoard },
    { path: "/divisions", component: Divisions },
    { path: "/teamMembers", component: TeamMembers },
    { path: "/admin", component: Admin },
  ];

  const Loading: React.FC = () => <p>Loading ...</p>;

  return (
    <>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </>
  );
};

export default Router;
