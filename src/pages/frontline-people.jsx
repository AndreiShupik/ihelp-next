import React from "react";
import FrontlinePeople from "../features/frontlinePeople/FrontlinePeoplePage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function FrontlinePeoplePage() {
  return <FrontlinePeople />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
