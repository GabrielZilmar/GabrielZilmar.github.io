import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import {
  AppBarMenu,
  AppBarToolbar,
  ButtonsWrapper,
  HamburgerMenuWrapper,
  LogoWrapper,
  MenuIcon,
} from "~/components/layout/AppBar/styles";
import { IconButton, MenuItem } from "@mui/material";

const pages = ["About Me", "Resume", "Contact"];

const AppBarComponent = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <AppBarToolbar disableGutters>
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
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <AppBarMenu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={!!anchorElNav}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </AppBarMenu>
          </HamburgerMenuWrapper>
        </AppBarToolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;
