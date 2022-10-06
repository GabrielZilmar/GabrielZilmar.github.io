import { Box, styled, Typography } from "@mui/material";

export const AboutMeWrapper = styled(Box)(({ theme }) => ({
  width: "40rem",
}));

export const AboutMeTitle = styled(Typography)({
  fontWeight: 600,
});

export const AboutMeText = styled(Typography)(({ theme }) => ({
  "&:nth-of-type(1)": {
    marginTop: theme.spacing(6),

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(4),
    },
  },

  a: {
    color: theme.palette.text.secondary,
    textDecoration: "none",
  },
}));

export const WhatIWorkWithContainer = styled(Box)(({ theme }) => ({
  width: "100%",

  hr: {
    borderColor: theme.palette.text.secondary,
  },

  "& .MuiSvgIcon-root": {
    fontSize: theme.spacing(1.5),
    color: theme.palette.text.secondary,
  },
}));

export const WhatIWorkWithWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(6),
  },
}));

export const StacksContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: theme.spacing(1),
}));

export const StacksWrapper = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  marginTop: theme.spacing(1),
  display: "flex",
  flexDirection: "column",

  h6: {
    fontWeight: 600,
  },
}));
