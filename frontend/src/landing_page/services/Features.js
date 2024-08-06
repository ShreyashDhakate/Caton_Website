import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import { styled } from '@mui/system';

const services = [
  {
    title: 'Appointment Booking',
    description: 'Easily book appointments with your preferred doctors and avoid long waiting lines in hospitals.',
    image: '/media/images/Appointment.jpg', // Fixed path notation
  },
  {
    title: 'Medical History Management',
    description: 'Track your medical data even for small injuries throughout your life, ensuring all your medical history is securely stored and easily accessible.',
    image: '/media/images/data.jpg', // Fixed path notation
  },
  {
    title: 'Doctor Collaboration',
    description: 'Facilitate seamless collaboration between doctors and hospitals to enhance healthcare delivery and improve patient care.',
    image: '/media/images/Doctors.jpg', // Fixed path notation
  },
  {
    title: 'Enhanced Data Security',
    description: 'Ensure that patient data is protected with advanced security measures to maintain confidentiality and compliance.',
    image: '/media/images/Security.jpg', // Fixed path notation
  },
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your specific healthcare needs, ensuring seamless integration and functionality.',
    image: '/media/images/software.jpg', // Fixed path notation
  },
  {
    title: 'Desktop App Maintenance',
    description: 'Comprehensive maintenance services for desktop applications to ensure they remain up-to-date and perform optimally.',
    image: '/media/images/maintenace.jpg', // Fixed path notation
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: '#057A85',
  },
}));

const Features = () => (
  <Container>
    <Typography variant="h4" align="center" gutterBottom>
      Our Services
    </Typography>
    <Grid container spacing={4}>
      {services.map((service, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Box display="flex" height="100%">
            <StyledCard>
              <CardMedia
                component="img"
                alt={service.title}
                height="200"
                image={service.image}
                title={service.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </StyledCard>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Features;
