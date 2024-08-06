import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
import { Container, Grid, TextField, Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Custom theme with primary color #057A85
const theme = createTheme({
  palette: {
    primary: {
      main: "#057A85",
    },
  },
});

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    otp: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { email, username, otp, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) => {
    toast.error(
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ErrorIcon style={{ marginRight: '8px' }} />
        {err}
      </div>,
      {
        position: "bottom-left",
      }
    );
  };

  const handleSuccess = (msg) => {
    toast.success(
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CheckCircleIcon style={{ marginRight: '8px' }} />
        {msg}
      </div>,
      {
        position: "bottom-right",
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (step === 1) {
        const { data } = await axios.post(
          "http://localhost:3002/signup",
          {
            email,
            username,
          },
          { withCredentials: true }
        );

        const { success, message } = data;
        if (success) {
          handleSuccess(message);
          setStep(2);
        } else {
          handleError(message);
        }
      } else {
        const { data } = await axios.post(
          "http://localhost:3002/verify-otp",
          {
            email,
            otp,
            password,
          },
          { withCredentials: true }
        );

        const { success, message } = data;
        if (success) {
          handleSuccess(message);
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        } else {
          handleError(message);
        }
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" sx={{ mt: 12, mb: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7} mt={10}>
            <img
              src="media/images/Signup.svg"
              alt="Signup"
              style={{ width: "80%", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12} md={5} mt={10}>
            <div style={{ textAlign: "center" }}>
              <Typography variant="h4" color="textSecondary" gutterBottom>
                {step === 1 ? "Enter your email and username" : "Verify OTP and set password"}
              </Typography>
              <form onSubmit={handleSubmit}>
                {step === 1 ? (
                  <>
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleOnChange}
                      variant="outlined"
                      color="primary"
                      sx={{ mb: 2, borderColor: "#057A85" }}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Username"
                      type="text"
                      name="username"
                      value={username}
                      onChange={handleOnChange}
                      variant="outlined"
                      color="primary"
                      sx={{ mb: 2, borderColor: "#057A85" }}
                    />
                  </>
                ) : (
                  <>
                    <TextField
                      fullWidth
                      margin="normal"
                      label="OTP"
                      type="text"
                      name="otp"
                      value={otp}
                      onChange={handleOnChange}
                      variant="outlined"
                      color="primary"
                      sx={{ mb: 2, borderColor: "#057A85" }}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleOnChange}
                      variant="outlined"
                      color="primary"
                      sx={{ mb: 2, borderColor: "#057A85" }}
                    />
                  </>
                )}
                {errorMessage && (
                  <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                    {errorMessage}
                  </Typography>
                )}
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  sx={{ mt: 3, mb: 2, backgroundColor: "#057A85", '&:hover': { backgroundColor: "#046A75" } }}
                >
                  {step === 1 ? "Send OTP" : "Verify OTP"}
                </Button>
              </form>
              <ToastContainer />
            </div>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Signup;
