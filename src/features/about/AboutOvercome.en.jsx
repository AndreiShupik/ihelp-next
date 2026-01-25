import React, { useState, useEffect } from "react";
import * as styles from "./AboutOvercome.module.scss";

export default function AboutOvercome() {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.content}>
        <div className={styles.container}>
          <h2>Facing Hardship Head-On</h2>
          <p>Crossing minefields and destruction to support war-torn communities</p>
          <p>
            In villages like Oleksandrivka, Kamianka, and Izium, we walked through ruins where every step could be the
            last. True patriotism is action.
          </p>
          <p>
            Mine-filled roads, cold winds, shelling - none of this could stop the iHELP team, which brought humanitarian
            aid even to these most dangerous places. Because we know: true patriotism is action.
          </p>
        </div>
      </div>
    </section>
  );
}
