import React from "react";
import Button from "../../components//ui/Button";

import * as styles from "./ImpactSection.module.scss";

function ImpactSection() {
  const impactBtnText = "Кожна пожертва змінює життя";
  const impactBtnType = "secondary";

  return (
    <section className={styles.impact}>
      <div className={styles.impactContainer}>
        <div className={styles.impactTextContainer}>
          {/* <span>Приєднуйся</span> */}
          {/* <h2>Наші досягнення</h2> */}
          <h3>Наші досягнення</h3>
          <hr />
          <p>
            З 2022 року наші маршрути проходять через найнебезпечніші регіони, включаючи Бахмут, Соледар, Ізюм та
            Херсон. Ми працюємо там, де відчайдушно потрібна підтримка, попри складні умови та ризики.
          </p>
          <div className={styles.btnContainer}>
            <Button type={impactBtnType} text={impactBtnText} link={"/about#ihelp-form"} />
          </div>
        </div>

        <dl className={styles.impactStatistic}>
          <dt>10 000+</dt>
          <dd>сімей отримали гуманітарну допомогу</dd>
          <dt>150</dt>
          <dd>будинків відновлено у прифронтових районах</dd>
          <dt>3 000</dt>
          <dd>дітей отримали освітню та психологічну підтримку</dd>
        </dl>
      </div>
    </section>
  );
}

export default ImpactSection;
