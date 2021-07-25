import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Bar } from "react-chartjs-2";


const data = {
    labels: ["", "", "", "", "", "", "", "",""],
    datasets: [{
    label: 'My First Dataset',
    data: [65, 38, 45, 13, 3, 21, 29,74],
    backgroundColor: [
      'rgba(146, 19, 253)'
    ],
    
    borderWidth: 1
  }]
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

export default class ChartBar2 extends Component {
  render() {
    return (
      <div>
        <Bar ref="chart" options={options}  data={data} height="290px" />
      </div>
    );
  }
}
