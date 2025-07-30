import React, { useState, useEffect } from "react";
import Image from "next/image";

import { useTranslation } from "next-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Button from "../../ui/Button";
import LanguageSwitcher from "../../ui/LanguageSwitcher";
import logoImg from "../../../../public/assets/images/logo.png";

import * as styles from "./Header.module.scss";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const { t } = useTranslation("common");

  const headerBtnText = "Зробити пожертву";
  const headerBtnType = "primary";

  useEffect(() => {
    // Now window is defined, so we can safely use it here
    function handleResize() {
      setIsMobile(window.innerWidth <= 992);
    }

    handleResize(); // Set initial value on mount

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };
  const isActive = (path) => pathname === path;

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <a href="/">
            <Image src={logoImg} alt="ihelp logo" />
          </a>
        </div>

        {isMobile ? (
          // Mobile (Hamburger Menu)
          <div className={styles.materialMenuWrapper}>
            <div className={styles.materialMenu}>
              <div className={`${styles.materialBtn} ${menuOpen ? styles.opened : ""}`} onClick={toggleMenu}>
                <div className={`${styles.materialHamburger} ${menuOpen ? styles.materialClose : ""}`}>
                  <div className={styles.materialPatty}></div>
                  <div className={styles.materialPatty}></div>
                  <div className={styles.materialPatty}></div>
                </div>
              </div>
              <div className={`${styles.materialContent} ${menuOpen ? styles.opened : ""}`}>
                <nav className={styles.navBlock}>
                  <ul>
                    <Link
                      href="/"
                      className={`${isActive("/") ? styles.active : ""} ${menuOpen ? styles.opened : ""}`}
                      onClick={closeMenu}
                    >
                      {t("header.home")}
                    </Link>
                    <Link
                      href="/about"
                      className={`${isActive("/about") ? styles.active : ""} ${menuOpen ? styles.opened : ""}`}
                      onClick={closeMenu}
                    >
                      {t("header.about")}
                    </Link>
                    <Link
                      href="/projects"
                      className={`${isActive("/projects") ? styles.active : ""} ${menuOpen ? styles.opened : ""}`}
                      onClick={closeMenu}
                    >
                      {t("header.projects")}
                    </Link>
                    <Link
                      href="/contact"
                      className={`${isActive("/contact") ? styles.active : ""} ${menuOpen ? styles.opened : ""}`}
                      onClick={closeMenu}
                    >
                      {t("header.contact")}
                    </Link>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        ) : (
          // Desktop (Regular Menu)
          <nav className={`${styles.navBlock} ${styles.desktopMenu}`}>
            {/* <nav className={styles.desktopMenu}> */}
            <ul>
              <li>
                <Link href="/" className={isActive("/") ? styles.active : ""}>
                  {t("header.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className={isActive("/about") ? styles.active : ""}>
                  {t("header.about")}
                </Link>
              </li>
              <li>
                <Link href="/projects" className={isActive("/projects") ? styles.active : ""}>
                  {t("header.projects")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className={isActive("/contact") ? styles.active : ""}>
                  {t("header.contact")}
                </Link>
              </li>
            </ul>
          </nav>
        )}

        <div className={styles.userBlock}>
          <LanguageSwitcher />
          <Button text={headerBtnText} type={headerBtnType} link={"/about#ihelp-form"} />
        </div>
      </div>
    </header>
  );
}

export default Header;
