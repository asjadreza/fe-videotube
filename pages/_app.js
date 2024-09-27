import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/header";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Header>
        <Component {...pageProps} />
      </Header>
    </ThemeProvider>
  );
}
