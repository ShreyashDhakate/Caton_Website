import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

// Define styled components
const HeroSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '60vh',
  backgroundImage: 'url(/media/images/services-hero.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  textAlign: 'center',
  padding: theme.spacing(4),
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '3rem',
  marginBottom: theme.spacing(2),
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  marginBottom: theme.spacing(3),
}));

const HeroButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#057A85',
  color: '#fff',
  padding: theme.spacing(1.5, 4),
  '&:hover': {
    backgroundColor: '#045c6e',
  },
}));

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroTitle variant="h1">Welcome to Caton Healthcare</HeroTitle>
        <HeroSubtitle variant="h4">
          Your gateway to streamlined healthcare services and improved patient care.
        </HeroSubtitle>
        <HeroButton variant="contained">Signup now</HeroButton>
      </Container>
    </HeroSection>
  );
};

export default Hero;
