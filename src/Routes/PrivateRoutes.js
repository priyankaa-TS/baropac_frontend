import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import Loading from "../components/Loading/Loading";

import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

// need to remove

const Dashboard = lazy(() => import("./../Pages/Dashboard/Dashboard"));
const Patient = lazy(() => import("./../Pages/Patient/Patient"));
const PatientInfo = lazy(() => import("../components/PatientInfo/PatientInfo"));
const PatientRegistration = lazy(() =>
  import("../components/PatientRegistration/PatientRegistration")
);
const ClinicalInformation = lazy(() =>
  import("../components/ClinicalInformation/ClinicalInformation")
);

const suspenseRoutesArr = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/patient-list",
    component: Patient,
  },
  {
    path: "/patient-registration",
    component: PatientRegistration,
  },
  {
    path: "/patient-info",
    component: PatientInfo,
  },
  {
    path: "/clinical-info",
    component: ClinicalInformation,
  },
];

const PrivateRoutes = () => {
  return (
    <Fragment>
      {suspenseRoutesArr.map((route, i) => (
        <Suspense fallback={<Loading />} key={i}>
          <PrivateRoute path={route.path} component={route.component} />
        </Suspense>
      ))}
    </Fragment>
  );
};

export default PrivateRoutes;
