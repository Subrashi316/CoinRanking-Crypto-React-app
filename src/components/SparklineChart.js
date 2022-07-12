import React from "react";
import { Line } from "react-chartjs-2";
import chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

chart.register(CategoryScale);

function SparklineChart(props) {
  const color = +props.change < 0 ? "rgb(235, 10, 37)" : "rgb(0, 176, 83)";
  const fillColor =
    +props.change < 0 ? "rgba(235, 10, 37,.5)" : "rgba(0, 176, 83,.2)";

  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
      {
        label: `${+props.change >0 ? '+'+props.change: props.change}`,
        backgroundColor: color,
        borderColor: color,
        data: props.data,
        tension: 0.4,
        pointRadius: 0,
        fill: {
          target: "origin",
          above: fillColor,
        },
      },
    ],
  };

  const options = {
    color:'#fff',
    scales: {
      xdescribe: {
        display: false,
      },
      ydescribe: {
        display: false,
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        labels: {
          boxHeight: 0,
          boxWidth: 0,
          font: {
            size: 20,
          },
          color: color,
        },
        title:{
            display:true,
            text:'Past 7 days Change Sparkline'
        }
      },
    },
  };

  return <Line datasetIdKey={"id"} data={data} options={options} />;
}

export default SparklineChart;
