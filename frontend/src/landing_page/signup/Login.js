import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Container, Grid, TextField, Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Custom theme with primary color #057A85
const theme = createTheme({
  palette: {
    primary: {
      main: "#057A85",
    },
  },
});

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" sx={{ mt: 12, mb: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7} mt={10}>
            <img
              src="media/images/Signup.svg"
              alt="Login"
              style={{ width: "80%", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12} md={5} mt={10}>
            <div style={{ textAlign: "center" }}>
              <Typography variant="h4" color="textSecondary" gutterBottom>
                Login Account
              </Typography>
              <form onSubmit={handleSubmit}>
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
                  label="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  variant="outlined"
                  color="primary"
                  sx={{ mb: 2, borderColor: "#057A85" }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  sx={{ mt: 3, mb: 2, backgroundColor: "#057A85", '&:hover': { backgroundColor: "#046A75" } }}
                >
                  Submit
                </Button>
                <Typography variant="body2" color="textSecondary">
                  Create New Account <Link to="/signup">Signup</Link>
                </Typography>
              </form>
              <ToastContainer />
            </div>
          </Grid>
        </Grid>
      
      </Container>
    </ThemeProvider>
  );
};

export default Login;
