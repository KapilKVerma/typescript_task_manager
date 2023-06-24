import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  const statistics = [
    { title: "Projects", status: "increased", percentageChange: 4.5 },
    { title: "Tasks", status: "increased", percentageChange: 14.25 },
    { title: "Registrations", status: "decreased", percentageChange: 54.5 },
    { title: "Budgets", status: "decreased", percentageChange: 44 },
    { title: "Projects", status: "increased", percentageChange: 4.5 },
    { title: "Tasks", status: "increased", percentageChange: 14.25 },
  ];

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const graphs = [
    {
      title: "Projects",
      component: (
        <Bar
          data={{
            labels: labels,
            datasets: [
              {
                label: "My First Dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.75)",
                  "rgba(255, 159, 64, 0.75)",
                  "rgba(255, 205, 86, 0.75)",
                  "rgba(75, 192, 192, 0.75)",
                  "rgba(54, 162, 235, 0.75)",
                  "rgba(153, 102, 255, 0.75)",
                  "rgba(201, 203, 207, 0.75)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                  "rgb(153, 102, 255)",
                  "rgb(201, 203, 207)",
                ],
                borderWidth: 1,
              },
            ],
          }}
        />
      ),
    },
    {
      title: "Tasks",
      component: (
        <Line
          data={{
            labels: labels,
            datasets: [
              {
                label: "My First Dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: "rgb(23, 195, 165)",
                borderWidth: 1,
              },
            ],
          }}
        />
      ),
    },
    {
      title: "Budget",
      component: (
        <Doughnut
          data={{
            labels: ["Red", "Blue", "Yellow"],
            datasets: [
              {
                label: "My First Dataset",
                data: [300, 50, 100],
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                ],
                hoverOffset: 4,
              },
            ],
          }}
        />
      ),
    },
    {
      title: "Budget",
      component: (
        <Doughnut
          data={{
            labels: ["Red", "Blue", "Yellow"],
            datasets: [
              {
                label: "My First Dataset",
                data: [300, 50, 100],
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                ],
                hoverOffset: 4,
              },
            ],
          }}
        />
      ),
    },
  ];

  return (
    <React.Fragment>
      <Row className="p-0 m-0">
        <Col lg={10} className="p-0">
          <Row className="p-0 m-0">
            {graphs.slice(0, 1).map((graph, index) => {
              return (
                <Col lg={6} md={6} sm={12} key={index} className="p-1">
                  <div className="graph__card2">
                    <h5>{`${graph.title}`}</h5>
                    {graph.component}
                  </div>
                </Col>
              );
            })}
            {graphs.slice(2, 4).map((graph, index) => {
              return (
                <Col lg={3} md={3} sm={6} key={index} className="p-1">
                  <div className="graph__card2">
                    <h5>{`${graph.title}`}</h5>
                    <div className="mt-4">{graph.component}</div>
                  </div>
                </Col>
              );
            })}
            {graphs.slice(0, 2).map((graph, index) => {
              return (
                <Col lg={6} md={6} sm={12} key={index} className="p-1">
                  <div className="graph__card2">
                    <h5>{`${graph.title}`}</h5>
                    {graph.component}
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col lg={2} className="p-0">
          {statistics.map((stat, index) => {
            return (
              <div
                className="graph__card m-1"
                style={{
                  border: `0.19rem solid ${
                    stat.status !== "increased"
                      ? "rgba(231,1,39,.5)"
                      : "rgba(23,195,165,.5)"
                  }`,
                }}
                key={index}
              >
                <h5>{`${stat.title}`}</h5>
                <h3>
                  {stat.status === "increased" ? (
                    <AiOutlineArrowUp />
                  ) : (
                    <AiOutlineArrowDown />
                  )}
                  &nbsp;&nbsp;
                  {stat.percentageChange}%
                </h3>
              </div>
            );
          })}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Dashboard;
