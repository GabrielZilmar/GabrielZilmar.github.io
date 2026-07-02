import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import {
  AppBarMenu,
  AppBarToolbar,
  ButtonsWrapper,
  HamburgerMenuWrapper,
  LanguageSwitcher,
  LogoWrapper,
  MenuIcon,
  ModalContainer,
  ModalContent,
  ModalContentButton,
} from "~/components/layout/app-bar/styles";
import { IconButton, MenuItem, Modal } from "@mui/material";
import { AppBarPagesType } from "~/components/layout/app-bar/types";
import { useCurriculumModal } from "~/hooks/useCurriculumModal";
import useNavbarOptions from "~/hooks/useNavbar";
import { useLanguage } from "~/i18n/language-context";

const AppBarComponent = () => {
  const { isOpen, close } = useCurriculumModal();
  const { scrollToElementById, openCurriculum } = useNavbarOptions();
  const { content, language, setLanguage, toggleLanguage } = useLanguage();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const pages: AppBarPagesType[] = [
    {
      id: "about-me",
      name: content.nav.about,
    },
    { id: "curriculum", name: content.nav.resume },
    { id: "contact", name: content.nav.contact },
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="sticky" id="navbar">
        <Container maxWidth="xl">
          <AppBarToolbar disableGutters>
            <LogoWrapper>
              <HomeIcon
                sx={{ mr: 1 }}
                onClick={() => scrollToElementById("#")}
              />
              <Typography
                variant="h6"
                noWrap
                onClick={() => scrollToElementById("#")}
              >
                {content.nav.home}
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

            <LanguageSwitcher sx={{ display: { xs: "none", sm: "flex" } }}>
              <Button
                size="small"
                onClick={() => setLanguage("en-us")}
                sx={{
                  color: "white",
                  fontWeight: 700,
                  borderBottom: language === "en-us" ? "2px solid white" : "2px solid transparent",
                  borderRadius: 0,
                }}
              >
                {content.nav.english}
              </Button>
              <Button
                size="small"
                onClick={() => setLanguage("pt-br")}
                sx={{
                  color: "white",
                  fontWeight: 700,
                  borderBottom: language === "pt-br" ? "2px solid white" : "2px solid transparent",
                  borderRadius: 0,
                }}
              >
                {content.nav.portuguese}
              </Button>
            </LanguageSwitcher>

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
                <Divider />
                <MenuItem
                  onClick={() => {
                    toggleLanguage();
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">
                    {content.nav.languageLabel}:{" "}
                    {language === "en-us"
                      ? content.nav.portuguese
                      : content.nav.english}
                  </Typography>
                </MenuItem>
              </AppBarMenu>
            </HamburgerMenuWrapper>
          </AppBarToolbar>
        </Container>
      </AppBar>
      <Modal
        open={isOpen}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {content.nav.resumeModalTitle}
          </Typography>
          <ModalContent>
            <ModalContentButton
              variant="contained"
              onClick={() => openCurriculum("en-us")}
            >
              {content.nav.resumeModalPrimary}
            </ModalContentButton>
            <ModalContentButton
              variant="contained"
              onClick={() => openCurriculum("pt-br")}
            >
              {content.nav.resumeModalSecondary}
            </ModalContentButton>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default AppBarComponent;
