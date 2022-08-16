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
        gender: {
          value: "male",
          valid: null,
          touched: false,
          nullValue: null,
          required: true,
          showErrorMsg: false,
          autoFocus: false,
        },
        address: {
          value: "",
          valid: null,
          touched: false,
          nullValue: null,
          required: true,
          showErrorMsg: false,
          autoFocus: false,
        },
        state: {
          value: "",
          valid: null,
          touched: false,
          nullValue: null,
          required: true,
          showErrorMsg: false,
          autoFocus: false,
        },
        city: {
          value: "",
          valid: null,
          touched: false,
          nullValue: null,
          required: true,
          showErrorMsg: false,
          autoFocus: false,
        },
        pacemaker_number: {
          value: "",
          valid: null,
          touched: false,
          nullValue: null,
          required: true,
          showErrorMsg: false,
          autoFocus: false,
        },
        physician_contact: {
          value: "",
          valid: null,
          touched: false,
          nullValue: null,
          required: true,
          showErrorMsg: false,
          autoFocus: false,
        },
        cardiologist_contact: {
          value: "",
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
    let {
      first_name,
      last_name,
      phone_number,
      email,
      birth_date,
      address,
      state,
      city,
      pacemaker_number,
      physician_contact,
      cardiologist_contact,
    } = controls;
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

    if (address.touched === true || isSubmit) {
      address = Validation.notNullValidator(address);
      address.valid = !address.nullValue;
      if (address.valid === false) {
        address.showErrorMsg = true;
      } else {
        address.showErrorMsg = false;
      }
    }

    if (state.touched === true || isSubmit) {
      state = Validation.notNullValidator(state);
      state.valid = !state.nullValue;
      if (state.valid === false) {
        state.showErrorMsg = true;
      } else {
        state.showErrorMsg = false;
      }
    }

    if (city.touched === true || isSubmit) {
      city = Validation.notNullValidator(city);
      city.valid = !city.nullValue;
      if (city.valid === false) {
        city.showErrorMsg = true;
      } else {
        city.showErrorMsg = false;
      }
    }

    if (pacemaker_number.touched === true || isSubmit) {
      pacemaker_number = Validation.notNullValidator(pacemaker_number);
      pacemaker_number.valid = !pacemaker_number.nullValue;
      if (pacemaker_number.valid === false) {
        pacemaker_number.showErrorMsg = true;
      } else {
        pacemaker_number.showErrorMsg = false;
      }
    }

    if (physician_contact.touched === true || isSubmit) {
      physician_contact = Validation.notNullValidator(physician_contact);
      physician_contact = Validation.validatePhoneNumber(physician_contact);
      physician_contact.valid = !(
        physician_contact.nullValue || physician_contact.invalidPhone
      );
      if (physician_contact.valid === false) {
        physician_contact.showErrorMsg = true;
      } else {
        physician_contact.showErrorMsg = false;
      }
    }

    if (cardiologist_contact.touched === true || isSubmit) {
      cardiologist_contact = Validation.notNullValidator(cardiologist_contact);
      cardiologist_contact = Validation.validatePhoneNumber(
        cardiologist_contact
      );
      cardiologist_contact.valid = !(
        cardiologist_contact.nullValue || cardiologist_contact.invalidPhone
      );
      if (cardiologist_contact.valid === false) {
        cardiologist_contact.showErrorMsg = true;
      } else {
        cardiologist_contact.showErrorMsg = false;
      }
    }

    if (
      first_name.valid === true &&
      last_name.valid === true &&
      email.valid === true &&
      phone_number.valid === true &&
      birth_date.valid === true &&
      address.valid === true &&
      state.valid === true &&
      city.valid === true &&
      pacemaker_number.valid === true &&
      physician_contact.valid === true &&
      cardiologist_contact.valid === true
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
    let controlValue = e.target.value;
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

  handleRadioChange = (e) => {
    let { controls } = this.state;
    controls.gender.value = e;
    this.setState({ controls });
  };

  render() {
    const { controls } = this.state;
    console.log("controls: ", controls);
    return (
      <Fragment>
        {/* <ThemeOptions /> */}
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
                            <FormGroup>
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
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
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
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="4">
                            <FormGroup>
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
                              </InputGroup>
                              {controls.phone_number.showErrorMsg && (
                                <div className="error">
                                  * Please add phone number.
                                </div>
                              )}
                            </FormGroup>
                          </Col>

                          <Col lg="4">
                            <FormGroup>
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
                                <div className="error">
                                  * Please enter email.
                                </div>
                              )}
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="12">
                            <label check="true">
                              <input type="checkbox" /> Opt-in for text message
                            </label>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="4">
                            <FormGroup className="datepicker-input">
                              <Label className="custom-lable">
                                DOB
                                <span className="required-field">*</span>
                              </Label>
                              <InputGroup>
                                <DatePicker
                                  className="form-control"
                                  placeholderText="dd/mm/yyyy"
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
                            <FormGroup>
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
                                          name="gender"
                                          value="male"
                                          onChange={() => {
                                            this.handleRadioChange("male");
                                          }}
                                          checked={
                                            controls.gender.value === "male"
                                          }
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
                                          name="gender"
                                          value="female"
                                          onChange={() => {
                                            this.handleRadioChange("female");
                                          }}
                                          checked={
                                            controls.gender.value === "female"
                                          }
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
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="4">
                            <FormGroup>
                              <Label className="custom-lable">
                                Address
                                <span className="required-field">*</span>
                              </Label>
                              <Input
                                type="textarea"
                                name="address"
                                id="address"
                                onChange={this.handleInputChange}
                                value={controls.address.value}
                              />
                              {controls.address.showErrorMsg && (
                                <div className="error">
                                  * Please enter address.
                                </div>
                              )}
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <Label className="label-text">
                                State<span className="required-field">*</span>
                              </Label>
                              <select
                                className="form-control form-group-select select select-height-70rem"
                                name="state"
                                value={controls.state.value}
                                onChange={(e) => {
                                  this.handleInputChange(e);
                                }}
                              >
                                <option className="label-text" value="">
                                  Select
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                              </select>
                              {controls.state.showErrorMsg && (
                                <div className="error">
                                  * Please select state.
                                </div>
                              )}
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
                                name="city"
                                value={controls.city.value}
                                onChange={(e) => {
                                  this.handleInputChange(e);
                                }}
                              >
                                <option className="label-text" value="">
                                  Select
                                </option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                              </select>
                              {controls.city.showErrorMsg && (
                                <div className="error">
                                  * Please select city.
                                </div>
                              )}
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="4">
                            <FormGroup>
                              <Label className="custom-lable">
                                Pacemaker Serial Number
                                <span className="required-field">*</span>
                              </Label>
                              <Input
                                type="text"
                                name="pacemaker_number"
                                placeholder="Type Here"
                                onChange={this.handleInputChange}
                                value={controls.pacemaker_number.value}
                                id="pacemaker_number"
                              />
                              {controls.pacemaker_number.showErrorMsg && (
                                <div className="error">
                                  * Please enter pacemaker number.
                                </div>
                              )}
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
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
                                  name="physician_contact"
                                  placeholder="Type Here"
                                  onChange={this.handleInputChange}
                                  value={controls.physician_contact.value}
                                  id="physician_contact"
                                />
                              </InputGroup>
                              {controls.physician_contact.showErrorMsg && (
                                <div className="error">
                                  * Please enter pacemaker number.
                                </div>
                              )}
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
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
                                  name="cardiologist_contact"
                                  placeholder="Type Here"
                                  onChange={this.handleInputChange}
                                  value={controls.cardiologist_contact.value}
                                  id="cardiologist_contact"
                                />
                              </InputGroup>
                              {controls.cardiologist_contact.showErrorMsg && (
                                <div className="error">
                                  * Please enter cardiologist number.
                                </div>
                              )}
                            </FormGroup>
                          </Col>
                        </Row>

                        <div className="d-flex justify-content-center my-3">
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
