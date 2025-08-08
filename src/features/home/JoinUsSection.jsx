import React from "react";

import Image from "next/image";
import Button from "../../components/ui/Button";

import DownloadBlock from "../../components/layout/Footer/DownloadBlock";
import joinUsPhoto from "../../../public/assets/images/join-us.jpg";

import { useModal } from "@/components/ui/ModalActions/ModalContext";
import * as styles from "./JoinUsSection.module.scss";

function JoinUsSection() {
  const { openModal } = useModal();

  const joinUsBtnText = "Стати волонтером";
  const joinUsBtnType = "secondary";
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
          <Button type={joinUsBtnType} text={joinUsBtnText} onClick={() => openModal("volunteer")} />
        </div>

        <DownloadBlock place="page" />
      </div>
    </section>
  );
}
export default JoinUsSection;
