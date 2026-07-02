import { Container, styled } from "@mui/material";

export const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: theme.spacing(6),
  minHeight: `calc(100vh - ${theme.spacing(8)})`,
  alignItems: "center",
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  position: "relative",

  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
    minHeight: "auto",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
}));

export const StyledContainerCenter = styled(StyledContainer)({
  alignItems: "center",
  position: "relative",
});
