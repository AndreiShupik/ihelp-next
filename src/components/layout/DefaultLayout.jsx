// src/components/layout/DefaultLayout.jsx
import Head from "next/head";
import { useTranslation } from "next-i18next";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import ScrollToTop from "../../utils/ScrollToTop";

export default function DefaultLayout({ children }) {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://theihelp.org/assets/images/social-logo.jpg" />
        <meta property="og:image:width" content="826" />
        <meta property="og:image:height" content="960" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:alt" content={t("meta.imageAlt")} />
        <meta property="og:site_name" content="iHELP" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://theihelp.org/assets/images/social-logo.jpg" />

        <link rel="icon" type="image/x-icon" href="https://theihelp.org/assets/images/favicon.png" />
      </Head>
      <ScrollToTop />
      <Header />
      {children}
      <Footer />
    </>
  );
}
