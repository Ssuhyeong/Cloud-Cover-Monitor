import { BrowserRouter as Router } from "react-router-dom";
import RenderRoutes from "./routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";

const theme = createTheme({
  spacing: 1,

  palette: {
    primary: {
      main: "#3855B3",
      contrastText: "#fff",
    },

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
const App = () => {  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <RenderRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
