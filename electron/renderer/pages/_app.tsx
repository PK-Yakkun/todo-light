import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "styles/CustomTheme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
