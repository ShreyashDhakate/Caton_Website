import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { diseaseStats } from '../data/data';

// Register components
ChartJS.register(ArcElement, Tooltip, Legend);

const DiseaseStatsChart = () => {
  const diseaseStatsData = {
    labels: diseaseStats.map(record => record.disease),
    datasets: [
      {
        label: 'Number of Cases',
        data: diseaseStats.map(record => record.count),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ]
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw}`;
          }
        }
      }
    }
  };

  return <Doughnut data={diseaseStatsData} options={chartOptions} />;
};

export default DiseaseStatsChart;
