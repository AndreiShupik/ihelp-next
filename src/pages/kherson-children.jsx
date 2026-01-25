import React from "react";
import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useRouter } from "next/router";

import KhersonChildrenEn from "@/features/khersonChildren/KhersonChildrenPage.en";
import KhersonChildrenUa from "@/features/khersonChildren/KhersonChildrenPage.ua";

export default function KhersonChildrenPage() {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="en" href="https://ihelp.org.ua/kherson-children" />
        <link rel="alternate" hrefLang="ua" href="https://ihelp.org.ua/ua/kherson-children" />

        <meta name="description" content={t("meta.khersonChildren.description")} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />

        <meta property="og:title" content={t("meta.khersonChildren.title")} />
        <meta property="og:description" content={t("meta.khersonChildren.description")} />
        <meta property="og:url" content="https://ihelp.org.ua/kherson-children" />

        <meta name="twitter:title" content={t("meta.khersonChildren.title")} />
        <meta name="twitter:description" content={t("meta.khersonChildren.description")} />

        <title>{t("meta.khersonChildren.title")}</title>
        <link
          rel="canonical"
          href={locale === "ua" ? "https://ihelp.org.ua/ua/kherson-children" : "https://ihelp.org.ua/kherson-children"}
        />
      </Head>
      {locale === "ua" ? <KhersonChildrenUa /> : <KhersonChildrenEn />}
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
