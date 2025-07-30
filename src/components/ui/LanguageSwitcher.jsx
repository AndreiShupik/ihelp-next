import React from "react";
import { useRouter } from "next/router";
import styles from "./LanguageSwitcher.module.scss";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { pathname, query, asPath, locale } = router;

  const handleLocaleChange = (targetLocale) => {
    if (locale !== targetLocale) {
      router.push({ pathname, query }, asPath, { locale: targetLocale });
    }
  };

  return (
    <div className={styles.languageSwitcher}>
      <button
        onClick={() => handleLocaleChange("en")}
        className={`${styles.flag} ${locale === "en" ? styles.active : ""}`}
        aria-label="Switch to English"
      >
        🇬🇧
      </button>
      <span className={styles.separator}>|</span>
      <button
        onClick={() => handleLocaleChange("ua")}
        className={`${styles.flag} ${locale === "ua" ? styles.active : ""}`}
        aria-label="Switch to Ukrainian"
      >
        🇺🇦
      </button>
    </div>
  );
};

export default LanguageSwitcher;

// import React, { useState, useRef, useEffect } from "react";
// import { useRouter } from "next/router";
// import styles from "./LanguageSwitcher.module.scss";

// const LanguageSwitcher = () => {
//   const router = useRouter();
//   const { pathname, query, asPath, locale } = router;
//   const [isOpen, setIsOpen] = useState(false);
//   const switcherRef = useRef(null);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleClose = (e) => {
//     if (switcherRef.current && !switcherRef.current.contains(e.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClose);
//     return () => document.removeEventListener("mousedown", handleClose);
//   }, []);

//   const handleLocaleChange = (targetLocale) => {
//     if (locale !== targetLocale) {
//       router.push({ pathname, query }, asPath, { locale: targetLocale });
//     }
//     setIsOpen(false);
//   };

//   return (
//     <div className={styles.languageSwitcher} ref={switcherRef}>
//       <button onClick={handleToggle} className={styles.langButton}>
//         {locale === "ua" ? "🇺🇦" : "🇬🇧"} ▼
//       </button>
//       <ul className={`${styles.langDropdown} ${isOpen ? styles.show : ""}`}>
//         {locale !== "ua" && <li onClick={() => handleLocaleChange("ua")}>🇺🇦</li>}
//         {locale !== "en" && <li onClick={() => handleLocaleChange("en")}>🇬🇧</li>}
//       </ul>
//     </div>
//   );
// };

// export default LanguageSwitcher;
