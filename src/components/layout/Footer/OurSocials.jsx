import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import facebookIcon from "../../../../public/assets/icons/facebook.png";
import youtubeIcon from "../../../../public/assets/icons/youtube.png";
import instagramIcon from "../../../../public/assets/icons/instagram.png";
import linkedinIcon from "../../../../public/assets/icons/linkedin.png";

import * as styles from "./OurSocials.module.scss";

function OurSocials() {
  const { t } = useTranslation("common");

  return (
    <div className={styles.ourSocials}>
      <div className={styles.social}>
        <a target="_blank" href="https://www.facebook.com/share/1AFSMjv1Zw/?mibextid=wwXIfr">
          <Image src={facebookIcon} alt="Facebook" />
        </a>
        <a target="_blank" href="https://youtube.com/@dziubenko_anatolii?si=2pub2e5gWGMc2gVq">
          <Image src={youtubeIcon} alt="Youtube" />
        </a>
        <a target="_blank" href="https://www.instagram.com/cf.ihelp?igsh=eWxqZGJ0ZmdpNTF4">
          <Image src={instagramIcon} alt="Instagram" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/company/charitable-organization-i-help/">
          <Image src={linkedinIcon} alt="Linkedin" />
        </a>
      </div>
    </div>
  );
}

export default OurSocials;
