import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../home/home"));

const HomeRouter: React.FC = () => {
  const HomeRoutes = [{ path: "/", component: Home }];

  return (
    <Routes>
      {HomeRoutes.map((route, index) => {
        return (
          <Route path={route.path} element={<route.component />} key={index} />
        );
      })}
    </Routes>
  );
};

export default HomeRouter;
