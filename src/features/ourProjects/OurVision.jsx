import React from "react";
import Image from "next/image";

import { useTranslation } from "next-i18next";
import { useModal } from "@/components/ui/ModalActions/ModalContext";

import * as styles from "./OurVision.module.scss";
import image from "../../../public/assets/images/our-vision.webp"; // adjust path

function OurVision() {
  const { t } = useTranslation("projects");
  const { openModal } = useModal();

  return (
    <section className={styles.ourVision}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={t("ourVision.imageAlt")} />
      </div>
      <div className={styles.textContent}>
        <h2 className={styles.heading}>{t("ourVision.title")}</h2>
        <p>{t("ourVision.subtitle")}</p>
        <ul>
          <li>{t("ourVision.point1")}</li>
          <li>{t("ourVision.point2")}</li>
        </ul>
        <p>{t("ourVision.description")}</p>
        <p>
          <span onClick={() => openModal("ihelp")}>{t("ourVision.ctaLink")}</span>
        </p>
      </div>
    </section>
  );
}

// function OurVision() {
//   const { openModal } = useModal();

//   return (
//     <section className={styles.ourVision}>
//       <div className={styles.imageWrapper}>
//         <Image src={image} alt="iHelp. Наше бачення" />
//       </div>
//       <div className={styles.textContent}>
//         <h2 className={styles.heading}>
//           Наше бачення: <br /> Створюємо майбутнє разом
//         </h2>
//         <p>
//           Реалізуючи ці три напрями - підтримка дітей, допомога людям з інвалідністю та сприяння освіті, - ми
//           допомагаємо відновлювати країну та громади, які найбільше постраждали від війни.
//         </p>
//         <p>Благодійний фонд iHELP вірить у силу єдності та підтримки. Разом ми можемо створити:</p>
//         <ul>
//           <li>Гідні умови життя для кожної людини.</li>
//           <li>Стійкі громади, які рухаються до відновлення.</li>
//           <li>Сильну, єдину та непереможну Україну.</li>
//         </ul>
//         <p>
//           <span onClick={() => openModal("ihelp")}>
//             Долучайтеся до наших проєктів! Разом ми змінюємо життя на краще.
//           </span>
//         </p>
//       </div>
//     </section>
//   );
// }

export default OurVision;
