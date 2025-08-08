import React, { useState, useEffect } from "react";
import Image from "next/image";

import { isIOS } from "@/utils/isIOS";
import { useLockHeight } from "@/utils/useLockHeight";

import * as styles from "./FrontlinePeoplePage.module.scss";
import CtaForm from "../../components/ui/CtaForm/CtaForm";

import howToHelpImg from "../../../public/assets/images/ihelp-team.jpg";
import helpHospital from "../../../public/assets/images/ihelp-hospital.png";

export default function FrontlinePeoplePage() {
  const [ios, setIos] = useState(false);
  useLockHeight();

  useEffect(() => setIos(isIOS()), []);

  return (
    <section className={styles.frontlinePeopleWrapper}>
      <div className={styles.fixBgWrapper}>
        <div className={styles.parallaxBg}></div> {/* <-- fake parallax background */}
      </div>
      <div className={styles.khersonChildrenContainer}>
        <div className={styles.title}>
          <h1>Допомога людям у прифронтових зонах, медичним закладам, рятувальникам та сім’ям із дітьми</h1>
        </div>
      </div>
      <div className={styles.blankContent}>
        <div className={styles.blankContainer}>
          <h2>Кожен крок допомоги — це крок до перемоги.</h2>
          <p>
            З перших днів війни фонд «Я ДОПОМАГАЮ» стоїть пліч-о-пліч із тими, хто цього найбільше потребує – українські
            родини на прифронтових територіях, медичні заклади, рятувальники. Ми працюємо там, де необхідна нагальна
            допомога, забезпечуємо українців життєво важливим у найтяжчих умовах.
          </p>
        </div>
      </div>
      <div className={`${styles.khersonChildrenContainer} ${styles.second}`}>
        <div className={styles.imgWrapper}>
          <div className={styles.parallaxFallback} style={{ display: ios ? "block" : "none" }}></div>
          <div className={styles.secondContainer}>
            <section className={styles.howItWorksSection}>
              <div className={styles.contentWrapper}>
                <h2 className={styles.heading}>Як ми допомагаємо?</h2>

                <div className={styles.block}>
                  <p>
                    <strong>
                      Родинам з дітьми, вразливим верствам населення на територіях де триває війна – доставляємо
                      гуманітарну допомогу:
                    </strong>
                  </p>
                  <ul>
                    <li>— Продовольство</li>
                    <li>— Свіжа питна вода</li>
                    <li>— Теплі речі</li>
                    <li>— Засоби побутової хімії</li>
                    <li>— Ліки та предмети гігієни</li>
                    <li>— Психологічна допомога</li>
                  </ul>
                </div>

                <div className={styles.block}>
                  <p>
                    <strong>Медичним закладам, котрі продовжують працювати в умовах війни:</strong>
                  </p>
                  <ul>
                    <li>— Спеціалізоване обладнання</li>
                    <li>— Медикаменти та витратні матеріали</li>
                    <li>— Евакуаційний транспорт</li>
                    <li>— Інвентар для людей із обмеженою рухомістю</li>
                  </ul>
                </div>

                <div className={styles.block}>
                  <p>
                    <strong>Рятувальникам:</strong>
                  </p>
                  <ul>
                    <li>— Генератори</li>
                    <li>— Спеціалізоване обладнання для роботи в надзвичайних умовах</li>
                    <li>— Запчастини для спеціальної техніки</li>
                  </ul>
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
            Прифронтові зони — це місця, де життя людей перетворюється на щоденну боротьбу за виживання. Зруйновані
            будинки, палаючі внаслідок обстрілів вулиці, нестача ліків і медичної допомоги, а також відсутність
            найнеобхіднішого для існування прирікають місцевих мешканців на вкрай злиденне існування.
          </p>
          <p>
            Ми не маємо права залишити цих українців наодинці з їх болем та викликами війни. Кожна допомога — це крок до
            полегшення страждань, відновлення гідності та дарунок надії до кращого майбутнього.
          </p>
        </div>
      </div>
      <section className={styles.projectResults}>
        <div className={styles.wrapper}>
          <div className={styles.shapes}>
            <span className={styles.circle}></span>
            <span className={styles.triangle}></span>
            <span className={styles.square}></span>
          </div>
          <div className={styles.container}>
            <h3 className={styles.heading}>Наші досягнення:</h3>
            <ul className={styles.resultsList}>
              <li>Створено унікальну систему розподілення допомоги мешканцям Херсонської області</li>
              <li>
                Забезпечено шлях прямого надходження медикаментів та засобів першої необхідності до медичних закладів у
                м. Херсон та цілого регіону
              </li>
              <li>
                Регулярно здійснюємо акції для підтримки родин із дітьми від українського бізнесу та з залученням
                донорської допомоги міжнародних партнерів Фонду
              </li>
            </ul>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={helpHospital} alt="Наші проєкти" />
          </div>
        </div>
      </section>
      <div className={styles.backgroundWrapper}>
        <section className={styles.howToHelp}>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>Разом до перемоги</h2>
            <p>
              Ставайте з нами зараз до підтримки тих, хто переживає найтяжчі випробування війни! Ваша участь —це
              справжній промінь надії для України. Ви осяюєте темряву, що її посіяв на нашу землю ворог. Ви – той, хто
              дає потребучим на прифронтових територіях найцінніше: світло тепла й любові.
            </p>
            <p>
              "Настав час великого вибору: або єдність і перемога та шлях до світла, або поразка, ганьба і знову довга
              дорога до волі." <em>В’ячеслав Чорновіл (1937-1999)</em>
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={howToHelpImg} alt="Наші проєкти" />
          </div>
        </section>
        <p className={styles.ctaParagraph}>
          Ставайте з нами діяти добро зараз, щоб наблизити перемогу людяності та справедливості для України!
        </p>
        <CtaForm page={"FrontlinePeople"} />
      </div>
    </section>
  );
}
