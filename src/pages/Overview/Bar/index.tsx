import React from "react";
import {
  Chart,
  ArcElement,
  DoughnutController,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(
  ArcElement,
  DoughnutController,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

const BarChart = ({ barData }: any) => {
  const labels = barData.map((item: any) => {
    return item.label;
  });
  const number = barData.map((item: any) => {
    return item.number;
  });
//   console.log("labels:", labels);
//   console.log("number:", number);

  const data = {
    labels: labels,
    datasets: [
      {
        labels: "All Data",
        data: number,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return <Doughnut data={data} />;
};

export default BarChart;
