import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useTranslation } from "next-i18next";

import DownloadBlock from "./DownloadBlock";
import CopyrightBlock from "./CopyrightBlock/CopyrightBlock";

import * as styles from "./Footer.module.scss";

function Footer() {
  const { t } = useTranslation("common");
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <footer className={styles.footerBlock}>
      <div className={styles.container}>
        <div className={styles.mainBlock}>
          {/* Contact Info */}
          <div className={styles.supportBlock}>
            <h4>{t("footer.contactInfo")}</h4>
            <p>
              Email: <a href="mailto:info@ihelp-ukraine.org">info@ihelp-ukraine.org</a>
            </p>
            <p>
              {t("footer.phone")} <a href="tel:+380XXXXXXXXX">+380-XX-XXXX-XXXX</a>
            </p>
            <p>{t("footer.address")}</p>
          </div>

          {/* Quick Links */}
          <div className={styles.accountBlock}>
            <h4>{t("footer.quickLinks")}</h4>
            <ul className={styles.menu}>
              <li>
                <Link href="/" className={`${isActive("/") ? styles.active : ""}`}>
                  {t("footer.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className={`${isActive("/about") ? styles.active : ""}`}>
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link href="/projects" className={`${isActive("/projects") ? styles.active : ""}`}>
                  {t("footer.projects")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`${isActive("/contact") ? styles.active : ""}`}>
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div className={styles.quickLinksBlock}>
            <h4>{t("footer.legal")}</h4>
            <ul className={styles.menu}>
              <li>
                <Link href="#" className={`${isActive("/#") ? styles.active : ""}`}>
                  {t("footer.privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link href="#" className={`${isActive("/#") ? styles.active : ""}`}>
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <DownloadBlock place="footer" />
        </div>

        <CopyrightBlock />
      </div>
    </footer>
  );
}

export default Footer;
