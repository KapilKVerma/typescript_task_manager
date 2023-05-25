import React, { useState } from "react";
import Router from "./components/router/router";
import NavBar from "./components/navBar/navBar";
import Header from "./components/header/header";
import { navLinks } from "./models/nav.link";

import "./App.css";

const App: React.FC = () => {
  const [showNavTitles, setShowNavTitles] = useState<Boolean>(true);

  return (
    <div className="App">
      <div className="App__body">
        {/* Header */}
        <div className="App__header p-0 mb-3">
          <Header />
        </div>

        {/* Navigation Bar */}
        <div
          className="App__body--sidebar"
          style={{ width: `${showNavTitles ? "12.1%" : "3%"}` }}
        >
          <NavBar
            showNavTitles={showNavTitles}
            navLinks={navLinks}
            setShowNavTitles={setShowNavTitles}
          />
        </div>

        {/* Body content */}
        <div className="d-flex flex-row justify-content-between">
          <div
            style={{
              width: `${showNavTitles ? "12.5%" : "3%"}`,
            }}
          ></div>

          {/* Router */}
          <div
            className="App__body--content pl-4"
            style={{ width: `${showNavTitles ? "87.5%" : "97%"}` }}
          >
            <Router />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
