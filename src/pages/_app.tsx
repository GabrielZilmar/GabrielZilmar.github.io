import { AppProps } from "next/app";
import Head from "next/head";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppContainer } from "~/components/layout/AppContainer";
import { theme } from "~/styles/theme";
import AppBar from "~/components/layout/app-bar/AppBar";
import CurriculumModalProvider from "~/hooks/useCurriculumModal";
import LanguageProvider from "~/i18n/language-context";
import { ToastContainer } from "react-toastify";

import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <LanguageProvider>
          <CurriculumModalProvider>
            <AppBar />
          </CurriculumModalProvider>
          <AppContainer>
            <Component {...pageProps} />
            <ToastContainer />
          </AppContainer>
        </LanguageProvider>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
