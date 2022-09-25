import * as React from "react";
import { useRef, useState, useNavigate } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormHelperText,
  Button,
  CssBaseline,
  TextField,
  Box,
  Container,
  Alert,
  Snackbar,
} from "@mui/material";

import axios from "axios";

const theme = createTheme();

const SignIn = () => {
  const textRef = useRef([]);
  const [emailError, setEmailError] = useState("");
  const [loginError, setloginError] = useState(false);

  const navigate = useNavigate();

  const onhandlePost = async (email) => {
    await axios
      .post("/account/signIn", { email: email })
      .then((res) => {
        localStorage.setItem("Authorization", res.headers.authorization);
        navigate("/memu");
      })
      .catch(() => {
        setloginError(true);
      });
  };

  const handleSubmit = () => {
    const email = textRef.current.value;
    console.log(email);
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailRegex.test(email))
      setEmailError("올바른 이메일 형식이 아닙니다.");
    else setEmailError("");
    if (emailRegex.test(email)) {
      onhandlePost(email);
    }
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setloginError(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={loginError}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          사용자등록이 되어있지 않습니다. 관리자에게 문의해주세요.
        </Alert>
      </Snackbar>
      <Container component="main" maxWidth="xm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 40,
            marginBottom: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, width: 500 }}
          >
            <h1>Login</h1>
            <TextField
              className="login_email"
              margin="normal"
              fullWidth
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={emailError !== "" || false}
              inputRef={textRef}
            />
            <FormHelperText style={{ color: "#D32F2F" }}>
              {emailError}
            </FormHelperText>
            <Button
              fullWidth
              // type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, height: 50, background: "#3855B3" }}
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
