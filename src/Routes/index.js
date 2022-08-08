import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

import { ToastContainer } from "react-toastify";

const AppMain = () => {
  return (
    <Fragment>
      <PrivateRoutes />
      <PublicRoutes />
      <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
      <ToastContainer />
    </Fragment>
  );
};

export default AppMain;
