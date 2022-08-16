import React, { Component } from "react";
import Chart from "react-apexcharts";

import { Pie } from "react-chartjs-2";

// const data = {
//   labels: ["Cars", "Trains", "Airplanes"],
//   legend: {
//     position: "bottom",
//   },
//   datasets: [
//     {
//       data: [300, 50, 100],
//       backgroundColor: ["#8dace7", "#71deb9", "#ef869e"],
//       hoverBackgroundColor: ["#8dace7", "#71deb9", "#ef869e"],
//     },
//   ],
// };

export default class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options4: {
        chart: {
          id: "apexchart-example-2",
        },
        legend: {
          show: true,
          position: "bottom",
        },
        colors: ["#6200EE", "#26A69A", "#EE6002", "#FFC107"],
        labels: ["Active", "Daily B.P", "Daily Weight", "Pending"],
      },
      series4: [44, 55, 41, 17],
    };
  }
  render() {
    return (
      <div>
        <Chart
          options={this.state.options4}
          series={this.state.series4}
          type="pie"
          width="50%"
        />
      </div>
    );
  }
}
