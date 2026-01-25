// pages/404.jsx
import Link from "next/link";
import Head from "next/head";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";

export default function Custom404() {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <meta name="description" content={t("page404.description")} />
        <meta name="robots" content="noindex, nofollow" />

        <meta property="og:title" content={t("page404.title")} />
        <meta property="og:description" content={t("page404.description")} />
        <meta property="og:url" content="https://ihelp.org.ua/page404" />

        <meta name="twitter:title" content={t("page404.title")} />
        <meta name="twitter:description" content={t("page404.description")} />

        <title>{t("page404.title")}</title>
        <link rel="canonical" href="https://ihelp.org.ua/page404" />
      </Head>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          // textAlign: "center",
          backgroundColor: "#fff",
          padding: "150px 23px 0",
        }}
      >
        <h1 style={{ marginBottom: "1rem" }}>{t("page404.title")}</h1>
        <p style={{ color: "#666", marginBottom: "2rem" }}>{t("page404.description")}</p>
        <Link
          href="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "500",
            border: "1px solid #aacfaa",
            background: "#aacfaa",
            padding: "8px 16px",
            borderRadius: "5px",
          }}
        >
          {t("page404.button")}
        </Link>
      </div>
    </>
  );
}

// ✅ Add this function to enable translations
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "payment"])),
    },
  };
}
