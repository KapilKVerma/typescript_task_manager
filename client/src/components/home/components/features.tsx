import React from "react";
import Card from "react-bootstrap/Card";
import {
  MdOutlineViewKanban,
  MdOutlineDashboard,
  MdOutlineViewTimeline,
} from "react-icons/md";

const Features: React.FC = () => {
  return (
    <div>
      <h4 className="text-center">Features</h4>
      <div className="d-flex flex-row justify-content-between">
        <div className="m-3 w-100">
          <Card className="Home__title--feature">
            <Card.Body>
              <Card.Title>
                <MdOutlineDashboard size={"5rem"} />
              </Card.Title>
              <Card.Text>
                <h5>Analysis Dashboard</h5>
                Provides valuable insights and visualizations to analyze data
                and make informed decisions.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="m-3 w-100">
          <Card className="Home__title--feature">
            <Card.Body>
              <Card.Title>
                <MdOutlineViewKanban size={"5rem"} />
              </Card.Title>
              <Card.Text>
                <h5>Kanban Board</h5>
                Improves workflow, increase productivity, and enhance
                collaboration.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="m-3 w-100">
          <Card className="Home__title--feature">
            <Card.Body>
              <Card.Title>
                <MdOutlineViewTimeline size={"5rem"} />
              </Card.Title>
              <Card.Text>
                <h5>Projects Timeline</h5>
                Provides a clear overview of project milestones, tasks, and
                dependencies.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;
