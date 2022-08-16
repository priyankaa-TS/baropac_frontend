import React, { Fragment, useState } from "react";
import AppHeader from "../../Layout/AppHeader";
import AppSidebar from "../../Layout/AppSidebar";
import ThemeOptions from "../../Layout/ThemeOptions";

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Table,
  Button,
  Modal,
  ModalBody,
} from "reactstrap";
import Ionicon from "react-ionicons";
import "./ClinicalInformation.scss";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { STATUS } from "../../constants/status";
import ScheduleAppointment from "../ScheduleAppointment/ScheduleAppointment";
import { useHistory, useLocation } from "react-router-dom";

export default function ClinicalInformation() {
  const [open, setOpen] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const history = useHistory();
  const location = useLocation();

  let status = location.state.status;

  const handleOpenModal = () => {
    setOpen(!open);
  };
  const handleOpenAction = () => {
    setIsEdit(true);
    handleOpenModal();
  };

  const handleClose = () => {
    setOpen(false);
    setIsEdit(false);
  };
  const handleConfirmationClose = () => {
    setConfirmationOpen(false);
  };
  const handleConfirmationModal = () => {
    setConfirmationOpen(true);
  };
  return (
    <Fragment>
      {/* <ThemeOptions /> */}
      <AppHeader />
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">
            <div className="clinicalInfo-main">
              <div className="header-title d-flex justify-content-between align-items-center mb-5">
                <h4>Clinical information</h4>
                <Button
                  color="primary"
                  size="lg"
                  className="blue-line-button"
                  onClick={() => history.goBack()}
                >
                  Back
                </Button>
              </div>
              <Row>
                <Col lg="10" className="mx-auto">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <div className="info-main d-flex justify-content-between align-items-end">
                        <div>
                          <div className="d-flex align-items-center mb-2">
                            <p>Patient Name:</p>
                            <span>Anshul tripathi</span>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <p>Appointment Time:</p>
                            <span>04/08/2022 10:30 PM</span>
                          </div>
                          <div className="d-flex align-items-center">
                            <p>Appointment Status:</p>
                            <span>{status}</span>
                          </div>
                        </div>
                        <Button
                          color="primary"
                          size="lg"
                          className="blue-button-square"
                          // onClick={handleOpenModal}
                        >
                          View Memory Dump
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col lg="10" className="mx-auto">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <CardTitle>TODAY’S CLINICAL DATA</CardTitle>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">
                          <p>
                            <b>Weight: </b>
                          </p>
                          <span>80 KG</span>
                        </div>
                        <div className="d-flex">
                          <p>
                            <b>Blood Pressure: </b>
                          </p>
                          <span>130/80 mm Hg</span>
                        </div>
                      </div>
                      <div>
                        <h5 className="mb-3">SURFACE ECG</h5>
                        <div className="img-box">
                          <img
                            src="images/AF.png"
                            alt="img"
                            className="img-fluid"
                          />
                          <div className="d-flex align-items-center justify-content-end pt-2">
                            <span className="red-text mr-2">
                              ( Note: User can download this image as a JPG or
                              PNG or PDF format )
                            </span>
                            <Button
                              color="primary"
                              size="lg"
                              className="blue-button"
                              // onClick={handleConfirmationClose}
                            >
                              <img
                                src="images/download.svg"
                                className="download-icon"
                              />
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col lg="10" className="mx-auto">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <div className="d-flex justify-content-center align-items-center">
                        <p className="mb-0 mr-3">
                          <b>Patient is in:</b>
                        </p>
                        <Button
                          color="primary"
                          size="lg"
                          className="blue-line-button mr-3"
                          onClick={handleConfirmationModal}
                        >
                          In AF
                        </Button>
                        <Button
                          color="primary"
                          size="lg"
                          className="blue-button"
                          // onClick={handleOpenModal}
                        >
                          Not in AF
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Modal
                isOpen={open}
                className="appointment-modal"
                toggle={handleClose}
                // className="custom-confirm-modal modal-sm modal-dialog-centered"
                size="sm"
                // centered
              >
                <ModalBody>
                  <ScheduleAppointment
                    isEdit={isEdit}
                    handleClose={handleClose}
                  />
                </ModalBody>
              </Modal>
              <Modal
                isOpen={confirmationOpen}
                className="appointment-modal"
                toggle={handleConfirmationClose}
                // className="custom-confirm-modal modal-sm modal-dialog-centered"
                // size="sm"
                centered={true}
              >
                <ModalBody className="text-center">
                  <p>Do you want to continue with Not in AF?</p>
                  <Ionicon
                    className="cursor-pointer"
                    icon="md-close"
                    fontSize="20px"
                    color="#495057"
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                    }}
                    onClick={handleConfirmationClose}
                  />
                  <div className="d-flex justify-content-center">
                    <Button
                      color="primary"
                      size="lg"
                      className="blue-line-button  mr-2"
                      onClick={handleConfirmationClose}
                    >
                      No
                    </Button>
                    <Button
                      color="primary"
                      size="lg"
                      className="blue-button"
                      // onClick={handleOpenModal}
                    >
                      Yes
                    </Button>
                  </div>
                </ModalBody>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
