import "../styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.classList.add('dark'); // ✅ Force dark mode globally
  }, []);

  return (
      <Component {...pageProps} />
  );
}
