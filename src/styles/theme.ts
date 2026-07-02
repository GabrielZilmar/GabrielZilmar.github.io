import { createTheme } from "@mui/material";

export const EXTRA_SMALL_BREAKPOINT = 320;

export const theme = createTheme({
  palette: {
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
    primary: {
      main: "#0f172a",
      light: "#1d4ed8",
      dark: "#020617",
    },
    secondary: {
      main: "#2563eb",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#0f172a",
      secondary: "#475569",
    },
  },
  typography: {
    fontFamily: ["Manrope", "sans-serif"].join(","),
    h1: {
      fontFamily: ["Space Grotesk", "sans-serif"].join(","),
      fontWeight: 700,
    },
    h2: {
      fontFamily: ["Space Grotesk", "sans-serif"].join(","),
      fontWeight: 700,
    },
    h3: {
      fontFamily: ["Space Grotesk", "sans-serif"].join(","),
      fontWeight: 700,
    },
    h4: {
      fontFamily: ["Space Grotesk", "sans-serif"].join(","),
      fontWeight: 700,
    },
    h5: {
      fontFamily: ["Space Grotesk", "sans-serif"].join(","),
      fontWeight: 700,
    },
    h6: {
      fontFamily: ["Space Grotesk", "sans-serif"].join(","),
      fontWeight: 600,
    },
  },
  components: {
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          flexGrow: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 999,
          fontWeight: 700,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 700,
        },
      },
    },
  },
});
