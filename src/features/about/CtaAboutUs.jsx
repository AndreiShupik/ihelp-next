import React from "react";
import Image from "next/image";

import * as styles from "./CtaAboutUs.module.scss";
// import photo from "../../../public/assets/images/ihelp-help.jpg"; // Adjust the path
import photo from "../../../public/assets/images/blog-1.webp"; // Adjust the path

function CtaAboutUs() {
  return (
    <>
      <section className={styles.ctaAbout}>
        <div className={styles.textBlock}>
          <p>
            Разом ми зможемо більше: кожна ваша пожертва допомагає забезпечити продуктові набори, медикаменти чи
            відновлення житла для постраждалих громад. Волонтери iHELP перетворюють вашу підтримку на реальну допомогу
            тим, хто цього найбільше потребує.
          </p>
        </div>

        <div className={styles.imageBlock}>
          <Image src={photo} alt="iHELP volunteers" />
        </div>

        <div className={styles.headingBlock}>
          <h2>Долучайтеся до місії</h2>
          <span>Підтримайте фонд «Я ДОПОМАГАЮ» — разом ми змінюємо життя та допомагаємо Україні відновитися</span>
        </div>
      </section>
      <p className={styles.lastParagraph}>
        Долучайтеся до команди, зробіть пожертву онлайн чи підтримайте наші гуманітарні проєкти. Разом ми створимо гідне
        майбутнє.
      </p>
    </>
  );
}

export default CtaAboutUs;
