import { Box, Menu, styled, Toolbar } from "@mui/material";
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

export const HamburgerMenuWrapper = styled(Box)({
  flexGrow: 0,
});

export const MenuIcon = styled(MuiMenuIcon)(({ theme }) => ({
  fontSize: theme.spacing(5),
}));

export const AppBarMenu = styled(Menu)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

export const AppBarToolbar = styled(Toolbar)(({ theme }) => ({
  height: theme.spacing(4),
}));
