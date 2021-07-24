import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const lineChartData = {
  data: {
    lineTension: 3,

    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "A",
        yAxesID: "A",
        data: [0, 8, 6, 14, 8, 0],
        borderColor: "tomato",
      },
      {
        label: "B",
        yAxesID: "B",
        data: [0, 5, 3, 7, 12, 0],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            beginAtZero: true,
          },
        },
        {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
};

export default class DoubleLineChart extends Component {
  render() {
    return (
      <div>
        <Line
          data={lineChartData.data}
          options={lineChartData.options}
          height={220}
          width={600}
          options={{ maintainAspectRatio: true }}
        />
      </div>
    );
  }
}
