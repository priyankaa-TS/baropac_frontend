import React, { Fragment, Component } from "react";

import Slider from "react-slick";
import "./Login.css";

// import FaUserAlt from "@fortawesome/free-solid-svg-icons";
import { faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Validation from "../../services/Validation";

export default class Login extends Component {
  state = {
    controls: {
      username: {
        value: "",
        valid: null,
        touched: false,
        nullValue: null,
      },
      password: {
        value: "",
        valid: null,
        touched: false,
        nullValue: null,
        invalidPassword: null,
      },
      keepMeLoggenIn: false,
    },
    isLoading: false,
    isFormValid: false,
    passwordShown: false,
  };

  handleInputChange = (e) => {
    const controlName = e.target.name;
    const controlValue = e.target.value;
    const { controls } = this.state;
    controls[controlName].value = controlValue;
    controls[controlName].touched = true;
    this.setState({ controls });
  };

  setCheckBoxValue = () => {
    const { controls } = this.state;
    controls.keepMeLoggenIn = !controls.keepMeLoggenIn;
    this.setState({ controls });
  };

  togglePassword = () => {
    this.setState({
      passwordShown: !this.state.passwordShown,
    });
  };
  handleValidation = () => {
    let { controls, isFormValid } = this.state;
    let { username, password } = controls;

    username = Validation.notNullValidator(username);
    // console.log('email notNullValidator', username);
    username.valid = !username.nullValue;

    password = Validation.notNullValidator(password);
    password.valid = !password.nullValue;

    if (username.valid === true && password.valid === true) {
      isFormValid = true;
    } else {
      isFormValid = false;
    }
    // console.log('controls', controls);
    this.setState({ controls, isFormValid });

    return isFormValid;
  };

  login = async (e) => {
    e.preventDefault();
    const { controls } = this.state;
    const { username, password, keepMeLoggenIn } = controls;

    const isFormValid = this.handleValidation();

    if (isFormValid === false) {
      return;
    }

    const obj = {
      username: username.value,
      password: password.value,
    };
    // this.setState({ errResponseMessage: "", isLoading: true });

    // await AuthService.login(obj)
    //   .then(async (data) => {
    //     const response = data.data;
    //     console.log("response", response);
    //     const obj = {
    //       accessToken: response.accessToken,
    //       accessTokenExpiresAt: response.accessTokenExpiresAt,
    //       refreshToken: response.refreshToken,
    //       refreshTokenExpiresAt: response.refreshTokenExpiresAt,
    //     };
    //     const userDetail = response.user;

    //     // here you go
    //     Storage.setTokenDetail(obj);

    //     Storage.setUserDetail(userDetail);
    //     if (keepMeLoggenIn === true) {
    //       this.setKeepMeLoggedIn(true);
    //     } else {
    //       this.setKeepMeLoggedIn(false);
    //     }
    //     GoogleAnalticsService.reactGAInitialize();
    //     await this.navBarToHide();

    //     if (userDetail.role.toLowerCase() === "admin") {
    //       this.setState({ isUser: true, isLoading: false });
    //     } else if (userDetail.role.toLowerCase() === "client_user"){
    //       this.props.history.push("/marketing-crm/retail-marketing-recce-list");
    //     } else {
    //       this.props.history.push("/marketing-crm/retail-marketing-system");
    //     }
    //   })
    //   .catch((e) => {
    //     // console.log("request error", e.response);
    //     const err =
    //       e.response &&
    //       e.response.data &&
    //       e.response.data.error &&
    //       e.response.data.error[0]
    //         ? e.response.data.error[0]
    //         : null;
    //     const message = err && err.message ? err.message : ERROR_MESSAGE;

    //     // ModalService.openAlert('Login', message, 'error');
    //     this.setState({
    //       errResponseMessage: message,
    //       isLoading: false,
    //       //  errorMessage: message, isErrorModalOpen: true
    //     });
    //   });
    // // this.refreshPage();
    // localStorage.setItem("serearchQuery", "");
    // localStorage.setItem("pageNumber", 1);
  };

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      initialSlide: 0,
      autoplay: true,
      adaptiveHeight: true,
    };
    const { controls, passwordShown } = this.state;
    const { username, password, keepMeLoggenIn } = controls;

    return (
      <Fragment>
        <div className="h-100">
          <Row className="h-100 no-gutters overflow-hidden">
            <Col lg="4" className="d-none d-lg-block">
              <div className="slider-light">
                <Slider {...settings}>
                  <div className="h-100 d-flex justify-content-center align-items-center">
                    <div className="slide-img-bg" />
                    <div className="slider-content">
                      <img src="images/BaroPace-Logo-Blue.png" alt="img" />
                    </div>
                  </div>
                </Slider>
              </div>
            </Col>
            <Col
              lg="8"
              md="12"
              className="h-100 d-flex bg-white justify-content-center align-items-center"
            >
              <Col lg="9" md="10" sm="12" className="mx-auto app-login-box">
                <div className="app-logo" />
                <h4 className="mb-4">
                  <span className="signin-title">
                    Please sign in to your account
                  </span>
                </h4>
                <div>
                  <Form>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="position-relative">
                          <Label for="exampleEmail" className="custom-lable">
                            Username<span className="required-field">*</span>
                          </Label>
                          <Input
                            type="email"
                            name="username"
                            id="email"
                            placeholder="Enter your username"
                            value={username.value}
                            onChange={this.handleInputChange}
                          />
                          <FontAwesomeIcon
                            icon={faUser}
                            style={{
                              position: "absolute",
                              right: "13px",
                              bottom: "13px",
                            }}
                          />
                          <div className="error-container">
                            {username.nullValue && (
                              <div className="error">
                                * Username should not be empty
                              </div>
                            )}
                            {/* {!(
                              errResponseMessage === null ||
                              errResponseMessage === ""
                            ) && (
                              <div className="error">{errResponseMessage}</div>
                            )} */}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="position-relative">
                          <Label className="custom-lable">
                            Password<span className="required-field">*</span>
                          </Label>
                          <Input
                            type={passwordShown ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={password.value}
                            onChange={this.handleInputChange}
                          />
                          {/* <FontAwesomeIcon
                            icon={faEye}
                            style={{
                              position: "absolute",
                              right: "13px",
                              bottom: "28px",
                            }}
                          /> */}
                          <FontAwesomeIcon
                            icon={faEye}
                            onClick={this.togglePassword}
                            style={{
                              position: "absolute",
                              right: "13px",
                              bottom: "13px",
                            }}
                          />
                          <div className="error-container">
                            {password.nullValue && (
                              <div className="error">
                                * Password should not be empty
                              </div>
                            )}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup check>
                          <Input
                            type="checkbox"
                            name="check"
                            id="checkbox"
                            checked={keepMeLoggenIn}
                            onChange={this.setCheckBoxValue}
                          />
                          <Label for="exampleCheck" check>
                            Keep me logged in
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <a
                          href="#"
                          style={{
                            color: "#083ABF",
                          }}
                        >
                          Forgot Password
                        </a>
                      </Col>
                    </Row>

                    <div className="d-flex align-items-center mt-5">
                      <div className="ml-auto">
                        <Button
                          color="primary"
                          type="submit"
                          size="lg"
                          className="blue-button"
                          onClick={this.login}
                        >
                          Login
                        </Button>
                      </div>
                    </div>
                  </Form>
                </div>
              </Col>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}
