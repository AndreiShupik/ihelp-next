import React from "react";
import Image from "next/image";

import * as styles from "./OurProjectsTitle.module.scss";

import ourProjectsImg from "../../../public/assets/images/our-projects.jpg";

function OurProjectsTitle() {
  return (
    <section className={styles.projectsBlock}>
      <div className={styles.textContent}>
        <h2 className={styles.heading}>
          Благодійний фонд <br /> «Я ДОПОМАГАЮ»: Наші проєкти
        </h2>
        <span className={styles.subtitle}>Підтримка дітей, людей з інвалідністю та освіти для відновлення України</span>
        <p>
          Благодійний фонд iHELP активно реалізує гуманітарні проєкти в Україні, щоб підтримати найбільш вразливі
          категорії населення під час війни. Ми зосереджуємо свої зусилля на трьох ключових напрямках: допомога дітям,
          підтримка людей з інвалідністю та сприяння освіті.
        </p>
        <p>
          Кожен проєкт спрямований на те, щоб забезпечити гідне життя для кожної людини та сприяти стійкому розвитку
          громад.
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <Image src={ourProjectsImg} alt="Наші проєкти" />
      </div>
    </section>
  );
}

export default OurProjectsTitle;
