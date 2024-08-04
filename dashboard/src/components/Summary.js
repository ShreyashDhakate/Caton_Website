import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";
import MedicalHistoryTable from "./MedHistory";
import Welcome from "./WelcomeDashboard";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Divider, Paper, Box } from "@mui/material";

const Summary = ({ patient }) => {
  const [patientAppointments, setPatientAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      if (patient && patient._id) {
        setPatientAppointments([]); // Clear previous appointments
        try {
          const response = await axios.get(`http://localhost:3002/allAppointments/${patient._id}`);
          setPatientAppointments(response.data);
        } catch (error) {
          console.error("There was an error fetching the appointments!", error);
        }
      }
    };

    fetchAppointments();
  }, [patient]); // Runs whenever `patient` changes

  // Check if patient is undefined or null
  if (!patient) {
    return (
      <Container>
        <Welcome />
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Patient Summary
      </Typography>
      <Divider />

      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <ProfileCard profilePatient={patient} />
      </Paper>
      
      <Divider sx={{ marginY: 2 }} />

      <Box display="flex" justifyContent="center" mb={2}>
        <Link to={`/newAppointment/${patient._id}`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" style={{ backgroundColor: "#057A85" }}>
            Add New Appointment
          </Button>
        </Link>
      </Box>
      
      <Divider sx={{ marginY: 2 }} />

      <Typography variant="body1">
        Previous Appointments ({patientAppointments.length || "0"})
      </Typography>
      <MedicalHistoryTable medicalHistory={patientAppointments} />
    </Container>
  );
};

export default Summary;
