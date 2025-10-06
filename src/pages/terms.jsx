// src/pages/terms.jsx
import React from "react";
import TermsPage from "../features/terms/TermsPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function terms() {
  return <TermsPage />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
