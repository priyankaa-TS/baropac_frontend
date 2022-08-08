import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import AppHeader from "../../Layout/AppHeader";
import AppSidebar from "../../Layout/AppSidebar";
import ThemeOptions from "../../Layout/ThemeOptions";
import "./Patient.scss";
import PatientList from "../../components/PatientList/PatientList";

export default class Patient extends Component {
  handleclick = () => {
    this.props.history.push("/patient-registration");
  };
  render() {
    return (
      <Fragment>
        <ThemeOptions />
        <AppHeader />
        <div className="app-main">
          <AppSidebar />
          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="patient-main">
                <div className="header-title d-flex justify-content-between align-items-center mb-5">
                  <h4>Patient List</h4>
                  <Button
                    color="primary"
                    size="lg"
                    className="blue-button"
                    onClick={this.handleclick}
                  >
                    Patient Registration
                  </Button>
                </div>
                <PatientList />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
