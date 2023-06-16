import React from "react";
import Button from "react-bootstrap/Button";
import { BsListUl, BsFillGridFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { TeamMember } from "../../../models/member.model";

interface Props {
  listView: boolean;
  setListView: React.Dispatch<React.SetStateAction<boolean>>;
  membersList: TeamMember[];
  setMembersToShow: React.Dispatch<React.SetStateAction<TeamMember[]>>;
}

const TeamMembersHeader: React.FC<Props> = (props) => {
  const { listView, setListView, membersList, setMembersToShow } = props;

  const filterMembersList = (value: string, membersList: TeamMember[]) => {
    let result = membersList.filter((item) =>
      (item.firstName + " " + item.lastName)
        .toLowerCase()
        .includes(value.toLowerCase())
    );
    setMembersToShow(result);
  };

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
                onChange={(e) => {
                  filterMembersList(e.target.value, membersList);
                }}
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
          <Button
            variant={listView ? "dark" : "light"}
            onClick={() => setListView(true)}
            active={listView}
          >
            <BsListUl size={"1.25rem"} />
          </Button>
          <div className="m-1" />
          <Button
            variant={!listView ? "dark" : "light"}
            onClick={() => setListView(false)}
            active={!listView}
          >
            <BsFillGridFill size={"1.25rem"} />
          </Button>
        </section>
      </div>
    </>
  );
};

export default TeamMembersHeader;
