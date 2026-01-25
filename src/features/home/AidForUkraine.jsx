import React, { useRef } from "react";
import { useTranslation } from "next-i18next";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLockHeight } from "@/utils/useLockHeight";

import * as styles from "./AidForUkraine.module.scss";

import Button from "../../components//ui/Button";
import { useModal } from "@/components/ui/ModalActions/ModalContext";

export default function AidForUkraine() {
  const { t } = useTranslation("home");

  const parallaxRef = useRef(null);
  const { openModal } = useModal();

  useLockHeight();

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });

  // Adjust these values if you want more or less movement
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={parallaxRef} className={styles.parallaxBlock}>
      {/* Background Layer */}
      <div className={styles.parallaxOuter}>
        <motion.div className={styles.parallaxInner} style={{ y: parallaxY }}>
          <div className={styles.backgroundImage} />
        </motion.div>
      </div>

      {/* Foreground Content */}
      <motion.div className={styles.textContainer} style={{ y: textY }}>
        <h2>{t("aidForUkraine.title")}</h2>
        <p>{t("aidForUkraine.title")}</p>
        <div className={styles.btnsBlock}>
          <div className={styles.buttons}>
            <Button text={t("aidForUkraine.makeDonation")} type={"primary"} onClick={() => openModal("donate")} />
          </div>
          <div className={styles.buttons}>
            <Button text={t("aidForUkraine.becomePartner")} type={"primary"} onClick={() => openModal("partner")} />
          </div>
          <div className={styles.buttons}>
            <Button text={t("aidForUkraine.joinVolunteer")} type={"primary"} onClick={() => openModal("volunteer")} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
