import React from "react";
import { FaRegCopyright } from "react-icons/fa"; // Using react-icons for the copyright icon
import * as styles from "./CopyrightBlock.module.scss";

function CopyrightBlock() {
  return (
    <div className={styles.copyright}>
      <FaRegCopyright className={styles.icon} />
      <span>Copyright iHELP 2025. All rights reserved.</span>
    </div>
  );
}

export default CopyrightBlock;
