import React from "react";

import Image from "next/image";
import Button from "../../components/ui/Button";

import DownloadBlock from "../../components/layout/Footer/DownloadBlock";
import joinUsPhoto from "../../../public/assets/images/join-us.jpg";

import * as styles from "./JoinUsSection.module.scss";

function JoinUsSection() {
  const joinUsBtnText = "Стати волонтером";
  const joinUsBtnType = "secondary";
  const joinUsBtnLink = "/about#ihelp-form:become-a-volunteer";
  return (
    <section className={styles.joinUs}>
      <div className={styles.imageWrapper}>
        <Image src={joinUsPhoto} alt="iHELP team" />
      </div>
      <div className={styles.content}>
        <h3>Долучайтеся до місії iHELP – разом ми здатні змінювати життя!</h3>
        <p>
          Завдяки вашій підтримці ми охопили тисячі родин у звільнених регіонах Київщини, Херсонщини, Донеччини та інших
          гарячих точках. Ми не лише задовольняємо базові потреби, а й допомагаємо повернути віру в краще майбутнє.
        </p>
        <div className={styles.btnContainer}>
          <Button type={joinUsBtnType} text={joinUsBtnText} link={joinUsBtnLink} />
        </div>

        <DownloadBlock place="page" />
      </div>
    </section>
  );
}
export default JoinUsSection;
