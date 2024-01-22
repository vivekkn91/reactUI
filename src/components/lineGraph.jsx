import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineGraph = () => {
  const chartRef = useRef(null);

  const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  const yValues = [55, 49, 44, 24, 15];
  const lineColor = "purple";

  useEffect(() => {
    const ctx = document.getElementById("lineChart").getContext("2d");

    // Destroy the previous Chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new Chart instance for a line graph
    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            borderColor: lineColor,
            borderWidth: 2,
            pointBackgroundColor: lineColor,
            data: yValues,
          },
        ],
      },
    });

    // Clean up the Chart instance on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [xValues, yValues, lineColor]);

  return (
    <div className="card p-10 bg-white rounded-lg shadow-md m-5">
      <canvas id="lineChart" width="400" height="200"></canvas>
    </div>
  );
};

export default LineGraph;
