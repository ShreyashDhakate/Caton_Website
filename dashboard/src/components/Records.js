import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, BarElement, Tooltip, Legend } from 'chart.js';
import { dailyVisits, diseaseStats } from '../data/data';

// Registering the components
ChartJS.register(CategoryScale, LinearScale, ArcElement, BarElement, Tooltip, Legend);

const Records = () => {
  const dailyVisitsData = {
    labels: dailyVisits.map(record => record.date),
    datasets: [
      {
        label: 'Number of Patients',
        data: dailyVisits.map(record => record.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

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

  // Chart options
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

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Doctor's Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2, height: 400 }}>
            <Typography variant="h6" gutterBottom>
              Daily Visits
            </Typography>
            <div style={{ position: 'relative', height: '90%' }}>
              <Bar data={dailyVisitsData} options={chartOptions} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} mt={12}>
          <Paper elevation={3} sx={{ p: 2, height: 400 }}>
            <Typography variant="h6" gutterBottom>
              Disease Statistics
            </Typography>
            <div style={{ position: 'relative', height: '90%' }}>
              <Doughnut data={diseaseStatsData} options={chartOptions} />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Records;
