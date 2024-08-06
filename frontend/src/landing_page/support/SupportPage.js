import React from 'react';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Hero from './Hero';

// Define styled components
const SupportSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const SupportTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#057A85',
    },
    '&:hover fieldset': {
      borderColor: '#057A85',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#057A85',
    },
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#057A85',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#045c6e',
  },
}));

const SupportPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log("Support form submitted");
  };

  return (
    <SupportSection>
      <Container>
        <SupportTitle mt={10} variant="h4" align="center">
          Support & Contact Us
        </SupportTitle>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              How Can We Help You?
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions or need support, please fill out the form below and we will get back to you as soon as possible.
            </Typography>
            <FormContainer component="form" onSubmit={handleSubmit}>
              <CustomTextField
                label="Name"
                variant="outlined"
                fullWidth
                required
              />
              <CustomTextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
              />
              <CustomTextField
                label="Subject"
                variant="outlined"
                fullWidth
                required
              />
              <CustomTextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={6}
                required
              />
              <CustomButton
                type="submit"
                variant="contained"
              >
                Send Message
              </CustomButton>
            </FormContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Other Support Options
            </Typography>
            <Typography variant="body1" paragraph>
              For immediate assistance, you can reach us via the following methods:
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Email:</strong> catonhealthcare@gmail.com
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Phone:</strong> +1-800-123-4567
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Address:</strong> 123 Healthcare Lane, City, State, 12345
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </SupportSection>
  );
};

export default SupportPage;
