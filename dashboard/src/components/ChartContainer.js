import React from 'react';
import { Paper, Typography } from '@mui/material';

const ChartContainer = ({ title, children }) => {
  return (
    <Paper elevation={3} sx={{ p: 2, height: 400 }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <div style={{ position: 'relative', height: '90%' }}>
        {children}
      </div>
    </Paper>
  );
};

export default ChartContainer;
