import { Box, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";

export const InfoWrapper = styled(Box)({});

export const PhotoWrapper = styled(Box)(({ theme }) => ({
  width: "25rem",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

export const ProfilePhotoCard = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(6),
  },
}));

export const InfoTitle = styled(Typography)({
  fontWeight: 600,
});

export const InfoDescriptionWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1),
  width: "30rem",

  [theme.breakpoints.down("md")]: {
    width: "26rem",
  },

  [theme.breakpoints.down("sm")]: {
    width: "initial",
  },
}));

export const TechnologiesContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  fontWeight: 600,
}));

export const TechnologiesWrapper = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexWrap: "wrap",
    rowGap: theme.spacing(1),
  },
}));
