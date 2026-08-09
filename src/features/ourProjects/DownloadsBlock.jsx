import React, { useState } from "react";
import Image from "next/image";

import { useTranslation } from "next-i18next";

import * as styles from "./DownloadsBlock.module.scss";

function DownloadsBlock() {
  const { t } = useTranslation("projects");
  const [activePdf, setActivePdf] = useState(null);

  const files = [
    {
      title: t("downloadsBlock.1stFileDescription"),
      file: `/docs/${t("downloadsBlock.overview")}`,
    },
    {
      title: t("downloadsBlock.2ndFileDescription"),
      file: `/docs/${t("downloadsBlock.quarterlyOperationalBrief")}`,
    },
  ];

  const closeModal = () => setActivePdf(null);

  // Detect mobile / tablet / iPhone / Telegram webview
  const openPdf = (item) => {
    if (typeof window === "undefined") return;

    const isMobile = /iPhone|iPad|iPod|Android|Mobile|CriOS|FxiOS/i.test(navigator.userAgent);

    if (isMobile) {
      // Mobile = native PDF viewer
      window.open(item.file, "_blank");
    } else {
      // Desktop = modal
      setActivePdf(item);
    }
  };

  return (
    <section className={styles.downloadsBlock}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t("downloadsBlock.title")}</h2>

        <div className={styles.list}>
          {files.map((item, idx) => (
            <button key={idx} type="button" className={styles.downloadItem} onClick={() => openPdf(item)}>
              <span className={styles.fileIcon}>📄</span>
              <span className={styles.fileTitle}>{item.title}</span>
              <span className={styles.action}>{t("downloadsBlock.action")}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.ctaProjects}>
        <h2>{t("downloadsBlock.ctaTitle")}</h2>
        <p>{t("downloadsBlock.ctaDescription")}</p>
      </div>

      {/* PDF MODAL — Desktop only */}
      {activePdf && (
        <div className={styles.modalOverlay} onClick={closeModal} role="dialog" aria-modal="true">
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>{activePdf.title}</h3>

              <div className={styles.modalActions}>
                {/* Optional download button */}
                <a href={activePdf.file} download className={styles.downloadBtn}>
                  {t("downloadsBlock.download")}
                </a>

                <button type="button" onClick={closeModal} className={styles.closeBtn} aria-label="Close PDF viewer">
                  ✕
                </button>
              </div>
            </div>

            <iframe src={`${activePdf.file}#view=FitH`} title={activePdf.title} className={styles.pdfViewer} />
          </div>
        </div>
      )}
    </section>
  );
}

export default DownloadsBlock;
