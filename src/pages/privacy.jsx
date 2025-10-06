// src/pages/privacy.jsx
import React from "react";
import PrivacyPage from "../features/privacy/PrivacyPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Privacy() {
  return <PrivacyPage />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
