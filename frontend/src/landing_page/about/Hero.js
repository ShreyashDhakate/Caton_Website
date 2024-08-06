import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

function Hero() {
    return (
        <Container sx={{ mt: 12 }}>
            <Box sx={{ p: 5, mb: 5, backgroundColor: '#f5f5f5', borderRadius: 2, boxShadow: 1 }}>
                <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ lineHeight: "3rem" }}>
                    
                    Revolutionizing healthcare with technology.
                </Typography>
            </Box>
            <Grid container spacing={5}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ p: 4, backgroundColor: '#fff', borderRadius: 2, boxShadow: 1, flex: 1 }}>
                        <Typography variant="body1" paragraph>
                            At Caton, we are committed to transforming healthcare by minimizing waiting times and improving the patient experience. 
                            Our platform allows patients to see the current number of patients in hospitals, view booked appointments for specific doctors, 
                            and schedule meetings accordingly.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Doctors can manage their daily patient data and track disease trends through comprehensive graphs, helping them prepare for future situations.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our user-friendly system ensures patients have access to their medical history anytime, aiding both doctors and patients in achieving better health outcomes.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ p: 4, backgroundColor: '#fff', borderRadius: 2, boxShadow: 1, flex: 1 }}>
                        <Typography variant="body1" paragraph>
                            Caton is dedicated to enhancing healthcare convenience. Our technology streamlines hospital visits, ensuring no more crowded waiting rooms and optimized appointment scheduling.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We believe in the power of data and technology to revolutionize healthcare. Our platform provides insights into disease trends, helping healthcare providers stay ahead.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Stay updated with the latest advancements and updates from Caton. Explore our blog and see how we're making a difference in healthcare.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Hero;
