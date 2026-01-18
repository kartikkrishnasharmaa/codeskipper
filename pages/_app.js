import "../styles/globals.css";
import { useEffect } from "react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* ✅ Google Analytics Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EBNXG5YX2V"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EBNXG5YX2V');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
