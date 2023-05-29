import React from "react";

interface Props {
  children: React.ReactNode;
  profileImage: string;
}

const MemberGridCard: React.FC<Props> = ({ children, profileImage }) => {
  return (
    <div className="team__member__card">
      <div
        className="team__member__card--image"
        style={{
          backgroundImage: `url(${profileImage})`,
          margin: "1rem auto",
          width: "150px",
          height: "150px",
        }}
      />
      {children}
    </div>
  );
};

export default MemberGridCard;
