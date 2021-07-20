// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// import { Line } from "react-chartjs-2";

// import Utils from "react-chartjs-2";

// const DATA_COUNT = 7;
// const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

// const labels = Utils.months({count: 7});
// const data = {
//   labels: labels,

//   datasets: [
//     {
//       data: Utils.numbers(NUMBER_CFG),
//       borderColor: Utils.CHART_COLORS.red,
//       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
//     },
//     {
//       data: Utils.numbers(NUMBER_CFG),
//       borderColor: Utils.CHART_COLORS.blue,
//       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
//     }
//   ]
// };

// const config = {

//     options: {
//       responsive: true,
//       plugins: {
//         legend: {
//           position: 'top',
//         }, 
//         title: {
//           display: true,
//           text: 'Chart.js Line Chart'
//         }
//       }
//     },
//   };

// export default class BigChart extends Component {
//   render() {
//     return (
//       <div>
//         <Line ref="chart" options={config}  data={data} />
//       </div>
//     );
//   }
// }
