import React from "react";

import Image from "next/image";
import { useTranslation } from "next-i18next";

import * as styles from "./CtaAboutUs.module.scss";
// import photo from "../../../public/assets/images/ihelp-help.jpg"; // Adjust the path
import photo from "../../../public/assets/images/cta-about.webp"; // Adjust the path

function CtaAboutUs() {
  const { t } = useTranslation("about");

  return (
    <>
      <section className={styles.ctaAbout}>
        <div className={styles.textBlock}>
          <p>{t("ctaAbout.1stDescription")}</p>
        </div>

        <div className={styles.imageBlock}>
          <Image src={photo} alt={t("ctaAbout.photoAlt")} />
        </div>

        <div className={styles.headingBlock}>
          <h2>{t("ctaAbout.title")}</h2>
          <span>{t("ctaAbout.subtitle")}</span>
        </div>
      </section>
      <p className={styles.lastParagraph}>{t("ctaAbout.2ndDescription")}</p>
    </>
  );
}

export default CtaAboutUs;
