import React, { Component } from "react";
import { Row, Col, Card } from "reactstrap";
import { STATUS } from "../../constants/status";
import "./DashboardCard.scss";

export default class DashboardCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, status } = this.props;
    console.log("status: ", status);
    console.log("data: ", data);
    console.log("STATUS", STATUS);
    console.log("STATUS[status]", STATUS[status]);

    return (
      <Col md="6" lg="3">
        <Card className="widget-chart widget-chart2 text-left mb-3 card-btm-border">
          <div className="widget-chat-wrapper-outer">
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
            </div>
          </div>
        </Card>
      </Col>
    );
  }
}
