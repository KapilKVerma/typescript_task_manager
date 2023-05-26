import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { teamMembers } from "../../models/member.model";
import TeamMembersHeader from "./components/teamMembersHeader";

const TeamMembers: React.FC = () => {
  const [listView, setListView] = useState<Boolean>(false);

  return (
    <>
      {/* Team Members Header */}
      <section>
        <TeamMembersHeader setListView={setListView} />
      </section>

      {/* Team members list view */}
      <section>
        {listView ? (
          <Row className="p-2">
            {teamMembers.map((member, index) => {
              return (
                <Col lg={6} md={6} sm={12} key={index} className="m-0 p-2">
                  <div className="team__member__card d-flex flex-row justify-content-start p-1">
                    <div
                      className="team__member__card--image"
                      style={{ backgroundImage: `url(${member.profileImg})` }}
                    />

                    <div className="p-3">
                      <h5>{`${member.firstName} ${member.lastName}`}</h5>
                      <h6>{`${member.jobTitle}`}</h6>
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
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        ) : null}
      </section>

      {/* Team members grid view */}
      <section>
        {!listView ? (
          <Row className="p-2">
            {teamMembers.map((member, index) => {
              return (
                <Col lg={3} md={4} sm={6} key={index} className="m-0 p-2">
                  <div className="team__member__card">
                    <div
                      className="team__member__card--image"
                      style={{
                        backgroundImage: `url(${member.profileImg})`,
                        margin: "1rem auto",
                        width: "10rem",
                        height: "10rem",
                      }}
                    />

                    <div className="text-center">
                      <h5>{`${member.firstName} ${member.lastName}`}</h5>
                      <h6>{`${member.jobTitle}`}</h6>
                    </div>

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
                  </div>
                </Col>
              );
            })}
          </Row>
        ) : null}
      </section>
    </>
  );
};

export default TeamMembers;
