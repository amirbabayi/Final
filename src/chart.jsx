import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Line } from "react-chartjs-2";

import Grid from "@material-ui/core/Grid";

const data = {
  labels: ["", "", "", "", "", "", "", ""],
  datasets: [
    {
      label: "",
      fill: true,
      //   lineTension: 0.1, kham
      backgroundColor: "rgba(255, 198, 0,0.2)",
      borderColor: "rgba(255, 198, 4)",
      pointRadius: 0,
      borderWidth: 2,
      data: [2.4, 3, 2.7, 3.5, 3.3, 4.6, 4.4, 3.7],
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

export default class LineDemo extends Component {
  render() {
    return (
      <Grid item>
        <Line ref="chart" options={options} data={data}  width="347px" height="105px" />
      </Grid>
    );
  }

  //   componentDidMount() {
  //     const { datasets } = this.refs.chart.chartInstance.data
  //     console.log(datasets[0].data);
  //   }
}
