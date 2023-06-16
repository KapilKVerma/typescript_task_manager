import React from "react";

import homeBackground from "../../../images/home-background.jpg";

const Title: React.FC = () => {
  return (
    <div
      className="Home__title"
      style={{ backgroundImage: `url(${homeBackground})` }}
    ></div>
  );
};

export default Title;
