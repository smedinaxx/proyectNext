import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "../context/CartContext";
import { Toaster } from "react-hot-toast";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <CartProvider>
        <Toaster />
        <Component {...pageProps} />
      </CartProvider>
    </SessionProvider>
  );
}
