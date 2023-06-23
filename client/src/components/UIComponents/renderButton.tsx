import React from "react";
import Button from "react-bootstrap/Button";
import { BiTrash, BiEdit, BiCheck, BiExpand } from "react-icons/bi";
import { MdStart } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  title: string;
  type: string;
  variant?: string;
}

const RenderButton: React.FC<Props> = ({ title, type, variant = "light" }) => {
  type buttonObject = {
    [key: string]: JSX.Element;
  };
  const buttonsList: buttonObject = {
    expandButton: <BiExpand size={"1.25rem"} />,
    menuButton: <HiOutlineMenuAlt2 size={"1.25rem"} />,
    startButton: <MdStart size={"1.25rem"} />,
    deleteButton: <BiTrash size={"1.25rem"} />,
    editButton: <BiEdit size={"1.25rem"} />,
    completeButton: <BiCheck size={"1.25rem"} />,
    closeButton: <AiOutlineClose size={"1.25rem"} />,
  };

  return (
    <>
      <Button size="sm" variant={variant} className="w-100 text-left">
        {buttonsList[type]}
        {title ? <span>&nbsp;&nbsp;{title}</span> : null}
      </Button>
    </>
  );
};

export default RenderButton;
