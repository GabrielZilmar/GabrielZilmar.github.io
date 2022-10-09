import { Box, Button, Menu, styled, Toolbar } from "@mui/material";
import MuiMenuIcon from "@mui/icons-material/Menu";

export const LogoWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexGrow: 1,

  ":hover": {
    cursor: "pointer",
  },
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

export const ModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(2),
}));

export const ModalContent = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  gap: theme.spacing(1),
}));

export const ModalContentButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.text.secondary,
  fontWeight: 600,
}));
