import React from "react";
import AccordionItem from "./AccordionItem";
import * as styles from "./CtaForm.module.scss";

function PageAccordion({ forms, openId, onToggle }) {
  return (
    // <div className={styles.accordionWrapper}>
    forms.map(({ id, title, content }) => (
      <AccordionItem key={id} id={id} title={title} isOpen={openId === id} onClick={() => onToggle(id)}>
        <div className={styles.accordionContent}>{content}</div>
      </AccordionItem>
    ))
    // </div>
  );
}

export default PageAccordion;
