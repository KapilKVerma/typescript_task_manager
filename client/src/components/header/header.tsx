import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { MdNotificationsNone, MdOutlineLogout } from "react-icons/md";

const Header: React.FC = () => {
  return (
    <>
      <h4 className="p-3 pl-4">Task Manager</h4>
      <div className="d-flex flex-row justify-content-between">
        <ButtonGroup className="m-3">
          <Button
            variant="light"
            className="font-weight-bold"
            style={{ borderRadius: "50px", padding: "0 1rem" }}
          >
            <MdNotificationsNone size={"1.25rem"} />
            &nbsp;(2)
          </Button>
          <div className="m-1"></div>
          <Button
            variant="light text-center"
            className="font-weight-bold"
            style={{ borderRadius: "50px", padding: "0 1rem" }}
          >
            <MdOutlineLogout size={"1.25rem"} />
            &nbsp;&nbsp;Logout
          </Button>
        </ButtonGroup>
        <div
          className="App__header__user--image"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80)`,
          }}
        />
      </div>
    </>
  );
};

export default Header;
