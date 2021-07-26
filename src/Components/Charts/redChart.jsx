import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["", "", "", "", "", "", ""],
  datasets: [
    {
      //   label: "My First dataset",

      lineTension: 0.4,
      borderColor: "tomato",

      pointRadius: 2,

      borderWidth: 2,
      data: [9, 15, 6, 11, 4.8, 9.2, 2.9],
    },
  ],
};
const options = {
  
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    xAxes: { display: false },
    yAxes: { display: false },
  },
};

export default class LineChart extends Component {
  render() {
    return (
      <div >
        <Line ref="chart" options={options} data={data} width="160px" height="100px" />
      </div>
    );
  }
}
