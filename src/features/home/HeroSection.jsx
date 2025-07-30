import React, { useEffect, useState } from "react";
import Link from "next/link";

import * as styles from "./HeroSection.module.scss";

function HeroSection() {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/assets/images/hero-bg.jpg";
    img.onload = () => setBackgroundLoaded(true);

    function lockHeroHeight() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh * 100}px`);
    }

    // ✅ Call it immediately when component mounts
    lockHeroHeight();
  }, []);

  return (
    <section className={`${styles.heroWrapper} ${backgroundLoaded ? styles.backgroundLoaded : ""}`}>
      <div className={`${styles.heroContent} ${styles.fadeInLeft} ${backgroundLoaded ? styles.visible : ""}`}>
        <h1 className={`${styles.fadeInLeft} ${backgroundLoaded ? styles.visible : ""}`}>
          Разом відновлюємо життя в Україні
        </h1>
        <p className={`${styles.fadeInLeft} ${styles.textDelay} ${backgroundLoaded ? styles.visible : ""}`}>
          Надаємо допомогу, відбудовуємо громади, повертаємо надію.
        </p>
        <Link
          href="/about"
          className={`${styles.fadeInLeft} ${styles.linkDelay} ${backgroundLoaded ? styles.visible : ""}`}
        >
          Дізнатися більше про нас
        </Link>
      </div>
      <div className={styles.bgImage}></div>
    </section>
  );
}

export default HeroSection;
