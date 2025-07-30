// pages/404.jsx
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Custom404() {
  const { t } = useTranslation("common");
  return (
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
  );
}

// ✅ Add this function to enable translations
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
