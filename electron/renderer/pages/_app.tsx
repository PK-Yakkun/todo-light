import { ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";

export function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const customTheme = createTheme({
    palette: {
      primary: {
        main: "#00d5bb",
      },
      mode: isDarkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={customTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
