// import React, { useState, useEffect } from "react";
// import useIsMobile from "@/utils/useIsMobile";

// import Image from "next/image";
// import Button from "../../components//ui/Button";

// import { useModal } from "@/components/ui/ModalActions/ModalContext";

// import partner1 from "../../../public/assets/images/partners/partner-1.png";
// import partner2 from "../../../public/assets/images/partners/partner-2.webp";
// import partner3 from "../../../public/assets/images/partners/partner-3.png";
// import partner4 from "../../../public/assets/images/partners/partner-4.png";
// import partner5 from "../../../public/assets/images/partners/partner-5.svg";
// import partner6 from "../../../public/assets/images/partners/partner-6.png";
// import partner7 from "../../../public/assets/images/partners/partner-7.jpg";
// import partner8 from "../../../public/assets/images/partners/partner-8.png";
// import partner9 from "../../../public/assets/images/partners/partner-9.png";
// import partner10 from "../../../public/assets/images/partners/partner-10.png";
// import partner11 from "../../../public/assets/images/partners/partner-11.png";
// import partner12 from "../../../public/assets/images/partners/partner-12.png";
// import partner13 from "../../../public/assets/images/partners/partner-13.png";
// import partner14 from "../../../public/assets/images/partners/partner-14.png";
// import partner15 from "../../../public/assets/images/partners/partner-15.png";
// import partner16 from "../../../public/assets/images/partners/partner-16.png";
// import partner17 from "../../../public/assets/images/partners/partner-17.svg";
// import partner18 from "../../../public/assets/images/partners/partner-18.png";
// import partner19 from "../../../public/assets/images/partners/partner-19.svg";

// import * as styles from "./OurPartners.module.scss";

// function OurPartners() {
//   const { openModal } = useModal();
//   const isMobile = useIsMobile(1200);

//   const partnersBtnText = "Стати партнером";
//   const partnersBtnType = "secondary";
//   // const partnersBtnLink = "/about#ihelp-form:become-a-partner";

//   // useEffect(() => {
//   //   const handleResize = () => {
//   //     setIsMobile(window.innerWidth <= 1200);
//   //   };

//   //   handleResize(); // Set initial value on mount

//   //   window.addEventListener("resize", handleResize);
//   //   return () => window.removeEventListener("resize", handleResize);
//   // }, []);

//   // useEffect(() => {
//   //   const handleResize = () => {
//   //     setIsMobile(window.innerWidth <= 1200);
//   //     if (window.innerWidth > 1200) {
//   //       setIsMobile(false);
//   //     }
//   //   };

//   //   window.addEventListener("resize", handleResize);
//   //   return () => window.removeEventListener("resize", handleResize);
//   // }, []);

//   return (
//     <section className={styles.partnersSection}>
//       <div className={styles.partnersInfo}>
//         <h3>Нам допомагають</h3>
//         <hr />
//         <p>
//           Ми вдячно відзначаємо тих, хто йде з нами пліч-о-пліч: спонсорів, бізнес-структури, волонтерські центри й
//           суспільні організації. Завдяки ним ми маємо змогу реалізовувати важливі соціальні проєкти, допомагати тим, хто
//           цього найбільше потребує, та змінювати життя людей на краще.
//         </p>
//         {!isMobile && <Button type={partnersBtnType} text={partnersBtnText} onClick={() => openModal("partner")} />}
//       </div>

//       <div className={styles.partnersGrid}>
//         <div className={styles.gridItem}>
//           <Image src={partner1} alt="Partner 1" />
//         </div>
//         <div className={styles.gridItem}>
//           <Image src={partner2} alt="Partner 2" />
//         </div>
//         <div className={styles.gridItem}>
//           <Image src={partner3} alt="Partner 3" />
//         </div>
//         <div className={styles.gridItem}>
//           <Image src={partner4} alt="Partner 4" />
//         </div>
//         <div className={styles.gridItem}>
//           <Image src={partner5} alt="Partner 5" />
//         </div>
//         <div className={styles.gridItem}>
//           <Image src={partner6} alt="Partner 6" />
//         </div>
//         <div className={styles.gridItem}>
//           <Image src={partner7} alt="Partner 7" />
//         </div>
//         <div className={styles.gridItem}>
//           <Image src={partner8} alt="Partner 8" />
//         </div>
//         <div className={styles.gridItem}>
//           <Image src={partner9} alt="Partner 9" />
//         </div>
//         <div className={styles.gridItem}>
//           <Image src={partner10} alt="Partner 10" />
//         </div>
//         <div className={styles.gridItem}>
//           <Image src={partner11} alt="Partner 11" />
//         </div>
//         <div className={styles.gridItem}>
//           <Image src={partner12} alt="Partner 12" />
//         </div>
//         <div className={styles.gridItem}>
//           <Image src={partner13} alt="Partner 13" />
//         </div>
//         <div className={styles.gridItem}>
//           <Image src={partner14} alt="Partner 14" />
//         </div>
//         <div className={styles.gridItem}>
//           <Image src={partner15} alt="Partner 15" />
//         </div>
//         <div className={styles.gridItem}>
//           <Image src={partner16} alt="Partner 16" />
//         </div>
//         <div className={styles.gridItem}>
//           <Image src={partner17} alt="Partner 17" />
//         </div>
//         <div className={styles.gridItem}>
//           <Image src={partner18} alt="Partner 18" />
//         </div>
//         <div className={styles.gridItem}>
//           <Image src={partner19} alt="Partner 19" />
//         </div>
//       </div>
//       {isMobile && <Button type={partnersBtnType} text={partnersBtnText} onClick={() => openModal("partner")} />}
//     </section>
//   );
// }

// export default OurPartners;

import React from "react";
import { useTranslation } from "next-i18next";

import Image from "next/image";
import Button from "../../components//ui/Button";

import { useModal } from "@/components/ui/ModalActions/ModalContext";

import partner1 from "../../../public/assets/images/partners/partner-1.png";
import partner2 from "../../../public/assets/images/partners/partner-2.webp";
import partner3 from "../../../public/assets/images/partners/partner-3.png";
import partner4 from "../../../public/assets/images/partners/partner-4.png";
import partner5 from "../../../public/assets/images/partners/partner-5.svg";
import partner6 from "../../../public/assets/images/partners/partner-6.png";
import partner7 from "../../../public/assets/images/partners/partner-7.jpg";
import partner8 from "../../../public/assets/images/partners/partner-8.png";
import partner9 from "../../../public/assets/images/partners/partner-9.png";
import partner10 from "../../../public/assets/images/partners/partner-10.png";
import partner11 from "../../../public/assets/images/partners/partner-11.png";
import partner12 from "../../../public/assets/images/partners/partner-12.png";
import partner13 from "../../../public/assets/images/partners/partner-13.png";
import partner14 from "../../../public/assets/images/partners/partner-14.png";
import partner15 from "../../../public/assets/images/partners/partner-15.png";
import partner16 from "../../../public/assets/images/partners/partner-16.png";
import partner17 from "../../../public/assets/images/partners/partner-17.svg";
import partner18 from "../../../public/assets/images/partners/partner-18.png";
import partner19 from "../../../public/assets/images/partners/partner-19.svg";

import * as styles from "./OurPartners.module.scss";

function OurPartners() {
  const { t } = useTranslation("home");
  const { openModal } = useModal();

  const partnersBtnText = t("partners.ctaButton");
  const partnersBtnType = "secondary";

  return (
    <section className={styles.partnersSection}>
      <div className={styles.partnersInfo}>
        <h3>{t("partners.title")}</h3>
        <hr />
        <p>{t("partners.subtitle")}</p>
        <Button type={partnersBtnType} text={partnersBtnText} onClick={() => openModal("partner")} />
      </div>

      <div className={styles.partnersGrid}>
        <div className={styles.gridItem}>
          <Image src={partner1} alt="iHELP. Нова Пошта" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner2} alt="iHELP. Good Bread" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner3} alt="iHELP. Твоя Опора" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner4} alt="iHELP. L'Oréal" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner5} alt="iHELP. NOVUS" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner6} alt="iHELP. Zooleader" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner7} alt="iHELP. ЕКО маркет" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner8} alt="iHELP. LC Waikiki" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner9} alt="iHELP. ГАЗПІКСЕРВІС" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner10} alt="iHELP. IDS Ukraine" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner11} alt="iHELP. Kiwi K.A.R.E Ukraine" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner12} alt="iHELP. REBERBAR" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner13} alt="iHELP. Carlsberg" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner14} alt="iHELP. Avantage7" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner15} alt="iHELP. Lucky Pet" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner16} alt="iHELP. Єднання" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner17} alt="iHELP. Повернись до мирного життя" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner18} alt="iHELP. Social Consulting Paragraf" />
        </div>
        <div className={styles.gridItem}>
          <Image src={partner19} alt="iHELP. DAY BY DAY Благодійний фонд" />
        </div>
      </div>
    </section>
  );
}

export default OurPartners;
