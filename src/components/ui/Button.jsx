import React from "react";

import * as styles from "./Button.module.scss";

function Button({ type, text, onClick }) {
  const getBtnType = (type) => {
    switch (type) {
      case "primary":
        return styles.primary;
      case "secondary":
        return styles.secondary;
    }
  };

  return (
    <div className={styles.ctaBtn} onClick={onClick}>
      <span className={getBtnType(type)}>{text}</span>
    </div>
  );
}

export default Button;
