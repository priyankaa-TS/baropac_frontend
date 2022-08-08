import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import Loading from "../components/Loading/Loading";
import PublicRoute from "../components/PublicRoute/PublicRoute";

const UserAuth = lazy(() => import("./userAuthRoutes"));

const suspenseRoutesArr = [
  {
    path: "/user",
    component: UserAuth,
  },
];

const PublicRoutes = () => {
  return (
    <Fragment>
      {suspenseRoutesArr.map((route, i) => (
        <Suspense fallback={<Loading />} key={i}>
          <PublicRoute path={route.path} component={route.component} />
        </Suspense>
      ))}
    </Fragment>
  );
};

export default PublicRoutes;
