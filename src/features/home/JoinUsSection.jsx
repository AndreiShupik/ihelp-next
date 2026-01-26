import React from "react";
import { useTranslation } from "next-i18next";

import Image from "next/image";
import Button from "../../components/ui/Button";

import OurSocials from "../../components/layout/Footer/OurSocials";
import joinUsPhoto from "../../../public/assets/images/join-us.webp";

import { useModal } from "@/components/ui/ModalActions/ModalContext";
import * as styles from "./JoinUsSection.module.scss";

function JoinUsSection() {
  const { t } = useTranslation("home");
  const { openModal } = useModal();

  const joinUsBtnText = t("joinUs.ctaButton");
  const joinUsBtnType = "secondary";
  return (
    <section className={styles.joinUs}>
      <div className={styles.imageWrapper}>
        <Image src={joinUsPhoto} alt={t("joinUs.photoAlt")} />
      </div>
      <div className={styles.content}>
        <h3>{t("joinUs.title")}</h3>
        <p>{t("joinUs.description")}</p>
        <div className={styles.btnContainer}>
          <Button type={joinUsBtnType} text={joinUsBtnText} onClick={() => openModal("volunteer")} />
        </div>
        <div className={styles.socialBlock}>
          <p>{t("joinUs.ourSocials")}</p>
          <OurSocials />
        </div>
      </div>
    </section>
  );
}
export default JoinUsSection;
