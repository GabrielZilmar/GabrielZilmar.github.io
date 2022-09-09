import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import {
  ButtonsWrapper,
  HamburgerMenuWrapper,
  LogoWrapper,
  MenuIcon,
} from "~/components/layout/AppBar/styles";
import { IconButton, Menu, MenuItem } from "@mui/material";

const pages = ["About Me", "Resume", "Contact"];

const AppBarComponent = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  // Add anchorEl

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoWrapper>
            <HomeIcon sx={{ mr: 1 }} />
            <Typography variant="h6" noWrap component="a" href="/">
              HOME
            </Typography>
          </LogoWrapper>

          <ButtonsWrapper sx={{ display: { xs: "none", sm: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => console.log(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </ButtonsWrapper>

          <HamburgerMenuWrapper sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton size="large" onClick={handleOpenMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openMenu}
              onClose={handleCloseMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </HamburgerMenuWrapper>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;
