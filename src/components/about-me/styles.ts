import { Box, Container, styled, Typography } from "@mui/material";

export const AboutMeContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  height: `calc(100vh - ${theme.spacing(8)})`,
  border: "1px solid red",

  padding: theme.spacing(12),
}));

export const AboutMeWrapper = styled(Box)(({ theme }) => ({
  border: "1px solid blue",
  width: theme.spacing(40),

  [theme.breakpoints.down("sm")]: {
    width: theme.spacing(20),
  },
}));

export const AboutMeTitle = styled(Typography)({
  fontWeight: 600,
});

export const AboutMeText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(6),
}));
