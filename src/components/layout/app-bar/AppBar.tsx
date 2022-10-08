import { useState } from "react";
import AppBar from "@mui/material/AppBar";
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
} from "~/components/layout/app-bar/styles";
import { IconButton, MenuItem } from "@mui/material";
import { AppBarPagesType } from "~/components/layout/app-bar/types";

const pages: AppBarPagesType[] = [
  {
    id: "about-me",
    name: "About Me",
  },
  { id: "curriculum", name: "Curriculum" },
  { id: "contact", name: "Contact" },
];

const AppBarComponent = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const downloadCurriculum = (): void => {};

  const scrollToElementById = (id: string): void => {
    const curriculumId = "curriculum";
    if (id === curriculumId) {
      return downloadCurriculum();
    }

    const element = document.getElementById(id);
    const navbarElement = document.getElementById("navbar");

    if (!element || !navbarElement) {
      return;
    }

    const headerHeight = navbarElement.offsetHeight;
    const elementPosition = element.offsetTop - headerHeight;

    setTimeout(() => {
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <AppBar position="sticky" id="navbar">
      <Container maxWidth="xl">
        <AppBarToolbar disableGutters>
          <LogoWrapper>
            <HomeIcon sx={{ mr: 1 }} onClick={() => scrollToElementById("#")} />
            <Typography
              variant="h6"
              noWrap
              onClick={() => scrollToElementById("#")}
            >
              HOME
            </Typography>
          </LogoWrapper>

          <ButtonsWrapper sx={{ display: { xs: "none", sm: "flex" } }}>
            {pages.map(({ id, name }) => (
              <Button
                key={id}
                onClick={() => scrollToElementById(id)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {name}
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
              {pages.map(({ id, name }) => (
                <MenuItem key={id} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => scrollToElementById(id)}
                  >
                    {name}
                  </Typography>
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
