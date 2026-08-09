import React, { useState, useEffect, useRef } from "react";

// import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import ChildrenCards from "./ChildrenCards";
import AboutOvercome from "./AboutOvercome.ua";

import CtaForm from "../../components/ui/CtaForm/CtaForm";
import CtaAboutUs from "./CtaAboutUs";

import AboutMainPhoto from "../../../public/assets/images/about-main.webp";

import pillarOne from "../../../public/assets/images/pillar-1.png";
import pillarTwo from "../../../public/assets/images/pillar-2.png";
import pillarThree from "../../../public/assets/images/pillar-3.png";

import firstStepsPhoto from "../../../public/assets/images/about-initial.webp";

import borodyankaFirstPhoto from "../../../public/assets/images/borodyanka-1.webp";
import borodyankaSecondPhoto from "../../../public/assets/images/borodyanka-2.webp";

import commonPhoto from "../../../public/assets/images/common-photo.webp";
import regionFirstPhoto from "../../../public/assets/images/ihelp-region.webp";
import regionSecondPhoto from "../../../public/assets/images/ihelp-region2.webp";

import hotSpotPhoto1 from "../../../public/assets/images/hotspot-1.webp";
import hotSpotPhoto2 from "../../../public/assets/images/hotspot-2.webp";
import hotSpotPhoto3 from "../../../public/assets/images/hotspot-3.webp";
import hotSpotPhoto4 from "../../../public/assets/images/hotspot-4.webp";
import hotSpotPhoto5 from "../../../public/assets/images/hotspot-5.webp";

import iHelpTodayPhoto from "../../../public/assets/images/ihelp-today.webp";

import * as styles from "./AboutPage.module.scss";

function AboutPage() {
  const [showHistory, setShowHistory] = useState(false);
  const historyRef = useRef(null);
  // const router = useRouter();

  // const SCROLL_OFFSET = 75; // height of your sticky header

  // useEffect(() => {
  //   // Scroll to the element if there's a hash in the URL
  //   if (typeof window !== "undefined") {
  //     const hash = window.location.hash || (router.asPath.includes("#") ? router.asPath.split("#")[1] : null);
  //     if (hash) {
  //       const el = document.getElementById(hash);
  //       if (el) {
  //         const y = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  //         window.scrollTo({ top: y, behavior: "smooth" });
  //       }
  //     }
  //   }
  // }, [router.asPath]);

  const handleJourneyClick = (e) => {
    e.preventDefault();

    setShowHistory(true);

    setTimeout(() => {
      const headerOffset = 100; // підлаштуй під висоту свого хедера
      const elementPosition = historyRef.current.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className={styles.aboutPage}>
      <section className={styles.aboutFoundation} aria-labelledby="about-foundation-heading">
        <div className={styles.foundationContainer}>
          <div className={`${styles.foundationImageSection} ${styles.imageDesktop}`}>
            <Image className={styles.foundationImage} src={AboutMainPhoto} alt="Благодійний фонд iHELP. Про нас" />
          </div>

          <div className={styles.foundationContentSection}>
            <h1 id="about-foundation-heading" className="leftHeader">
              Про Благодійний Фонд iHELP
            </h1>
            <hr />

            <p className={styles.foundationDescription}>
              «Я ДОПОМАГАЮ» – це український благодійний фонд, що займається зміцненням людей та громад, постраждалих
              від війни. Наша робота втілює гуманітарну діяльність, розширення громадянських можливостей та відновлення
              громад, допомагаючи людям відновити своє життя з гідністю, одночасно сприяючи стійкості та самостійності
              громади.
            </p>

            <div className={`${styles.foundationImageSection} ${styles.imageMobile}`}>
              <Image className={styles.foundationImage} src={AboutMainPhoto} alt="Благодійний фонд iHELP. Про нас" />
            </div>

            <div className={styles.foundationInfoGrid}>
              <div className={styles.foundationCard}>
                <h3 className={styles.foundationCardTitle}>Наша місія</h3>
                <p className={styles.foundationCardText}>
                  Ми надаємо гуманітарну допомогу, освітні матеріали та підтримку у відновленні громадам, постраждалим
                  від війни.
                </p>
              </div>

              <div className={styles.foundationCard}>
                <h3 className={styles.foundationCardTitle}>Наша візія</h3>
                <p className={styles.foundationCardText}>
                  Стійка, інклюзивна Україна, де кожна людина може жити гідно, водночас роблячи свій внесок у
                  відновлення країни.
                </p>
              </div>
            </div>

            <div className={styles.foundationPillars}>
              <h3 className={styles.foundationSectionTitle}>Основні принципи</h3>

              <ul className={styles.foundationPillarsList}>
                <li className={styles.pillarOne}>
                  <span className={styles.pillarIcon} aria-hidden="true">
                    <Image src={pillarOne} alt="Перший принцип" />
                  </span>

                  <div className={styles.pillarContent}>
                    <h4>Гуманітарна підтримка та захист</h4>
                    <p>
                      Надання своєчасної допомоги, орієнтованої на гідність, людям, постраждалим від конфлікту. Ми
                      забезпечуємо, щоб люди могли безпечно задовольнити свої основні потреби та отримати доступ до
                      послуг захисту та охорони здоров'я, які захищають їхні права та благополуччя.
                    </p>
                  </div>
                </li>

                <li className={styles.pillarTwo}>
                  <span className={styles.pillarIcon} aria-hidden="true">
                    <Image src={pillarTwo} alt="Другий принцип" />
                  </span>

                  <div className={styles.pillarContent}>
                    <h4>Освіта, лідерство та розширення прав і можливостей громади</h4>
                    <p>
                      Розробка та впровадження навчальних програм, що зміцнюють знання, лідерство та громадянську
                      участь. За допомогою навчання, наставництва та громадських ініціатив ми надаємо людям навичок та
                      впевненості, щоб вони могли брати активну участь у формуванні своїх громад.
                    </p>
                  </div>
                </li>

                <li className={styles.pillarThree}>
                  <span className={styles.pillarIcon} aria-hidden="true">
                    <Image src={pillarThree} alt="Третій принцип" />
                  </span>

                  <div className={styles.pillarContent}>
                    <h4>Відновлення громади та зміцнення громадянського суспільства</h4>
                    <p>
                      Підтримуємо громади у відновленні довіри, зміцненні місцевих мереж та створенні інклюзивних
                      просторів для діалогу та співпраці. Ми тісно співпрацюємо з місцевою владою, волонтерами та
                      організаціями громадянського суспільства для сприяння соціальній згуртованості, підзвітності та
                      довгостроковій стійкості.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.foundationCommitment}>
              <p className={styles.foundationCommitmentText}>
                {" "}
                Ми дотримуємося гуманітарних принципів, людино-орієнтованого підходу, підзвітності перед постраждалими
                людьми та програмної прозорості.
              </p>
            </div>
          </div>
        </div>
        {!showHistory && (
          <div className={styles.jorneyLinkBlock}>
            <h3 className="leftHeader">Наша подорож</h3>
            <p>
              З 2022 року діяльність I HELP трансформувалася з термінового реагування на виклики війни у масштабну
              гуманітарну місію. Ми не лише доставляємо життєво необхідну допомогу, а й запустили «Соціальне таксі» для
              вразливих верств населення, підтримуємо освіту дітей та створюємо простори для ветеранів і їхніх родин.
              Кожен наш крок - це прояв незламності, співчуття та сили єдності заради відновлення України з гідністю та
              надією.{" "}
              <Link href="#" className={styles.foundationJourneyLink} onClick={handleJourneyClick}>
                Дізнайтеся більше про I HELP за посиланням…
              </Link>
            </p>
          </div>
        )}
      </section>

      <section ref={historyRef} className={`${styles.historyBlock} ${showHistory ? styles.historyBlockVisible : ""}`}>
        <section className={styles.aboutHero}>
          <div>
            <h3 className={styles.title}>Наша подорож</h3>
            <span className={styles.short}>
              Допомога Україні під час війни: продукти харчування, медикаменти, гуманітарні проєкти
            </span>
            <p>
              Коли перший вибух сколихнув Київ, життя багатьох змінилося назавжди. Тетяна Дзюбенко не вагалася. Разом із
              рідними та сусідами вона почала приносити їжу до найближчих укриттів, підтримуючи тих, хто залишився без
              дому. Що починалося як маленький жест людяності та гуманітарної допомоги, швидко переросло у велику
              справу. Так народився благодійний фонд в Україні, iHELP, відомий також як «Я ДОПОМАГАЮ» - промінь надії у
              темряві війни.
            </p>
          </div>
          <div className={styles.firstSteps}>
            <div className={styles.imageDescription}>
              <div className={styles.imageWrapper}>
                <Image src={firstStepsPhoto} alt="Благодійний фонд iHELP. Перші кроки" />
              </div>
              <span className={`${styles.text} ${styles.mobileOnly}`}>
                Станом на березень 2022 року благодійний фонд iHELP створив логістику забезпечення та надавав їжу людям,
                які втратили житло через війну яку розпочала росія проти України та змушені були жити в бомбосховищах.
                Їжа надавалась людям по центральної гілці метро Києва, допомагаючи тисячам мешканців столиці.
              </span>
            </div>
            <div className={styles.contentKyiv}>
              <h3>Перші кроки: Київ та його люди</h3>
              <span className={styles.short}>
                Гуманітарна допомога у Києві під час війни: продукти, ліки, дитяче харчування
              </span>
              <p>
                З перших днів війни наша команда не зволікала й не відпочивала. Сирени, холод, страх - усе це залишалося
                позаду, коли йшлося про гуманітарну допомогу тим, хто втратив усе. Ми розносили пакунки з продуктами,
                ліками, дитячим харчуванням до сховищ у метро, шкіл, лікарень, дитячих садочків та домівок літніх людей
                у Києві. Наша волонтерська допомога мала одну просту, але життєво важливу мету: бути поряд із тими, хто
                цього найбільше потребував.
              </p>
              <span className={`${styles.text} ${styles.desktopOnly}`}>
                Станом на березень 2022 року благодійний фонд iHELP створив логістику забезпечення та надавав їжу людям,
                які втратили житло через війну яку розпочала росія проти України та змушені були жити в бомбосховищах.
                Їжа надавалась людям по центральної гілці метро Києва, допомагаючи тисячам мешканців столиці.
              </span>
            </div>
          </div>
          <div className={styles.contentKyivRegion}>
            <h2>Розширення горизонту: Від столиці до Бородянки</h2>
            <span className={styles.short}>
              Допомога постраждалим у звільнених містах Київщини: Бородянка, їжа, одяг, медикаменти
            </span>
            <p>
              Після визволення Київщини наші зусилля охопили нові території. Одними з перших ми вирушили до зруйнованої
              Бородянки, де кожна вулиця дихала болем і втратою.
            </p>
            <div className={styles.borodyankaPhotos}>
              <div className={styles.imageWrapper}>
                <Image src={borodyankaFirstPhoto} alt="iHELP. Від столиці до Бородянки" />
              </div>
              <div className={styles.imageWrapper}>
                <Image src={borodyankaSecondPhoto} alt="iHELP одними з перших вирушили до зруйнованої Бородянки" />
              </div>
            </div>
            <p>
              Благодійний фонд iHELP став міцною опорою для місцевих мешканців. З допомогою священників ПЦУ ми
              налагодили стабільну передачу гуманітарної допомоги: їжі, ковдр, ліків, одягу – всього, що могло повернути
              людям надію на завтрашній день.
            </p>
            <div className={styles.kyivRegionPhotos}>
              <div className={styles.row}>
                <div className={styles.imageWrapper}>
                  <Image src={regionSecondPhoto} alt="iHELP роздає гуманітарну допомогу в Іванкові" />
                </div>
                <div className={styles.imageWrapper}>
                  <Image src={regionFirstPhoto} alt="iHELP надає допомогу людям похилого віку" />
                </div>
              </div>
              <div className={styles.commonImageDescription}>
                <Image src={commonPhoto} alt="iHELP. Підготовка до чергової гуманітарної місії" />
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
              <span className={styles.short}>
                Гуманітарна допомога у Бахмуті, Соледарі, Покровську, Лисичанську та інших зонах бойових дій на сході
                України
              </span>
              <p>
                По стабілізації ситуації в Київській області му рушили з допомогою на схід. Від травня 2022 року наші
                маршрути пролягли у найнебезпечніші гарячі точки війни, куди мало хто наважувався вирушити: Бахмут,
                Соледар, Лисичанськ, Новолуганське, Авдіївка. Ми працювали у важких умовах бойових дій, доставляючи
                гуманітарну допомогу: продукти, тактичне спорядження, медикаменти людям, котрі виживали під постійними
                обстрілами та в умовах замінованих територій.
              </p>
              <p>
                У Лисичанську старенькі батьки зверталися до нас із проханнями передати записки їх дітям поза
                Луганщиною, передчуваючи неминучу ізоляцію окупації. Це нагадувало нам, що кожен ризик волонтерів iHELP
                – це шанс врятувати чиєсь життя.
              </p>
            </div>
            <div className={styles.picCtn}>
              <figure className={styles.pic}>
                <picture>
                  {/* <source srcSet="/images/slide-1.webp" type="image/webp" /> */}
                  <Image
                    src={hotSpotPhoto1}
                    alt="Волонтери iHELP у Харківській області"
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
                    alt="Волонтери iHELP у Лисичанську"
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
                    alt="Волонтери iHELP в Авдіївці"
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
                    alt="Волонтери iHELP у Донецькій області"
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
                    alt="Волонтери iHELP у Бахмуті"
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
            <span className={styles.short}>
              Гуманітарна допомога дітям у постраждалих регіонах України: новорічні подарунки, емоційна підтримка та
              психологічна допомога
            </span>
            <p>
              Ми завжди пам’ятаємо: допомога - це не лише про хліб чи воду, це про підтримку, відчуття радості та
              людяності. У щойно звільнених містах Півдня України, зокрема Херсонської області, ми працювали, передаючи
              підготовлені дітьми Києва новорічні подарунки.
            </p>
            <div className={styles.cardsAndDescription}>
              <ChildrenCards />
              <div className={styles.description}>
                <p>
                  Ми бачили, як нажахані війною малюки вперше за тривалий час посміхнулися. Один із них, Дмитрик,
                  тримаючи подарунка у руках, сказав: «Мамо, це справжнє свято!».
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
            <span className={styles.short}>
              Розробка проєктів з відновлення зруйнованих громад України та реалізація партнерських ініціатив
            </span>
            <p>
              Сьогодні ми розширюємо партнерські зв’язки, плануємо великі проєкти з відновлення та відбудови України,
              допомагаючи громадам повернутися до гідного життя. Наша діяльність охоплює відновлення житлових будинків,
              шкіл та критичної інфраструктури у Херсонській, Миколаївській, Чернігівській, Сумській, Харківській,
              Запорізькій та Одеській областях, а також у громадах сходу та півдня України, що найбільше постраждали від
              бойових дій.
            </p>
            <div className={styles.imageWrapper}>
              <Image src={iHelpTodayPhoto} alt="iHELP із керівництвом Херсонської області." />
            </div>
            <span>
              Метою iHELP є не лише забезпечити базові потреби людини, але й створити живильне середовище, де кожен
              відчуває себе частиною сильної, єдиної України, що рухається до гідного майбутнього.
            </span>
          </div>
        </section>
      </section>

      <CtaAboutUs />
      <CtaForm page={"Default"} />
    </div>
  );
}

export default AboutPage;
