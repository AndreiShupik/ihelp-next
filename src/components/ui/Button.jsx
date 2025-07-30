import React from "react";
import Link from "next/link";

import * as styles from "./Button.module.scss";

function Button({ type, text, link }) {
  const getBtnType = (type) => {
    switch (type) {
      case "primary":
        return styles.primary;
      case "secondary":
        return styles.secondary;
    }
  };

  return (
    <div className={styles.ctaBtn}>
      <Link href={link} className={getBtnType(type)} rel="nofollow">
        {text}
      </Link>
    </div>
  );
}

export default Button;
