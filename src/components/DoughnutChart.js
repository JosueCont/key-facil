import React from "react";
import {Doughnut} from "react-chartjs-2";
import '../styles/Stadistics.css';

const DoughnutChart = () => {
  const data = {
    datasets: [
      {
        data: [50, 20, 30],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ],    
  };
  return (    
    <div className="cont-graphic">
      <Doughnut data={data}  />
    </div>
  );
};

export default DoughnutChart;
