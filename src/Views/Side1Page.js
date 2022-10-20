import { useRef, useState, useEffect } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Container,
  Alert,
  Snackbar,
} from "@mui/material";

import axios from "../utils/axios";
import { useDispatch } from "react-redux";
import { setData } from "../redux/reducers/AuthReducer";
import { useSelector } from "react-redux";

const theme = createTheme();

const Side1Page = () => {
  const textRef = useRef([]);
  const [emailError, setEmailError] = useState("");
  const [loginError, setloginError] = useState(false);
  const dispatch = useDispatch();

  const onhandlePost = async (ip) => {
    await axios
      .post("/wrk_inform/wrkData", null, { params: { ip: ip } })
      .then((res) => {
        console.log(res);
        dispatch(setData(res));
      })
      .catch(() => {
        setloginError(true);
      });
  };

  const handleSubmit = () => {
    const ip = textRef.current.value;
    onhandlePost(ip);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setloginError(false);
  };

  const data = useSelector((state) => state.Auth.data);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <ThemeProvider theme={theme}>
      {/* <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={loginError}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          사용자등록이 되어있지 않습니다. 관리자에게 문의해주세요.
        </Alert>
      </Snackbar> */}
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
            sx={{ mt: 1, width: 500 }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          >
            <h1>IP를 입력해주세요</h1>
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
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, height: 50, background: "#3855B3" }}
              onClick={handleSubmit}
            >
              입력
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Side1Page;
