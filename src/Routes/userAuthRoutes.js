import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Login from "./../Pages/Login/Login";

// USER AUTH PAGES

const uesrAuthRoutesArr = [
  {
    path: "/login",
    component: Login,
  },
];

const userAuthRoutes = ({ match }) => (
  <Fragment>
    <div className="app-container">
      {uesrAuthRoutesArr.map((route) => (
        <Route path={`${match.url}${route.path}`} component={route.component} />
      ))}
    </div>
  </Fragment>
);

export default userAuthRoutes;
