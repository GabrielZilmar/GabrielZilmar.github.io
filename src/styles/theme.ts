import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      default: "#999999",
      paper: "#C4C4C4",
    },
    primary: {
      main: "#555555",
      light: "#333333",
      dark: "#111111",
    },
    secondary: {
      main: "#333333",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#ffd700",
    },
  },
  typography: {
    fontFamily: ["SofiaPro", "Roboto", "sans-serif"].join(","),
  },
  components: {
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          flexGrow: 0,
        },
      },
    },
  },
});
