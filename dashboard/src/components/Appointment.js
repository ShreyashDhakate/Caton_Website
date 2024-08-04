import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, Grid, Paper, CircularProgress } from '@mui/material';

const AppointmentForm = () => {
  const { patientId } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState(null);
  const [doctorId, setDoctorId] = useState('');
  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Add state for loading

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/patients/${patientId}`);
        setPatient(response.data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatientData();
  }, [patientId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newAppointment = {
        patient_id: patientId,
        doctor_id: doctorId,
        date,
        reason,
      };

      setLoading(true); // Start loading

      const response = await axios.post('http://localhost:3002/appointments', newAppointment);
      
      console.log('Appointment created:', response.data);
      setDoctorId('');
      setDate('');
      setReason('');
      setMessage('Appointment created successfully!');

      // Redirect to home page after 2 seconds
      setTimeout(() => {
        setLoading(false); // Stop loading
        navigate('/');
      }, 2000); // 2000 milliseconds = 2 seconds
    } catch (error) {
      console.error('Error creating appointment:', error);
      setLoading(false); // Stop loading on error
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 3, mt: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Appointment Form
        </Typography>
        {patient && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" component="h3">
              Patient Information
            </Typography>
            <Typography variant="body1">
              <strong>Name:</strong> {patient.name}
            </Typography>
          </Box>
        )}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Doctor ID"
                variant="outlined"
                id="doctorId"
                value={doctorId}
                onChange={(e) => setDoctorId(e.target.value)}
                required
                InputLabelProps={{
                  sx: {
                    color: '#507A85', // default label color
                    '&.Mui-focused': {
                      color: '#057A85', // label color when focused
                    },
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#ccc', // default border color
                    },
                    '&:hover fieldset': {
                      borderColor: '#507A85', // border color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#507A85', // border color when focused
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Date"
                variant="outlined"
                type="datetime-local"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                InputLabelProps={{
                  sx: {
                    color: '#507A85', // default label color
                    '&.Mui-focused': {
                      color: '#057A85', // label color when focused
                    },
                    shrink: true, // Ensures the label remains in place when focused
                  },
                }}
                InputProps={{
                  sx: {
                    '& input': {
                      color: '#057A85', // input text color
                    },
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#ccc', // default border color
                    },
                    '&:hover fieldset': {
                      borderColor: '#507A85', // border color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#507A85', // border color when focused
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Reason"
                variant="outlined"
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
                InputLabelProps={{
                  sx: {
                    color: '#507A85', // default label color
                    '&.Mui-focused': {
                      color: '#057A85', // label color when focused
                    },
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#ccc', // default border color
                    },
                    '&:hover fieldset': {
                      borderColor: '#507A85', // border color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#507A85', // border color when focused
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ backgroundColor: '#057A85', '&:hover': { backgroundColor: '#045A6E' } }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <CircularProgress color="primary" style={{backgroundColor:'#57A85'}}/>
          </Box>
        )}
        {message && (
          <Typography variant="body1" sx={{ mt: 2, color: 'success.main' }}>
            {message}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default AppointmentForm;
