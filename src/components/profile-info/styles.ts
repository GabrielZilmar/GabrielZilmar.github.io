import { Box, Container, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";

export const ProfileInfoContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: theme.spacing(1.5),
  height: `calc(100vh - ${theme.spacing(8)})`,
  alignItems: "center",
  border: "1px solid red",

  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
    height: `calc(100vh - ${theme.spacing(7)})`,
  },
}));

export const InfoWrapper = styled(Box)({});

export const PhotoWrapper = styled(Box)(({ theme }) => ({
  width: "25rem",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

export const ProfilePhotoCard = styled(Image)(({ theme }) => ({
  borderRadius: "50%",
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
