import React, { useState } from "react";
import * as styles from "./CtaForm.module.scss";
import { FORM_CONFIG } from "./formConfig";

import PageAccordion from "./PageAccordion";
import ModalDirect from "./ModalDirect";
import ModalList from "./ModalList";
import PaymentInfoBlock from "./PaymentInfoBlock";

function CtaForm({ page = "Default", modalType = null, defaultOpen, onClose }) {
  const [openId, setOpenId] = useState(defaultOpen);
  const [activeTitle, setActiveTitle] = useState(null);
  const [viewMode, setViewMode] = useState(modalType ? "list" : null);
  const [copiedValue, setCopiedValue] = useState("");

  const filteredForms = FORM_CONFIG.filter((item) => {
    if (modalType === "ihelp") return true; // ✅ Show all blocks
    if (modalType) return item.modalType.includes(modalType);
    if (page && page !== "Default") return item.pages.includes(page) || item.pages.includes("Default");
    return true;
  });

  const formsWithContent = filteredForms.map((item) =>
    item.data
      ? {
          ...item,
          content: (
            <PaymentInfoBlock
              key={item.id}
              page={page}
              copiedValue={copiedValue}
              setCopiedValue={setCopiedValue}
              data={item.data}
              blockStyle={styles[item.blockStyle]}
            />
          ),
        }
      : item
  );

  const activeContent = formsWithContent.find((item) => item.id === openId)?.content;

  const handleToggle = (id, title) => {
    setOpenId((prev) => (prev === id ? null : id));
    setActiveTitle(title);
    // if (modalType === "donate" || modalType === "ihelp") setViewMode("content");
    setViewMode("content");
  };

  const handleBack = () => {
    setViewMode("list");
    setTimeout(() => {
      setOpenId(null);
      setActiveTitle(null);
    }, 400);
  };

  return (
    <div className={styles.accordionWrapper} id="ihelp-form">
      {modalType === "partner" || modalType === "volunteer" ? (
        <ModalDirect forms={formsWithContent} onClose={onClose} />
      ) : modalType === "donate" || modalType === "ihelp" ? ( // ✅ treat ihelp like donate
        <ModalList
          forms={formsWithContent}
          openId={openId}
          viewMode={viewMode}
          activeTitle={activeTitle}
          activeContent={activeContent}
          onToggle={handleToggle}
          onBack={handleBack}
          onClose={onClose}
        />
      ) : (
        <PageAccordion forms={formsWithContent} openId={openId} onToggle={handleToggle} />
      )}
    </div>
  );
}

export default CtaForm;

// AccountBlocks logic based on page
// const getAccountBlockClass = (value) =>
//   `${styles.accountBlock} ${copiedValue === value ? styles.active : ""} ${page !== "Default" ? styles.mainColor : ""}`;

//-----------------------2nd vary of CtaForm------------------------------
// import React, { useState, useEffect } from "react";
// import * as styles from "./CtaForm.module.scss";

// import CopyBlock from "./CopyBlock";
// import AccordionItem from "./AccordionItem";

// import ContactForm from "../ContactForm/ContactForm";

// function CtaForm({ page = null, modalType = null, defaultOpen, onClose }) {
//   const [openId, setOpenId] = useState(defaultOpen);
//   const [activeTitle, setActiveTitle] = useState(null);
//   const [copiedValue, setCopiedValue] = useState(null);
//   const [viewMode, setViewMode] = useState(modalType ? "list" : null); // modal = list first

//   // AccountBlocks logic based on page
//   const getAccountBlockClass = (value) =>
//     `${styles.accountBlock} ${copiedValue === value ? styles.active : ""} ${page !== "Default" ? styles.mainColor : ""}`;

//   const formContent = [
//     {
//       id: "Допомога людям на прифронтових територіях",
//       title: "Допомога людям на прифронтових територіях",
//       content: (
//         <section className={`${styles.paymentInfo} ${styles.firstBlock}`}>
//           <h4>БФ &quot;Я допомагаю&quot;</h4>
//           <p>
//             <strong>ЄДРПОУ:</strong> XXXXXXXX
//           </p>
//           <p>
//             <strong>Призначення платежу:</strong> Опис призначення платежу
//           </p>

//           <div
//             className={getAccountBlockClass("UAXXXXXXXXXXXXXXXXXXXXXXXXXXX")}
//             onClick={() => {
//               navigator.clipboard.writeText("UAXXXXXXXXXXXXXXXXXXXXXXXXXXX");
//               setCopiedValue("UAXXXXXXXXXXXXXXXXXXXXXXXXXXX");
//             }}
//           >
//             <span>
//               <strong>UAH:</strong>
//               <br /> UAXXXXXXXXXXXXXXXXXXXXXXXXXXX
//             </span>
//             <CopyBlock value="UAXXXXXXXXXXXXXXXXXXXXXXXXXXX" copiedValue={copiedValue} />
//           </div>

//           <div
//             className={getAccountBlockClass("UAYYYYYYYYYYYYYYYYYYYYYYYYYYY")}
//             onClick={() => {
//               navigator.clipboard.writeText("UAYYYYYYYYYYYYYYYYYYYYYYYYYYY");
//               setCopiedValue("UAYYYYYYYYYYYYYYYYYYYYYYYYYYY");
//             }}
//           >
//             <span>
//               <strong>Мультивалютний рахунок:</strong>
//               <br /> UAYYYYYYYYYYYYYYYYYYYYYYYYYYY
//             </span>
//             <CopyBlock value="UAYYYYYYYYYYYYYYYYYYYYYYYYYYY" copiedValue={copiedValue} />
//           </div>

//           <div className={styles.bankLink}>
//             <strong>Monobank (банка):</strong>
//             <br />
//             <a href="https://send.monobank.ua/jar/7mP4ZFCree" target="_blank" rel="noopener noreferrer">
//               https://send.monobank.ua/jar/7mP4ZFCrPj
//             </a>
//           </div>

//           <div className={styles.crypto}>
//             <strong>Донати в криптовалюті:</strong>

//             <div
//               className={getAccountBlockClass("bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r")}
//               onClick={() => {
//                 navigator.clipboard.writeText("bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r");
//                 setCopiedValue("bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r");
//               }}
//             >
//               <span>
//                 <strong>Bitcoin (BTC):</strong> bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r
//               </span>
//               <CopyBlock value="bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r" copiedValue={copiedValue} />
//             </div>

//             <div
//               className={getAccountBlockClass("0xfc0b52E020223c98a546F814cdA6d7872D74b386")}
//               onClick={() => {
//                 navigator.clipboard.writeText("0xfc0b52E020223c98a546F814cdA6d7872D74b386");
//                 setCopiedValue("0xfc0b52E020223c98a546F814cdA6d7872D74b386");
//               }}
//             >
//               <span>
//                 <strong>Ethereum (ETH):</strong> 0xfc0b52E020223c98a546F814cdA6d7872D74b386
//               </span>
//               <CopyBlock value="0xfc0b52E020223c98a546F814cdA6d7872D74b386" copiedValue={copiedValue} />
//             </div>

//             <div
//               className={getAccountBlockClass("TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa")}
//               onClick={() => {
//                 navigator.clipboard.writeText("TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa");
//                 setCopiedValue("TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa");
//               }}
//             >
//               <span>
//                 <strong>USDT (TRC20):</strong> TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa
//               </span>
//               <CopyBlock value="TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa" copiedValue={copiedValue} />
//             </div>
//           </div>
//         </section>
//       ),
//     },
//     {
//       id: "Соціальне таксі у Херсонській області",
//       title: "Соціальне таксі у Херсонській області",
//       content: (
//         <section className={`${styles.paymentInfo} ${styles.secondBlock}`}>
//           <h4>БФ &quot;Я допомагаю&quot;</h4>
//           <p>
//             <strong>ЄДРПОУ:</strong> XXXXXXXX
//           </p>
//           <p>
//             <strong>Призначення платежу:</strong> Опис призначення платежу
//           </p>

//           <div
//             className={getAccountBlockClass("UAXXXXXXXXXXXXXXXXXXXXXXXXXXX")}
//             onClick={() => {
//               navigator.clipboard.writeText("UAXXXXXXXXXXXXXXXXXXXXXXXXXXX");
//               setCopiedValue("UAXXXXXXXXXXXXXXXXXXXXXXXXXXX");
//             }}
//           >
//             <span>
//               <strong>UAH:</strong>
//               <br /> UAXXXXXXXXXXXXXXXXXXXXXXXXXXX
//             </span>
//             <CopyBlock value="UAXXXXXXXXXXXXXXXXXXXXXXXXXXX" copiedValue={copiedValue} />
//           </div>

//           <div
//             className={getAccountBlockClass("UAYYYYYYYYYYYYYYYYYYYYYYYYYYY")}
//             onClick={() => {
//               navigator.clipboard.writeText("UAYYYYYYYYYYYYYYYYYYYYYYYYYYY");
//               setCopiedValue("UAYYYYYYYYYYYYYYYYYYYYYYYYYYY");
//             }}
//           >
//             <span>
//               <strong>Мультивалютний рахунок:</strong>
//               <br /> UAYYYYYYYYYYYYYYYYYYYYYYYYYYY
//             </span>
//             <CopyBlock value="UAYYYYYYYYYYYYYYYYYYYYYYYYYYY" copiedValue={copiedValue} />
//           </div>

//           <div className={styles.bankLink}>
//             <strong>Monobank (банка):</strong>
//             <br />
//             <a href="https://send.monobank.ua/jar/7mP4ZFCree" target="_blank" rel="noopener noreferrer">
//               https://send.monobank.ua/jar/7mP4ZFCrPj
//             </a>
//           </div>

//           <div className={styles.crypto}>
//             <strong>Донати в криптовалюті:</strong>

//             <div
//               className={getAccountBlockClass("bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r")}
//               onClick={() => {
//                 navigator.clipboard.writeText("bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r");
//                 setCopiedValue("bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r");
//               }}
//             >
//               <span>
//                 <strong>Bitcoin (BTC):</strong> bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r
//               </span>
//               <CopyBlock value="bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r" copiedValue={copiedValue} />
//             </div>

//             <div
//               className={getAccountBlockClass("0xfc0b52E020223c98a546F814cdA6d7872D74b386")}
//               onClick={() => {
//                 navigator.clipboard.writeText("0xfc0b52E020223c98a546F814cdA6d7872D74b386");
//                 setCopiedValue("0xfc0b52E020223c98a546F814cdA6d7872D74b386");
//               }}
//             >
//               <span>
//                 <strong>Ethereum (ETH):</strong> 0xfc0b52E020223c98a546F814cdA6d7872D74b386
//               </span>
//               <CopyBlock value="0xfc0b52E020223c98a546F814cdA6d7872D74b386" copiedValue={copiedValue} />
//             </div>

//             <div
//               className={getAccountBlockClass("TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa")}
//               onClick={() => {
//                 navigator.clipboard.writeText("TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa");
//                 setCopiedValue("TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa");
//               }}
//             >
//               <span>
//                 <strong>USDT (TRC20):</strong> TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa
//               </span>
//               <CopyBlock value="TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa" copiedValue={copiedValue} />
//             </div>
//           </div>
//         </section>
//       ),
//     },
//     {
//       id: "Допомога дітям Херсонщини",
//       title: "Допомога дітям Херсонщини",
//       content: (
//         <section className={`${styles.paymentInfo} ${styles.thirdBlock}`}>
//           <h4>БФ &quot;Я допомагаю&quot;</h4>
//           <p>
//             <strong>ЄДРПОУ:</strong> XXXXXXXX
//           </p>
//           <p>
//             <strong>Призначення платежу:</strong> Опис призначення платежу
//           </p>

//           <div
//             className={getAccountBlockClass("UAXXXXXXXXXXXXXXXXXXXXXXXXXXX")}
//             onClick={() => {
//               navigator.clipboard.writeText("UAXXXXXXXXXXXXXXXXXXXXXXXXXXX");
//               setCopiedValue("UAXXXXXXXXXXXXXXXXXXXXXXXXXXX");
//             }}
//           >
//             <span>
//               <strong>UAH:</strong>
//               <br /> UAXXXXXXXXXXXXXXXXXXXXXXXXXXX
//             </span>
//             <CopyBlock value="UAXXXXXXXXXXXXXXXXXXXXXXXXXXX" copiedValue={copiedValue} />
//           </div>

//           <div
//             className={getAccountBlockClass("UAYYYYYYYYYYYYYYYYYYYYYYYYYYY")}
//             onClick={() => {
//               navigator.clipboard.writeText("UAYYYYYYYYYYYYYYYYYYYYYYYYYYY");
//               setCopiedValue("UAYYYYYYYYYYYYYYYYYYYYYYYYYYY");
//             }}
//           >
//             <span>
//               <strong>Мультивалютний рахунок:</strong>
//               <br /> UAYYYYYYYYYYYYYYYYYYYYYYYYYYY
//             </span>
//             <CopyBlock value="UAYYYYYYYYYYYYYYYYYYYYYYYYYYY" copiedValue={copiedValue} />
//           </div>

//           <div className={styles.bankLink}>
//             <strong>Monobank (банка):</strong>
//             <br />
//             <a href="https://send.monobank.ua/jar/7mP4ZFCree" target="_blank" rel="noopener noreferrer">
//               https://send.monobank.ua/jar/7mP4ZFCrPj
//             </a>
//           </div>

//           <div className={styles.crypto}>
//             <strong>Донати в криптовалюті:</strong>

//             <div
//               className={getAccountBlockClass("bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r")}
//               onClick={() => {
//                 navigator.clipboard.writeText("bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r");
//                 setCopiedValue("bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r");
//               }}
//             >
//               <span>
//                 <strong>Bitcoin (BTC):</strong> bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r
//               </span>
//               <CopyBlock value="bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r" copiedValue={copiedValue} />
//             </div>

//             <div
//               className={getAccountBlockClass("0xfc0b52E020223c98a546F814cdA6d7872D74b386")}
//               onClick={() => {
//                 navigator.clipboard.writeText("0xfc0b52E020223c98a546F814cdA6d7872D74b386");
//                 setCopiedValue("0xfc0b52E020223c98a546F814cdA6d7872D74b386");
//               }}
//             >
//               <span>
//                 <strong>Ethereum (ETH):</strong> 0xfc0b52E020223c98a546F814cdA6d7872D74b386
//               </span>
//               <CopyBlock value="0xfc0b52E020223c98a546F814cdA6d7872D74b386" copiedValue={copiedValue} />
//             </div>

//             <div
//               className={getAccountBlockClass("TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa")}
//               onClick={() => {
//                 navigator.clipboard.writeText("TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa");
//                 setCopiedValue("TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa");
//               }}
//             >
//               <span>
//                 <strong>USDT (TRC20):</strong> TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa
//               </span>
//               <CopyBlock value="TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa" copiedValue={copiedValue} />
//             </div>
//           </div>
//         </section>
//       ),
//     },
//     {
//       id: "Стати волонтером",
//       title: "Стати волонтером",
//       content: (
//         <div className={styles.volunteerBlock}>
//           <section className={styles.joinUs}>
//             <div className={styles.container}>
//               <h3 className={styles.title}>Кожна пара рук і кожна ідея важливі!</h3>
//               <p className={styles.intro}>
//                 Я, твій побратим <em>Анатолій Дзюбенко</em>, засновник <em>iHELP</em>, запрошую тебе стати пліч-о-пліч
//                 із нашою командою — як фізичною працею, так і розумовою діяльністю. Разом ми здатні зробити більше!
//               </p>
//               <div className={styles.bullets}>
//                 <p>Твоя участь стане рушійною силою в iHELP:</p>
//                 <ul>
//                   <li>
//                     Ти допомагатимеш Петрові, Олександру та Тетяні з організацією логістики для доставки гуманітарної
//                     допомоги.
//                   </li>
//                   <li>
//                     Візьмеш участь у налагодженні процесів та отримаєш практичні знання з управління проєктами iHELP
//                     відповідно до найкращих стандартів <em>Project Management Institute (USA)</em>.
//                   </li>
//                   <li>
//                     Долучишся до створення як творчих, так і стратегічних рішень, розширюючи діяльність Фонду для
//                     підтримки людей у прифронтових зонах.
//                   </li>
//                 </ul>
//               </div>
//               <p className={styles.closing}>
//                 Твій талант, час і зусилля — це внесок, що дарує гідне життя і творить жадане майбутнє сильної України!
//               </p>
//               <div className={styles.contact}>
//                 <p>
//                   Напиши мені на{" "}
//                   <a href="https://fb.com/AnatoliiDziubenko" target="_blank" rel="noopener noreferrer">
//                     fb.com/AnatoliiDziubenko
//                   </a>
//                   , зателефонуй за номером <a href="tel:+380679832115">+38 067 983 2115</a>, або заповни форму нижче,
//                   щоб разом творити добро ще потужніше!
//                 </p>
//               </div>
//               <p className={styles.note}>
//                 *Фонд iHELP залишає за собою право резервування ключових волонтерів від мобілізації до лав Збройних сил
//                 України на весь термін часу війни для сприяння обороні України у волонтерському секторі відповідно до
//                 чинного законодавства України.
//               </p>
//             </div>
//           </section>
//           <ContactForm type="волонтерство" />
//         </div>
//       ),
//     },
//     {
//       id: "Стати партнером",
//       title: "Стати партнером",
//       content: (
//         <div className={styles.partnersBlock}>
//           <div className={styles.container}>
//             <h3 className={styles.title}>Співпраця з iHELP</h3>
//             <p>
//               Ми заохочуємо до співпраці з <em>iHELP</em> українські комерційні підприємства, організації, а також усіх
//               суб’єктів громадянського суспільства, для яких важливість цільового та максимально ефективного
//               використання коштів і ресурсів є першочерговим пріоритетом, як це є для нас у iHELP.
//             </p>
//             <p>
//               <em>iHELP</em> гарантує найвищі стандарти ефективності, якості та прозорості в наданні гуманітарної
//               допомоги. Ми заряджаємо кожну гривню нашого партнера працювати «на повну», забезпечуючи безпомилкове
//               надходження допомоги тим, хто її потребує понад усе, навіть у найскладніших умовах.
//             </p>
//             <p className={styles.closing}>
//               Вам важливо, щоб кожен працівник організації працював із максимальною віддачею? Запрошуємо «найняти»
//               команду iHELP для реалізації ВАШОЇ допомоги там, де це справді важливо!
//             </p>
//             <ul className={styles.list}>
//               <li>Спрямування допомоги з бездоганною точністю.</li>
//               <li>
//                 Реалізацію гуманітарних проєктів, що відповідають світовим стандартам управління процесами та найвищим
//                 етичним принципам гуманітарної допомоги, забезпечуючи взірцеву якість, прозорість і максимальну
//                 ефективність.
//               </li>
//               <li>
//                 Майбутнє, де кожна донька чи син українця відчуває тепло підтримки, відновлення сил та віру в єдність і
//                 міць України.
//               </li>
//             </ul>
//             <div className={styles.contact}>
//               <p>
//                 Напишіть нам на{" "}
//                 <a href="https://fb.com/AnatoliiDziubenko" target="_blank" rel="noopener noreferrer">
//                   fb.com/AnatoliiDziubenko
//                 </a>
//                 , зателефонуйте за номером <a href="tel:+380679832115">+38 067 983 2115</a>, або заповніть форму нижче,
//                 щоб разом творити добро ще потужніше!
//               </p>
//             </div>
//           </div>
//           <ContactForm type="партнерство" />
//         </div>
//       ),
//     },
//   ];

//   // -------------------------------
//   // PAGE FILTER
//   // -------------------------------
//   const pageFiltered = (() => {
//     if (modalType) return formContent; // no filter in modal
//     switch (page) {
//       case "KhersonChildren":
//         return formContent.filter(
//           (info) =>
//             info.id !== "Допомога людям на прифронтових територіях" &&
//             info.id !== "Соціальне таксі у Херсонській області"
//         );
//       case "FrontlinePeople":
//         return formContent.filter(
//           (info) => info.id !== "Соціальне таксі у Херсонській області" && info.id !== "Допомога дітям Херсонщини"
//         );
//       case "SocialTaxi":
//         return formContent.filter(
//           (info) => info.id !== "Допомога людям на прифронтових територіях" && info.id !== "Допомога дітям Херсонщини"
//         );
//       default:
//         return formContent;
//     }
//   })();

//   // -------------------------------
//   // MODAL FILTER
//   // -------------------------------
//   const finalInfos = (() => {
//     if (modalType === "partner") {
//       return pageFiltered.filter((info) => info.id === "Стати партнером");
//     }
//     if (modalType === "volunteer") {
//       return pageFiltered.filter((info) => info.id === "Стати волонтером");
//     }
//     return pageFiltered.slice(0, 3); // donation projects
//   })();

//   // -------------------------------
//   // HANDLERS
//   // -------------------------------
//   const activeContent = finalInfos.find((item) => item.id === openId)?.content;

//   const handleToggle = (id, title) => {
//     setOpenId((prevId) => (prevId === id ? null : id));
//     setActiveTitle(title);
//     if (modalType) setViewMode("content");
//   };

//   const handleBack = () => {
//     setViewMode("list");
//     setTimeout(() => {
//       setOpenId(null);
//       setActiveTitle(null);
//     }, 400);
//   };

//   return (
//     <div className={styles.accordionWrapper} id="ihelp-form">
//       {modalType ? (
//         modalType === "partner" || modalType === "volunteer" ? (
//           // ✅ DIRECT CONTENT MODE
//           finalInfos.map(({ id, content }) => (
//             <div key={id} className={`${styles.contentView} ${styles.scrollable}`}>
//               {content}
// <button className={styles.closeBtnContent} onClick={onClose} aria-label="Закрити">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     width="30"
//     height="30"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     fill="none"
//   >
//     <line x1="18" y1="6" x2="6" y2="18" />
//     <line x1="6" y1="6" x2="18" y2="18" />
//   </svg>
// </button>
//             </div>
//           ))
//         ) : (
//           // ✅ DEFAULT MODAL MODE (list -> content animation)
//           <div className={`${styles.slideContainer} ${viewMode === "content" ? styles.showContent : ""}`}>
//             {/* Titles View */}
//             <div className={styles.titlesView}>
//               <button className={styles.closeBtnTop} onClick={onClose} aria-label="Закрити">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   width="30"
//                   height="30"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   fill="none"
//                 >
//                   <line x1="18" y1="6" x2="6" y2="18" />
//                   <line x1="6" y1="6" x2="18" y2="18" />
//                 </svg>
//               </button>
//               {finalInfos.map(({ id, title }) => (
//                 <section key={id} className={`${styles.test} ${openId === id ? styles.open : ""}`}>
//                   <button key={id} className={styles.toggleBtn} onClick={() => handleToggle(id, title)}>
//                     {title}
//                   </button>
//                 </section>
//               ))}
//             </div>

//             {/* Content View */}
//             <div className={`${styles.contentView} ${styles.scrollable}`}>
//               <button className={styles.closeBtnContent} onClick={onClose} aria-label="Закрити">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   width="30"
//                   height="30"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   fill="none"
//                 >
//                   <line x1="18" y1="6" x2="6" y2="18" />
//                   <line x1="6" y1="6" x2="18" y2="18" />
//                 </svg>
//               </button>
//               <h3 className={styles.title}>
//                 <button onClick={handleBack} className={styles.toggleBtn}>
//                   {activeTitle || "Назад"}
//                 </button>
//               </h3>
//               <div className={styles.contentInner}>{activeContent}</div>
//             </div>
//           </div>
//         )
//       ) : (
//         // ✅ PAGE MODE: Regular accordion
//         pageFiltered.map(({ id, title, content }) => (
//           <AccordionItem key={id} id={id} title={title} isOpen={openId === id} onClick={() => handleToggle(id, title)}>
//             <div className={styles.accordionContent}>{content}</div>
//           </AccordionItem>
//         ))
//       )}
//     </div>
//   );
// }

// export default CtaForm;

// ----------------------1st vary of CtaForm------------------------------
// import React, { useState, useEffect } from "react";
// import * as styles from "./CtaForm.module.scss";

// import CopyBlock from "./CopyBlock";
// import AccordionItem from "./AccordionItem";

// import ContactForm from "../ContactForm/ContactForm";

// function CtaForm({ page }) {
//   // const [openId, setOpenId] = useState(page === "Default" ? "Допомога людям на прифронтових територіях" : null);
//   const [openId, setOpenId] = useState(null);
//   const [copiedValue, setCopiedValue] = useState(null);

//   // AccountBlocks logic based on page
//   const getAccountBlockClass = (value) =>
//     `${styles.accountBlock} ${copiedValue === value ? styles.active : ""} ${page !== "Default" ? styles.mainColor : ""}`;

//   const formContent = [
//     {
//       id: "Допомога людям на прифронтових територіях",
//       title: "Допомога людям на прифронтових територіях",
//       content: (
//         <section className={`${styles.paymentInfo} ${styles.firstBlock}`}>
//           <h4>БФ &quot;Я допомагаю&quot;</h4>
//           <p>
//             <strong>ЄДРПОУ:</strong> XXXXXXXX
//           </p>
//           <p>
//             <strong>Призначення платежу:</strong> Опис призначення платежу
//           </p>

//           <div
//             className={getAccountBlockClass("UAXXXXXXXXXXXXXXXXXXXXXXXXXXX")}
//             onClick={() => {
//               navigator.clipboard.writeText("UAXXXXXXXXXXXXXXXXXXXXXXXXXXX");
//               setCopiedValue("UAXXXXXXXXXXXXXXXXXXXXXXXXXXX");
//             }}
//           >
//             <span>
//               <strong>UAH:</strong>
//               <br /> UAXXXXXXXXXXXXXXXXXXXXXXXXXXX
//             </span>
//             <CopyBlock value="UAXXXXXXXXXXXXXXXXXXXXXXXXXXX" copiedValue={copiedValue} />
//           </div>

//           <div
//             className={getAccountBlockClass("UAYYYYYYYYYYYYYYYYYYYYYYYYYYY")}
//             onClick={() => {
//               navigator.clipboard.writeText("UAYYYYYYYYYYYYYYYYYYYYYYYYYYY");
//               setCopiedValue("UAYYYYYYYYYYYYYYYYYYYYYYYYYYY");
//             }}
//           >
//             <span>
//               <strong>Мультивалютний рахунок:</strong>
//               <br /> UAYYYYYYYYYYYYYYYYYYYYYYYYYYY
//             </span>
//             <CopyBlock value="UAYYYYYYYYYYYYYYYYYYYYYYYYYYY" copiedValue={copiedValue} />
//           </div>

//           <div className={styles.bankLink}>
//             <strong>Monobank (банка):</strong>
//             <br />
//             <a href="https://send.monobank.ua/jar/7mP4ZFCree" target="_blank" rel="noopener noreferrer">
//               https://send.monobank.ua/jar/7mP4ZFCrPj
//             </a>
//           </div>

//           <div className={styles.crypto}>
//             <strong>Донати в криптовалюті:</strong>

//             <div
//               className={getAccountBlockClass("bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r")}
//               onClick={() => {
//                 navigator.clipboard.writeText("bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r");
//                 setCopiedValue("bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r");
//               }}
//             >
//               <span>
//                 <strong>Bitcoin (BTC):</strong> bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r
//               </span>
//               <CopyBlock value="bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r" copiedValue={copiedValue} />
//             </div>

//             <div
//               className={getAccountBlockClass("0xfc0b52E020223c98a546F814cdA6d7872D74b386")}
//               onClick={() => {
//                 navigator.clipboard.writeText("0xfc0b52E020223c98a546F814cdA6d7872D74b386");
//                 setCopiedValue("0xfc0b52E020223c98a546F814cdA6d7872D74b386");
//               }}
//             >
//               <span>
//                 <strong>Ethereum (ETH):</strong> 0xfc0b52E020223c98a546F814cdA6d7872D74b386
//               </span>
//               <CopyBlock value="0xfc0b52E020223c98a546F814cdA6d7872D74b386" copiedValue={copiedValue} />
//             </div>

//             <div
//               className={getAccountBlockClass("TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa")}
//               onClick={() => {
//                 navigator.clipboard.writeText("TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa");
//                 setCopiedValue("TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa");
//               }}
//             >
//               <span>
//                 <strong>USDT (TRC20):</strong> TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa
//               </span>
//               <CopyBlock value="TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa" copiedValue={copiedValue} />
//             </div>
//           </div>
//         </section>
//       ),
//     },
//     {
//       id: "Соціальне таксі у Херсонській області",
//       title: "Соціальне таксі у Херсонській області",
//       content: (
//         <section className={`${styles.paymentInfo} ${styles.secondBlock}`}>
//           <h4>БФ &quot;Я допомагаю&quot;</h4>
//           <p>
//             <strong>ЄДРПОУ:</strong> XXXXXXXX
//           </p>
//           <p>
//             <strong>Призначення платежу:</strong> Опис призначення платежу
//           </p>

//           <div
//             className={getAccountBlockClass("UAXXXXXXXXXXXXXXXXXXXXXXXXXXX")}
//             onClick={() => {
//               navigator.clipboard.writeText("UAXXXXXXXXXXXXXXXXXXXXXXXXXXX");
//               setCopiedValue("UAXXXXXXXXXXXXXXXXXXXXXXXXXXX");
//             }}
//           >
//             <span>
//               <strong>UAH:</strong>
//               <br /> UAXXXXXXXXXXXXXXXXXXXXXXXXXXX
//             </span>
//             <CopyBlock value="UAXXXXXXXXXXXXXXXXXXXXXXXXXXX" copiedValue={copiedValue} />
//           </div>

//           <div
//             className={getAccountBlockClass("UAYYYYYYYYYYYYYYYYYYYYYYYYYYY")}
//             onClick={() => {
//               navigator.clipboard.writeText("UAYYYYYYYYYYYYYYYYYYYYYYYYYYY");
//               setCopiedValue("UAYYYYYYYYYYYYYYYYYYYYYYYYYYY");
//             }}
//           >
//             <span>
//               <strong>Мультивалютний рахунок:</strong>
//               <br /> UAYYYYYYYYYYYYYYYYYYYYYYYYYYY
//             </span>
//             <CopyBlock value="UAYYYYYYYYYYYYYYYYYYYYYYYYYYY" copiedValue={copiedValue} />
//           </div>

//           <div className={styles.bankLink}>
//             <strong>Monobank (банка):</strong>
//             <br />
//             <a href="https://send.monobank.ua/jar/7mP4ZFCree" target="_blank" rel="noopener noreferrer">
//               https://send.monobank.ua/jar/7mP4ZFCrPj
//             </a>
//           </div>

//           <div className={styles.crypto}>
//             <strong>Донати в криптовалюті:</strong>

//             <div
//               className={getAccountBlockClass("bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r")}
//               onClick={() => {
//                 navigator.clipboard.writeText("bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r");
//                 setCopiedValue("bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r");
//               }}
//             >
//               <span>
//                 <strong>Bitcoin (BTC):</strong> bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r
//               </span>
//               <CopyBlock value="bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r" copiedValue={copiedValue} />
//             </div>

//             <div
//               className={getAccountBlockClass("0xfc0b52E020223c98a546F814cdA6d7872D74b386")}
//               onClick={() => {
//                 navigator.clipboard.writeText("0xfc0b52E020223c98a546F814cdA6d7872D74b386");
//                 setCopiedValue("0xfc0b52E020223c98a546F814cdA6d7872D74b386");
//               }}
//             >
//               <span>
//                 <strong>Ethereum (ETH):</strong> 0xfc0b52E020223c98a546F814cdA6d7872D74b386
//               </span>
//               <CopyBlock value="0xfc0b52E020223c98a546F814cdA6d7872D74b386" copiedValue={copiedValue} />
//             </div>

//             <div
//               className={getAccountBlockClass("TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa")}
//               onClick={() => {
//                 navigator.clipboard.writeText("TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa");
//                 setCopiedValue("TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa");
//               }}
//             >
//               <span>
//                 <strong>USDT (TRC20):</strong> TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa
//               </span>
//               <CopyBlock value="TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa" copiedValue={copiedValue} />
//             </div>
//           </div>
//         </section>
//       ),
//     },
//     {
//       id: "Допомога дітям Херсонщини",
//       title: "Допомога дітям Херсонщини",
//       content: (
//         <section className={`${styles.paymentInfo} ${styles.thirdBlock}`}>
//           <h4>БФ &quot;Я допомагаю&quot;</h4>
//           <p>
//             <strong>ЄДРПОУ:</strong> XXXXXXXX
//           </p>
//           <p>
//             <strong>Призначення платежу:</strong> Опис призначення платежу
//           </p>

//           <div
//             className={getAccountBlockClass("UAXXXXXXXXXXXXXXXXXXXXXXXXXXX")}
//             onClick={() => {
//               navigator.clipboard.writeText("UAXXXXXXXXXXXXXXXXXXXXXXXXXXX");
//               setCopiedValue("UAXXXXXXXXXXXXXXXXXXXXXXXXXXX");
//             }}
//           >
//             <span>
//               <strong>UAH:</strong>
//               <br /> UAXXXXXXXXXXXXXXXXXXXXXXXXXXX
//             </span>
//             <CopyBlock value="UAXXXXXXXXXXXXXXXXXXXXXXXXXXX" copiedValue={copiedValue} />
//           </div>

//           <div
//             className={getAccountBlockClass("UAYYYYYYYYYYYYYYYYYYYYYYYYYYY")}
//             onClick={() => {
//               navigator.clipboard.writeText("UAYYYYYYYYYYYYYYYYYYYYYYYYYYY");
//               setCopiedValue("UAYYYYYYYYYYYYYYYYYYYYYYYYYYY");
//             }}
//           >
//             <span>
//               <strong>Мультивалютний рахунок:</strong>
//               <br /> UAYYYYYYYYYYYYYYYYYYYYYYYYYYY
//             </span>
//             <CopyBlock value="UAYYYYYYYYYYYYYYYYYYYYYYYYYYY" copiedValue={copiedValue} />
//           </div>

//           <div className={styles.bankLink}>
//             <strong>Monobank (банка):</strong>
//             <br />
//             <a href="https://send.monobank.ua/jar/7mP4ZFCree" target="_blank" rel="noopener noreferrer">
//               https://send.monobank.ua/jar/7mP4ZFCrPj
//             </a>
//           </div>

//           <div className={styles.crypto}>
//             <strong>Донати в криптовалюті:</strong>

//             <div
//               className={getAccountBlockClass("bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r")}
//               onClick={() => {
//                 navigator.clipboard.writeText("bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r");
//                 setCopiedValue("bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r");
//               }}
//             >
//               <span>
//                 <strong>Bitcoin (BTC):</strong> bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r
//               </span>
//               <CopyBlock value="bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r" copiedValue={copiedValue} />
//             </div>

//             <div
//               className={getAccountBlockClass("0xfc0b52E020223c98a546F814cdA6d7872D74b386")}
//               onClick={() => {
//                 navigator.clipboard.writeText("0xfc0b52E020223c98a546F814cdA6d7872D74b386");
//                 setCopiedValue("0xfc0b52E020223c98a546F814cdA6d7872D74b386");
//               }}
//             >
//               <span>
//                 <strong>Ethereum (ETH):</strong> 0xfc0b52E020223c98a546F814cdA6d7872D74b386
//               </span>
//               <CopyBlock value="0xfc0b52E020223c98a546F814cdA6d7872D74b386" copiedValue={copiedValue} />
//             </div>

//             <div
//               className={getAccountBlockClass("TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa")}
//               onClick={() => {
//                 navigator.clipboard.writeText("TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa");
//                 setCopiedValue("TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa");
//               }}
//             >
//               <span>
//                 <strong>USDT (TRC20):</strong> TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa
//               </span>
//               <CopyBlock value="TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa" copiedValue={copiedValue} />
//             </div>
//           </div>
//         </section>
//       ),
//     },
//     {
//       id: "Стати волонтером",
//       title: "Стати волонтером",
//       slug: "become-a-volunteer",
//       content: (
//         <div className={styles.volunteerBlock}>
//           <section className={styles.joinUs}>
//             <div className={styles.container}>
//               <h3 className={styles.title}>Кожна пара рук і кожна ідея важливі!</h3>
//               <p className={styles.intro}>
//                 Я, твій побратим <em>Анатолій Дзюбенко</em>, засновник <em>iHELP</em>, запрошую тебе стати пліч-о-пліч
//                 із нашою командою — як фізичною працею, так і розумовою діяльністю. Разом ми здатні зробити більше!
//               </p>
//               <div className={styles.bullets}>
//                 <p>Твоя участь стане рушійною силою в iHELP:</p>
//                 <ul>
//                   <li>
//                     Ти допомагатимеш Петрові, Олександру та Тетяні з організацією логістики для доставки гуманітарної
//                     допомоги.
//                   </li>
//                   <li>
//                     Візьмеш участь у налагодженні процесів та отримаєш практичні знання з управління проєктами iHELP
//                     відповідно до найкращих стандартів <em>Project Management Institute (USA)</em>.
//                   </li>
//                   <li>
//                     Долучишся до створення як творчих, так і стратегічних рішень, розширюючи діяльність Фонду для
//                     підтримки людей у прифронтових зонах.
//                   </li>
//                 </ul>
//               </div>
//               <p className={styles.closing}>
//                 Твій талант, час і зусилля — це внесок, що дарує гідне життя і творить жадане майбутнє сильної України!
//               </p>
//               <div className={styles.contact}>
//                 <p>
//                   Напиши мені на{" "}
//                   <a href="https://fb.com/AnatoliiDziubenko" target="_blank" rel="noopener noreferrer">
//                     fb.com/AnatoliiDziubenko
//                   </a>
//                   , зателефонуй за номером <a href="tel:+380679832115">+38 067 983 2115</a>, або заповни форму нижче,
//                   щоб разом творити добро ще потужніше!
//                 </p>
//               </div>
//               <p className={styles.note}>
//                 *Фонд iHELP залишає за собою право резервування ключових волонтерів від мобілізації до лав Збройних сил
//                 України на весь термін часу війни для сприяння обороні України у волонтерському секторі відповідно до
//                 чинного законодавства України.
//               </p>
//             </div>
//           </section>
//           <ContactForm type="волонтерство" />
//         </div>
//       ),
//     },
//     {
//       id: "Стати партнером",
//       title: "Стати партнером",
//       slug: "become-a-partner",
//       content: (
//         <div className={styles.partnersBlock}>
//           <div className={styles.container}>
//             <h3 className={styles.heading}>Співпраця з iHELP</h3>
//             <p>
//               Ми заохочуємо до співпраці з <em>iHELP</em> українські комерційні підприємства, організації, а також усіх
//               суб’єктів громадянського суспільства, для яких важливість цільового та максимально ефективного
//               використання коштів і ресурсів є першочерговим пріоритетом, як це є для нас у iHELP.
//             </p>
//             <p>
//               <em>iHELP</em> гарантує найвищі стандарти ефективності, якості та прозорості в наданні гуманітарної
//               допомоги. Ми заряджаємо кожну гривню нашого партнера працювати «на повну», забезпечуючи безпомилкове
//               надходження допомоги тим, хто її потребує понад усе, навіть у найскладніших умовах.
//             </p>
//             <p className={styles.closing}>
//               Вам важливо, щоб кожен працівник організації працював із максимальною віддачею? Запрошуємо «найняти»
//               команду iHELP для реалізації ВАШОЇ допомоги там, де це справді важливо!
//             </p>
//             <ul className={styles.list}>
//               <li>Спрямування допомоги з бездоганною точністю.</li>
//               <li>
//                 Реалізацію гуманітарних проєктів, що відповідають світовим стандартам управління процесами та найвищим
//                 етичним принципам гуманітарної допомоги, забезпечуючи взірцеву якість, прозорість і максимальну
//                 ефективність.
//               </li>
//               <li>
//                 Майбутнє, де кожна донька чи син українця відчуває тепло підтримки, відновлення сил та віру в єдність і
//                 міць України.
//               </li>
//             </ul>
//             <div className={styles.contact}>
//               <p>
//                 Напишіть нам на{" "}
//                 <a href="https://fb.com/AnatoliiDziubenko" target="_blank" rel="noopener noreferrer">
//                   fb.com/AnatoliiDziubenko
//                 </a>
//                 , зателефонуйте за номером <a href="tel:+380679832115">+38 067 983 2115</a>, або заповніть форму нижче,
//                 щоб разом творити добро ще потужніше!
//               </p>
//             </div>
//           </div>
//           <ContactForm type="партнерство" />
//         </div>
//       ),
//     },
//   ];

//   // Filter logic based on page
//   const filteredInfos = (() => {
//     switch (page) {
//       case "KhersonChildren":
//         return formContent.filter(
//           (info) =>
//             info.id !== "Допомога людям на прифронтових територіях" &&
//             info.id !== "Соціальне таксі у Херсонській області"
//         );
//       case "FrontlinePeople":
//         return formContent.filter(
//           (info) => info.id !== "Соціальне таксі у Херсонській області" && info.id !== "Допомога дітям Херсонщини"
//         );
//       case "SocialTaxi":
//         return formContent.filter(
//           (info) => info.id !== "Допомога людям на прифронтових територіях" && info.id !== "Допомога дітям Херсонщини"
//         );
//       case "Default":
//       default:
//         return formContent;
//     }
//   })();

//   const handleToggle = (id) => {
//     setOpenId((prevId) => (prevId === id ? null : id));
//   };

//   // Auto-open based on hash suffix
//   useEffect(() => {
//     const hash = window.location.hash;
//     const prefix = "#ihelp-form:";
//     if (hash.startsWith(prefix)) {
//       const slug = hash.slice(prefix.length); // e.g., "become-a-volunteer"
//       const match = formContent.find((info) => info.slug === slug);
//       if (match) {
//         setOpenId(match.id);
//       }
//     }
//   }, []);

//   return (
//     <div className={styles.accordionWrapper} id="ihelp-form">
//       {filteredInfos.map(({ id, title, content }) => (
//         <AccordionItem key={id} id={id} title={title} isOpen={openId === id} onClick={handleToggle}>
//           {content}
//         </AccordionItem>
//       ))}
//     </div>
//   );
// }

// export default CtaForm;

// Auto-open based on hash suffix
// useEffect(() => {
//   const hash = window.location.hash;
//   const prefix = "#ihelp-form:";
//   if (hash.startsWith(prefix)) {
//     const slug = hash.slice(prefix.length); // e.g., "become-a-volunteer"
//     const match = formContent.find((info) => info.slug === slug);
//     if (match) {
//       setOpenId(match.id);
//     }
//   } else if (hash === "#ihelp-form" && formRef.current) {
//     setTimeout(() => {
//       const offset = 67;
//       const top = formRef.current.getBoundingClientRect().top + window.scrollY - offset;
//       window.scrollTo({
//         top,
//         behavior: "smooth",
//       });
//     }, 800); // delay ensures scroll happens after render
//   }
// }, []);

// Auto-open based on hash suffix
// useEffect(() => {
//   const hash = window.location.hash;
//   const prefix = "#ihelp-form:";
//   if (hash.startsWith(prefix)) {
//     const slug = hash.slice(prefix.length); // e.g., "become-a-volunteer"
//     const match = formContent.find((info) => info.slug === slug);
//     if (match) {
//       setOpenId(match.id);
//     }
//   }
// }, []);
