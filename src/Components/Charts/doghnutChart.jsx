import React, {Component} from "react";
import {Doughnut} from "react-chartjs-2";

const data = {
    datasets: [
        {
            label: "My First Dataset",
            data: [200, 120, 40],
            backgroundColor: [
                "rgb(255, 94, 21)",
                "rgb(33, 162, 255)",
                "rgb(255, 199, 0)",
            ],
            hoverOffset: 4,
        },
    ],
};


// doughnutCoefficient:0.6

export default class ChartDoughnut extends Component {
    render() {
        return (
            <div>
                <Doughnut
                    ref="chart"
                    data={data}
                    style={{width: 220, height: 220, margin: "40px 0"}}
                />
            </div>
        );
    }
}
