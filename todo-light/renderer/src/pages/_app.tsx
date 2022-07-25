import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import "../styles/globals.css";

export function MyApp({ Component, pageProps }) {
  const customTheme = createTheme({
    palette: {
      primary: {
        main: "#00d5bb",
      },
    },
  });
  return (
    <ThemeProvider theme={customTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
