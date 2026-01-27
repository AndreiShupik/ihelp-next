"use client";

import React from "react";
import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

import FrontlinePeopleEn from "@/features/frontlinePeople/FrontlinePeoplePage.en";
import FrontlinePeopleUa from "@/features/frontlinePeople/FrontlinePeoplePage.ua";

const FrontlinePeople = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="en" href="https://theihelp.org/en/frontline-people" />
        <link rel="alternate" hrefLang="ua" href="https://theihelp.org/frontline-people" />

        <meta name="description" content={t("meta.frontlinePeople.description")} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />

        <meta property="og:title" content={t("meta.frontlinePeople.title")} />
        <meta property="og:description" content={t("meta.frontlinePeople.description")} />
        <meta property="og:url" content="https://theihelp.org/frontline-people" />

        <meta name="twitter:title" content={t("meta.frontlinePeople.title")} />
        <meta name="twitter:description" content={t("meta.frontlinePeople.description")} />

        <title>{t("meta.frontlinePeople.title")}</title>
        <link
          rel="canonical"
          href={locale === "ua" ? "https://theihelp.org/frontline-people" : "https://theihelp.org/en/frontline-people"}
        />
      </Head>
      {locale === "ua" ? <FrontlinePeopleUa /> : <FrontlinePeopleEn />}
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "payment", "contactForm"])),
    },
  };
}

export default FrontlinePeople;
