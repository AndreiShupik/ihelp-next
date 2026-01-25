import React from "react";
import { useTranslation } from "next-i18next";

import Image from "next/image";
import iconFood from "../../../public/assets/icons/food.png";

import iconMeds from "../../../public/assets/icons/meds.png";
import iconKids from "../../../public/assets/icons/kids.png";

import iconInfrastructure from "../../../public/assets/icons/infrastructure.png";
import iconTaxi from "../../../public/assets/icons/taxi.png";

import * as styles from "./OurInitiatives.module.scss";

const OurInitiatives = () => {
  const { t } = useTranslation("home");

  return (
    <section className={styles.ourInitiatives}>
      <div className={styles.container}>
        <h3>{t("initiatives.title")}</h3>
        {/* <p className={styles.intro}>Разом ми можемо забезпечити:</p> */}

        <div className={styles.iconsGrid}>
          <div className={`${styles.iconBox} ${styles.iconFood}`}>
            <div className={styles.iconCircle}>
              <Image src={iconFood} alt={t("initiatives.firstAlt")} />
            </div>
            <p>{t("initiatives.firstInitiative")}</p>
          </div>
          <div className={`${styles.iconBox} ${styles.iconMeds}`}>
            <div className={styles.iconCircle}>
              <Image src={iconMeds} alt={t("initiatives.secondAlt")} />
            </div>
            <p>{t("initiatives.secondInitiative")}</p>
          </div>
          <div className={`${styles.iconBox} ${styles.iconKids}`}>
            <div className={styles.iconCircle}>
              <Image src={iconKids} alt={t("initiatives.thirdAlt")} />
            </div>
            <p>{t("initiatives.thirdInitiative")}</p>
          </div>
          <div className={`${styles.iconBox} ${styles.iconInfra}`}>
            <div className={styles.iconCircle}>
              <Image src={iconInfrastructure} alt={t("initiatives.fourthAlt")} />
            </div>
            <p>{t("initiatives.fourthInitiative")}</p>
          </div>
          <div className={`${styles.iconBox} ${styles.iconTaxi}`}>
            <div className={styles.iconCircle}>
              <Image src={iconTaxi} alt={t("initiatives.fifthAlt")} />
            </div>
            <p>{t("initiatives.fifthInitiative")}</p>
            {/* <p>
              Соціальне таксі
              <br /> для людей з інвалідністю
            </p> */}
          </div>
        </div>

        {/* <p className={styles.closing}>
          Підтримайте нас, зробіть пожертву чи станьте частиною нашої команди волонтерів. Разом – до перемоги!
        </p> */}
      </div>
    </section>
  );
};

export default OurInitiatives;
