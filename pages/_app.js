import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { CartContextProvider } from "../contexts/CartContextProvider";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <NextNProgress
        color="#f59e0b"
        startPosition={0.2}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{showSpinner:false}}
      />
      <SessionProvider session={session}>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
