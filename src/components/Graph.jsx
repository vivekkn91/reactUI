import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Graph = () => {
  const chartRef = useRef(null);

  const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  const yValues = [55, 49, 44, 24, 15];
  const barColors = ["red", "green", "blue", "orange", "brown"];

  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");

    // Destroy the previous Chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new Chart instance
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: barColors,
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
  }, [xValues, yValues, barColors]);

  return (
    <div className="card p-10 bg-white rounded-lg shadow-md m-5">
      <canvas id="myChart" width="400" height="200"></canvas>
    </div>
  );
};

export default Graph;
