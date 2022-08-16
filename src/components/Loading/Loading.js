import React from "react";
import Loader from "react-loaders";
import "./Loading.scss";
function Loading() {
  return (
    <>
      <div className="loader-container">
        <div className="loader-container-inner">
          <div className="text-center">
            <Loader
              type="line-scale-pulse-out-rapid"
              className="loader-suspense"
            />
          </div>
          <h6 className="mt-3">Loading</h6>
        </div>
      </div>
    </>
  );
}

export default Loading;
