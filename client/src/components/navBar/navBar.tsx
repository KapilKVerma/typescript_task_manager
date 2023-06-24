import React from "react";
import Button from "react-bootstrap/Button";
import { navLink } from "../../models/nav.link";
import { BiArrowFromRight } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

interface Props {
  showNavTitles: Boolean;
  navLinks: navLink[];
  setShowNavTitles: React.Dispatch<React.SetStateAction<Boolean>>;
}
const NavBar: React.FC<Props> = (props) => {
  const { showNavTitles, navLinks, setShowNavTitles } = props;

  const currentLocation = useLocation().pathname;

  return (
    <>
      {navLinks.map((link, index) => {
        return (
          <Link to={link.path} key={index}>
            <Button
              variant="light"
              className="mb-2 p-3 w-100"
              style={{
                textAlign: `left`,
                fontWeight: "500",
                padding: "1rem",
                borderLeft: `${
                  currentLocation === link.path
                    ? "2px solid rgb(52,58,64)"
                    : "2px solid rgb(248,249,250)"
                }`,
              }}
              key={index}
              active={currentLocation === link.path ? true : false}
            >
              {link.icon}
              <span
                className="sidebar__link__title"
                style={{ fontSize: `${showNavTitles ? "1rem" : "0"}` }}
              >
                &nbsp;&nbsp;{link.title}
              </span>
            </Button>
          </Link>
        );
      })}

      <Button
        variant="dark"
        className="p-3"
        style={{ width: "3.55rem" }}
        onClick={() => setShowNavTitles(!showNavTitles)}
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
