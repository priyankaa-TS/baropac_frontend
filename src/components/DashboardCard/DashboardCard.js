import React, { Component } from "react";
import { Row, Col, Card, Progress } from "reactstrap";
import { STATUS } from "../../constants/status";
import "./DashboardCard.scss";

export default class DashboardCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, status } = this.props;
    console.log("data: ", data);

    return (
      <Col md="6" lg="3">
        {/* <Card className="widget-chart widget-chart2 text-left mb-3 card-btm-border"> */}
        <div className="card mb-3 widget-content">
          <div className="widget-content-outer">
            <h5 style={{ color: STATUS[status].color }}>{status}</h5>
            <div className="widget-content-wrapper">
              <div className="widget-content-left">
                <div className="d-flex">
                  {status === "Active Patients" ? (
                    <img
                      src="images/active-patient.png"
                      alt="img"
                      className="img-fluid"
                    />
                  ) : status === "Inactive Patients" ? (
                    <img src="images/inactive-patient.png" />
                  ) : status === "Weight Count Pt." ? (
                    <img src="images/weighing.png" />
                  ) : status === "B.P. Count Pt." ? (
                    <img src="images/blood-pressure.png" />
                  ) : null}

                  <h3 style={{ color: STATUS[status].color }}>{data.value}</h3>
                </div>
              </div>
            </div>
            <div className="widget-progress-wrapper">
              <Progress
                // className="progress-bar-sm color1"
                className={`progress-bar-sm ${
                  status === "Active Patients"
                    ? "active-patient"
                    : status === "Inactive Patients"
                    ? "inactive-patient"
                    : status === "Weight Count Pt."
                    ? "weight-count"
                    : status === "B.P. Count Pt."
                    ? "bp-control"
                    : null
                }`}
                // color={STATUS[status].color}
                // color="primary"
                value="71"
              />
              <div className="progress-sub-label">
                <div className="sub-label-right">100%</div>
              </div>
              <p className="mb-0">{data.desc}</p>
            </div>
          </div>
        </div>
        {/* <div className="widget-chat-wrapper-outer">
            <div className="widget-chart-content">
              <div
                className="widget-title text-center fsize-3"
                style={{ color: STATUS[status].color }}
              >
                {status}
              </div>
              <div className="widget-numbers mt-2 fsize-3 mb-0 w-100">
                <div className="widget-chart-flex align-items-center justify-content-center">
                  <div style={{ color: STATUS[status].color }}>
                    {data.value}
                  </div>
                </div>
              </div>
              <div className="widget-progress-wrapper">
                <Progress
                  className="progress-bar-sm"
                  color={STATUS[status].color}
                  value="71"
                />
                <div className="progress-sub-label d-flex">
                  <div className="sub-label-right ml-auto">100%</div>
                </div>
              </div>
            </div>
          </div> */}
        {/* </Card> */}
      </Col>
    );
  }
}
