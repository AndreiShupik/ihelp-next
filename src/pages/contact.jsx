// src/pages/contact.jsx
import React from "react";
import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useRouter } from "next/router";
import ContactPage from "../features/contact/ContactPage";

export default function Contact() {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="en" href="https://theihelp.org/contact" />
        <link rel="alternate" hrefLang="ua" href="https://theihelp.org/ua/contact" />

        <meta name="description" content={t("meta.contact.description")} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />

        <meta property="og:title" content={t("meta.contact.title")} />
        <meta property="og:description" content={t("meta.contact.description")} />
        <meta property="og:url" content="https://theihelp.org/" />

        <meta name="twitter:title" content={t("meta.contact.title")} />
        <meta name="twitter:description" content={t("meta.contact.description")} />

        <title>{t("meta.contact.title")}</title>
        <link
          rel="canonical"
          href={locale === "ua" ? "https://theihelp.org/ua/contact" : "https://theihelp.org/contact"}
        />
      </Head>
      <ContactPage />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "contact", "payment", "contactForm"])),
    },
  };
}
