import { AppProps } from "next/app";
import Head from "next/head";
import { CssBaseline, ThemeProvider } from "@mui/material";

import "../styles/globals.css";
import { AppContainer } from "~/components/layout/AppContainer";
import { theme } from "~/styles/theme";
import AppBar from "~/components/layout/app-bar/AppBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <AppBar />
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
