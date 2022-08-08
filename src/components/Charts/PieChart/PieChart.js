import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Cars", "Trains", "Airplanes"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#8dace7", "#71deb9", "#ef869e"],
      hoverBackgroundColor: ["#8dace7", "#71deb9", "#ef869e"],
    },
  ],
};

export default class PieChart extends Component {
  render() {
    return (
      <div>
        <Pie dataKey="value" data={data} />
      </div>
    );
  }
}
