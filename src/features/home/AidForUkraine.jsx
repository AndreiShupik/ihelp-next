import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import * as styles from "./AidForUkraine.module.scss";
import Button from "../../components//ui/Button";

export default function AidForUkraine() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    function lockHeroHeight() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh * 100}px`);
    }

    // ✅ Call it immediately when component mounts
    lockHeroHeight();
  }, []);

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });

  // Adjust these values if you want more or less movement
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={parallaxRef} className={styles.parallaxBlock}>
      {/* Background Layer */}
      <div className={styles.parallaxOuter}>
        <motion.div className={styles.parallaxInner} style={{ y: parallaxY }}>
          <div className={styles.backgroundImage} />
        </motion.div>
      </div>

      {/* Foreground Content */}
      <motion.div className={styles.textContainer} style={{ y: textY }}>
        <h2>Кожна пожертва змінює життя.</h2>
        <p>Ваша підтримка — це шанс для тисяч сімей відновити життя.</p>
        <div className={styles.btnsBlock}>
          <div className={styles.buttons}>
            {/* <button className={styles.mainBtn}>Зробити пожертву</button> */}
            <Button text={"Зробити пожертву"} type={"primary"} link={"/about#ihelp-form"} />
          </div>
          <div className={styles.buttons}>
            {/* <button className={styles.partnerBtn}>Стати партнером</button> */}
            <Button text={"Стати партнером"} type={"primary"} link={"/about#ihelp-form:become-a-partner"} />
          </div>
          <div className={styles.buttons}>
            {/* <button className={styles.secondaryBtn}>Долучитися до волонтерської команди</button> */}
            <Button
              text={"Долучитися до волонтерської команди"}
              type={"primary"}
              link={"/about#ihelp-form:become-a-volunteer"}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
