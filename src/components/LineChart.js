import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
       label: 'ventas',
       data:[5.0000,10.0,15.0,20.0,25.0],
      }
    ]
  };
  return (
   <Line data={data} options={{maintainAspectRatio: false,}}/>
  );
};

export default LineChart;
