import React, { useState, useEffect } from "react";
import * as styles from "./AboutOvercome.module.scss";

export default function AboutOvercome() {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.content}>
        <div className={styles.container}>
          <h2>Challenges and perseverance</h2>
          <p>
            Every trip was a test. In villages like Oleksandrivka in Kherson region or the towns of Kamyanka or Izyum in
            Kharkiv region, we walked through ruins where every step could be our last.
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
