import { Box, styled, Typography, CardContent } from "@mui/material";
import { theme } from "~/styles/theme";

export const ContactContainer = styled(Box)(({ theme }) => ({
  width: "100%",
}));

export const ContactWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  gap: theme.spacing(2.5),
}));

export const ContactTitle = styled(Typography)({
  fontWeight: 600,
  textAlign: "center",
  letterSpacing: theme.spacing(1.2),

  [theme.breakpoints.down("sm")]: {
    letterSpacing: theme.spacing(1),
    fontSize: theme.spacing(5),
  },
});

export const ContactCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  width: theme.spacing(42),

  ":hover": {
    cursor: "pointer",
  },

  ".MuiTypography-root": {
    color: theme.palette.text.secondary,
    fontWeight: 600,
  },
}));
