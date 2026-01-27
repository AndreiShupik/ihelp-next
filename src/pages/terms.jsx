// src/pages/terms.jsx
import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

import TermsEn from "@/features/terms/TermsPage.en";
import TermsUa from "@/features/terms/TermsPage.ua";

const Terms = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="en" href="https://theihelp.org/en/terms" />
        <link rel="alternate" hrefLang="ua" href="https://theihelp.org/terms" />

        <meta name="description" content={t("meta.terms.description")} />
        <meta name="robots" content="noindex, nofollow" />

        <meta property="og:title" content={t("meta.terms.title")} />
        <meta property="og:description" content={t("meta.terms.description")} />
        <meta property="og:url" content="https://theihelp.org/terms" />

        <meta name="twitter:title" content={t("meta.terms.title")} />
        <meta name="twitter:description" content={t("meta.terms.description")} />

        <title>{t("meta.terms.title")}</title>
        <link rel="canonical" href={locale === "ua" ? "https://theihelp.org/terms" : "https://theihelp.org/en/terms"} />
      </Head>
      {locale === "ua" ? <TermsUa /> : <TermsEn />}
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

export default Terms;
