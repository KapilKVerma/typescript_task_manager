import React from "react";

interface Props {
  children: React.ReactNode;
  profileImage: string;
}

const MemberListCard: React.FC<Props> = ({ children, profileImage }) => {
  return (
    <div className="team__member__card d-flex flex-row justify-content-start">
      <div
        className="team__member__card--image"
        style={{
          backgroundImage: `url(${profileImage})`,
        }}
      />
      {children}
    </div>
  );
};

export default MemberListCard;
