import { CacheProvider, EmotionCache } from "@emotion/react";
import { LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterDayjs";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import * as dayjs from "dayjs";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import "../../styles/globals.css";
import { Layout } from "../components/organisms/Layout";
import { themeWithComponentStyles } from "../constants/theme";
import createEmotionCache from "../libs/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  dayjs.locale("ja");

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={themeWithComponentStyles}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <LocalizationProvider dateAdapter={DateAdapter}>
          <RecoilRoot>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RecoilRoot>
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
