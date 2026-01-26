import React from "react";
import { useTranslation } from "next-i18next";

import Link from "next/link";
import Image from "next/image";

import aboutFirstPhoto from "../../../public/assets/images/about-1.webp";
import aboutSecondPhoto from "../../../public/assets/images/about-2.webp";
import aboutThirdPhoto from "../../../public/assets/images/about-3.webp";

import * as styles from "./AboutSection.module.scss";

function AboutSection() {
  const { t } = useTranslation("home");

  return (
    <section className={styles.about}>
      <div className={styles.aboutWrapper}>
        <p className={styles.description}>{t("about.description")}</p>
        <h2>{t("about.title")}</h2>
        <div className={styles.aboutContainer}>
          <div className={`${styles.aboutBlock} ${styles.firstBlock}`}>
            <div className={styles.contentBlock}>
              <h3>
                <Link className={styles.titleLink} href="/frontline-people">
                  {t("about.firstProject")}
                </Link>
              </h3>
              <p>{t("about.firstProjectDescription")}</p>
              <Link href="/frontline-people">{t("about.learnMore")}</Link>
            </div>
            <div className={styles.imgBlock}>
              <Image src={aboutFirstPhoto} alt={t("about.1stPhotoAlt")} />
            </div>
          </div>
          <div className={`${styles.aboutBlock} ${styles.secondBlock}`}>
            <div className={styles.imgBlock}>
              <Image src={aboutSecondPhoto} alt={t("about.2ndPhotoAlt")} />
            </div>
            <div className={styles.contentBlock}>
              <h3>
                <Link className={styles.titleLink} href="/social-taxi">
                  {t("about.secondProject")}
                </Link>
              </h3>
              <p>{t("about.secondProjectDescription")}</p>
              <Link href="/social-taxi">{t("about.learnMore")}</Link>
            </div>
          </div>
          <div className={`${styles.aboutBlock} ${styles.thirdBlock}`}>
            <div className={styles.contentBlock}>
              <h3>
                <Link className={styles.titleLink} href="/kherson-children">
                  {t("about.thirdProject")}
                </Link>
              </h3>
              <p>{t("about.thirdProjectDescription")}</p>
              <Link href="/kherson-children">{t("about.learnMore")}</Link>
            </div>
            <div className={styles.imgBlock}>
              <Image src={aboutThirdPhoto} alt={t("about.3rdPhotoAlt")} />
            </div>
          </div>
        </div>
        {/* <p className={styles.description}>
          Завдяки вашій підтримці ми охопили тисячі родин у звільнених регіонах Київщини, Херсонщини, Донеччини та інших
          гарячих точках. Ми не лише задовольняємо базові потреби, а й допомагаємо повернути віру в краще майбутнє.
        </p> */}
      </div>
    </section>
  );
}

export default AboutSection;
