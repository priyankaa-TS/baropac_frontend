import React, { Fragment } from "react";
import AppHeader from "../../Layout/AppHeader";
import AppSidebar from "../../Layout/AppSidebar";
import ThemeOptions from "../../Layout/ThemeOptions";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import "./PatientInfo.scss";

export default function PatientInfo() {
  return (
    <Fragment>
      <ThemeOptions />
      <AppHeader />
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">
            <div className="PatientInfo-main">
              <div className="header-title d-flex justify-content-between align-items-center mb-5">
                <h4>Patient Info</h4>
              </div>
              <Row>
                <Col lg="10" className="mx-auto">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle className="mb-4">
                        Patient Appoinments
                      </CardTitle>
                      <Row>
                        <Col lg="2">
                          <h6>MRN</h6>
                          <span>232056</span>
                        </Col>
                        <Col lg="2">
                          <h6>First Name</h6>
                          <span>Anshul</span>
                        </Col>
                        <Col lg="2">
                          <h6>Last Name </h6>
                          <span>Tripathi</span>
                        </Col>
                        <Col lg="3">
                          <h6>Mobile No.</h6>
                          <span>+917815649875</span>
                        </Col>
                        <Col lg="3">
                          <h6>Email</h6>
                          <span>anshul128@gmail.com</span>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
