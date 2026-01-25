import React from "react";

import ContactForm from "../ContactForm/ContactForm";
import * as styles from "./PartnershipBlocks.module.scss";

export default function VolunteerBlock({ data }) {
  return (
    <div className={styles.volunteerBlock}>
      <section className={styles.joinUs}>
        <div className={styles.container}>
          <h3 className={styles.title} dangerouslySetInnerHTML={{ __html: data.h3 }} />

          <p className={styles.intro} dangerouslySetInnerHTML={{ __html: data.intro }} />

          <div className={styles.bullets}>
            <p>{data.bulletTitle}</p>

            <ul>
              {data.bullets.map((text, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: text }} />
              ))}
            </ul>
          </div>

          <p className={styles.closing}>{data.closing}</p>

          <div className={styles.contact}>
            <p>
              {data.contact}{" "}
              <a href="https://fb.com/AnatoliiDziubenko" target="_blank" rel="noopener noreferrer">
                fb.com/AnatoliiDziubenko
              </a>
              ,{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: data.contactContinue,
                }}
              />
            </p>
          </div>

          <p className={styles.note}>{data.note}</p>
        </div>
      </section>

      <div className={styles.formWrapperOutside}>
        <ContactForm type={data.formType} />
      </div>
    </div>
  );
}
