import React from "react";
import Features from "./features";

const Title: React.FC = () => {
  return (
    <div className="Home__title">
      <div className="Home__title__container">
        <section className="m-5">
          <h1 className="text-center">Manage projects with ease</h1>
          <p className="m-5" style={{ fontSize: "1.25rem" }}>
            A comprehensive project management solution designed to streamline
            and simplify project management processes. It offers a range of
            features and tools that enable organization, collaboration, and
            tracking of projects.
          </p>
        </section>

        <section className="m-5">
          <Features />
        </section>

        <section className="m-5 p-5 d-flex flex-row justify-content-between">
          <small>Developed by Kapil Verma</small>
          <small>&copy; Copyright 2018, Example Corporation</small>
        </section>
      </div>
    </div>
  );
};

export default Title;
