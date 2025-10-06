import React from "react";
import * as styles from "./ContactPage.module.scss";

import ContactForm from "@/components/ui/ContactForm/ContactForm";
import OurSocials from "@/components/layout/Footer/OurSocials";

function ContactPage() {
  return (
    <main>
      <section className={styles.contactPage}>
        <div className={styles.contactPageWrapper}>
          <div className={styles.leftSide}>
            <ContactForm />
          </div>
          <div className={styles.rightSide}>
            <h1>Контакти</h1>
            <p>Email:</p>
            <a className={styles.contactInfo} href="mailto:info@ihelp-ukraine.org">
              info@ihelp-ukraine.org
            </a>
            <p>Телефон:</p>
            <a className={styles.contactInfo} href="tel:+380XXXXXXXXX">
              +380-XX-XXXX-XXXX
            </a>
            <p>Адреса:</p>
            <span className={styles.contactInfo}>м. Київ, Україна</span>
            <p>Наші соцмережі:</p>
            <OurSocials />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2058.812237351264!2d30.33360771991305!3d50.470976907477365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ccb5b44c0001%3A0x3d4979edfa0e7f3a!2z0YPQuy4g0JDQutCw0LTQtdC80LjQutCwINCR0YPQu9Cw0YXQvtCy0YHQutC-0LPQviwgMjjQkSwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1754662557008!5m2!1sru!2sua"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          // referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}

export default ContactPage;
