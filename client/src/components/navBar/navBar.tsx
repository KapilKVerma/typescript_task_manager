import React from "react";
import Button from "react-bootstrap/Button";
import { navLink } from "../../models/nav.link";
import { BiArrowFromRight } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

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
          <Link to={link.path}>
            <Button
              variant="light"
              className="w-100 text-left mb-2 p-3 font-weight-bold"
              style={{ minWidth: "3.5rem" }}
              key={index}
              // onClick={() => navigate(link.path)}
            >
              {link.icon}
              {showNavTitles ? <>&nbsp;&nbsp;{link.title}</> : null}
            </Button>
          </Link>
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
