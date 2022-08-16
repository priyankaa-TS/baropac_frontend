import React, { useState } from "react";
import Ionicon from "react-ionicons";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import DatePicker from "react-datepicker";
import {
  faPen,
  faCalendarAlt,
  faXmark,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ScheduleAppointment({ isEdit, handleClose }) {
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  const onChangeAppointmentDate = (date) => {
    setAppointmentDate(date);
  };
  return (
    <div className="text-center">
      <h5>{isEdit ? "Reschedule Appointment" : "Set New Appointment"} </h5>
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
        onClick={handleClose}
      />
      <Row>
        <Col lg="10" className="mx-auto">
          <FormGroup className="d-flex-column">
            <Label className="custom-lable">Set Appointment Date</Label>
            <InputGroup>
              <DatePicker
                className="form-control"
                placeholderText="Type here"
                dateFormat="dd/MM/yyyy"
                selected={appointmentDate}
                onChange={onChangeAppointmentDate}
              />
              <InputGroupAddon addonType="append">
                <div className="input-group-text date-picker">
                  <FontAwesomeIcon htmlFor="datepicker" icon={faCalendarAlt} />
                </div>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
          <FormGroup className="position-relative">
            <Label className="custom-lable">Set Appointment Time</Label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="form-control timepicker position-relative"
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
            <FontAwesomeIcon
              htmlFor="datepicker"
              icon={faSortDown}
              style={{
                position: "absolute",
                right: "9px",
                bottom: "14px",
                color: "#fff",
                fontSize: "22px",
              }}
            />
          </FormGroup>
          <FormGroup className="d-flex justify-content-center">
            <label className="container-checkbox">
              <input
                type="checkbox"
                name="is_scheduled"
                id="checkbox"
                // onChange={this.handleChangeInput}
                // value={is_scheduled.value}
                // checked={is_scheduled.value}
              />
              Need Reminder
              <span className="checkmark" />
            </label>
          </FormGroup>
          <div className="d-flex justify-content-center">
            {isEdit ? (
              <Button
                color="primary"
                size="lg"
                className="blue-line-button mt-2 mr-2"
                // onClick={handleOpenModal}
              >
                Delete
              </Button>
            ) : null}

            <Button
              color="primary"
              size="lg"
              className="blue-button mt-2"
              // onClick={handleOpenModal}
            >
              {isEdit ? "Update" : "Set"}
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
