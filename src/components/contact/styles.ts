import { Box, CardContent, styled, Typography } from "@mui/material";
import { theme } from "~/styles/theme";

export const ContactContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "grid",
  gap: theme.spacing(3),
}));

export const ContactIntro = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(1),
  maxWidth: "42rem",
}));

export const ContactWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: theme.spacing(2),

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const ContactTitle = styled(Typography)({
  fontWeight: 700,
  textAlign: "left",
  letterSpacing: "-0.04em",
});

export const ContactCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  minHeight: theme.spacing(14),
  padding: `${theme.spacing(2.5)} !important`,

  ":hover": {
    cursor: "pointer",
  },

  ".MuiTypography-root": {
    color: theme.palette.text.secondary,
    fontWeight: 700,
  },

  ".MuiSvgIcon-root": {
    color: theme.palette.secondary.main,
  },
}));

export const ContactMeta = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.75,
}));

export const ContactSectionLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  fontSize: "0.75rem",
  fontWeight: 800,
}));
