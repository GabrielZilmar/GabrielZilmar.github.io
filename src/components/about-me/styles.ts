import { Box, styled, Typography } from "@mui/material";

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
