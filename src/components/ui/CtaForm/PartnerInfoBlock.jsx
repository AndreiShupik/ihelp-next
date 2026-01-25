import React from "react";

import ContactForm from "../ContactForm/ContactForm";
import * as styles from "./PartnershipBlocks.module.scss";

export default function VolunteerBlock({ data }) {
  return (
    <div className={styles.partnersBlock}>
      <div className={styles.container}>
        {/* Title */}
        <h3 className={styles.title}>{data.h3}</h3>

        {/* Intro paragraphs */}
        <p
          dangerouslySetInnerHTML={{
            __html: data.intro1,
          }}
        />

        <p
          dangerouslySetInnerHTML={{
            __html: data.intro2,
          }}
        />

        {/* Closing paragraph */}
        <p className={styles.closing}>{data.closing}</p>

        {/* Bullet list */}
        <ul className={styles.list}>
          {data.bullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Contact */}
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
      </div>

      {/* Form */}
      <div className={styles.formWrapperOutside}>
        <ContactForm type={data.formType} />
      </div>
    </div>
  );
}
