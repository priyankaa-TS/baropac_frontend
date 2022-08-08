import React, { Fragment, Component } from "react";
import {
  Card,
  Row,
  Table,
  Col,
  CardBody,
  CardTitle,
  Button,
  Label,
  Input,
  InputGroupAddon,
  InputGroup,
  FormGroup,
  CardFooter,
} from "reactstrap";
import AppHeader from "../../Layout/AppHeader";
import AppSidebar from "../../Layout/AppSidebar";
import ThemeOptions from "../../Layout/ThemeOptions";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DatePicker from "react-datepicker";
import timerIcon from "../../assets/utils/images/timer.png";
import "./PatientRegistration.scss";
import Pagination from "../Pagination/Pagination";
import Validation from "./../../services/Validation";

export default class PatientRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controls: {
        first_name: {
          value: "",
          valid: null,
          touched: false,
          nullValue: null,
          required: true,
          showErrorMsg: false,
          autoFocus: false,
        },
        last_name: {
          value: "",
          valid: null,
          touched: false,
          nullValue: null,
          required: true,
          showErrorMsg: false,
          autoFocus: false,
        },
        last_name: {
          value: "",
          valid: null,
          touched: false,
          nullValue: null,
          required: true,
          showErrorMsg: false,
          autoFocus: false,
        },
        phone_number: {
          value: "",
          valid: null,
          touched: false,
          nullValue: null,
          required: true,
          showErrorMsg: false,
          autoFocus: false,
        },
        email: {
          value: "",
          valid: null,
          touched: false,
          nullValue: null,
          required: true,
          showErrorMsg: false,
          autoFocus: false,
          invalidEmail: null,
        },
        birth_date: {
          value: null,
          valid: null,
          touched: false,
          nullValue: null,
          required: true,
          showErrorMsg: false,
          autoFocus: false,
        },
      },
    };
  }

  onChangebirthday = (date) => {
    let { controls } = this.state;
    controls.birth_date.value = date;
    this.setState(controls);
  };

  handleRegister = () => {
    if (!this.handleValidation(true)) {
      return;
    }
    console.log("hello");
  };

  handleValidation = (isSubmit = false) => {
    let { controls, isFormValid } = this.state;
    let { first_name, last_name, phone_number, email, birth_date } = controls;
    isFormValid = true;

    if (first_name.touched === true || isSubmit) {
      first_name = Validation.notNullValidator(first_name);
      first_name.valid = !first_name.nullValue;
      if (first_name.valid === false) {
        first_name.showErrorMsg = true;
      } else {
        first_name.showErrorMsg = false;
      }
    }
    if (last_name.touched === true || isSubmit) {
      last_name = Validation.notNullValidator(last_name);
      last_name.valid = !last_name.nullValue;
      if (last_name.valid === false) {
        last_name.showErrorMsg = true;
      } else {
        last_name.showErrorMsg = false;
      }
    }

    if (phone_number.touched === true || isSubmit) {
      phone_number = Validation.notNullValidator(phone_number);
      phone_number = Validation.validatePhoneNumber(phone_number);
      phone_number.valid = !(
        phone_number.nullValue || phone_number.invalidPhone
      );
      if (phone_number.valid === false) {
        phone_number.showErrorMsg = true;
      } else {
        phone_number.showErrorMsg = false;
      }
    }

    if (email.touched === true || isSubmit) {
      email = Validation.notNullValidator(email);
      email = Validation.emailValidator(email);
      email.valid = !(email.nullValue || email.invalidEmail);
      if (email.valid === false) {
        email.showErrorMsg = true;
      } else {
        email.showErrorMsg = false;
      }
    }

    if (birth_date.touched === true || isSubmit) {
      birth_date = Validation.notNullValidator(birth_date);
      birth_date.valid = !birth_date.nullValue;
      if (birth_date.valid === false) {
        birth_date.showErrorMsg = true;
      } else {
        birth_date.showErrorMsg = false;
      }
    }

    if (
      first_name.valid === true &&
      last_name.valid === true &&
      email.valid === true &&
      phone_number.valid === true &&
      birth_date.valid === true
    ) {
      isFormValid = true;
    } else {
      isFormValid = false;
    }

    this.setState({ controls, isFormValid });
    return isFormValid;
  };

  handleInputChange = (e) => {
    let controlName = e.target.name;
    console.log("controlName: ", controlName);
    let controlValue = e.target.value;
    console.log("controlValue: ", controlValue);
    // console.log("FORM",e.target.name, e.target.value);

    // if(controls)
    let { controls } = this.state;
    controls[controlName].value = controlValue;
    controls[controlName].touched = true;

    if (
      controls[controlName].touched === true &&
      (controls[controlName].value == "" || controls[controlName].value == null)
    ) {
      controls[controlName].showErrorMsg = true;
    } else {
      controls[controlName].showErrorMsg = false;
    }

    this.setState({ controls });
  };

  render() {
    const { controls } = this.state;
    console.log("controls: ", controls);
    return (
      <Fragment>
        <ThemeOptions />
        <AppHeader />
        <div className="app-main">
          <AppSidebar />
          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="PatientRegistration-main">
                <div className="header-title d-flex justify-content-between align-items-center mb-5">
                  <h4>Patient Registration</h4>
                </div>
                <Row>
                  <Col lg="10" className="mx-auto">
                    <Card className="main-card mb-3">
                      <CardBody>
                        <CardTitle className="text-center mb-3 fsize-2">
                          Patient information
                        </CardTitle>
                        <Row>
                          <Col lg="4">
                            <Label className="custom-lable">
                              Patient First Name
                              <span className="required-field">*</span>
                            </Label>
                            <Input
                              type="text"
                              name="first_name"
                              placeholder="Type Here"
                              onChange={this.handleInputChange}
                              value={controls.first_name.value}
                              id="first_name"
                            />
                            {controls.first_name.showErrorMsg && (
                              <div className="error">
                                * Please add program name.
                              </div>
                            )}
                          </Col>
                          <Col lg="4">
                            <Label className="custom-lable">
                              Patient Last Name
                              <span className="required-field">*</span>
                            </Label>
                            <Input
                              type="text"
                              name="last_name"
                              placeholder="Type Here"
                              onChange={this.handleInputChange}
                              value={controls.last_name.value}
                              id="last_name"
                            />
                            {controls.last_name.showErrorMsg && (
                              <div className="error">
                                * Please add program name.
                              </div>
                            )}
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="4">
                            <Label className="custom-lable">
                              Mobile Number
                              <span className="required-field">*</span>
                            </Label>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                +91
                              </InputGroupAddon>
                              <Input
                                type="text"
                                name="phone_number"
                                placeholder="Type Here"
                                onChange={this.handleInputChange}
                                value={controls.phone_number.value}
                                id="phone_number"
                              />
                              {controls.phone_number.showErrorMsg && (
                                <div className="error">
                                  * Please add phone number.
                                </div>
                              )}
                            </InputGroup>
                          </Col>

                          <Col lg="4">
                            <Label className="custom-lable">
                              Email
                              <span className="required-field">*</span>
                            </Label>
                            <Input
                              type="email"
                              name="email"
                              placeholder="Type Here"
                              onChange={this.handleInputChange}
                              value={controls.email.value}
                              id="email"
                            />
                            {controls.email.showErrorMsg && (
                              <div className="error">* Please enter email.</div>
                            )}
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="12">
                            <label check>
                              <input type="checkbox" /> Opt-in for text message
                            </label>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="4">
                            <FormGroup className="d-flex-column">
                              <Label className="custom-lable">
                                DOB
                                <span className="required-field">*</span>
                              </Label>
                              <InputGroup>
                                <DatePicker
                                  className="form-control"
                                  placeholder="dd/mm/yyyy"
                                  dateFormat="dd/MM/yyyy"
                                  selected={controls.birth_date.value}
                                  // selected={this.state.startDate}
                                  onChange={this.onChangebirthday}
                                />
                                <InputGroupAddon addonType="append">
                                  <div className="input-group-text date-picker">
                                    <FontAwesomeIcon
                                      htmlFor="datepicker"
                                      icon={faCalendarAlt}
                                    />
                                  </div>
                                </InputGroupAddon>
                              </InputGroup>
                              {controls.birth_date.showErrorMsg && (
                                <div className="error">
                                  * Please enter BirthDate.
                                </div>
                              )}
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <Label className="custom-lable">
                              Gender
                              <span className="required-field">*</span>
                            </Label>
                            <Row>
                              <Col lg="4" md="6" xs="4">
                                <FormGroup>
                                  <div className="d-flex-row pcrtype-wrapp">
                                    <label className="custom-checkboax-radio--container">
                                      <input
                                        type="radio"
                                        name="offer_status"
                                        value=""
                                        // onChange={() => {
                                        //   this.handleRadioChange("");
                                        // }}
                                        // checked={controls.offer_status.value === ""}
                                      />
                                      <span className="checkmark-radio" />
                                    </label>
                                    <span className="label-text pl-2">
                                      Male
                                    </span>
                                  </div>
                                </FormGroup>
                              </Col>
                              <Col lg="4" md="6" xs="4">
                                <FormGroup>
                                  <div className="d-flex-row pcrtype-wrapp">
                                    <label className="custom-checkboax-radio--container">
                                      <input
                                        type="radio"
                                        name="offer_status"
                                        value=""
                                        checked
                                        // onChange={() => {
                                        //   this.handleRadioChange("");
                                        // }}
                                        // checked={controls.offer_status.value === ""}
                                      />
                                      <span className="checkmark-radio" />
                                    </label>
                                    <span className="label-text pl-2">
                                      Female
                                    </span>
                                  </div>
                                </FormGroup>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="4">
                            <Label className="custom-lable">
                              Address
                              <span className="required-field">*</span>
                            </Label>
                            <Input type="textarea" name="text" id="address" />
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <Label className="label-text">
                                State<span className="required-field">*</span>
                              </Label>
                              <select
                                className="form-control form-group-select select select-height-70rem"
                                name="program_name"
                                // value={controls.program_name.value}
                                // onChange={(e) => {
                                //   this.handleInputChange(e);
                                // }}
                              >
                                <option className="label-text" value="">
                                  Select
                                </option>
                                <option>1</option>
                                <option>2</option>
                              </select>
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <Label className="label-text">
                                City/Town
                                <span className="required-field">*</span>
                              </Label>
                              <select
                                className="form-control form-group-select select select-height-70rem"
                                name="program_name"
                                // value={controls.program_name.value}
                                // onChange={(e) => {
                                //   this.handleInputChange(e);
                                // }}
                              >
                                <option className="label-text" value="">
                                  Select
                                </option>
                                <option>1</option>
                                <option>2</option>
                              </select>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="4">
                            <Label className="custom-lable">
                              Pacemaker Serial Number
                              <span className="required-field">*</span>
                            </Label>
                            <Input
                              type="text"
                              name="pacemaker_number"
                              placeholder="Type Here"
                              // onChange={this.handleChangeInput}
                              // value={controls.campaign_name.value}
                              // id="campaign_name"
                            />
                          </Col>
                          <Col lg="4">
                            <Label className="custom-lable">
                              Primary Physician Contact
                              <span className="required-field">*</span>
                            </Label>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                +91
                              </InputGroupAddon>
                              <Input
                                type="text"
                                name="physician_number"
                                placeholder="Type Here"
                              />
                            </InputGroup>
                          </Col>
                          <Col lg="4">
                            <Label className="custom-lable">
                              Cardiologist Contact
                              <span className="required-field">*</span>
                            </Label>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                +91
                              </InputGroupAddon>
                              <Input
                                type="text"
                                name="cardiologist_number"
                                placeholder="Type Here"
                              />
                            </InputGroup>
                          </Col>
                        </Row>

                        <div className="d-flex justify-content-center">
                          <Button
                            color="primary"
                            size="lg"
                            className="blue-button"
                            onClick={this.handleRegister}
                          >
                            Register
                          </Button>
                        </div>
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
}
