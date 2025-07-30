import React, { useEffect } from "react";
import Image from "next/image";

import * as styles from "./KhersonChildrenPage.module.scss";

import CtaForm from "../../components/ui/CtaForm/CtaForm";
import howToHelpImg from "../../../public/assets/images/how-help.jpg";

export default function KhersonChildrenPage() {
  useEffect(() => {
    function lockHeroHeight() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh * 100}px`);
    }

    // ✅ Call it immediately when component mounts
    lockHeroHeight();
  }, []);

  // useEffect(() => {
  //   const isIOS = typeof window !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  //   if (isIOS) {
  //     document.body.classList.add("ios-device");
  //   }
  // }, []);

  const isIOS =
    typeof window !== "undefined" &&
    (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.userAgent.includes("Macintosh") && "ontouchend" in document));

  return (
    <main>
      <section className={styles.khersonChildrenWrapper}>
        <div className={styles.fixBgWrapper}>
          <div className={styles.parallaxBg}></div> {/* <-- fake parallax background */}
        </div>
        <div className={styles.khersonChildrenContainer}>
          <div className={styles.title}>
            <h1>Дітям Херсонщини від дітей Києва</h1>
            <h2>Тепло дитячих сердець без меж</h2>
          </div>
        </div>
        <div className={styles.blankContent}>
          <div className={styles.blankContainer}>
            <p>
              <strong>"Дітям Херсонщини від дітей Києва"</strong> — це ініціатива, що єднає родини столиці з їхніми
              однолітками, які переживають війну в прифронтових районах Херсонщини. Цей проєкт не лише забезпечує дітей
              усім необхідним для життя, навчання та розвитку, а й додає їм віри, підтримки й переконання, що вони не
              залишені сам на сам із труднощами.
            </p>
          </div>
        </div>
        <div className={`${styles.khersonChildrenContainer} ${styles.second}`}>
          <div className={styles.imgWrapper}>
            <div className={styles.parallaxFallback} style={{ display: isIOS ? "block" : "none" }}></div>
            <div className={styles.secondContainer}>
              <section className={styles.howItWorksSection}>
                <div className={styles.shapes}>
                  <span className={styles.circle}></span>
                  <span className={styles.triangle}></span>
                  <span className={styles.square}></span>
                </div>

                <div className={styles.contentWrapper}>
                  <h2 className={styles.heading}>Як це працює?</h2>

                  <div className={styles.block}>
                    <h3>З Києва — з любов’ю</h3>
                    <p>
                      Діти Києва разом із батьками, вчителями та адміністраціями навчальних закладів збирають допомогу,
                      що справді потрібна:
                    </p>
                    <ul>
                      <li>Одяг</li>
                      <li>Іграшки</li>
                      <li>Канцелярське приладдя</li>
                      <li>Настільні ігри</li>
                      <li>Засоби гігієни</li>
                      <li>Смаколики</li>
                      <li>Книжки</li>
                    </ul>
                    <p>
                      Це дає дітям Херсонщини змогу вчитися, зростати, жити гідно та відчувати турботу й радість,
                      знаючи, що навіть у найтяжчі часи вони не полишені на самоті з труднощами.
                    </p>
                  </div>

                  <div className={styles.block}>
                    <h3>Доставка допомоги</h3>
                    <p>
                      Волонтери iHELP організовують доставку зібраної допомоги й особисто передають подарунки дітям у
                      громадах, що зазнали найбільших ударів війни.
                    </p>
                  </div>

                  <div className={styles.block}>
                    <h3>Листи підтримки</h3>
                    <p>
                      Кожен пакунок супроводжується листами та малюнками від дітей Києва, аби між ними народжувався
                      зв’язок підтримки та єдності, що долає будь-яку відстань.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className={styles.blankContent}>
          <div className={styles.blankContainer}>
            <h3>Чому це важливо?</h3>
            <p>
              Проєкт формує культуру взаємодопомоги, єдності та підтримки. Війна глибоко ранить дитячі серця, і найкращі
              ліки — це щира турбота, яка йде від дітей до дітей.
            </p>
            <p>
              Ця підтримка не просто дає відчуття єдності — вона вчить співчуттю, відповідальності й спільній праці
              задля майбутнього України.
            </p>
          </div>
        </div>
        <section className={styles.projectResults}>
          <div className={styles.container}>
            <h3 className={styles.heading}>Результати проєкту</h3>
            <ul className={styles.resultsList}>
              <li>
                <span className={styles.star}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#22aeff">
                    <path d="M12 2l2.9 6.9L22 10.3l-5 5 1.2 7L12 18l-6.2 4.3L7 15.3l-5-5 7.1-1.4z" />
                  </svg>
                </span>
                13 091 подарунок вже передано дітям — це не просто речі, а необхідне для життя, навчання та розвитку, що
                додає їм упевненості й дає змогу рухатися вперед.
              </li>
              <li>
                <span className={styles.star}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#22aeff">
                    <path d="M12 2l2.9 6.9L22 10.3l-5 5 1.2 7L12 18l-6.2 4.3L7 15.3l-5-5 7.1-1.4z" />
                  </svg>
                </span>
                Діти Києва вчаться допомагати іншим, виховуючи в собі відповідальність, людяність та чуйність до
                ближнього.
              </li>
              <li>
                <span className={styles.star}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#22aeff">
                    <path d="M12 2l2.9 6.9L22 10.3l-5 5 1.2 7L12 18l-6.2 4.3L7 15.3l-5-5 7.1-1.4z" />
                  </svg>
                </span>
                До ініціативи долучаються не лише діти, а й дорослі, бізнес і міжнародні партнери, адже добро єднає
                серця й надихає на нові добрі справи.
              </li>
            </ul>
          </div>
        </section>
        <div className={styles.backgroundWrapper}>
          <section className={styles.howToHelp}>
            <div className={styles.imageWrapper}>
              <Image src={howToHelpImg} alt="Наші проєкти" />
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.heading}>Як можна допомогти?</h2>
              <ul>
                <li>Долучіться до збору: Приєднуйтесь до наших акцій — разом ми зможемо зробити більше.</li>
                <li>Фінансова підтримка: Ваш внесок допоможе закупити необхідне для дітей у Херсонській області.</li>
                <li>
                  Створіть зв’язок: Надихніть своїх дітей долучитися до акції — нехай вони напишуть листа чи намалюють
                  малюнка для тих, хто цього найбільше потребує.
                </li>
              </ul>
            </div>
          </section>
          <section className={styles.ctaBlock}>
            <h2>Долучайтеся до справжньої допомоги!</h2>
            <p>
              Ваш внесок — це реальна підтримка дітей Херсонщини. Разом ми забезпечимо їм необхідне для життя, навчання
              та розвитку.
            </p>
            <p>
              <strong>Приєднуйтесь сьогодні — зробімо важливе разом!</strong>
            </p>
          </section>
          <CtaForm page={"KhersonChildren"} />
        </div>
      </section>
    </main>
  );
}
