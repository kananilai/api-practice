import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "layouts";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "light" ? "dark" : "light"));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
