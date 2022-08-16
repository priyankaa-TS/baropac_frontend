import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions/";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import HorizontalBarChart from "../../components/Charts/HorizontalBarChart/HorizontalBarChart";
import PieChart from "./../../components/Charts/PieChart/PieChart";

const DATA = [
  {
    id: 0,
    title: "Active Patients",
    value: "234",
    desc: "Note: showing the No. of Active Patients",
  },
  {
    id: 1,
    title: "Inactive Patients",
    value: "170",
    desc: "Note: showing the No. of Inactive Patients",
  },
  {
    id: 2,
    title: "Weight Count Pt.",
    value: "840",
    desc: "Note: showing the No. of patients who measured Weight",
  },
  {
    id: 3,
    title: "B.P. Count Pt.",
    value: "1011",
    desc: "Note: showing the No. of patients who measured B.P.",
  },
];

const Dashboard = () => (
  <>
    <Fragment>
      {/* <ThemeOptions /> */}
      <AppHeader />
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">
            <div className="dashboard-main">
              <Row>
                {DATA.map((ele) => {
                  return (
                    <DashboardCard
                      data={ele}
                      status={ele.title}
                      key={ele.id.toString()}
                    />
                  );
                })}
              </Row>
              <Row>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Patients Counts</CardTitle>
                      <HorizontalBarChart />
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>Patients Summary</CardTitle>
                      <PieChart />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
          {/* <AppFooter /> */}
        </div>
      </div>
    </Fragment>
  </>
);

export default Dashboard;
