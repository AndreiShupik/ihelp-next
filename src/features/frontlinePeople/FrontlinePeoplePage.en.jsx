import React, { useState, useEffect } from "react";
import Image from "next/image";

import { isIOS } from "@/utils/isIOS";
import { useLockHeight } from "@/utils/useLockHeight";

import * as styles from "./FrontlinePeoplePage.module.scss";
import CtaForm from "../../components/ui/CtaForm/CtaForm";

import howToHelpImg from "../../../public/assets/images/ihelp-team.webp";
import helpHospital from "../../../public/assets/images/ihelp-hospital.webp";

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
          <h1>
            Supporting People in Frontline Zones, Medical Facilities, First Responders, and Families with Children
          </h1>
        </div>
      </div>
      <div className={styles.blankContent}>
        <div className={styles.blankContainer}>
          <h2>Every act of help is a step toward victory.</h2>
          <p>
            From the first days of the war, the I HELP Foundation has stood side by side with those who need it most -
            Ukrainian families living near the front lines, medical workers, and rescue teams. We operate where help is
            most urgently needed, delivering life-saving support to people surviving in the harshest conditions.
          </p>
        </div>
      </div>
      <div className={`${styles.khersonChildrenContainer} ${styles.second}`}>
        <div className={styles.imgWrapper}>
          <div className={styles.parallaxFallback} style={{ display: ios ? "block" : "none" }}></div>
          <div className={styles.secondContainer}>
            <section className={styles.howItWorksSection}>
              <div className={styles.contentWrapper}>
                <h2 className={styles.heading}>How We Help?</h2>

                <div className={styles.block}>
                  <p>
                    <strong>For families with children and vulnerable populations in active war zones:</strong>
                  </p>
                  <ul>
                    <li>- Food supplies</li>
                    <li>- Clean drinking water</li>
                    <li>- Warm clothing</li>
                    <li>- Household hygiene items</li>
                    <li>- Medicines and essential hygiene products</li>
                    <li>- Psychological support</li>
                  </ul>
                </div>

                <div className={styles.block}>
                  <p>
                    <strong>For medical facilities still operating under wartime conditions:</strong>
                  </p>
                  <ul>
                    <li>- Specialised medical equipment</li>
                    <li>- Medicines and consumables</li>
                    <li>- Evacuation vehicles</li>
                    <li>- Mobility aids and support equipment</li>
                  </ul>
                </div>

                <div className={styles.block}>
                  <p>
                    <strong>For first responders and rescue workers:</strong>
                  </p>
                  <ul>
                    <li>- Power generators</li>
                    <li>- Specialised gear for emergency response</li>
                    <li>- Spare parts for rescue vehicles</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className={styles.blankContent}>
        <div className={styles.blankContainer}>
          <h3>Why This Work Matters</h3>
          <p>
            Frontline zones are places where life becomes a daily fight for survival. Destroyed homes, streets in flames
            from shelling, the absence of medicine and care, and the complete lack of essentials condemn entire
            communities to conditions no one should face.
          </p>
          <p>
            We cannot abandon these Ukrainians. Each delivery, each warm item, each moment of care brings relief from
            suffering, restores dignity, and delivers a message of hope - a promise that better days are still possible.
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
            <h3 className={styles.heading}>Our Impact:</h3>
            <ul className={styles.resultsList}>
              <li>We’ve built a unique aid distribution system across Kherson Region</li>
              <li>
                We established a direct supply route for medicine and essentials to hospitals and clinics in Kherson
                city and surrounding areas
              </li>
              <li>
                We organise ongoing support campaigns for families with children, partnering with Ukrainian businesses
                and international donors
              </li>
            </ul>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={helpHospital} alt="iHELP. Achievements of our team in frontline areas" />
          </div>
        </div>
      </section>
      <div className={styles.backgroundWrapper}>
        <section className={styles.howToHelp}>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>Together Toward Victory</h2>
            <p>
              Stand with us in supporting those enduring the hardest trials of this war. Your participation is a real
              beam of hope for Ukraine. You bring light where the enemy has sown darkness. You give people in frontline
              areas something priceless: warmth, care, and love.
            </p>
            <p>
              "The time has come for a great choice: either unity and victory - the path toward light - or defeat,
              shame, and another long road back to freedom." <em>Viacheslav Chornovil (1937-1999)</em>
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={howToHelpImg} alt="Our Projects" />
          </div>
        </section>
        <p className={styles.ctaParagraph}>
          Join us in doing good now - and help bring Ukraine closer to victory, justice, and human dignity.
        </p>
        <CtaForm page={"FrontlinePeople"} />
      </div>
    </section>
  );
}
