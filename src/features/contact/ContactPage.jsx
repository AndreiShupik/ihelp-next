import React from "react";
import * as styles from "./ContactPage.module.scss";

import ContactForm from "@/components/ui/ContactForm/ContactForm";
import OurSocials from "@/components/layout/Footer/OurSocials";
import { useTranslation } from "next-i18next";

function ContactPage() {
  const { t } = useTranslation("contact");

  return (
    <main>
      <section className={styles.contactPage}>
        <div className={styles.contactPageWrapper}>
          <div className={styles.leftSide}>
            <ContactForm />
          </div>

          <div className={styles.rightSide}>
            <h1>{t("title")}</h1>

            <p>{t("emailLabel")}</p>
            <a className={styles.contactInfo} href="mailto:info@theihelp.org">
              info@theihelp.org
            </a>

            <p>{t("phoneLabel")}</p>
            <a className={styles.contactInfo} href="tel:+380636123224">
              +38 (063) 612-32-24
            </a>

            <p>{t("addressLabel")}</p>
            <span className={styles.contactInfo}>{t("addressValue")}</span>

            <p>{t("socialsLabel")}</p>
            <OurSocials />
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className={styles.mapSection}>
        <iframe
          src={t("mapSrc")}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section> */}
    </main>
  );
}

export default ContactPage;
