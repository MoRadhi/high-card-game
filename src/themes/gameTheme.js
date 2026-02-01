import { createTheme } from "@mui/material/styles";

export const gameTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#b388ff" }, // Light Purple
    secondary: { main: "#ffeb3b" }, // Neon Yellow
    background: {
      default: "#12002b", // Deep Purple background
      paper: "#1a0b2e", // Card surface
    },
  },
  typography: {
    fontFamily: "'Roboto Mono', monospace",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid #2d1b4d",
        },
      },
    },
  },
});
