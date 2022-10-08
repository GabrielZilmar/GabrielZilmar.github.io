import { Container, styled } from "@mui/material";

export const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: theme.spacing(1.5),
  height: `calc(100vh - ${theme.spacing(8)})`,
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
    height: `calc(100vh - ${theme.spacing(7)})`,
  },
}));

export const StyledContainerCenter = styled(StyledContainer)({
  alignItems: "center",
});
