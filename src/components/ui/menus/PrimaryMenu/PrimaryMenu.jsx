import React from "react";
import Link from "next/link"; // Import Link for routing

import * as styles from "./PrimaryMenu.module.scss";

function PrimaryMenu() {
  return (
    <nav className={styles.mainNavigation}>
      <ul className={styles.mainNavigation__list}>
        <li className={styles.mainNavigation__item}>
          <Link
            className={({ isActive }) =>
              isActive ? `${styles.mainNavigation__link} ${styles.active}` : `${styles.mainNavigation__link}`
            }
            href="/"
          >
            Home
          </Link>
        </li>
        <li className={styles.mainNavigation__item}>
          <Link
            className={({ isActive }) =>
              isActive ? `${styles.mainNavigation__link} ${styles.active}` : `${styles.mainNavigation__link}`
            }
            href="/contact"
          >
            Contact
          </Link>
        </li>
        <li className={styles.mainNavigation__item}>
          <Link
            className={({ isActive }) =>
              isActive ? `${styles.mainNavigation__link} ${styles.active}` : `${styles.mainNavigation__link}`
            }
            href="/about"
          >
            About
          </Link>
        </li>
        <li className={styles.mainNavigation__item}>
          <Link
            className={({ isActive }) =>
              isActive ? `${styles.mainNavigation__link} ${styles.active}` : `${styles.mainNavigation__link}`
            }
            href="/projects"
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default PrimaryMenu;
