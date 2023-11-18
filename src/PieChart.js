import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
  
  const pieData = data && data.length > 0 ? {
    labels: data.map(item => item.timestamp),
    datasets: [
      {
        data: data.map(item => item.timestamp),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  } : null;

  return pieData && <Pie data={pieData} />;
};

export default PieChart;