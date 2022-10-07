import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";

import { theme } from "../styles/theme";
import StateProvider from "../context/StateProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
    </ThemeProvider>
  );
}

export default MyApp;
