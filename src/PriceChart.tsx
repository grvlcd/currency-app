import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";

Chart.register(LineController, LineElement, PointElement, LinearScale, Title);

interface PriceChartProps {
  history: number[];
}

const PriceChart: React.FC<PriceChartProps> = ({ history }) => {
  const data = {
    labels: history.map((_, index) => index),
    datasets: [
      {
        label: "Price History",
        data: history,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return <Line data={data} />;
};

export default PriceChart;
