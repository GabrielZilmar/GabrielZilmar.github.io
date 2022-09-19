import { Box, CardMedia, Container, styled, Typography } from "@mui/material";
import Image from "next/image";

export const HomeContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: theme.spacing(1.5),

  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

export const InfoWrapper = styled(Box)({
  border: "1px solid blue",
});

export const PhotoWrapper = styled(Box)({
  border: "1px solid green",
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
