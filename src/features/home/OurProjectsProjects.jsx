// import React from "react";
// import Image from "next/image";

// import { useTranslation } from "next-i18next";
// import * as styles from "./OurProjectsProjects.module.scss";

// import girlAndFlag from "../../../public/assets/images/ukrainian-girl.webp";

// function OurProjectsProjects() {
//   const { t } = useTranslation("projects");

//   const data = [
//     {
//       title: t("ourProjects.1stProject.title"),
//       description: t("ourProjects.1stProject.description"),
//       points: [
//         t("ourProjects.1stProject.point1"),
//         t("ourProjects.1stProject.point2"),
//         t("ourProjects.1stProject.point3"),
//       ],
//       bottomText: t("ourProjects.1stProject.subtitle"),
//       // image: childrenImage,
//       bgColor: "rgb(193 239 233 / 100%)",
//     },
//     {
//       title: t("ourProjects.2ndProject.title"),
//       description: t("ourProjects.2ndProject.description"),
//       points: [
//         t("ourProjects.2ndProject.point1"),
//         t("ourProjects.2ndProject.point2"),
//         t("ourProjects.2ndProject.point3"),
//         t("ourProjects.2ndProject.point4"),
//       ],
//       bottomText: t("ourProjects.2ndProject.subtitle"),
//       // image: disabledImage,
//       bgColor: "rgb(214 220 236 / 100%)",
//     },
//     {
//       title: t("ourProjects.3rdProject.title"),
//       description: t("ourProjects.3rdProject.description"),
//       points: [
//         t("ourProjects.3rdProject.point1"),
//         t("ourProjects.3rdProject.point2"),
//         t("ourProjects.3rdProject.point3"),
//       ],
//       bottomText: t("ourProjects.3rdProject.subtitle"),
//       // image: educationImage,
//       bgColor: "rgb(255 251 206 / 100%)",
//     },
//   ];
//   return (
//     <section className={styles.initiatives}>
//       <div className={styles.initiativesImageBlock}>
//         <Image src={girlAndFlag} alt={t("ourProjects.imageAlt")} />
//       </div>
//       <div className={styles.initiativesBlock}>
//         {data.map((block, idx) => (
//           <div key={idx} className={styles.initiative}>
//             {/* <div className={styles.imageWrapper}>
//             <Image src={block.image} alt={block.title} />
//           </div> */}
//             <div className={styles.text} style={{ "--block-bg-color": block.bgColor }}>
//               <h3>{block.title}</h3>
//               <p>{block.description}</p>
//               <ul>
//                 {block.points.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//               <p className={styles.impact}>{block.bottomText}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default OurProjectsProjects;

import React from "react";

import Image from "next/image";

import iconFood from "../../../public/assets/icons/food.png";
import iconVeteran from "../../../public/assets/icons/veteran.png";
import iconKids from "../../../public/assets/icons/kids.png";
import iconTaxi from "../../../public/assets/icons/taxi.png";

import { useTranslation } from "next-i18next";
import * as styles from "./OurProjectsProjects.module.scss";

function OurProjectsProjects() {
  const { t } = useTranslation("home");
  const projectsData = [
    {
      title: t("ourProjects.1stProject.title"),
      description: t("ourProjects.1stProject.description"),
      bgColor: "rgb(193 239 233 / 100%)",
      icon: iconFood,
    },
    {
      title: t("ourProjects.2ndProject.title"),
      description: t("ourProjects.2ndProject.description"),
      bgColor: "rgb(214 220 236 / 100%)",
      icon: iconTaxi,
    },
    {
      title: t("ourProjects.3rdProject.title"),
      description: t("ourProjects.3rdProject.description"),
      bgColor: "rgb(255 251 206 / 100%)",
      icon: iconKids,
    },
    {
      title: t("ourProjects.4thProject.title"),
      description: t("ourProjects.4thProject.description"),
      bgColor: "rgb(255 228 230 / 100%)",
      icon: iconVeteran,
    },
  ];

  return (
    <section className={styles.initiatives}>
      <div className={`headerBlock ${styles.headerBlockAdditional}`}>
        <h2 className="leftHeader">{t("ourProjects.title")}</h2>
        <hr />
      </div>

      <div className={styles.initiativesBlock}>
        {projectsData.map((project, idx) => (
          <article
            key={idx}
            className={`${styles.initiative} ${idx % 2 !== 0 ? styles.shifted : ""}`}
            style={{ "--block-bg-color": project.bgColor }}
          >
            <div className={`${styles.bgIcon} ${styles[`icon${idx + 1}`]}`}>
              <Image src={project.icon} alt={project.title} />
            </div>

            <div className={styles.text}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OurProjectsProjects;
