import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { navLink } from "../../models/nav.link";
import { BiArrowFromRight } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContextType, UserContext } from "../../context/user.context";

interface Props {
  showNavTitles: Boolean;
  navLinks: navLink[];
  setShowNavTitles: React.Dispatch<React.SetStateAction<Boolean>>;
}
const NavBar: React.FC<Props> = (props) => {
  const { showNavTitles, navLinks, setShowNavTitles } = props;

  const { logOut } = useContext<UserContextType>(UserContext);

  const currentLocation = useLocation().pathname;

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <>
      {navLinks.map((link, index) => {
        return (
          <Link to={link.path} key={index}>
            <Button
              variant="light"
              className="mb-2 p-3 w-100 sidebar__link__button"
              style={{
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
        variant="light"
        className="mb-2 p-3 w-100 sidebar__link__button"
        onClick={handleLogOut}
      >
        <MdOutlineLogout size={"1.25rem"} />
        <span
          className="sidebar__link__title"
          style={{ fontSize: `${showNavTitles ? "1rem" : "0"}` }}
        >
          &nbsp;&nbsp;Logout
        </span>
      </Button>

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
