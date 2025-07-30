// src/components/layout/DefaultLayout.jsx
import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ScrollToTop from "../../utils/ScrollToTop";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="E-commerce multilanding website" />
      </Head>
      <ScrollToTop />
      <Header />
      {children}
      <Footer />
    </>
  );
}
