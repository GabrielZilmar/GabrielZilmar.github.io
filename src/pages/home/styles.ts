import { Box, Container, styled, Typography } from "@mui/material";
import Image from "next/image";

export const HomeContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: theme.spacing(1.5),
  height: `calc(100vh - ${theme.spacing(8)})`,
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

export const InfoWrapper = styled(Box)({});

export const PhotoWrapper = styled(Box)({
  width: "25rem",
});

export const ProfilePhotoCard = styled(Image)(({ theme }) => ({
  borderRadius: "50%",
}));

export const InfoTitle = styled(Typography)({
  fontWeight: 600,
});

export const InfoDescriptionWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1),
  width: "30rem",
}));

export const TechnologiesWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  fontWeight: 600,
}));
