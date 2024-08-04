import React, { useState, useEffect } from "react";
import WatchListItem from "./WatchListItem"; // Make sure the path is correct
import { Link } from "react-router-dom";
import axios from 'axios';
import { Container, TextField, Typography, List, ListItem, ListItemText, Paper, Box, CircularProgress } from "@mui/material";
import "./WatchList.css";

const WatchList = ({ setSelectedPatient }) => {
  const [allPatients, setAllPatients] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("https://caton-website.onrender.com/allPatients");
        setAllPatients(response.data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    fetchPatients();
  }, []);

  return (
    <Container maxWidth="md" className="watchlist-container">
      <Paper elevation={3} sx={{ padding: 2, mb: 3 }}>
        <Box className="search-container" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Search Patients by age, name or condition..."
            id="search"
            className="search"
            fullWidth
          />
          <Typography variant="body2" sx={{ ml: 2 }}>
            {allPatients.length}
          </Typography>
        </Box>

        {loading ? ( // Show the loading spinner while loading
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
            <CircularProgress />
          </Box>
        ) : (
          <List className="list">
            {allPatients.map((patient, index) => (
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                key={index}
              >
                <ListItem button onClick={() => setSelectedPatient(patient)}>
                  <ListItemText primary={patient.name} secondary={`Age: ${patient.age} | Condition: ${patient.condition}`} />
                </ListItem>
              </Link>
            ))}
          </List>
        )}
      </Paper>
    </Container>
  );
};

export default WatchList;

