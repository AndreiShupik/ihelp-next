import React from "react";

import Link from "next/link";
import Image from "next/image";

import aboutFirstPhoto from "../../../public/assets/images/about-12.jpg";
import aboutSecondPhoto from "../../../public/assets/images/about-2.jpg";
import aboutThirdPhoto from "../../../public/assets/images/about-3.jpg";

import * as styles from "./AboutSection.module.scss";

function AboutSection() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutWrapper}>
        <p className={styles.description}>
          iHELP — це благодійний фонд, що допомагає сім’ям, дітям та вразливим групам населення у найбільш постраждалих
          регіонах України. Ми доставляємо гуманітарну допомогу, підтримуємо громади та працюємо над відновленням
          країни. Разом ми можемо змінити життя на краще.
        </p>
        <h2>Основні програми</h2>
        <div className={styles.aboutContainer}>
          <div className={`${styles.aboutBlock} ${styles.firstBlock}`}>
            <div className={styles.contentBlock}>
              <h3>Надання екстреної допомоги</h3>
              <p>
                Доставка продуктів, ліків, гігієнічних наборів та теплого одягу сім’ям, які цього найбільше потребують.
              </p>
              <Link href="/frontline-people">Дізнатися більше</Link>
            </div>
            <div className={styles.imgBlock}>
              <Image src={aboutFirstPhoto} alt="Image 1" />
            </div>
          </div>
          <div className={`${styles.aboutBlock} ${styles.secondBlock}`}>
            <div className={styles.imgBlock}>
              <Image src={aboutSecondPhoto} alt="Image 2" />
            </div>
            <div className={styles.contentBlock}>
              <h3>Відновлення громад та інфраструктури</h3>
              <p>Відбудова житлових будинків, шкіл та критичної інфраструктури у зруйнованих регіонах.</p>
              <Link href="/social-taxi">Дізнатися більше</Link>
            </div>
          </div>
          <div className={`${styles.aboutBlock} ${styles.thirdBlock}`}>
            <div className={styles.contentBlock}>
              <h3>Допомога дітям та освітні ініціативи</h3>
              <p>
                Емоційна та освітня підтримка дітей, які постраждали від війни, через психологічну допомогу, навчальні
                матеріали та розвиваючі заходи.
              </p>
              <Link href="/kherson-children">Дізнатися більше</Link>
            </div>
            <div className={styles.imgBlock}>
              <Image src={aboutThirdPhoto} alt="Image 3" />
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
