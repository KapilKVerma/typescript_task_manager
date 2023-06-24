import React, { useState } from "react";
import Header from "../header/header";
import NavBar from "../navBar/navBar";
import { navLinks } from "../../models/nav.link";

interface Props {
  children: React.ReactNode;
}

const AppWrapper: React.FC<Props> = ({ children }) => {
  const [showNavTitles, setShowNavTitles] = useState<Boolean>(false);
  return (
    <div className="App">
      <div className="App__body">
        {/* Header */}
        <div className="App__header p-0 mb-3">
          <Header />
        </div>
        {/* Navigation Bar */}
        <div
          className="App__body__sidebar"
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
            className="App__body__sidebar--container"
            style={{
              width: `${showNavTitles ? "12.5%" : "3%"}`,
            }}
          ></div>

          <div
            className="App__body--content pl-4"
            style={{ width: `${showNavTitles ? "87.5%" : "97%"}` }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrapper;
