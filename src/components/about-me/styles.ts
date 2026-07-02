import { Box, styled, Typography } from "@mui/material";

export const AboutMeWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "38rem",
  flex: "1 1 0",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const AboutSection = styled(Box)(({ theme }) => ({
  width: "100%",
  flex: "1 1 auto",
  minWidth: 0,
  display: "grid",
  gap: theme.spacing(4),
}));

export const AboutRow = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2),
}));

export const AboutMeTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  letterSpacing: "-0.03em",
}));

export const AboutMeText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.8,

  a: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    textDecoration: "none",
  },
}));

export const AboutPanel = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "grid",
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  borderRadius: "1.5rem",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  border: "1px solid rgba(148, 163, 184, 0.2)",
  boxShadow: "0 18px 48px rgba(15, 23, 42, 0.08)",
  backdropFilter: "blur(10px)",
}));

export const ExperienceGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(1.5),
}));

export const ExperienceCard = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(1),
  padding: theme.spacing(2.5),
  borderRadius: "1.35rem",
  backgroundColor: "rgba(248, 250, 252, 0.9)",
  border: "1px solid rgba(148, 163, 184, 0.18)",
  boxShadow: "0 14px 32px rgba(15, 23, 42, 0.06)",
}));

export const ExperienceHeader = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(0.5),
}));

export const ExperienceMeta = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1.25),
  color: theme.palette.text.secondary,
  fontSize: "0.92rem",
  fontWeight: 600,
}));

export const ExperienceBullets = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(0.75),

  p: {
    lineHeight: 1.7,
  },

  ".MuiSvgIcon-root": {
    fontSize: theme.spacing(1.5),
    color: theme.palette.secondary.main,
    marginRight: theme.spacing(0.75),
    verticalAlign: "middle",
  },
}));

export const WhatIWorkWithContainer = styled(Box)(({ theme }) => ({
  minWidth: 0,
  display: "grid",
  gap: theme.spacing(2),
}));

export const WhatIWorkWithWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2),
}));

export const StacksContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(2),

  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },
}));

export const StacksWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  borderRadius: "1.25rem",
  backgroundColor: "rgba(248, 250, 252, 0.9)",
  border: "1px solid rgba(148, 163, 184, 0.18)",

  h6: {
    fontWeight: 700,
    color: theme.palette.primary.main,
  },

  ".MuiSvgIcon-root": {
    fontSize: theme.spacing(1.5),
    color: theme.palette.secondary.main,
    marginRight: theme.spacing(0.75),
  },
}));

export const SectionLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  fontSize: "0.75rem",
  fontWeight: 800,
}));
