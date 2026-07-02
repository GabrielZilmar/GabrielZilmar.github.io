import { Box, Stack, styled, Typography } from "@mui/material";

export const InfoWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  maxWidth: "40rem",
  flex: 1,
}));

export const HeroEyebrow = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  fontWeight: 800,
  fontSize: "0.78rem",
}));

export const InfoTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  lineHeight: 0.95,
  letterSpacing: "-0.04em",
  color: theme.palette.primary.main,
}));

export const InfoDescriptionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  color: theme.palette.text.secondary,
  fontSize: "1.02rem",
  lineHeight: 1.75,
}));

export const HeroActions = styled(Stack)(({ theme }) => ({
  flexWrap: "wrap",
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(1),
}));

export const MetaPills = styled(Stack)(({ theme }) => ({
  flexWrap: "wrap",
  gap: theme.spacing(1),
}));

export const TechnologiesContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
}));

export const TechnologiesWrapper = styled(Stack)(({ theme }) => ({
  flexWrap: "wrap",
  rowGap: theme.spacing(1),
  columnGap: theme.spacing(1),
}));

export const PhotoWrapper = styled(Box)(({ theme }) => ({
  width: "27rem",
  display: "flex",
  justifyContent: "center",
  flexShrink: 0,

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const ProfilePhotoCard = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "27rem",
  aspectRatio: "1 / 1",
  borderRadius: "2rem",
  padding: theme.spacing(1.5),
  background:
    "linear-gradient(145deg, rgba(15, 23, 42, 0.96), rgba(37, 99, 235, 0.72))",
  boxShadow: "0 20px 60px rgba(15, 23, 42, 0.18)",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: theme.spacing(1),
    borderRadius: "1.45rem",
    border: "1px solid rgba(255, 255, 255, 0.14)",
    pointerEvents: "none",
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "1.5rem",
    display: "block",
  },
}));

export const HighlightCard = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(0.5),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  backgroundColor: "rgba(255, 255, 255, 0.72)",
  border: "1px solid rgba(148, 163, 184, 0.18)",
  boxShadow: "0 16px 40px rgba(15, 23, 42, 0.06)",
  backdropFilter: "blur(10px)",
}));

export const HighlightLabel = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  letterSpacing: "0.14em",
  fontSize: "0.72rem",
  fontWeight: 800,
  color: theme.palette.secondary.main,
}));

export const HighlightValue = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
}));
