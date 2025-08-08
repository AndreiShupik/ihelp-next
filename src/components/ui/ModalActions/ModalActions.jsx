import { useEffect, useState } from "react";
import styles from "./ModalActions.module.scss";

export default function Modal({ isOpen, onClose, children }) {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Handle ESC close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Animate only when opening
  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setAnimate(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
    } else {
      // On close: immediately remove modal (no animation)
      setAnimate(false);
      setShow(false);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div className={`${styles.modalOverlay} ${animate ? styles.visible : ""}`} onClick={onClose}>
      <div className={`${styles.modalContent} ${animate ? styles.slideIn : ""}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
