import React, { useState, useEffect } from "react";
import Image from "next/image";

import { isIOS } from "@/utils/isIOS";
import { useLockHeight } from "@/utils/useLockHeight";

import * as styles from "./KhersonChildrenPage.module.scss";

import CtaForm from "../../components/ui/CtaForm/CtaForm";
import howToHelpImg from "../../../public/assets/images/how-help.jpg";

export default function KhersonChildrenPage() {
  const [ios, setIos] = useState(false);
  useLockHeight();

  useEffect(() => setIos(isIOS()), []);

  return (
    <main>
      <section className={styles.khersonChildrenWrapper}>
        <div className={styles.fixBgWrapper}>
          <div className={styles.parallaxBg}></div> {/* <-- fake parallax background */}
        </div>
        <div className={styles.khersonChildrenContainer}>
          <div className={styles.title}>
            <h1>From the Children of Kyiv to the Children of Kherson</h1>
            <h2>The warmth of children’s hearts knows no borders</h2>
          </div>
        </div>
        <div className={styles.blankContent}>
          <div className={styles.blankContainer}>
            <p>
              <strong>“From the Children of Kyiv to the Children of Kherson”</strong> is a heartfelt initiative that
              connects families in the capital with children living through war in frontline areas of Kherson Region.
              This project not only provides essentials for life, learning, and development - it gives children in
              conflict zones something just as vital: hope, care, and the knowledge that they are not alone.
            </p>
          </div>
        </div>
        <div className={`${styles.khersonChildrenContainer} ${styles.second}`}>
          <div className={styles.imgWrapper}>
            <div className={styles.parallaxFallback} style={{ display: ios ? "block" : "none" }}></div>
            <div className={styles.secondContainer}>
              <section className={styles.howItWorksSection}>
                <div className={styles.shapes}>
                  <span className={styles.circle}></span>
                  <span className={styles.triangle}></span>
                  <span className={styles.square}></span>
                </div>

                <div className={styles.contentWrapper}>
                  <h2 className={styles.heading}>How It Works</h2>

                  <div className={styles.block}>
                    <h3>From Kyiv - With Love</h3>
                    <p>
                      Children in Kyiv, along with their parents, teachers, and school administrators, collect donations
                      based on real needs:
                    </p>
                    <ul>
                      <li>Clothing</li>
                      <li>Toys</li>
                      <li>School supplies</li>
                      <li>Board games</li>
                      <li>Hygiene items</li>
                      <li>Sweets and snacks</li>
                      <li>Books</li>
                    </ul>
                    <p>
                      These gifts allow children in Kherson to learn, grow, and simply be kids - all while knowing that
                      even in the hardest times, they are not forgotten.
                    </p>
                  </div>

                  <div className={styles.block}>
                    <h3>Delivered With Care</h3>
                    <p>
                      iHELP volunteers organise and personally deliver the care packages to communities that have been
                      hit hardest by war.
                    </p>
                  </div>

                  <div className={styles.block}>
                    <h3>Letters of Support</h3>
                    <p>
                      Every box is accompanied by hand-written letters and drawings from children in Kyiv - forming a
                      bond of solidarity and kindness that bridges any distance.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className={styles.blankContent}>
          <div className={styles.blankContainer}>
            <h3>Why It Matters</h3>
            <p>
              This initiative nurtures a culture of mutual care, unity, and resilience. War leaves deep wounds in the
              hearts of children - and the best medicine is sincere kindness shared from child to child.
            </p>
            <p>
              This isn’t just about aid - it’s about teaching compassion, responsibility, and shared purpose in building
              Ukraine’s future.
            </p>
          </div>
        </div>
        <section className={styles.projectResults}>
          <div className={styles.container}>
            <h3 className={styles.heading}>Project Highlights</h3>
            <ul className={styles.resultsList}>
              <li>
                <span className={styles.star}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#22aeff">
                    <path d="M12 2l2.9 6.9L22 10.3l-5 5 1.2 7L12 18l-6.2 4.3L7 15.3l-5-5 7.1-1.4z" />
                  </svg>
                </span>
                13,091 gift packages have already been delivered to children - providing not just essentials, but
                confidence, comfort, and a way forward.
              </li>
              <li>
                <span className={styles.star}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#22aeff">
                    <path d="M12 2l2.9 6.9L22 10.3l-5 5 1.2 7L12 18l-6.2 4.3L7 15.3l-5-5 7.1-1.4z" />
                  </svg>
                </span>
                Children in Kyiv are learning to care for others, developing empathy, responsibility, and a deep sense
                of humanity.
              </li>
              <li>
                <span className={styles.star}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#22aeff">
                    <path d="M12 2l2.9 6.9L22 10.3l-5 5 1.2 7L12 18l-6.2 4.3L7 15.3l-5-5 7.1-1.4z" />
                  </svg>
                </span>
                Adults, businesses, and international partners are joining the initiative - because kindness inspires
                action, and goodness multiplies when shared.
              </li>
            </ul>
          </div>
        </section>
        <div className={styles.backgroundWrapper}>
          <section className={styles.howToHelp}>
            <div className={styles.imageWrapper}>
              <Image
                src={howToHelpImg}
                alt="To the children of Kherson region from the children of Kyiv | iHELP Project"
              />
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.heading}>How You Can Help</h2>
              <ul>
                <li>Join the collections: Take part in our drives - together, we can reach more children.</li>
                <li>
                  Donate: Your financial contribution helps us purchase essentials for children in Kherson Region.
                </li>
                <li>
                  Create a connection: Encourage your children to write letters or draw pictures - a small act that can
                  mean the world to someone.
                </li>
              </ul>
            </div>
          </section>
          <section className={styles.ctaBlock}>
            <h2>Be part of something real</h2>
            <p>
              Your support is real, direct, and deeply felt. Together, we can provide children in Kherson with what they
              need to live, learn, and thrive - and remind them they are not alone.
            </p>
            <p>
              <strong>Join today - let's do something important together!</strong>
            </p>
          </section>
          <CtaForm page={"KhersonChildren"} />
        </div>
      </section>
    </main>
  );
}
