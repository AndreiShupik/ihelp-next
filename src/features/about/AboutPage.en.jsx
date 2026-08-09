import React, { useState, useEffect, useRef } from "react";

// import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import ChildrenCards from "./ChildrenCards";
import AboutOvercome from "./AboutOvercome.en";

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
            <Image className={styles.foundationImage} src={AboutMainPhoto} alt="iHELP Charity Foundation. About us" />
          </div>

          <div className={styles.foundationContentSection}>
            <h1 id="about-foundation-heading" className="leftHeader">
              About I HELP
            </h1>
            <hr />

            <p className={styles.foundationDescription}>
              I HELP is a Ukrainian charitable foundation dedicated to strengthening people and communities affected by
              the war. Our work embodies humanitarian action, civic empowerment, and community recovery, helping
              individuals rebuild their lives with dignity while fostering resilience and community self-reliance.
            </p>

            <div className={`${styles.foundationImageSection} ${styles.imageMobile}`}>
              <Image className={styles.foundationImage} src={AboutMainPhoto} alt="iHELP Charity Foundation. About us" />
            </div>

            <div className={styles.foundationInfoGrid}>
              <div className={styles.foundationCard}>
                <h3 className={styles.foundationCardTitle}>Our Mission</h3>
                <p className={styles.foundationCardText}>
                  We deliver humanitarian assistance, education supplies, and recovery support to communities affected
                  by the war.
                </p>
              </div>

              <div className={styles.foundationCard}>
                <h3 className={styles.foundationCardTitle}>Our Vision</h3>
                <p className={styles.foundationCardText}>
                  A resilient, inclusive Ukraine where every person can live with dignity while contributing to the
                  recovery of the country.
                </p>
              </div>
            </div>

            <div className={styles.foundationPillars}>
              <h3 className={styles.foundationSectionTitle}>Core Pillars</h3>

              <ul className={styles.foundationPillarsList}>
                <li className={styles.pillarOne}>
                  <span className={styles.pillarIcon} aria-hidden="true">
                    <Image src={pillarOne} alt="Pillar one" />
                  </span>

                  <div className={styles.pillarContent}>
                    <h4>Humanitarian Support &amp; Protection</h4>
                    <p>
                      Providing timely, dignity-centered assistance to conflict-affected people. We ensure people can
                      meet their basic needs safely and access protection and health services that uphold their rights
                      and well-being.
                    </p>
                  </div>
                </li>

                <li className={styles.pillarTwo}>
                  <span className={styles.pillarIcon} aria-hidden="true">
                    <Image src={pillarTwo} alt="Pillar two" />
                  </span>

                  <div className={styles.pillarContent}>
                    <h4>Education, Leadership, &amp; Community Empowerment</h4>
                    <p>
                      Designing and delivering learning programmes that strengthen knowledge, leadership, and civic
                      participation. Through training, mentorship, and community-driven initiatives, we equip people
                      with the skills and confidence to take an active role in shaping their communities.
                    </p>
                  </div>
                </li>

                <li className={styles.pillarThree}>
                  <span className={styles.pillarIcon} aria-hidden="true">
                    <Image src={pillarThree} alt="Pillar three" />
                  </span>

                  <div className={styles.pillarContent}>
                    <h4>Community Recovery and Civil Society Strengthening</h4>
                    <p>
                      Supporting communities as they rebuild trust, strengthen local networks, and create inclusive
                      spaces for dialogue and collaboration. We work closely with local authorities, volunteers, and
                      civil society organizations to foster social cohesion, accountability, and long-term resilience.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.foundationCommitment}>
              {/* <h3 className={styles.foundationSectionTitle}>Commitment</h3> */}

              <p className={styles.foundationCommitmentText}>
                We are committed to the Humanitarian Principles, the People-Centered Approach, Accountability to
                Affected People, and Programmatic Transparency.
              </p>
            </div>
          </div>
        </div>
        {!showHistory && (
          <div className={styles.jorneyLinkBlock}>
            <h3 className="leftHeader">Our Journey</h3>
            <hr />
            <p>
              Since 2022, I HELP has transformed from urgent wartime response into a broader humanitarian mission,
              delivering life‑saving aid, launching the Social Taxi for vulnerable people, supporting children’s
              education, and creating spaces for veterans and families. Every step reflects resilience, compassion, and
              the power of standing together to rebuild Ukraine with dignity and hope.{" "}
              <Link href="#" className={styles.foundationJourneyLink} onClick={handleJourneyClick}>
                Click here to know more about I HELP…
              </Link>
            </p>
          </div>
        )}
      </section>

      <section ref={historyRef} className={`${styles.historyBlock} ${showHistory ? styles.historyBlockVisible : ""}`}>
        <section className={styles.aboutHero}>
          <div>
            <h2 className={styles.title}>Our Journey</h2>
            <span className={styles.short}>
              iHELP – Helping Ukraine During Wartime: Food. Medicine. Humanitarian Action.
            </span>
            <p>
              When the first explosion shook Kyiv, countless lives changed in an instant. Tetiana Dziubenko didn’t
              hesitate. Alongside her family and neighbours, she began delivering food to the nearest bomb shelters,
              supporting those left homeless by the chaos. What started as a simple act of kindness soon grew into a
              mission. From that spark, the iHELP Charitable Foundation - known in Ukrainian as “Я ДОПОМАГАЮ” - was
              born. A beam of hope in the darkness of war.
            </p>
          </div>
          <div className={styles.firstSteps}>
            <div className={styles.imageDescription}>
              <div className={styles.imageWrapper}>
                <Image src={firstStepsPhoto} alt="Charitable Foundation iHELP. First steps" />
              </div>
              <span className={`${styles.text} ${styles.mobileOnly}`}>
                As of March 2022, the iHELP charity foundation has created logistics and provided food to people who
                lost their homes due to the war launched by Russia against Ukraine and were forced to live in bomb
                shelters. The food was provided to people along the central branch of the Kyiv metro, helping thousands
                of residents of the capital.
              </span>
            </div>
            <div className={styles.contentKyiv}>
              <h3>Our First Steps: Standing with Kyiv</h3>
              <span className={styles.short}>Humanitarian Aid in Kyiv: Food, medicine, and baby supplies</span>
              <p>
                From the first days of the invasion, our team never paused. Despite sirens, cold, and fear, we brought
                emergency aid to those who had lost everything. We delivered packages of food, medicine, and baby food
                to subway shelters, schools, hospitals, kindergartens, and nursing homes in Kyiv. Our volunteer work had
                one simple but vital goal: to be with those who needed it most.
              </p>
              <span className={`${styles.text} ${styles.desktopOnly}`}>
                As of March 2022, the iHELP charity foundation has created logistics and provided food to people who
                lost their homes due to the war launched by Russia against Ukraine and were forced to live in bomb
                shelters. The food was provided to people along the central branch of the Kyiv metro, helping thousands
                of residents of the capital.
              </span>
            </div>
          </div>
          <div className={styles.contentKyivRegion}>
            <h2>Widening Our Reach: From the Capital to Borodianka</h2>
            <span className={styles.short}>Aid to liberated towns in Kyiv Region: food, clothing, medicine</span>
            <p>
              After the liberation of Kyiv region, our efforts expanded to new territories. We were among the first to
              go to the destroyed Borodyanka, where every street breathed of pain and loss.
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
              of the OCU, we have established a stable transfer of humanitarian aid: food, blankets, medicine, clothing
              - everything that could restore people's hope for tomorrow.
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
                  headquarters, which became a center of support and faith for the residents of the region, which has
                  been significantly affected by the humanitarian crisis.
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
                have been to the most dangerous hot spots of the war, where few dared to go: Bakhmut, Soledar,
                Lysychansk, Novoluhanske, Avdiivka. We worked in difficult combat conditions, delivering humanitarian
                aid: food, tactical equipment, medicines to people who survived under constant shelling and in mined
                territories.
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
              We always remember: aid is not just about bread or water, it is about support, a sense of joy and
              humanity. In the newly liberated cities of Southern Ukraine, in particular the Kherson region, we worked,
              delivering New Year's gifts prepared by the children of Kyiv.
            </p>
            <div className={styles.cardsAndDescription}>
              <ChildrenCards />
              <div className={styles.description}>
                <p>
                  We saw the war-scarred children smile for the first time in a long time. One of them, Dmytryk, holding
                  a gift in his hands, said: «Mom, this is a real holiday!»
                </p>
                <p>
                  Such moments not only bring joy to children, but also inspire our iHELP team to move forward,
                  implement new projects, and help those who survived the war regain faith in a better future.
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
      </section>

      <CtaAboutUs />
      <CtaForm page={"Default"} />
    </div>
  );
}

export default AboutPage;
