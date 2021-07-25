import React, {Component} from "react";
import {Line} from "react-chartjs-2";

const lineChartData = {
    data: {

        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
            {
                label: "A",
                yAxesID: "A",
                data: [0, 8, 6, 14, 8, 0],
                fill: '+1',
                pointRadius: 0,
                borderColor: "#ebb00e",
                lineTension: 1,
                backgroundColor: 'rgb(252,241,204,.3)',

            },
            {
                label: "B",
                yAxesID: "B",
                data: [0, 5, 3, 7, 12, 0],
                fill: '+1',
                pointRadius: 0,
                borderColor: "#0ea8eb",
                lineTension: 1,
                backgroundColor: 'rgb(204,235,252,.3)',


            },

        ]
        ,
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
                    height={260}
                    width={600}
                />
            </div>
        );
    }
}
