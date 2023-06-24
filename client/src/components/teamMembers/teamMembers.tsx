import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { teamMembers, TeamMember } from "../../models/member.model";
import TeamMembersHeader from "./components/teamMembersHeader";
import MemberListCard from "../wrapperComponents/teamMember/memberListCard";
import MemberGridCard from "../wrapperComponents/teamMember/memberGridCard";

const TeamMembers: React.FC = () => {
  const [listView, setListView] = useState<boolean>(true);
  const [membersToShow, setMembersToShow] = useState<TeamMember[]>(teamMembers);

  return (
    <React.Fragment>
      {/* Team Members Header */}
      <section>
        <TeamMembersHeader
          listView={listView}
          setListView={setListView}
          membersList={teamMembers}
          setMembersToShow={setMembersToShow}
        />
      </section>

      {/* Team members list view */}
      <section>
        {listView ? (
          <Row className="m-0 p-0 mt-3">
            {membersToShow.map((member, index) => {
              return (
                <Col lg={12} md={12} sm={12} key={index} className="m-0 p-1">
                  <MemberListCard profileImage={member.profileImg}>
                    <section className="w-25">
                      <div className="p-3">
                        <h5>{`${member.firstName} ${member.lastName}`}</h5>
                        <h6>{`${member.jobTitle}`}</h6>
                      </div>
                    </section>
                    <section className="w-75">
                      <div className="member__skills--container">
                        <h6 className="">Skilled In</h6>
                        <Row className="member__skills--list m-0 p-0">
                          {member.skills.map((skill, index) => {
                            return (
                              <span key={index} className="member__skills--tag">
                                {skill}
                              </span>
                            );
                          })}
                        </Row>
                      </div>
                    </section>
                  </MemberListCard>
                </Col>
              );
            })}
          </Row>
        ) : null}
      </section>

      {/* Team members grid view */}
      <section>
        {!listView ? (
          <Row className="m-0 p-0 mt-3">
            {membersToShow.map((member, index) => {
              return (
                <Col lg={3} md={4} sm={6} key={index} className="m-0 p-1">
                  <MemberGridCard profileImage={member.profileImg}>
                    {/* Name and job title */}
                    <section>
                      <div className="text-center">
                        <h5>{`${member.firstName} ${member.lastName}`}</h5>
                        <h6>{`${member.jobTitle}`}</h6>
                      </div>
                    </section>

                    {/* Skills List */}
                    <section>
                      <div className="member__skills--container">
                        <h6 className="pl-1">Skilled In</h6>
                        <Row className="member__skills--list m-0 p-0 ">
                          {member.skills.map((skill, index) => {
                            return (
                              <span key={index} className="member__skills--tag">
                                {skill}
                              </span>
                            );
                          })}
                        </Row>
                      </div>
                    </section>
                  </MemberGridCard>
                </Col>
              );
            })}
          </Row>
        ) : null}
      </section>
    </React.Fragment>
  );
};

export default TeamMembers;
