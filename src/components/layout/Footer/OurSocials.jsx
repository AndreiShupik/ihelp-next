import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import facebookIcon from "../../../../public/assets/icons/facebook.png";
import xIcon from "../../../../public/assets/icons/x.png";
import xIconBlack from "../../../../public/assets/icons/x-black.png";
import instagramIcon from "../../../../public/assets/icons/instagram.png";
import linkedinIcon from "../../../../public/assets/icons/linkedin.png";

import * as styles from "./OurSocials.module.scss";

function OurSocials({ place = "page" }) {
  const { t } = useTranslation("common");

  return (
    <div className={styles.ourSocials}>
      <div className={styles.social}>
        <Image src={facebookIcon} alt="Facebook" />
        <Image src={place === "footer" ? xIcon : xIconBlack} alt="Twitter" />
        <Image src={instagramIcon} alt="Instagram" />
        <Image src={linkedinIcon} alt="YouTube" />
      </div>
    </div>
  );
}

export default OurSocials;
