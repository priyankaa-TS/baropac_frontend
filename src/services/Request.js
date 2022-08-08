/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import axios from "axios";
import qs from "qs";
// import { history } from 'react-router-dom';
import { detect } from "detect-browser";
import Storage from "./Storage";
import { routes } from "../constants/constant.route";
import AuthService from "./AuthService";
import { getScreenResolution } from "../utils/utils";

const API_URL = process.env.REACT_APP_API_URL;
const REACT_APP_NODE_ENV = process.env.REACT_APP_NODE_ENV;
const { LOGIN, FORGOT_PASSWORD } = routes.AUTH;

/**
 * request interceptors
 * @param {String} method GET,PUT,POST,DELETE
 * @param {String} url req url
 * @param {Object} params query parameters
 * @param {Object} body req body
 * @param {Object} headers req headers
 */
export const request = (
  method,
  url,
  params,
  body = {},
  headers = {},
  token = ""
) => {
  // console.log("Token",token);
  token = Storage.getTokenDetail() ? Storage.getTokenDetail() : token;

  const browser = detect();
  const browserName = browser.name;
  const { version, os } = browser;

  // console.log(url);
  headers = headers || {};
  params = params || {};
  body = body || {};

  headers.device_type = "browser";
  headers.web_version = version;
  headers.browser_name = browserName;
  headers.app = "advantage";
  headers.resolution = getScreenResolution();

  if (!headers["content-type"]) {
    headers["content-type"] = "application/json";
  }

  if (
    !(
      url.includes("login") ||
      url.includes("forgot-password") ||
      url.includes("crm-points/about")
    )
  ) {
    if (token && typeof token === "object" && Object.keys(token).length > 0) {
      headers.Authorization = `Bearer ${token.accessToken}`;
    } else if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  } else if (url.includes("login")) {
    headers.Authorization = "Basic amt0eXJlOjEyMw==";
  }
  if (window.location.href.includes("event-registration")) {
    headers.Authorization = `Bearer ${token}`;
  }
  // console.log("Header", headers.Authorization);
  const options = {
    method,
    headers,
    params,
    url,
  };
  if (
    (method === "POST" || method === "PUT") &&
    headers["content-type"] === "application/x-www-form-urlencoded"
  ) {
    options.data = qs.stringify(body);
  } else if (
    (method === "POST" || method === "PUT") &&
    headers["content-type"] === "multipart/form-data"
  ) {
    headers["content-type"] = "multipart/form-data";

    // prepate multipart formdata body
    const formData = new FormData();
    const keys = Object.keys(body);

    for (let i = 0; i < keys.length; i++) {
      if (
        body[keys[i]] &&
        typeof body[keys[i]] === "object" &&
        Object.keys(body[keys[i]]).length > 0
      ) {
        for (const key of Object.keys(body[keys[i]])) {
          formData.append(keys[i], body[keys[i]][key]);
        }
      } else {
        formData.append(keys[i], body[keys[i]]);
      }
    }
    options.data = formData;
  } else if (method === "POST" || method === "PUT") {
    options.data = body;
  }
  // console.log("Token", options);
  return axios(options)
    .then((data) => {
      // console.log("Token", Promise.resolve(data));
      return Promise.resolve(data);
    })
    .catch((e) => {
      console.log("request error", e);
      const err =
        e.response &&
        e.response.data &&
        e.response.data.error &&
        e.response.data.error.length > 0 &&
        e.response.data.error[0]
          ? e.response.data.error[0]
          : null;
      const errorName = err ? err.name : "";
      console.log("errorName", errorName);
      const preserveRequest = options;
      if (errorName === "invalid_token") {
        // AuthService.logout()
        //   .then(() => {
        // window.history.replaceState(null, null, '/#/login');
        //   window.history.go('/#/login');
        // })
        return refreshRequestToken(token.refreshToken)
          .then((data) => {
            const accessToken = data.data.accessToken;
            preserveRequest.headers.Authorization = `Bearer ${accessToken}`;
            console.log("new access token retrived successfully");
            console.log("new request created");
            return axios(preserveRequest);
          })
          .then((data) => {
            return Promise.resolve(data);
          })
          .catch((e) => {
            return Promise.reject(e);
          });
      }

      if (errorName !== "invalid_token") {
        return Promise.reject(e);
      }
    });
};
