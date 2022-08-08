import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import ResizeDetector from "react-resize-detector";
import cx from "classnames";
import { connect } from "react-redux";
import Routes from "./Routes";

import AppMain from "./Layout/AppMain";

import AppHeader from "./Layout/AppHeader";
import ThemeOptions from "./Layout/ThemeOptions/index";
// import "react-image-lightbox/style.css";
// import Storage from "./services/Storage";

import "./App.css";
import Dashboards from "./DemoPages/Dashboards";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import Components from "./DemoPages/Components";
import Forms from "./DemoPages/Forms";
// import GoogleAnalticsService from "./services/GoogleAnalticsService";
// import UserService from "./services/UserService";
// import AuthService from "./services/AuthService";
// import HandleCache from "./HandleCache";
import Charts from "./DemoPages/Charts";
import Elements from "./DemoPages/Elements";
import Tables from "./DemoPages/Tables";
import Widgets from "./DemoPages/Widgets/index";
import UserPages from "./DemoPages/UserPages/index";
import Applications from "./DemoPages/Applications";
import Patient from "./Pages/Patient/Patient";
import PatientRegistration from "./components/PatientRegistration/PatientRegistration";

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // setCookie(userId) {
  //   cookie.save('userId', userId, { path: '/' })
  // }

  render() {
    const {
      colorScheme,
      enableFixedHeader,
      enableFixedSidebar,
      enableFixedFooter,
      enableClosedSidebar,
      closedSmallerSidebar,
      enableMobileMenu,
      enablePageTabsAlt,
    } = this.props;
    return (
      <>
        <ResizeDetector
          handleWidth
          render={({ width }) => (
            <Fragment>
              <Router>
                <div
                  className={cx(
                    `app-container app-theme-${colorScheme}`,
                    { "fixed-header": enableFixedHeader },
                    { "fixed-sidebar": enableFixedSidebar || width < 1250 },
                    { "fixed-footer": enableFixedFooter },
                    { "closed-sidebar": enableClosedSidebar || width < 1250 },
                    // { "closed-sidebar": true },
                    {
                      "closed-sidebar-mobile":
                        closedSmallerSidebar || width < 1250,
                    },
                    { "sidebar-mobile-open": enableMobileMenu },
                    { "body-tabs-shadow-btn": enablePageTabsAlt }
                  )}
                >
                  {/* <AppMain /> */}
                  {/* <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/dashboards/crm" />}
                  />
                  <Route path="/dashboards" component={Dashboards} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/login" component={Login} />
                  <Route path="/components" component={Components} />
                  <Route path="/forms" component={Forms} />
                  <Route path="/charts" component={Charts} />
                  <Route path="/tables" component={Tables} />
                  <Route path="/elements" component={Elements} />
                  <Route path="/widgets" component={Widgets} />
                  <Route path="/pages" component={UserPages} />
                  <Route path="/apps" component={Applications} />
                  <Route path="/patient-list" component={Patient} />
                  <Route
                    path="/patient-registration"
                    component={PatientRegistration}
                  /> */}

                  <Routes />
                </div>
              </Router>
            </Fragment>
          )}
        />
      </>
    );
  }
}

const mapStateToProp = (state) => ({
  colorScheme: state.ThemeOptions.colorScheme,
  enableFixedHeader: state.ThemeOptions.enableFixedHeader,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  enableFixedFooter: state.ThemeOptions.enableFixedFooter,
  enableFixedSidebar: state.ThemeOptions.enableFixedSidebar,
  enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
  enablePageTabsAlt: state.ThemeOptions.enablePageTabsAlt,
});

export default connect(mapStateToProp)(App);
