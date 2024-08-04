import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import './MedicalHistoryTable.css';

const MedicalHistoryTable = ({ medicalHistory }) => {
  console.log('Medical history received:', medicalHistory);
  if (!medicalHistory || medicalHistory.length === 0) {
    return <div className="no-data">No patient data available</div>;
  }

  return (
    <TableContainer component={Paper} className="medical-history-container" sx={{ backgroundColor: '#E7F0DC' }}>
      <Table>
        <TableHead sx={{ backgroundColor: '#507A85', color: '#fff' }}>
          <TableRow>
            <TableCell sx={{ color: '#fff' }}>Appointment ID</TableCell>
            <TableCell sx={{ color: '#fff' }}>Disease Name</TableCell>
            <TableCell sx={{ color: '#fff' }}>Date Checked</TableCell>
            <TableCell sx={{ color: '#fff' }}>Checked By</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {medicalHistory.map((record, index) => (
            <TableRow key={index}>
              <TableCell sx={{ borderColor: '#507A85' }}>{record._id}</TableCell>
              <TableCell sx={{ borderColor: '#507A85' }}>{record.reason}</TableCell>
              <TableCell sx={{ borderColor: '#507A85' }}>{record.appointment_date}</TableCell>
              <TableCell sx={{ borderColor: '#507A85' }}>{record.doctor_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MedicalHistoryTable;
