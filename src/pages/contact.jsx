// src/pages/contact.jsx
import React from "react";
import ContactPage from "../features/contact/ContactPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Contact() {
  return <ContactPage />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
