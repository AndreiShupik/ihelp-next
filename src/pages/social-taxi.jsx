import React from "react";
import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useRouter } from "next/router";

import SocialTaxiEn from "@/features/socialTaxi/SocialTaxiPage.en";
import SocialTaxiUa from "@/features/socialTaxi/SocialTaxiPage.ua";

export default function SocialTaxiPage() {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="en" href="https://theihelp.org/en/social-taxi" />
        <link rel="alternate" hrefLang="ua" href="https://theihelp.org/social-taxi" />

        <meta name="description" content={t("meta.socialTaxi.description")} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />

        <meta property="og:title" content={t("meta.socialTaxi.title")} />
        <meta property="og:description" content={t("meta.socialTaxi.description")} />
        <meta property="og:url" content="https://theihelp.org/social-taxi" />

        <meta name="twitter:title" content={t("meta.socialTaxi.title")} />
        <meta name="twitter:description" content={t("meta.socialTaxi.description")} />

        <title>{t("meta.socialTaxi.title")}</title>
        <link
          rel="canonical"
          href={locale === "ua" ? "https://theihelp.org/social-taxi" : "https://theihelp.org/en/social-taxi"}
        />
      </Head>
      {locale === "ua" ? <SocialTaxiUa /> : <SocialTaxiEn />}
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "payment", "contactForm"])),
    },
  };
}
