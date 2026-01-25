import React, { useState, useEffect } from "react";

// import { useRouter } from "next/router";
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
  // const [isMobile, setIsMobile] = useState(false);
  // const router = useRouter();

  // const SCROLL_OFFSET = 75; // height of your sticky header

  // useEffect(() => {
  //   // Update isMobile on mount and resize
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 992);
  //   };

  //   handleResize(); // set initial value

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

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

  return (
    <div className={styles.aboutPage}>
      <section className={styles.aboutHero}>
        <div>
          <h1 className={styles.title}>Charitable Foundation "IHELP"</h1>
          <span className={styles.short}>
            <b>iHELP – Helping Ukraine During Wartime: Food. Medicine. Humanitarian Action.</b>
          </span>
          <p>
            When the first explosion shook Kyiv, countless lives changed in an instant. Tetiana Dziubenko didn’t
            hesitate. Alongside her family and neighbours, she began delivering food to the nearest bomb shelters,
            supporting those left homeless by the chaos. What started as a simple act of kindness soon grew into a
            mission. From that spark, the iHELP Charitable Foundation - known in Ukrainian as “Я ДОПОМАГАЮ” - was born.
            A beam of hope in the darkness of war.
          </p>
        </div>
        <div className={styles.firstSteps}>
          <div className={styles.imageDescription}>
            <div className={styles.imageWrapper}>
              <Image src={firstStepsPhoto} alt="Charitable Foundation iHELP. First steps" />
            </div>
            <span className={`${styles.text} ${styles.mobileOnly}`}>
              As of March 2022, the iHELP charity foundation has created logistics and provided food to people who lost
              their homes due to the war launched by Russia against Ukraine and were forced to live in bomb shelters.
              The food was provided to people along the central branch of the Kyiv metro, helping thousands of residents
              of the capital.
            </span>
          </div>
          <div className={styles.contentKyiv}>
            <h3>Our First Steps: Standing with Kyiv</h3>
            <span className={styles.short}>Humanitarian Aid in Kyiv: Food, medicine, and baby supplies</span>
            <p>
              From the first days of the invasion, our team never paused. Despite sirens, cold, and fear, we brought
              emergency aid to those who had lost everything. We delivered packages of food, medicine, and baby food to
              subway shelters, schools, hospitals, kindergartens, and nursing homes in Kyiv. Our volunteer work had one
              simple but vital goal: to be with those who needed it most.
            </p>
            <span className={`${styles.text} ${styles.desktopOnly}`}>
              As of March 2022, the iHELP charity foundation has created logistics and provided food to people who lost
              their homes due to the war launched by Russia against Ukraine and were forced to live in bomb shelters.
              The food was provided to people along the central branch of the Kyiv metro, helping thousands of residents
              of the capital.
            </span>
          </div>
        </div>
        <div className={styles.contentKyivRegion}>
          <h2>Widening Our Reach: From the Capital to Borodianka</h2>
          <span className={styles.short}>Aid to liberated towns in Kyiv Region: food, clothing, medicine</span>
          <p>
            After the liberation of Kyiv region, our efforts expanded to new territories. We were among the first to go
            to the destroyed Borodyanka, where every street breathed of pain and loss.
          </p>
          <div className={styles.borodyankaPhotos}>
            <div className={styles.imageWrapper}>
              <Image src={borodyankaFirstPhoto} alt="iHELP. From the Capital to Borodianka" />
            </div>
            <div className={styles.imageWrapper}>
              <Image src={borodyankaSecondPhoto} alt="iHELP were among the first to go to the destroyed Borodyanka" />
            </div>
          </div>
          <p>
            The iHELP charity foundation has become a strong support for local residents. With the help of the priests
            of the OCU, we have established a stable transfer of humanitarian aid: food, blankets, medicine, clothing -
            everything that could restore people's hope for tomorrow.
          </p>
          <div className={styles.kyivRegionPhotos}>
            <div className={styles.row}>
              <div className={styles.imageWrapper}>
                <Image src={regionSecondPhoto} alt="iHELP distributes humanitarian aid in Ivankiv" />
              </div>
              <div className={styles.imageWrapper}>
                <Image src={regionFirstPhoto} alt="iHELP delivers assistance to the elderly" />
              </div>
            </div>
            <div className={styles.commonImageDescription}>
              <Image src={commonPhoto} alt="iHELP. Preparation for the next humanitarian mission" />
              <span>
                Thanks to the Church of the Holy 40 Martyrs of Sebaste in Novobilichy, we created a humanitarian
                headquarters, which became a center of support and faith for the residents of the region, which has been
                significantly affected by the humanitarian crisis.
              </span>
            </div>
            <div className={styles.bgTriangleThree}></div> {/* ✅ The third triangle */}
          </div>
        </div>
      </section>
      <div className={styles.hotSpotsWrapper}>
        <div className={styles.hotSpots}>
          <div className={styles.contentHotSpots}>
            <h3>Frontline Action: Bringing Aid to the East</h3>
            <span className={styles.short}>
              Humanitarian missions to Bakhmut, Soledar, Pokrovsk, Lysychansk, and more
            </span>
            <p>
              After the situation in the Kyiv region stabilized, we moved east with help. Since May 2022, our routes
              have been to the most dangerous hot spots of the war, where few dared to go: Bakhmut, Soledar, Lysychansk,
              Novoluhanske, Avdiivka. We worked in difficult combat conditions, delivering humanitarian aid: food,
              tactical equipment, medicines to people who survived under constant shelling and in mined territories.
            </p>
            <p>
              In Lysychansk, elderly parents asked us to deliver notes to their children outside Luhansk, anticipating
              the inevitable isolation of the occupation. This reminded us that every risk iHELP volunteers take is a
              chance to save someone's life.
            </p>
          </div>
          <div className={styles.picCtn}>
            <figure className={styles.pic}>
              <picture>
                {/* <source srcSet="/images/slide-1.webp" type="image/webp" /> */}
                <Image
                  src={hotSpotPhoto1}
                  alt="iHELP volunteers in Kharkiv region"
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
                  alt="iHELP volunteers in Lysychansk"
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
                  alt="iHELP volunteers in Avdiivka"
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
                  alt="iHELP volunteers in Donetsk region"
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
                  alt="iHELP volunteers in Bakhmut"
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
          <h2>Human Stories: Bringing Joy</h2>
          <span className={styles.short}>
            Children’s aid in liberated regions: gifts, emotional support, and psychological care
          </span>
          <p>
            We always remember: aid is not just about bread or water, it is about support, a sense of joy and humanity.
            In the newly liberated cities of Southern Ukraine, in particular the Kherson region, we worked, delivering
            New Year's gifts prepared by the children of Kyiv.
          </p>
          <div className={styles.cardsAndDescription}>
            <ChildrenCards />
            <div className={styles.description}>
              <p>
                We saw the war-scarred children smile for the first time in a long time. One of them, Dmytryk, holding a
                gift in his hands, said: «Mom, this is a real holiday!»
              </p>
              <p>
                Such moments not only bring joy to children, but also inspire our iHELP team to move forward, implement
                new projects, and help those who survived the war regain faith in a better future.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AboutOvercome />
      <section className={styles.aboutHero}>
        <div className={styles.iHelpToday}>
          <h2>Today and Tomorrow: Rebuilding Ukraine</h2>
          <span className={styles.short}>Developing recovery projects and launching strategic partnerships</span>
          <p>
            Today, we are expanding our partnerships, planning major projects to restore and rebuild Ukraine, helping
            communities return to a dignified life. Our activities include the restoration of homes, schools, and
            critical infrastructure in Kherson, Mykolaiv, Chernihiv, Sumy, Kharkiv, Zaporizhia, and Odesa regions, as
            well as in communities in eastern and southern Ukraine that have been hardest hit by the fighting.
          </p>
          <div className={styles.imageWrapper}>
            <Image src={iHelpTodayPhoto} alt="iHELP with the leadership of the Kherson region" />
          </div>
          <span>
            The goal of iHELP is not only to provide for basic human needs, but also to create a nurturing environment
            where everyone feels part of a strong, united Ukraine moving toward a dignified future.
          </span>
        </div>
      </section>
      <CtaAboutUs />
      <CtaForm page={"Default"} />
    </div>
  );
}

export default AboutPage;
