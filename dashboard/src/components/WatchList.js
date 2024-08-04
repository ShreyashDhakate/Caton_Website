import React, { useState, useEffect } from "react";
import WatchListItem from "./WatchListItem"; // Make sure the path is correct
import { Link } from "react-router-dom";
import axios from 'axios';
import { Container, TextField, Typography, List, ListItem, ListItemText, Paper, Box } from "@mui/material";
import "./WatchList.css";

const WatchList = ({ setSelectedPatient }) => {
  const [allPatients, setAllPatients] = useState([]);

  useEffect(() => {
    axios.get("https://caton-website.onrender.com/allPatients").then((res) => {
      setAllPatients(res.data);
    });
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
      </Paper>
    </Container>
  );
};

export default WatchList;
