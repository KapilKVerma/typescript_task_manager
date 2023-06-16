import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { TeamMember, handleFunction } from "../../models/member.model";

interface Props {
  member: TeamMember;
  addMember: handleFunction;
  removeMember: handleFunction;
}

const SelectMember: React.FC<Props> = ({ member, addMember, removeMember }) => {
  const [buttonActive, setButtonActive] = useState<boolean>(false);
  return (
    <>
      <Button
        variant="outline-dark"
        className="input__field__select--button"
        active={buttonActive}
        onClick={() => {
          setButtonActive(!buttonActive);
          if (!buttonActive) addMember(member);
          else removeMember(member);
        }}
      >
        {member?.profileImg ? (
          <div className="d-flex flex-row justify-content-start">
            <div
              className="input__field__select--button--image"
              style={{ backgroundImage: `url(${member.profileImg})` }}
            />
            <div className="p-1 pl-2 pr-3">{`${member.firstName} ${member.lastName}`}</div>
          </div>
        ) : (
          <div className="p-1 pl-2 pr-3">{`${member.firstName} ${member.lastName}`}</div>
        )}
      </Button>
    </>
  );
};

export default SelectMember;
