import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4F46E5",
    },
    secondary: {
      main: "#06B6D4",
    },
    background: {
      default: "#0F172A",
      paper: "rgba(255,255,255,0.06)",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#94A3B8",
    },
  },

  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 18,
  },
});

export default theme;
