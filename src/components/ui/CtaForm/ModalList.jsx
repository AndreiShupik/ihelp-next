import React from "react";
import * as modalCta from "./ModalCta.module.scss";

function ModalList({ forms, openId, viewMode, activeTitle, activeContent, onToggle, onBack, onClose }) {
  return (
    <div className={`${modalCta.slideContainer} ${viewMode === "content" ? modalCta.showContent : ""}`}>
      {/* Titles view */}
      <div className={modalCta.titlesView}>
        {/* Top close button */}
        <button className={modalCta.closeBtnTop} onClick={onClose} aria-label="Закрити">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {forms.map(({ id, title }) => (
          <section key={id} className={`${modalCta.accordion} ${openId === id ? modalCta.open : ""}`}>
            <button className={modalCta.toggleBtn} onClick={() => onToggle(id, title)}>
              {title}
            </button>
          </section>
        ))}
      </div>

      {/* Content view */}
      <div className={`${modalCta.contentView} ${modalCta.scrollable}`}>
        {/* Content close button */}
        <button className={modalCta.closeBtnContent} onClick={onClose} aria-label="Закрити">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <h3 className={modalCta.title}>
          <button onClick={onBack} className={modalCta.toggleBtn}>
            {activeTitle || "Назад"}
          </button>
        </h3>

        <div className={modalCta.contentInner}>{activeContent}</div>
      </div>
    </div>
  );
}

export default ModalList;
