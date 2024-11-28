import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ data }) => {
    console.log('data', data)
  const chartData = {
    labels: data?.map(item => item.category),
    datasets: [{
      data: data?.map(item => item.amount),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    }]
  };

  return <Pie data={chartData} />;
};

export default Chart;
