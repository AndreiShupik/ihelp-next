import React from "react";
import Image from "next/image";

import * as styles from "./OurProjectsProjects.module.scss";

// import childrenImage from "../../../public/assets/images/pr.jpg";
// import disabledImage from "../../../public/assets/images/pr.jpg";
// import educationImage from "../../../public/assets/images/pr.jpg";

import girlAndFlag from "../../../public/assets/images/ukrainian-girl.png";

const data = [
  {
    title: "1. Підтримка дітей",
    description:
      "Благодійний фонд iHELP ставить за мету створення сприятливих умов для зростання, навчання та розвитку дітей",
    points: [
      "• Шкільні набори: Канцелярські товари для дітей, щоб забезпечити рівні можливості для освіти в умовах війни.",
      "• Гігієнічні набори: Допомога у дотриманні чистоти та здорового способу життя.",
      "• Розвиваючі ігри: Розвиток креативного мислення та комунікативних навичок.",
    ],
    bottomText:
      "Ці проєкти не лише допомагають дітям, а й надають їх родинам підтримку та відчуття турботи у складні часи.",
    // image: childrenImage,
    bgColor: "rgb(193 239 233 / 100%)",
  },
  {
    title: "2. Допомога людям з інвалідністю та обмежено рухомим",
    description:
      "У часи війни особливо люди з інвалідністю зіштовхуються з додатковими труднощами у доступі до необхідних послуг та підтримки.",
    points: [
      "• Соціальне таксі та евакуація: Транспортування вразливих людей до лікарень і безпечних місць з прифронтових районів.",
      "• Доставка ліків та продуктів: Адресна підтримка для покращення повсякденного життя.",
    ],
    bottomText:
      "Ці ініціативи роблять життя людей із інвалідністю комфортнішим, безпечнішим та допомагають подолати щоденні виклики.",
    // image: disabledImage,
    bgColor: "rgb(214 220 236 / 100%)",
  },
  {
    title: "3. Сприяння освіті",
    description:
      "Освіта є ключем до майбутнього, і навіть у надзвичайних умовах діти повинні мати можливість навчатися.",
    points: [
      "• Оснащення бомбосховищ мультимедійними системами: Проведення уроків і занять у безпечних умовах під час повітряних тривог.",
      "• Психологічна допомога дітям: Підтримка емоційного здоров’я через роботу з кваліфікованими психологами.",
    ],
    bottomText:
      "Ці ініціативи забезпечують безперервне навчання та емоційне відновлення дітей, даючи їм шанс на успішне майбутнє.",
    // image: educationImage,
    bgColor: "rgb(255 251 206 / 100%)",
  },
];

function OurProjectsProjects() {
  return (
    <section className={styles.initiatives}>
      <div className={styles.initiativesImageBlock}>
        <Image src={girlAndFlag} alt="Ihelp Бус>" />
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
              <p>{block.bottomText}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurProjectsProjects;
