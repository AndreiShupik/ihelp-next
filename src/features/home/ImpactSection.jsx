import React from "react";
import { useTranslation } from "next-i18next";

import Button from "../../components//ui/Button";
import * as styles from "./ImpactSection.module.scss";
import { useModal } from "@/components/ui/ModalActions/ModalContext";

function ImpactSection() {
  const { t } = useTranslation("home");
  const { openModal } = useModal();

  const impactBtnText = t("impact.ctaButton");
  const impactBtnType = "secondary";

  return (
    <section className={styles.impact}>
      <div className={styles.impactContainer}>
        <div className={styles.impactTextContainer}>
          {/* <span>Приєднуйся</span> */}
          {/* <h2>Наші досягнення</h2> */}
          <h3>{t("impact.title")}</h3>
          <hr />
          <p>{t("impact.description")}</p>
          <div className={styles.btnContainer}>
            <Button type={impactBtnType} text={impactBtnText} onClick={() => openModal("donate")} />
          </div>
        </div>

        <dl className={styles.impactStatistic}>
          <dt>57 750+</dt>
          <dd>{t("impact.familyHelp")}</dd>
          <dt>8</dt>
          <dd>{t("impact.communityHelp")}</dd>
          <dt>15 139</dt>
          <dd>{t("impact.childrenHelp")}</dd>
        </dl>
      </div>
    </section>
  );
}

export default ImpactSection;
