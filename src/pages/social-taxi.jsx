import React from "react";
import SocialTaxi from "../features/socialTaxi/SocialTaxiPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function SocialTaxiPage() {
  return <SocialTaxi />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
