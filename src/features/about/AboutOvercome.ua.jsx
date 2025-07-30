import React, { useState, useEffect } from "react";
import * as styles from "./AboutOvercome.module.scss";

export default function AboutOvercome() {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.content}>
        <div className={styles.container}>
          <h2>Виклики і наполегливість</h2>
          <span className={styles.short}>
            Подолання замінованих територій і труднощів війни для допомоги громадам та підтримки мешканців у зоні
            руйнувань
          </span>
          <p>
            Кожна поїздка була випробуванням. У селах, як-от Олександрівка на Херсонщині або місті Кам’янка чи Ізюм
            Харківської області, ми йшли через руїни, де кожен крок міг стати останнім.
          </p>
          <p>
            Заміновані дороги, холодний вітер, обстріл — усе це не змогло зупинити команду iHELP, котра приносила
            гуманітарну допомогу навіть у ці найнебезпечніші місця. Бо нам відомо: справжній патріотизм — це дія.
          </p>
        </div>
      </div>
    </section>
  );
}
