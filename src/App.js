import MainPage from "./Views/MainPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
import SignIn from "./Views/SignIn";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: "red";
`;

const theme = createTheme({
  spacing: 1,

  palette: {
    // 배경 :  옅은 회색
    basis: {
      main: "#F8F8FA",
      contrastText: "#000000", /// 겅은색
      dark: "rgba(56, 85, 179, 0.04)", // 짙은 회색
    },

    // 컴포넌트 : 흰색
    component: {
      main: "#FFFFFF",
      contrastText: "#000000",
    },
  },
});

function App() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <SignIn />
      </ThemeProvider>
    </Container>
  );
}

export default App;
