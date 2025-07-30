import React from "react";
import OurProjects from "../features/ourProjects/OurProjectsPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Projects() {
  return <OurProjects />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
