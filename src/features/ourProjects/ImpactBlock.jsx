// import React from "react";
// import Image from "next/image";

// import { useTranslation } from "next-i18next";
// import { useModal } from "@/components/ui/ModalActions/ModalContext";

// import * as styles from "./ImpactBlock.module.scss";
// import image from "../../../public/assets/images/our-vision.webp"; // adjust path

// function ImpactBlock() {
//   const { t } = useTranslation("projects");
//   const { openModal } = useModal();

//   return (
//     <section className={styles.ImpactBlock}>
//       <div className={styles.imageWrapper}>
//         <Image src={image} alt={t("ImpactBlock.imageAlt")} />
//       </div>
//       <div className={styles.textContent}>
//         <h2 className={styles.heading}>{t("ImpactBlock.title")}</h2>
//         <p>{t("ImpactBlock.subtitle")}</p>
//         <ul>
//           <li>{t("ImpactBlock.point1")}</li>
//           <li>{t("ImpactBlock.point2")}</li>
//         </ul>
//         <p>{t("ImpactBlock.description")}</p>
//         <p>
//           <span onClick={() => openModal("ihelp")}>{t("ImpactBlock.ctaLink")}</span>
//         </p>
//       </div>
//     </section>
//   );
// }

// export default ImpactBlock;

import react, { useState } from "react";
import Image from "next/image";

import { useTranslation } from "next-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";

import * as styles from "./ImpactBlock.module.scss";

import grannyImage from "../../../public/assets/images/granny-test.jpg";

import valentinaImage from "../../../public/assets/images/valentina.webp";
import liudmilaImage from "../../../public/assets/images/liudmila.webp";
import andriiImage from "../../../public/assets/images/andrii.webp";
import oleksandrImage from "../../../public/assets/images/oleksandr.webp";
import nadiaImage from "../../../public/assets/images/nadia.webp";

function ImpactBlock() {
  const { t } = useTranslation("projects");
  const [currentStory, setCurrentStory] = useState(0);

  const impactStats = [
    {
      number: "235414",
      label: t("impactBlock.num1"),
    },
    {
      number: "784",
      label: t("impactBlock.num2"),
    },
    {
      number: "17255",
      label: t("impactBlock.num3"),
    },
    {
      number: "34",
      label: t("impactBlock.num4"),
    },
    // {
    //   number: "500+",
    //   label: t("impactBlock.num5"),
    // },
  ];

  const stories = [
    // {
    //   image: grannyImage,
    //   imgAlt: t("impactBlock.imgAlt"),
    //   subtitle: t("impactBlock.testimonySubtitle"),
    //   testimony: t("impactBlock.testimony"),
    //   author: t("impactBlock.author"),
    //   authorData: t("impactBlock.authorData"),
    //   about: t("impactBlock.testimonyAboutAuthor"),
    // },
    {
      image: valentinaImage,
      imgAlt: t("impactBlock.valentina.imgAlt"),
      subtitle: t("impactBlock.testimonySubtitle"),
      testimony: t("impactBlock.valentina.testimony"),
      author: t("impactBlock.valentina.author"),
      authorData: t("impactBlock.valentina.authorData"),
      about: t("impactBlock.valentina.testimonyAboutAuthor"),
    },
    {
      image: liudmilaImage,
      imgAlt: t("impactBlock.liudmila.imgAlt"),
      subtitle: t("impactBlock.testimonySubtitle"),
      testimony: t("impactBlock.liudmila.testimony"),
      author: t("impactBlock.liudmila.author"),
      authorData: t("impactBlock.liudmila.authorData"),
      about: t("impactBlock.liudmila.testimonyAboutAuthor"),
    },
    {
      image: andriiImage,
      imgAlt: t("impactBlock.andrii.imgAlt"),
      subtitle: t("impactBlock.testimonySubtitle"),
      testimony: t("impactBlock.andrii.testimony"),
      author: t("impactBlock.andrii.author"),
      authorData: t("impactBlock.andrii.authorData"),
      about: t("impactBlock.andrii.testimonyAboutAuthor"),
    },
    {
      image: oleksandrImage,
      imgAlt: t("impactBlock.oleksandr.imgAlt"),
      subtitle: t("impactBlock.testimonySubtitle"),
      testimony: t("impactBlock.oleksandr.testimony"),
      author: t("impactBlock.oleksandr.author"),
      authorData: t("impactBlock.oleksandr.authorData"),
      about: t("impactBlock.oleksandr.testimonyAboutAuthor"),
    },
    {
      image: nadiaImage,
      imgAlt: t("impactBlock.nadia.imgAlt"),
      subtitle: t("impactBlock.testimonySubtitle"),
      testimony: t("impactBlock.nadia.testimony"),
      author: t("impactBlock.nadia.author"),
      authorData: t("impactBlock.nadia.authorData"),
      about: t("impactBlock.nadia.testimonyAboutAuthor"),
    },
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const goToStory = (index) => {
    setCurrentStory(index);
  };

  const story = stories[currentStory];

  // return (
  //   <section className={styles.impactBlock}>
  //     <div className={styles.container}>
  //       <div className={styles.heading}>
  //         <h2>{t("impactBlock.title")}</h2>
  //         <p>{t("impactBlock.subtitle")}</p>
  //       </div>

  //       <div className={styles.statsGrid}>
  //         {impactStats.map((item, index) => (
  //           <div key={index} className={styles.statCard}>
  //             <h3>{item.number}</h3>
  //             <p>{item.label}</p>
  //           </div>
  //         ))}
  //       </div>

  //       {/* Section Title */}
  //       <div className={styles.moreThanNumbersHeading}>
  //         <h2>{t("impactBlock.testimonyTitle")}</h2>
  //       </div>

  //       {/* Human Story */}
  //       <div className={styles.storyBlock}>
  //         <div className={styles.storyImage}>
  //           <Image src={grannyImage} alt={t("impactBlock.imgAlt")} />
  //         </div>

  //         <div className={styles.storyContent}>
  //           <span className={styles.storyLabel}>{t("impactBlock.testimonySubtitle")}</span>

  //           <blockquote>{t("impactBlock.testimony")}</blockquote>

  //           <div className={styles.person}>
  //             <strong>{t("impactBlock.author")}</strong>
  //             <span>{t("impactBlock.authorData")}</span>
  //           </div>

  //           <p>{t("impactBlock.testimonyAboutAuthor")}</p>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );

  return (
    <section className={styles.impactBlock}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>{t("impactBlock.title")}</h2>
          <p>{t("impactBlock.subtitle")}</p>
        </div>

        <div className={styles.statsGrid}>
          {impactStats.map((item, index) => (
            <div key={index} className={styles.statCard}>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Section Title */}
        <div className={styles.moreThanNumbersHeading}>
          <h2>{t("impactBlock.testimonyTitle")}</h2>
        </div>

        {/* Human Story */}
        <div className={styles.storyBlock}>
          <button className={`${styles.navButton} ${styles.prev}`} onClick={prevStory} aria-label="Previous story">
            <FaChevronLeft />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStory}
              className={styles.storySlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              <div className={styles.storyImage}>
                <Image src={story.image} alt={story.imgAlt} />
              </div>

              <div className={styles.storyContent}>
                <span className={styles.storyLabel}>{story.subtitle}</span>

                <blockquote>{story.testimony}</blockquote>

                <div className={styles.person}>
                  <strong>{story.author}</strong>
                  <span>{story.authorData}</span>
                </div>

                <p>{story.about}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button className={`${styles.navButton} ${styles.next}`} onClick={nextStory} aria-label="Next story">
            <FaChevronRight />
          </button>

          <div className={styles.dots}>
            {stories.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${currentStory === index ? styles.active : ""}`}
                onClick={() => goToStory(index)}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactBlock;
