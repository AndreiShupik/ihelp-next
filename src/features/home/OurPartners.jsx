import React, { useState, useEffect } from "react";
import Image from "next/image";

import Button from "../../components//ui/Button";

import partner1st from "../../../public/assets/images/partners/partner-1.png";
import partner2nd from "../../../public/assets/images/partners/partner-2.svg";
import partner3rd from "../../../public/assets/images/partners/partner-3.webp";

import * as styles from "./OurPartners.module.scss";

function OurPartners() {
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const [isMobile, setIsMobile] = useState(false);

  const partnersBtnText = "Стати партнером";
  const partnersBtnType = "secondary";
  const partnersBtnLink = "/about#ihelp-form:become-a-partner";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    handleResize(); // Set initial value on mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 1200);
  //     if (window.innerWidth > 1200) {
  //       setIsMobile(false);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <section className={styles.partnersSection}>
      <div className={styles.partnersInfo}>
        <h3>Наші партнери</h3>
        <hr />
        <p>
          Ми вдячно відзначаємо тих, хто йде з нами пліч-о-пліч: спонсорів, бізнес-структури, волонтерські центри й
          суспільні організації. Завдяки ним ми маємо змогу реалізовувати важливі соціальні проєкти, допомагати тим, хто
          цього найбільше потребує, та змінювати життя людей на краще.
        </p>
        {!isMobile && <Button type={partnersBtnType} text={partnersBtnText} link={partnersBtnLink} />}
      </div>

      <div className={styles.partnersGrid}>
        <div className={styles.gridItem}>
          <Image src={partner1st} alt="Partner 1" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner2nd} alt="Partner 2" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner3rd} alt="Partner 3" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner1st} alt="Partner 4" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner2nd} alt="Partner 5" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner3rd} alt="Partner 6" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner1st} alt="Partner 7" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner2nd} alt="Partner 8" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner3rd} alt="Partner 9" />
        </div>
      </div>
      {isMobile && <Button type={partnersBtnType} text={partnersBtnText} link={partnersBtnLink} />}
    </section>
  );
}

export default OurPartners;
