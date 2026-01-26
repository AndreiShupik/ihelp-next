import React from "react";
import Image from "next/image";

import { useTranslation } from "next-i18next";
import * as styles from "./OurProjectsTitle.module.scss";

import ourProjectsImg from "../../../public/assets/images/our-projects.webp";

function OurProjectsTitle() {
  const { t } = useTranslation("projects");

  return (
    <section className={styles.projectsBlock}>
      <div className={styles.textContent}>
        <h1 className={styles.heading}>
          {t("title.1stTitlePart")} <br /> {t("title.2ndTitlePart")}
        </h1>
        <span className={styles.subtitle}>{t("title.subtitle")}</span>
        <p>{t("title.1stDescription")}</p>
        <p>{t("title.2ndDescription")}</p>
      </div>
      <div className={styles.imageWrapper}>
        <Image src={ourProjectsImg} alt={t("title.imageAlt")} />
      </div>
    </section>
  );
}

export default OurProjectsTitle;
