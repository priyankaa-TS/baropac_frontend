import React, { Component } from "react";
import { request } from "./Request";

export default class DashboardServices {
  static getVideoUrl() {
    return request(
      "GET",
      `${API_URL}${dashBoardRoutes.VIDEO_URL}`,
      null,
      null,
      null
    );
  }
}
