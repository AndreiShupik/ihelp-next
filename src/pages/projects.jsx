import React from "react";
import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useRouter } from "next/router";
import OurProjects from "../features/ourProjects/OurProjectsPage";

export default function Projects() {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="en" href="https://theihelp.org/en/projects" />
        <link rel="alternate" hrefLang="ua" href="https://theihelp.org/projects" />

        <meta name="description" content={t("meta.projects.description")} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />

        <meta property="og:title" content={t("meta.projects.title")} />
        <meta property="og:description" content={t("meta.projects.description")} />
        <meta property="og:url" content="https://theihelp.org/" />

        <meta name="twitter:title" content={t("meta.projects.title")} />
        <meta name="twitter:description" content={t("meta.projects.description")} />

        <title>{t("meta.projects.title")}</title>
        <link
          rel="canonical"
          href={locale === "ua" ? "https://theihelp.org/projects" : "https://theihelp.org/en/projects"}
        />
      </Head>
      <OurProjects />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "payment", "projects"])),
    },
  };
}
