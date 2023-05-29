import React from "react";
import { AiOutlineBuild } from "react-icons/ai";

interface Props {
  children: React.ReactNode;
}

const DivisionCard: React.FC<Props> = ({ children }) => {
  return (
    <div className="division__card">
      <span className="division__card--icon">
        <AiOutlineBuild size={"2rem"} />
      </span>
      {children}
    </div>
  );
};

export default DivisionCard;
