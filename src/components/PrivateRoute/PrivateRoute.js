import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types"; // or PropTypes = require('prop-types');

// import AuthService from "../../services/AuthService";

/**
 * private route component to prevent unauthorize access
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
  // const isAuthenticated = AuthService.isAuthenticated();
  const isAuthenticated = true;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated !== true) {
          return (
            <Redirect
              to={{
                pathname: "/user/login",
              }}
            />
          );
        } else return <Component {...props} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
};

export default PrivateRoute;
