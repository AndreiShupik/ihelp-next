import React from "react";
import KhersonChildren from "../features/khersonChildren/KhersonChildrenPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function KhersonChildrenPage() {
  return <KhersonChildren />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
