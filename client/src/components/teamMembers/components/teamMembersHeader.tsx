import React from "react";
import Button from "react-bootstrap/Button";
import { BsListUl, BsGrid } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  setListView: React.Dispatch<React.SetStateAction<Boolean>>;
}

const TeamMembersHeader: React.FC<Props> = ({ setListView }) => {
  return (
    <>
      <div className="d-flex flex-row justify-content-between">
        {/* Title and Search  */}
        <section className="w-50">
          <div>
            <form className="search__bar">
              <input
                type="text"
                name="title"
                placeholder="Enter member name..."
                className="search__bar---input"
              />
              <Button
                variant="dark"
                type="submit"
                className="search__bar---button"
              >
                <AiOutlineSearch size="1.25rem" />
              </Button>
            </form>
          </div>
        </section>

        {/* Option Buttons */}
        <section className="d-flex flex-row justify-content-end">
          <Button variant="light" onClick={() => setListView(true)}>
            <BsListUl size={"1.25rem"} />
          </Button>
          <div className="m-1" />
          <Button variant="light" onClick={() => setListView(false)}>
            <BsGrid size={"1.25rem"} />
          </Button>
        </section>
      </div>
    </>
  );
};

export default TeamMembersHeader;
