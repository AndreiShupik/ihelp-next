import React, { useEffect } from "react";
import Image from "next/image";

import * as styles from "./SocialTaxiPage.module.scss";

import CtaForm from "../../components/ui/CtaForm/CtaForm";

import peopleTaxiImg from "../../../public/assets/images/people-taxi.jpg";
import peopleTaxiImgSec from "../../../public/assets/images/people-taxi-1.jpg";
import socialTaxiImg from "../../../public/assets/images/ihelp-social-taxi.jpg";

export default function SocialTaxiPage() {
  useEffect(() => {
    function lockHeroHeight() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh * 100}px`);
    }

    // ✅ Call it immediately when component mounts
    lockHeroHeight();
  }, []);

  const isIOS =
    typeof window !== "undefined" &&
    (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.userAgent.includes("Macintosh") && "ontouchend" in document));

  return (
    <section className={styles.socialTaxiWrapper}>
      <div className={styles.parallaxBg}></div> {/* <-- fake parallax background */}
      <div className={styles.socialTaxiContainer}>
        <div className={styles.title}>
          <h1>Проєкт "Соціальне таксі у Херсонській області"</h1>
          <h2>
            "Дорога життя. Південь" створений для тих, кому потрібен транспорт, щоб дістатися лікарні, соціальних служб
            або місць, де вони можуть отримати допомогу та підтримку.
          </h2>
        </div>
      </div>
      <div className={styles.blankContent}>
        <div className={styles.blankContainer}>
          <p>
            Люди з інвалідністю та обмежено рухливі у прифронтових районах щодня стикаються з труднощами, які для інших
            здаються звичайними: як доїхати на прийом до лікаря, оформити документи, пройти реабілітацію чи отримати
            гуманітарну допомогу. У багатьох немає можливості самостійно пересуватися, а громадський транспорт або не
            працює, або його використання є небезпечним через бойові дії.
          </p>
        </div>
      </div>
      <div className={`${styles.socialTaxiContainer} ${styles.second}`}>
        <div className={styles.imgWrapper}>
          <div className={styles.parallaxFallback} style={{ display: isIOS ? "block" : "none" }}></div>
          {/* <div className={styles.parallaxFallback}></div> */}
          <div className={styles.secondContainer}>
            <section className={styles.howItWorksSection}>
              <div className={styles.shapes}>
                <span className={styles.circle}></span>
                <span className={styles.triangle}></span>
                <span className={styles.square}></span>
              </div>

              <div className={styles.contentWrapper}>
                <h2 className={styles.heading}>Як працює проєкт?</h2>

                <div className={styles.block}>
                  <p className={styles.heading}>
                    <strong>Для кого?</strong>
                  </p>
                  <p>Для людей з інвалідністю, поранених, маломобільних осіб, які потребують безпечного транспорту.</p>
                </div>

                <div className={styles.block}>
                  <p className={styles.heading}>
                    <strong>Куди?</strong>
                  </p>
                  <p>
                    До лікарень, центрів реабілітації, соціальних служб, адміністративних установ чи безпечних місць
                    евакуації.
                  </p>
                </div>

                <div className={styles.block}>
                  <p className={styles.heading}>
                    <strong>Хто допомагає?</strong>
                  </p>
                  <p>Водії, координатори та волонтери, які дбають про кожного пасажира.</p>
                </div>
                <p>
                  Соціальне таксі працює там, де люди не мають іншого способу вчасно й безпечно дістатися лікарень,
                  адміністративних послуг та центрів соціальної підтримки.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className={styles.blankContent}>
        <div className={styles.blankContainer}>
          <h3>Чому це важливо?</h3>
          <p>
            У Херсонській області зруйнована інфраструктура, нестача транспорту, постійна загроза обстрілів і дронів.
            Але попри це, люди продовжують жити. Їм потрібно лікуватися, отримувати соціальні послуги, рухатися.
          </p>
          <p>
            <strong>Для них соціальне таксі — це не зручність, а єдина можливість жити гідно.</strong>
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
            <Image src={socialTaxiImg} alt="iHelp. Соціальне таксі" />
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
      </section>
      <div className={styles.backgroundWrapper}>
        <section className={styles.howToHelp}>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>Долучайтеся!</h2>
            <p>
              Це не просто допомога — це шанс змінити життя людей, для яких кожна поїздка означає доступ до лікаря,
              соціальних послуг чи безпечного місця.
            </p>
            <p>
              Підтримайте проєкт "Соціальне таксі у Херсонській області" та станьте частиною змін, які рятують життя.
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
