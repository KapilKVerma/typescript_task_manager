import React, { useState, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import HomeRouter from "./components/router/homeRouter";
import Router from "./components/router/router";
import NavBar from "./components/navBar/navBar";
import Header from "./components/header/header";
import { navLinks } from "./models/nav.link";

import "./App.css";

const App: React.FC = () => {
 

  const Loading: React.FC = () => <p>Loading ...</p>;

  return (
    <BrowserRouter>
         <Suspense fallback={<Loading />}>
            <HomeRouter/>
            <Router/>
         </Suspense>
  
    </BrowserRouter>
  );
};

export default App;
