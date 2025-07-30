import React from "react";
import Image from "next/image";

import * as styles from "./CopyBlock.module.scss";

import copyIcon from "../../../../public/assets/icons/copy.svg";
// import copyMarks from "../../../../public/assets/icons/copy-marks.svg";
import copyMarks from "../../../../public/assets/icons/copied.png";

function CopyBlock({ value, copiedValue }) {
  const isCopied = copiedValue === value;

  return (
    <div className={styles.copyBlock}>
      <span>{isCopied ? "Скопійовано!" : "Скопіювати"}</span>
      <Image src={isCopied ? copyMarks : copyIcon} alt="Copy" className={styles.copyIcon} />
    </div>
  );
}

export default CopyBlock;
