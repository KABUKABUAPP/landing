import type { AppProps } from "next/app";
import "../assets/main.css";
import "../assets/chrome-bug.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalProvider from "@/contexts/ModalContext";
import { Provider } from "react-redux";
import { reduxStore } from "@/config/reduxStore";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Script
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-RNFX64EMFH"}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-RNFX64EMFH', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <ModalProvider>
        <Provider store={reduxStore}>
          <ToastContainer />
          <Component {...pageProps} />
        </Provider>
      </ModalProvider>
    </>
  );
}
