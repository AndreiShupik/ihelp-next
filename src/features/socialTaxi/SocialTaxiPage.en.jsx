import React, { useState, useEffect } from "react";
import Image from "next/image";

import * as styles from "./SocialTaxiPage.module.scss";
import CtaForm from "../../components/ui/CtaForm/CtaForm";

import { useLockHeight } from "@/utils/useLockHeight";
import { isIOS } from "@/utils/isIOS";

// import peopleTaxiImg from "../../../public/assets/images/people-taxi.jpg";
// import peopleTaxiImgSec from "../../../public/assets/images/people-taxi-1.jpg";
import socialTaxiImg from "../../../public/assets/images/ihelp-social-taxi.jpg";

export default function SocialTaxiPage() {
  const [ios, setIos] = useState(false);
  useLockHeight();

  useEffect(() => setIos(isIOS()), []);

  return (
    <section className={styles.socialTaxiWrapper}>
      <div className={styles.parallaxBg}></div> {/* <-- fake parallax background */}
      <div className={styles.socialTaxiContainer}>
        <div className={styles.title}>
          <h1>Project: Social Taxi in Kherson Region</h1>
          <h2>
            “Road of Life – South” a transport service for those who need to reach hospitals, social services, or places
            where they can receive help and support.
          </h2>
        </div>
      </div>
      <div className={styles.blankContent}>
        <div className={styles.blankContainer}>
          <p>
            In frontline areas of Kherson Region, people with disabilities and limited mobility face daily challenges
            that most of us take for granted: How to get to a doctor’s appointment, apply for essential documents,
            attend rehabilitation, or collect humanitarian aid. Many are unable to move on their own. Public transport
            is either unavailable or too dangerous due to shelling and drones. This project fills a critical gap in
            access and safety.
          </p>
        </div>
      </div>
      <div className={`${styles.socialTaxiContainer} ${styles.second}`}>
        <div className={styles.imgWrapper}>
          <div className={styles.parallaxFallback} style={{ display: ios ? "block" : "none" }}></div>
          {/* <div className={styles.parallaxFallback}></div> */}
          <div className={styles.secondContainer}>
            <section className={styles.howItWorksSection}>
              <div className={styles.shapes}>
                <span className={styles.circle}></span>
                <span className={styles.triangle}></span>
                <span className={styles.square}></span>
              </div>

              <div className={styles.contentWrapper}>
                <h2 className={styles.heading}>How the project works</h2>

                <div className={styles.block}>
                  <p className={styles.heading}>
                    <strong>Who is it for?</strong>
                  </p>
                  <p>
                    People with disabilities, injured civilians, and those with limited mobility who need safe and
                    reliable transportation.
                  </p>
                </div>

                <div className={styles.block}>
                  <p className={styles.heading}>
                    <strong>Where does it go?</strong>
                  </p>
                  <p>
                    To hospitals, rehabilitation centres, social service offices, administrative buildings, and
                    evacuation zones.
                  </p>
                </div>

                <div className={styles.block}>
                  <p className={styles.heading}>
                    <strong>Who makes it happen?</strong>
                  </p>
                  <p>
                    Drivers, coordinators, and volunteers who care deeply about each passenger’s dignity and safety.
                  </p>
                </div>
                <p>
                  This Social Taxi operates where people would otherwise have no way to reach essential services -
                  healthcare, legal support, or protection - on time and without danger.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className={styles.blankContent}>
        <div className={styles.blankContainer}>
          <h3>Why it’s essential</h3>
          <p>
            Kherson’s infrastructure has been heavily damaged. Public transit is scarce. Shelling and drone attacks
            remain a constant threat. Yet people still need to live, move, heal, and survive.
          </p>
          <p>
            <strong>For many, this taxi service isn’t a convenience - it’s the only path to a dignified life.</strong>
          </p>
        </div>
      </div>
      {/* <section className={styles.projectResults}>
        <div className={styles.wrapper}>
          <div className={styles.taxiImagesBlock}>
            <div className={styles.peopleTaxiBlock}>
              <div className={styles.imageWrapper}>
                <Image src={peopleTaxiImgSec} alt="iHelp. Соціальне таксі для людей 2" />
              </div>
              <div className={styles.imageWrapper}>
                <Image src={peopleTaxiImg} alt="iHelp. Соціальне таксі для людей" />
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <Image src={socialTaxiImg} alt="iHelp. Соціальне таксі" />
            </div>
          </div>
          <div className={styles.container}>
            <h3 className={styles.heading}>Щомісячні витрати на роботу таксі:</h3>
            <ul className={styles.resultsList}>
              <li>Пальне для поїздок</li>
              <li>Ремонт і обслуговування машин</li>
              <li>Логістичне та технічне забезпечення</li>
              <li>Адміністративні витрати</li>
            </ul>
          </div>
        </div>
      </section> */}
      <section className={styles.projectResults}>
        <div className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            <Image src={socialTaxiImg} alt="iHelp. Social taxi" />
          </div>
          <div className={styles.container}>
            <h3 className={styles.heading}>Monthly costs of the project</h3>
            <ul className={styles.resultsList}>
              <li>Fuel for trips</li>
              <li>Vehicle repairs and maintenance</li>
              <li>Logistical and technical operations</li>
              <li>Administrative expenses</li>
            </ul>
          </div>
        </div>
      </section>
      <div className={styles.backgroundWrapper}>
        <section className={styles.howToHelp}>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>Join us</h2>
            <p>
              This isn’t just transportation - it’s a lifeline. Every ride brings someone closer to medical care, to
              safety, to support.
            </p>
            <p>
              Support the “Social Taxi in Kherson Region” project and be part of real change - the kind that saves
              lives.
            </p>
          </div>
          {/* <div className={styles.taxiImagesBlock}>
            <div className={styles.peopleTaxiBlock}>
              <div className={styles.imageWrapper}>
                <Image src={peopleTaxiImg} alt="iHelp. Соціальне таксі для людей" />
              </div>
              <div className={styles.imageWrapper}>
                <Image src={peopleTaxiImgSec} alt="iHelp. Соціальне таксі для людей 2" />
              </div>
            </div>
          </div> */}
        </section>
        <CtaForm page={"SocialTaxi"} />
      </div>
    </section>
  );
}
