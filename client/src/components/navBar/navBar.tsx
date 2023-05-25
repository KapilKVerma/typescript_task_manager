import React from "react";
import Button from "react-bootstrap/Button";
import { navLink } from "../../models/nav.link";
import { BiArrowFromRight } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

interface Props {
  showNavTitles: Boolean;
  navLinks: navLink[];
  setShowNavTitles: React.Dispatch<React.SetStateAction<Boolean>>;
}
const NavBar: React.FC<Props> = (props) => {
  const { showNavTitles, navLinks, setShowNavTitles } = props;
  return (
    <>
      {navLinks.map((link, index) => {
        return (
          <Button
            variant="light"
            className="w-100 text-left mb-2 p-3 font-weight-bold"
            key={index}
          >
            {link.icon}
            {showNavTitles ? <span>&nbsp;&nbsp;{link.title}</span> : null}
          </Button>
        );
      })}

      <Button
        variant="light"
        className="p-3 text-center"
        style={{ width: "3.5rem" }}
        onClick={() => {
          setShowNavTitles(!showNavTitles);
        }}
      >
        {showNavTitles ? (
          <BiArrowFromRight size={"1.25rem"} />
        ) : (
          <AiOutlineMenu size={"1.25rem"} />
        )}
      </Button>
    </>
  );
};

export default NavBar;
