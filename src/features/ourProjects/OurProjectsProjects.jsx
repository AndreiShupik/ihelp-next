import React from "react";
import Image from "next/image";

import { useTranslation } from "next-i18next";
import * as styles from "./OurProjectsProjects.module.scss";

// import childrenImage from "../../../public/assets/images/pr.jpg";
// import disabledImage from "../../../public/assets/images/pr.jpg";
// import educationImage from "../../../public/assets/images/pr.jpg";

import girlAndFlag from "../../../public/assets/images/ukrainian-girl.png";

function OurProjectsProjects() {
  const { t } = useTranslation("projects");

  const data = [
    {
      title: t("ourProjects.1stProject.title"),
      description: t("ourProjects.1stProject.description"),
      points: [
        t("ourProjects.1stProject.point1"),
        t("ourProjects.1stProject.point2"),
        t("ourProjects.1stProject.point3"),
      ],
      bottomText: t("ourProjects.1stProject.subtitle"),
      // image: childrenImage,
      bgColor: "rgb(193 239 233 / 100%)",
    },
    {
      title: t("ourProjects.2ndProject.title"),
      description: t("ourProjects.2ndProject.description"),
      points: [
        t("ourProjects.2ndProject.point1"),
        t("ourProjects.2ndProject.point2"),
        t("ourProjects.2ndProject.point3"),
        t("ourProjects.2ndProject.point4"),
      ],
      bottomText: t("ourProjects.2ndProject.subtitle"),
      // image: disabledImage,
      bgColor: "rgb(214 220 236 / 100%)",
    },
    {
      title: t("ourProjects.3rdProject.title"),
      description: t("ourProjects.3rdProject.description"),
      points: [
        t("ourProjects.3rdProject.point1"),
        t("ourProjects.3rdProject.point2"),
        t("ourProjects.3rdProject.point3"),
      ],
      bottomText: t("ourProjects.3rdProject.subtitle"),
      // image: educationImage,
      bgColor: "rgb(255 251 206 / 100%)",
    },
  ];
  return (
    <section className={styles.initiatives}>
      <div className={styles.initiativesImageBlock}>
        <Image src={girlAndFlag} alt={t("ourProjects.imageAlt")} />
      </div>
      <div className={styles.initiativesBlock}>
        {data.map((block, idx) => (
          <div key={idx} className={styles.initiative}>
            {/* <div className={styles.imageWrapper}>
            <Image src={block.image} alt={block.title} />
          </div> */}
            <div className={styles.text} style={{ "--block-bg-color": block.bgColor }}>
              <h3>{block.title}</h3>
              <p>{block.description}</p>
              <ul>
                {block.points.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className={styles.impact}>{block.bottomText}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurProjectsProjects;
