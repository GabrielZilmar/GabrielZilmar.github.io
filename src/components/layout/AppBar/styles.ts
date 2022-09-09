import { Box, styled } from "@mui/material";
import MuiMenuIcon from "@mui/icons-material/Menu";

export const LogoWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexGrow: 1,
});

export const ButtonsWrapper = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
});

export const HamburgerMenuWrapper = styled(Box)({});

export const MenuIcon = styled(MuiMenuIcon)(({ theme }) => ({
  fontSize: theme.spacing(5),
}));
