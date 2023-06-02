import React from "react";
import Features from "./features";
import { MdOutlineManageHistory } from "react-icons/md";

const Title: React.FC = () => {
  return (
    <div className="Home__title">
      <div className="Home__title__container">
        <section>
          <MdOutlineManageHistory size={"2rem"} />
        </section>

        <section className="m-5">
          <h1 className="text-capitalize text-center">
            Manage project with ease
          </h1>
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
      </div>
    </div>
  );
};

export default Title;
