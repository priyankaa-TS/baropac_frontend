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
import "./PatientInfo.scss";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { STATUS } from "./../../constants/status";
import ScheduleAppointment from "../ScheduleAppointment/ScheduleAppointment";
import { useHistory } from "react-router-dom";

export default function PatientInfo() {
  const DATA = [
    {
      id: 0,
      date: "04 Aug 2022",
      time: "10:30 PM",
      weight: "80",
      bp: "121/81",
      PR: "94",
      status: "Ongoing",
    },
    {
      id: 1,
      date: "04 Aug 2022",
      time: "10:30 PM",
      weight: "80",
      bp: "121/81",
      PR: "94",
      status: "Success",
    },
    {
      id: 2,
      date: "04 Aug 2022",
      time: "10:30 PM",
      weight: "80",
      bp: "121/81",
      PR: "94",
      status: "Aborted",
    },
    {
      id: 3,
      date: "04 Aug 2022",
      time: "10:30 PM",
      weight: "80",
      bp: "121/81",
      PR: "94",
      status: "Reverted",
    },
    {
      id: 4,
      date: "04 Aug 2022",
      time: "10:30 PM",
      weight: "80",
      bp: "121/81",
      PR: "94",
      status: "Error",
    },
  ];
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

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

  const handleClick = (data) => {
    history.push({
      pathname: "/clinical-info",
      state: data,
    });
  };
  return (
    <Fragment>
      {/* <ThemeOptions /> */}
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
                        <Col lg="2" md="6" xs="12">
                          <h6>MRN</h6>
                          <p>232056</p>
                        </Col>
                        <Col lg="2" md="6" xs="12">
                          <h6>First Name</h6>
                          <p>Anshul</p>
                        </Col>
                        <Col lg="2" md="6" xs="12">
                          <h6>Last Name </h6>
                          <p>Tripathi</p>
                        </Col>
                        <Col lg="3" md="6" xs="12">
                          <h6>Mobile No.</h6>
                          <p>+917815649875</p>
                        </Col>
                        <Col lg="3" md="6" xs="12">
                          <h6>Email</h6>
                          <p>anshul128@gmail.com</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="2" md="6" xs="12">
                          <h6>DOB</h6>
                          <p>23/11/1984</p>
                        </Col>
                        <Col lg="2" md="6" xs="12">
                          <h6>Gender</h6>
                          <p>Male</p>
                        </Col>
                        <Col lg="2" md="6" xs="12">
                          <h6>State</h6>
                          <p>Gujarat</p>
                        </Col>
                        <Col lg="3" md="6" xs="12">
                          <h6>City/Town</h6>
                          <p>Amreli</p>
                        </Col>
                        <Col lg="3" md="6" xs="12">
                          <h6>Pacemaker Sr. No.</h6>
                          <p>021458</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4" md="6" xs="12">
                          <h6>Primary Physician Contact</h6>
                          <p>+917632568941</p>
                        </Col>
                        <Col lg="2" md="6" xs="12">
                          <h6>Cardiologist Contact</h6>
                          <p>+917632568941</p>
                        </Col>
                        <Col lg="6" md="6" xs="12">
                          <h6>Address</h6>
                          <p>
                            avalkunj, opp.patel wadi, liliya road, amreli
                            -365601
                          </p>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col lg="10" className="mx-auto">
                  <Card className="main-card mb-3">
                    <CardBody className="p-0">
                      <Table
                        responsive
                        className="mb-0 text-center"
                        style={{
                          borderCollapse: "separate",
                          borderSpacing: "0px 0.8em",
                        }}
                      >
                        <thead>
                          <tr>
                            <th>DATE</th>
                            <th>TIME</th>
                            <th>WEIGHT ( KG )</th>
                            <th>B.P. (mm Hg)</th>
                            <th>P.R. (bpm)</th>
                            <th>STATUS</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {DATA.map((ele) => {
                            return (
                              <tr
                                key={ele.id.toString()}
                                className="cursor-pointer"
                                onClick={() => handleClick(ele)}
                                style={{ background: STATUS[ele.status].color }}
                              >
                                <th>{ele.date}</th>
                                <td>{ele.time}</td>
                                <td>{ele.weight}</td>
                                <td>{ele.bp}</td>
                                <td>{ele.PR}</td>
                                <td>{ele.status}</td>
                                <td>
                                  <FontAwesomeIcon
                                    icon={faPen}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleOpenAction();
                                    }}
                                    style={{
                                      color: "#083ABF",
                                      fontSize: "18px",
                                      cursor: "pointer",
                                      zIndex: "999999",
                                    }}
                                  />
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                  <div className="d-flex justify-content-end">
                    <Button
                      color="primary"
                      size="lg"
                      className="blue-button"
                      onClick={handleOpenModal}
                    >
                      New Appointment
                    </Button>
                  </div>
                </Col>
              </Row>
              {open ? (
                <Modal
                  isOpen={open}
                  aria-labelledby="contained-modal-title-vcenter"
                  className="appointment-modal"
                  toggle={handleClose}
                  // className="custom-confirm-modal modal-sm modal-dialog-centered"
                  size="sm"
                  centered
                >
                  <ModalBody>
                    <ScheduleAppointment
                      isEdit={isEdit}
                      handleClose={handleClose}
                    />
                  </ModalBody>
                </Modal>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
