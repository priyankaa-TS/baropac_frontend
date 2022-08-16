import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class HorizontalBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        xaxis: {
          categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },

        chart: {
          sparkline: {
            enabled: true,
          },
        },
      },
      series: [
        {
          data: [30, 40, 25, 50, 49, 21, 70, 51],
        },
      ],

      options2: {
        chart: {
          toolbar: {
            show: false,
          },
        },

        colors: ["#00C3EE", "#6200EE", "#E40F0F", "#29D90D"],
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            distributed: true,
            horizontal: true,
          },
        },
        xaxis: {
          categories: [
            "Daily BP Count",
            "Daily Weight",
            "Inactive Patient",
            "Total Patient",
          ],
          labels: {
            formatter: function(val) {
              return Math.abs(Math.round(val)) + "%";
            },
          },
        },
        tooltip: {
          shared: false,
          x: {
            formatter: function(val) {
              return val;
            },
          },
          y: {
            formatter: function(val) {
              return Math.abs(val) + "%";
            },
          },
        },
      },
      series2: [
        {
          data: [30, 40, 25, 50],
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {/* <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="100%"
        /> */}
        <Chart
          options={this.state.options2}
          series={this.state.series2}
          type="bar"
          width="100%"
          height="300"
        />
      </div>
    );
  }
}
