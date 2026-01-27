// src/pages/privacy.jsx
import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
// import PrivacyPage from "../features/privacy/PrivacyPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

import PrivacyEn from "@/features/privacy/PrivacyPage.en";
import PrivacyUa from "@/features/privacy/PrivacyPage.ua";

const Privacy = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="en" href="https://theihelp.org/privacy" />
        <link rel="alternate" hrefLang="ua" href="https://theihelp.org/ua/privacy" />

        <meta name="description" content={t("meta.privacy.description")} />
        <meta name="robots" content="noindex, nofollow" />

        <meta property="og:title" content={t("meta.privacy.title")} />
        <meta property="og:description" content={t("meta.privacy.description")} />
        <meta property="og:url" content="https://theihelp.org/privacy" />

        <meta name="twitter:title" content={t("meta.privacy.title")} />
        <meta name="twitter:description" content={t("meta.privacy.description")} />

        <title>{t("meta.privacy.title")}</title>
        <link
          rel="canonical"
          href={locale === "ua" ? "https://theihelp.org/ua/privacy" : "https://theihelp.org/privacy"}
        />
      </Head>
      {locale === "ua" ? <PrivacyUa /> : <PrivacyEn />}
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "payment"])),
    },
  };
}

export default Privacy;
