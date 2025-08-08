import React from "react";
import * as modalCta from "./ModalCta.module.scss";

function ModalDirect({ forms, onClose }) {
  return (
    <>
      {forms.map(({ id, content }) => (
        <div key={id} className={`${modalCta.contentView} ${modalCta.scrollable}`}>
          {content}

          {/* Close button */}
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
        </div>
      ))}
    </>
  );
}

export default ModalDirect;
