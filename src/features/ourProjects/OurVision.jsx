import React from "react";
import Link from "next/link";
import Image from "next/image";

import * as styles from "./OurVision.module.scss";

import image from "../../../public/assets/images/our-vision.jpg"; // adjust path

function OurVision() {
  return (
    <section className={styles.ourVision}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt="iHelp. Наше бачення" />
      </div>
      <div className={styles.textContent}>
        <h2 className={styles.heading}>
          Наше бачення: <br /> Створюємо майбутнє разом
        </h2>
        <p>
          Реалізуючи ці три напрями — підтримка дітей, допомога людям з інвалідністю та сприяння освіті, — ми
          допомагаємо відновлювати країну та громади, які найбільше постраждали від війни.
        </p>
        <p>Благодійний фонд iHELP вірить у силу єдності та підтримки. Разом ми можемо створити:</p>
        <ul>
          <li>Гідні умови життя для кожної людини.</li>
          <li>Стійкі громади, які рухаються до відновлення.</li>
          <li>Сильну, єдину та непереможну Україну.</li>
        </ul>
        <p>
          <Link href="/about#ihelp-form">Долучайтеся до наших проєктів! Разом ми змінюємо життя на краще.</Link>
        </p>
      </div>
    </section>
  );
}

export default OurVision;
