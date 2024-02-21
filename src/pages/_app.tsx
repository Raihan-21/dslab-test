import Navbar from "@/components/molecules/Navbar";
import store from "@/store";
import "@/styles/globals.css";
import theme from "@/theme";
import { ThemeProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
