import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useGetPriceHistoryQuery } from "../utils/API";
import { unix } from "moment";

chart.register(CategoryScale);

function LineChart(props) {
  const [timePeriod, setTimePeriod] = useState("3h");
  const [priceHistory, setPriceHistory] = useState(null);
  const { data, isError, error } = useGetPriceHistoryQuery(
    {id:props.id,
    timePeriod}
  );

  const timeLine = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];

  useEffect(() => {
    if (!data) return;
    setPriceHistory(data.data);
  }, [data]);

  if (isError) {
    return (
      <div className="error">
        <p className="error-text">{error.error}</p>
      </div>
    );
  }

  if (!priceHistory) return 'Loading....';

  const prices = [];
  const dates = [];

  priceHistory.history.forEach((item) => {
    prices.push(item.price);
    dates.push(unix(item.timestamp).format("YYYY-MM-DD"));
  });

  const lineChartData = {
    labels: dates,
    datasets: [
      {
        label: "Price in USD",
        data: prices,
        fill: {
          target: "origin",
          above: `rgba(0, 113, 189,.2)`,
        },
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
        tension: 0,
        pointRadius: 2,
      },
    ],
  };

  return (
    <div className="chart-box">
      <h4 className="coin-card-heading">
        Price History Chart
      </h4>
      <select onChange={(e) => setTimePeriod(e.target.value)}>
        {timeLine.map((val, i) => (
          <option key={i} value={val}>
            {val}
          </option>
        ))}
      </select>
      <Line
        data={lineChartData}
        options={{
          color: "#fff",
          scales: {
            xdescribe: {
              ticks: {
                color: "#fff",
                beginAtZero: true,
              },
            },
            ydescribe: {
              ticks: {
                color: "#fff",
                beginAtZero: true,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default LineChart;
