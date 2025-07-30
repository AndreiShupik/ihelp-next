import React from "react";
import Image from "next/image";

import iconFood from "../../../public/assets/icons/food.png";
import iconMeds from "../../../public/assets/icons/meds.png";
import iconKids from "../../../public/assets/icons/kids.png";
import iconInfrastructure from "../../../public/assets/icons/infrastructure.png";

import * as styles from "./OurInitiatives.module.scss";

const OurInitiatives = () => {
  return (
    <section className={styles.ourInitiatives}>
      <div className={styles.container}>
        <h3>Разом ми можемо забезпечити:</h3>
        {/* <p className={styles.intro}>Разом ми можемо забезпечити:</p> */}

        <div className={styles.iconsGrid}>
          <div className={`${styles.iconBox} ${styles.iconFood}`}>
            <div className={styles.iconCircle}>
              <Image src={iconFood} alt="Продуктові набори" />
            </div>
            <p>Продуктові набори для постраждалих родин</p>
          </div>
          <div className={`${styles.iconBox} ${styles.iconMeds}`}>
            <div className={styles.iconCircle}>
              <Image src={iconMeds} alt="Медикаменти" />
            </div>
            <p>Медикаменти та засоби першої допомоги</p>
          </div>
          <div className={`${styles.iconBox} ${styles.iconKids}`}>
            <div className={styles.iconCircle}>
              <Image src={iconKids} alt="Допомога дітям" />
            </div>
            <p>Допомога дітям: від навчальних наборів до святкових подарунків</p>
          </div>
          <div className={`${styles.iconBox} ${styles.iconInfra}`}>
            <div className={styles.iconCircle}>
              <Image src={iconInfrastructure} alt="Інфраструктура" />
            </div>
            <p>Відновлення інфраструктури: житлові будинки, школи та лікарні</p>
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
