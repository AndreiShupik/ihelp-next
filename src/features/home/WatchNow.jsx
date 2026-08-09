import React from "react";
import { useTranslation } from "next-i18next";

import * as styles from "./WatchNow.module.scss";
import { useModal } from "@/components/ui/ModalActions/ModalContext";

function WatchNow() {
  const { t } = useTranslation("home");
  const youtubeVideoId = "DpCXwdLIQhE";

  return (
    <section className={styles.featuredStory} aria-labelledby="featured-story-heading">
      <div className={styles.container}>
        <div className={styles.headerBlockAdditional}>
          <h2 id="featured-story-heading" className={styles.title}>
            {t("watchNow.title")}
          </h2>
        </div>

        <div className={styles.videoWrapper}>
          <iframe
            className={styles.video}
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            title="Featured Story Video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <p className={styles.caption}>{t("watchNow.caption")}</p>
      </div>
    </section>
  );
}

export default WatchNow;
