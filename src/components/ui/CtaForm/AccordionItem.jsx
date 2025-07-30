import React, { useRef, useEffect } from "react";
import * as styles from "./AccordionItem.module.scss";

function AccordionItem({ id, title, children, isOpen, onClick }) {
  const titleRef = useRef(null); // 👈 Ref for the <h1> tag
  const didMountRef = useRef(false); // 👈 Tracks if component already mounted
  const HEADER_OFFSET = 67;

  useEffect(() => {
    if (isOpen && titleRef.current && didMountRef.current) {
      setTimeout(() => {
        const offsetTop = titleRef.current.getBoundingClientRect().top + window.pageYOffset;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollY = Math.min(offsetTop - HEADER_OFFSET, maxScroll);

        window.scrollTo({
          top: scrollY,
          behavior: "smooth",
        });
      }, 850);
    }
    didMountRef.current = true;
  }, [isOpen]);

  return (
    <section className={`${styles.accordion} ${isOpen ? styles.open : ""}`}>
      <h3 ref={titleRef} className={styles.title}>
        <button onClick={() => onClick(id)} className={styles.toggleBtn}>
          {title}
        </button>
      </h3>
      <div className={styles.content}>
        <div className={styles.wrapper}>{children}</div>
      </div>
    </section>
  );
}

export default AccordionItem;
