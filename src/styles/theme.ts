import { createTheme } from "@mui/material";

export const EXTRA_SMALL_BREAKPOINT = 320;

export const theme = createTheme({
  palette: {
    background: {
      default: "#21252b",
      paper: "#3d4550",
    },
    primary: {
      main: "#21252b",
      light: "#21252b",
      dark: "#111111",
    },
    secondary: {
      main: "#333333",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#2b4eff",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
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
