import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Image from "next/image";

import ChildrenCards from "./ChildrenCards";
import AboutOvercome from "./AboutOvercome.en";

import CtaForm from "../../components/ui/CtaForm/CtaForm";
import CtaAboutUs from "./CtaAboutUs";

import firstStepsPhoto from "../../../public/assets/images/about-initial.png";

import borodyankaFirstPhoto from "../../../public/assets/images/borodyanka-1.jpg";
import borodyankaSecondPhoto from "../../../public/assets/images/borodyanka-2.jpg";

import commonPhoto from "../../../public/assets/images/common-photo.png";
import regionFirstPhoto from "../../../public/assets/images/ihelp-region.jpg";
import regionSecondPhoto from "../../../public/assets/images/ihelp-region2.jpg";

import hotSpotPhoto1 from "../../../public/assets/images/hotspot-1.jpg";
import hotSpotPhoto2 from "../../../public/assets/images/hotspot-2.jpg";
import hotSpotPhoto3 from "../../../public/assets/images/hotspot-3.jpg";
import hotSpotPhoto4 from "../../../public/assets/images/hotspot-4.jpg";
import hotSpotPhoto5 from "../../../public/assets/images/hotspot-5.jpg";

import iHelpTodayPhoto from "../../../public/assets/images/ihelp-today.jpg";

import * as styles from "./AboutPage.module.scss";

function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  const SCROLL_OFFSET = 75; // height of your sticky header

  useEffect(() => {
    // Update isMobile on mount and resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    handleResize(); // set initial value

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Scroll to the element if there's a hash in the URL
    if (typeof window !== "undefined") {
      const hash = window.location.hash || (router.asPath.includes("#") ? router.asPath.split("#")[1] : null);
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }
  }, [router.asPath]);

  return (
    <div className={styles.aboutPage}>
      <section className={styles.aboutHero}>
        <div>
          <h1 className={styles.title}>Charitable Foundation "IHELP"</h1>
          <span className={styles.short}>
            <b>Допомога Україні під час війни: продукти харчування, медикаменти, гуманітарні проєкти</b>
          </span>
          <p>
            When the first explosion shook Kyiv, many lives were changed forever. Tetyana Dziubenko didn't hesitate...
          </p>
        </div>
        <div className={styles.firstSteps}>
          <div className={styles.imageDescription}>
            <div className={styles.imageWrapper}>
              <Image src={firstStepsPhoto} alt="iHELP. First steps" />
            </div>
            {isMobile && (
              <span>
                Станом на березень 2022 року благодійний фонд iHELP забезпечував їжею всі бомбосховища центральної гілки
                метро Києва, допомагаючи тисячам мешканців столиці.
              </span>
            )}
          </div>
          <div className={styles.contentKyiv}>
            <h3>Перші кроки: Київ та його люди</h3>
            <p>
              З перших днів війни наша команда не зволікала й не відпочивала. Сирени, холод, страх — усе це залишалося
              позаду, коли йшлося про гуманітарну допомогу тим, хто втратив усе. Ми розносили пакунки з продуктами,
              ліками, дитячим харчуванням до сховищ у метро, шкіл, лікарень, дитячих садочків та домівок літніх людей у
              Києві. Наша волонтерська допомога мала одну просту, але життєво важливу мету: бути поряд із тими, хто
              цього найбільше потребував.
            </p>
            {!isMobile && (
              <span>
                Станом на березень 2022 року благодійний фонд iHELP забезпечував їжею всі бомбосховища центральної гілки
                метро Києва, допомагаючи тисячам мешканців столиці.
              </span>
            )}
          </div>
        </div>
        <div className={styles.contentKyivRegion}>
          <h2>Розширення горизонту: Від столиці до Бородянки</h2>
          <p>
            Після визволення Київщини наші зусилля охопили нові території. Одними з перших ми вирушили до зруйнованої
            Бородянки, де кожна вулиця дихала болем і втратою.
          </p>
          <div className={styles.borodyankaPhotos}>
            <div className={styles.imageWrapper}>
              <Image src={borodyankaFirstPhoto} alt="iHELP. Borodyanka 1" />
            </div>
            <div className={styles.imageWrapper}>
              <Image src={borodyankaSecondPhoto} alt="iHELP. Borodyanka 2" />
            </div>
          </div>
          <p>
            Благодійний фонд iHELP став міцною опорою для місцевих мешканців. З допомогою священників ПЦУ ми налагодили
            стабільну передачу гуманітарної допомоги: їжі, ковдр, ліків, одягу – всього, що могло повернути людям надію
            на завтрашній день.
          </p>
          <div className={styles.kyivRegionPhotos}>
            <div className={styles.row}>
              <div className={styles.imageWrapper}>
                <Image src={regionSecondPhoto} alt="iHELP. Kyiv Region 1" />
              </div>
              <div className={styles.imageWrapper}>
                <Image src={regionFirstPhoto} alt="iHELP. Kyiv Region 2" />
              </div>
            </div>
            <div className={styles.commonImageDescription}>
              <Image src={commonPhoto} alt="iHELP. Common photo" />
              <span>
                Завдяки храму Святих 40 мучеників Севастійських у Новобіличах, ми створили гуманітарний штаб, котрий
                став осередком підтримки та віри для мешканців регіону, що суттєво постраждав від гуманітарної кризи.
              </span>
            </div>
            <div className={styles.bgTriangleThree}></div> {/* ✅ The third triangle */}
          </div>
        </div>
      </section>
      <div className={styles.hotSpotsWrapper}>
        <div className={styles.hotSpots}>
          <div className={styles.contentHotSpots}>
            <h3>На передовій: Допомога гарячим точкам</h3>
            <p>
              Від травня 2022 року наші маршрути пролягли у найнебезпечніші гарячі точки війни, куди мало хто
              наважувався вирушити: Бахмут, Соледар, Лисичанськ, Новолуганське, Авдіївка. Ми працювали у важких умовах
              бойових дій, доставляючи гуманітарну допомогу: продукти, тактичне спорядження, медикаменти людям, котрі
              виживали під постійними обстрілами та в умовах замінованих територій.
            </p>
            <p>
              У Лисичанську старенькі батьки зверталися до нас із проханнями передати записки їх дітям поза Луганщиною,
              передчуваючи неминучу ізоляцію окупації. Це нагадувало нам, що кожен ризик волонтерів iHELP – це шанс
              врятувати чиєсь життя.
            </p>
          </div>
          <div className={styles.picCtn}>
            <figure className={styles.pic}>
              <picture>
                {/* <source srcSet="/images/slide-1.webp" type="image/webp" /> */}
                <Image
                  src={hotSpotPhoto1}
                  // alt="ihelp volunteers.Kharkiv region"
                  alt="Волонтери ihelp. Харківська область"
                  width={485}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
            </figure>

            <figure className={styles.pic}>
              <picture>
                <Image
                  src={hotSpotPhoto2}
                  // alt="ihelp volunteers. Lysychansk"
                  alt="Волонтери ihelp. Лисичанськ"
                  width={485}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
            </figure>

            <figure className={styles.pic}>
              <picture>
                <Image
                  src={hotSpotPhoto3}
                  // alt="ihelp volunteers. Avdiyivka"
                  alt="Волонтери ihelp. Авдіївка"
                  width={485}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
            </figure>

            <figure className={styles.pic}>
              <picture>
                <Image
                  src={hotSpotPhoto4}
                  // alt="ihelp volunteers. Road to Bakhmut"
                  alt="Волонтери ihelp. Дорога в Бахмут"
                  width={485}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
            </figure>

            <figure className={styles.pic}>
              <picture>
                <Image
                  src={hotSpotPhoto5}
                  // alt="ihelp volunteers. Bakhmut"
                  alt="Волонтери ihelp. Бахмут>"
                  width={485}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
            </figure>
          </div>
        </div>
      </div>
      <section className={styles.aboutHero}>
        <div className={styles.contentKhersonRegion}>
          <h2>Людські історії: Даруємо радість</h2>
          <p>
            Ми завжди пам’ятаємо: допомога — це не лише про хліб чи воду, це про підтримку, відчуття радості та
            людяності. У щойно звільнених містах Півдня України, зокрема Херсонської області, ми працювали, передаючи
            підготовлені дітьми Києва новорічні подарунки.
          </p>
          <div className={styles.cardsAndDescription}>
            <ChildrenCards />
            <div className={styles.description}>
              <p>
                Ми бачили, як нажахані війною малюки вперше за тривалий час посміхнулися. Один із них, Дмитрик, тримаючи
                подарунка у руках, сказав: «Мамо, це справжнє свято!».
              </p>
              <p>
                Такі миті не лише дарують радість малечі, але й надихають нашу команду iHELP рухатися далі, втілювати
                нові проєкти та допомагати тим, хто пережив війну, повернути віру у краще майбутнє.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AboutOvercome />
      <section className={styles.aboutHero}>
        <div className={styles.iHelpToday}>
          <h2>Сьогодення і майбутнє: Відновлення країни</h2>
          <p>
            Сьогодні ми розширюємо партнерські зв’язки, плануємо великі проєкти з відновлення та відбудови України,
            допомагаючи громадам повернутися до гідного життя. Наша діяльність охоплює відновлення житлових будинків,
            шкіл та критичної інфраструктури у Херсонській, Миколаївській, Чернігівській, Сумській, Харківській,
            Запорізькій та Одеській областях, а також у громадах сходу та півдня України, що найбільше постраждали від
            бойових дій.
          </p>
          <div className={styles.imageWrapper}>
            <Image src={iHelpTodayPhoto} alt="iHELP today" />
          </div>
          <span>
            Метою iHELP є не лише забезпечити базові потреби людини, але й створити живильне середовище, де кожен
            відчуває себе частиною сильної, єдиної України, що рухається до гідного майбутнього.
          </span>
        </div>
      </section>
      <CtaAboutUs />
      <CtaForm page={"AboutUs"} />
    </div>
  );
}

export default AboutPage;
