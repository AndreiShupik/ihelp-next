import React, { useRef, useEffect } from "react";

import Image from "next/image";
import { useTranslation } from "next-i18next";

import * as styles from "./ChildrenCards.module.scss";

import ChildrenPhoto1 from "../../../public/assets/images/children-1.jpg";
import ChildrenPhoto2 from "../../../public/assets/images/children-2.jpg";
import ChildrenPhoto3 from "../../../public/assets/images/children-3.jpg";
import ChildrenPhoto4 from "../../../public/assets/images/children-4.jpg";
import ChildrenPhoto5 from "../../../public/assets/images/children-5.jpg";

function ChildrenCards() {
  const { t } = useTranslation("about");
  const cardsRef = useRef(null);

  useEffect(() => {
    const cardsContainer = cardsRef.current;
    if (!cardsContainer) return;

    let touchStartX = 0;
    let touchStartY = 0;

    let touchCurrentX = 0;
    let isDragging = false;
    const minSwipeDistance = 50;
    const maxDragDistance = 100; // Maximum visual drag distance

    const getCurrentCardImg = () => {
      const currentChecked = cardsContainer.querySelector('input[name="radio-card"]:checked');
      const currentCard = currentChecked ? currentChecked.nextElementSibling : null;
      return currentCard ? currentCard.querySelector(`.${styles.cardImg}`) : null;
    };

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;

      touchCurrentX = touchStartX;
      isDragging = true;
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;

      touchCurrentX = e.changedTouches[0].screenX;
      const touchCurrentY = e.changedTouches[0].screenY;

      const dragDistance = touchCurrentX - touchStartX;
      const deltaY = touchCurrentY - touchStartY;

      // If horizontal movement is greater than vertical movement, block page scroll
      // if (Math.abs(touchStartX) > Math.abs(deltaY)) {
      if (Math.abs(dragDistance) > Math.abs(deltaY)) {
        e.preventDefault(); // Stop vertical scroll
      }

      // Limit drag distance and apply visual feedback
      const clampedDistance = Math.max(-maxDragDistance, Math.min(maxDragDistance, dragDistance));
      const currentCardImg = getCurrentCardImg();

      if (currentCardImg) {
        // Apply temporary transform to only the image, keeping buttons static
        currentCardImg.style.transform = `translateX(${clampedDistance * 0.3}px)`;
        currentCardImg.style.transition = "none";
      }
    };

    const handleTouchEnd = (e) => {
      if (!isDragging) return;

      isDragging = false;
      const swipeDistance = touchCurrentX - touchStartX;
      const currentCardImg = getCurrentCardImg();

      // Reset visual state
      if (currentCardImg) {
        currentCardImg.style.transform = "";
        currentCardImg.style.transition = "";
      }

      if (Math.abs(swipeDistance) < minSwipeDistance) return;

      // Get currently checked radio button
      const currentChecked = cardsContainer.querySelector('input[name="radio-card"]:checked');
      if (!currentChecked) return;

      const currentId = parseInt(currentChecked.id.split("-")[1]);
      let targetId;

      if (swipeDistance > 0) {
        // Swipe right - forward (next card)
        targetId = currentId < 5 ? currentId + 1 : 1;
      } else {
        // Swipe left - back (previous card)
        targetId = currentId > 1 ? currentId - 1 : 5;
      }

      // Check the target radio button
      const targetRadio = cardsContainer.querySelector(`#radio-${targetId}`);
      if (targetRadio) {
        targetRadio.checked = true;
      }
    };

    cardsContainer.addEventListener("touchstart", handleTouchStart, { passive: false });
    cardsContainer.addEventListener("touchmove", handleTouchMove, { passive: false });
    cardsContainer.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      cardsContainer.removeEventListener("touchstart", handleTouchStart);
      cardsContainer.removeEventListener("touchmove", handleTouchMove);
      cardsContainer.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className={styles.cards} ref={cardsRef}>
      <input type="radio" id="radio-1" name="radio-card" defaultChecked />
      <article className={styles.card} style={{ "--angle": "4deg" }}>
        <Image className={styles.cardImg} src={ChildrenPhoto1} alt={t("1stChildrenCardAlt")} />
        <div className={styles.cardData}>
          <span className={styles.cardNum}>1/5</span>
          <footer>
            <label htmlFor="radio-5" aria-label="Previous">
              &#10094;
            </label>
            <label htmlFor="radio-2" aria-label="Next">
              &#10095;
            </label>
          </footer>
        </div>
      </article>

      <input type="radio" id="radio-2" name="radio-card" />
      <article className={styles.card} style={{ "--angle": "-8deg" }}>
        <Image className={styles.cardImg} src={ChildrenPhoto2} alt={t("2ndChildrenCardAlt")} />
        <div className={styles.cardData}>
          <span className={styles.cardNum}>2/5</span>
          <footer>
            <label htmlFor="radio-1" aria-label="Previous">
              &#10094;
            </label>
            <label htmlFor="radio-3" aria-label="Next">
              &#10095;
            </label>
          </footer>
        </div>
      </article>

      <input type="radio" id="radio-3" name="radio-card" />
      <article className={styles.card} style={{ "--angle": "-7deg" }}>
        <Image className={styles.cardImg} src={ChildrenPhoto3} alt={t("3rdChildrenCardAlt")} />
        <div className={styles.cardData}>
          <span className={styles.cardNum}>3/5</span>
          <footer>
            <label htmlFor="radio-2" aria-label="Previous">
              &#10094;
            </label>
            <label htmlFor="radio-4" aria-label="Next">
              &#10095;
            </label>
          </footer>
        </div>
      </article>

      <input type="radio" id="radio-4" name="radio-card" />
      <article className={styles.card} style={{ "--angle": "11deg" }}>
        <Image className={styles.cardImg} src={ChildrenPhoto4} alt={t("4thChildrenCardAlt")} />
        <div className={styles.cardData}>
          <span className={styles.cardNum}>4/5</span>
          <footer>
            <label htmlFor="radio-3" aria-label="Previous">
              &#10094;
            </label>
            <label htmlFor="radio-5" aria-label="Next">
              &#10095;
            </label>
          </footer>
        </div>
      </article>

      <input type="radio" id="radio-5" name="radio-card" />
      <article className={styles.card} style={{ "--angle": "13deg" }}>
        <Image className={styles.cardImg} src={ChildrenPhoto5} alt={t("5thChildrenCardAlt")} />
        <div className={styles.cardData}>
          <span className={styles.cardNum}>5/5</span>
          <footer>
            <label htmlFor="radio-4" aria-label="Previous">
              &#10094;
            </label>
            <label htmlFor="radio-1" aria-label="Next">
              &#10095;
            </label>
          </footer>
        </div>
      </article>
    </div>
  );
}

export default ChildrenCards;

// -------- Desktop Swipping -------
// import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";

// import * as styles from "./ChildrenCards.module.scss";

// import ChildrenPhoto1 from "../../../public/assets/images/children-1.jpg";
// import ChildrenPhoto2 from "../../../public/assets/images/children-2.jpg";
// import ChildrenPhoto3 from "../../../public/assets/images/children-3.jpg";
// import ChildrenPhoto4 from "../../../public/assets/images/children-4.jpg";
// import ChildrenPhoto5 from "../../../public/assets/images/children-5.jpg";
// // import ChildrenPhoto6 from "../../../public/assets/images/children-6.jpg";
// // import ChildrenPhoto7 from "../../../public/assets/images/children-7.jpg";

// function ChildrenCards() {
//   const cardsRef = useRef(null);

//   useEffect(() => {
//     const cardsContainer = cardsRef.current;
//     if (!cardsContainer) return;

//     let startX = 0;
//     let currentX = 0;
//     let isDragging = false;
//     const minSwipeDistance = 50;
//     const maxDragDistance = 100; // Maximum visual drag distance

//     const getCurrentCardImg = () => {
//       const currentChecked = cardsContainer.querySelector('input[name="radio-card"]:checked');
//       const currentCard = currentChecked ? currentChecked.nextElementSibling : null;
//       return currentCard ? currentCard.querySelector(`.${styles.cardImg}`) : null;
//     };

//     const handleStart = (clientX) => {
//       startX = clientX;
//       currentX = startX;
//       isDragging = true;

//       // Prevent text selection during drag on desktop
//       document.body.style.userSelect = "none";

//       // Change cursor to grabbing when dragging starts
//       const currentCardImg = getCurrentCardImg();
//       if (currentCardImg) {
//         currentCardImg.style.cursor = "grabbing";
//       }
//     };

//     const handleMove = (clientX) => {
//       if (!isDragging) return;

//       currentX = clientX;
//       const dragDistance = currentX - startX;

//       // Limit drag distance and apply visual feedback
//       const clampedDistance = Math.max(-maxDragDistance, Math.min(maxDragDistance, dragDistance));
//       const currentCardImg = getCurrentCardImg();

//       if (currentCardImg) {
//         // Apply temporary transform to only the image, keeping buttons static
//         currentCardImg.style.transform = `translateX(${clampedDistance * 0.3}px)`;
//         currentCardImg.style.transition = "none";
//       }
//     };

//     const handleEnd = () => {
//       if (!isDragging) return;

//       isDragging = false;
//       const swipeDistance = currentX - startX;
//       const currentCardImg = getCurrentCardImg();

//       // Reset visual state
//       if (currentCardImg) {
//         currentCardImg.style.transform = "";
//         currentCardImg.style.transition = "";
//       }

//       // Re-enable text selection on desktop
//       document.body.style.userSelect = "";

//       // Reset cursor to grab only if we were dragging
//       if (isDragging) {
//         const currentCardImg = getCurrentCardImg();
//         if (currentCardImg) {
//           currentCardImg.style.cursor = "grab";
//         }
//       }

//       if (Math.abs(swipeDistance) < minSwipeDistance) return;

//       // Get currently checked radio button
//       const currentChecked = cardsContainer.querySelector('input[name="radio-card"]:checked');
//       if (!currentChecked) return;

//       const currentId = parseInt(currentChecked.id.split("-")[1]);
//       let targetId;

//       if (swipeDistance > 0) {
//         // Drag right - forward (next card)
//         targetId = currentId < 5 ? currentId + 1 : 1;
//       } else {
//         // Drag left - back (previous card)
//         targetId = currentId > 1 ? currentId - 1 : 5;
//       }

//       // Check the target radio button
//       const targetRadio = cardsContainer.querySelector(`#radio-${targetId}`);
//       if (targetRadio) {
//         targetRadio.checked = true;
//       }
//     };

//     // Touch events
//     const handleTouchStart = (e) => {
//       handleStart(e.changedTouches[0].screenX);
//     };

//     const handleTouchMove = (e) => {
//       e.preventDefault(); // Prevent scrolling during swipe
//       handleMove(e.changedTouches[0].screenX);
//     };

//     const handleTouchEnd = () => {
//       handleEnd();
//     };

//     // Mouse events
//     const handleMouseDown = (e) => {
//       // Only allow dragging if clicking on a card image
//       if (!e.target.classList.contains(styles.cardImg)) return;

//       e.preventDefault(); // Prevent image dragging
//       handleStart(e.clientX);
//     };

//     const handleMouseMove = (e) => {
//       handleMove(e.clientX);
//     };

//     const handleMouseUp = () => {
//       handleEnd();
//     };

//     const handleMouseLeave = () => {
//       // End drag if mouse leaves the container
//       if (isDragging) {
//         handleEnd();
//       }
//     };

//     // Add touch event listeners
//     cardsContainer.addEventListener("touchstart", handleTouchStart, { passive: false });
//     cardsContainer.addEventListener("touchmove", handleTouchMove, { passive: false });
//     cardsContainer.addEventListener("touchend", handleTouchEnd, { passive: false });

//     // Add mouse event listeners
//     cardsContainer.addEventListener("mousedown", handleMouseDown);
//     cardsContainer.addEventListener("mousemove", handleMouseMove);
//     cardsContainer.addEventListener("mouseup", handleMouseUp);
//     cardsContainer.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       // Remove touch event listeners
//       cardsContainer.removeEventListener("touchstart", handleTouchStart);
//       cardsContainer.removeEventListener("touchmove", handleTouchMove);
//       cardsContainer.removeEventListener("touchend", handleTouchEnd);

//       // Remove mouse event listeners
//       cardsContainer.removeEventListener("mousedown", handleMouseDown);
//       cardsContainer.removeEventListener("mousemove", handleMouseMove);
//       cardsContainer.removeEventListener("mouseup", handleMouseUp);
//       cardsContainer.removeEventListener("mouseleave", handleMouseLeave);

//       // Clean up body styles
//       document.body.style.userSelect = "";

//       // Reset any cursor styles on card images
//       const allCardImages = cardsContainer.querySelectorAll(`.${styles.cardImg}`);
//       allCardImages.forEach((img) => {
//         img.style.cursor = "";
//       });
//     };
//   }, []);

//   return (
//     <div className={styles.cards} ref={cardsRef}>
//       <input type="radio" id="radio-1" name="radio-card" defaultChecked />
//       <article className={styles.card} style={{ "--angle": "4deg" }}>
//         <Image className={styles.cardImg} src={ChildrenPhoto1} alt="iHELP. Children 1st photo" />
//         <div className={styles.cardData}>
//           <span className={styles.cardNum}>1/5</span>
//           <footer>
//             <label htmlFor="radio-5" aria-label="Previous">
//               &#10094;
//             </label>
//             <label htmlFor="radio-2" aria-label="Next">
//               &#10095;
//             </label>
//           </footer>
//         </div>
//       </article>

//       <input type="radio" id="radio-2" name="radio-card" />
//       <article className={styles.card} style={{ "--angle": "-8deg" }}>
//         <Image className={styles.cardImg} src={ChildrenPhoto2} alt="iHELP. Children 2nd photo" />
//         <div className={styles.cardData}>
//           <span className={styles.cardNum}>2/5</span>
//           <footer>
//             <label htmlFor="radio-1" aria-label="Previous">
//               &#10094;
//             </label>
//             <label htmlFor="radio-3" aria-label="Next">
//               &#10095;
//             </label>
//           </footer>
//         </div>
//       </article>

//       <input type="radio" id="radio-3" name="radio-card" />
//       <article className={styles.card} style={{ "--angle": "-7deg" }}>
//         <Image className={styles.cardImg} src={ChildrenPhoto3} alt="iHELP. Children 3rd photo" />
//         <div className={styles.cardData}>
//           <span className={styles.cardNum}>3/5</span>
//           <footer>
//             <label htmlFor="radio-2" aria-label="Previous">
//               &#10094;
//             </label>
//             <label htmlFor="radio-4" aria-label="Next">
//               &#10095;
//             </label>
//           </footer>
//         </div>
//       </article>

//       <input type="radio" id="radio-4" name="radio-card" />
//       <article className={styles.card} style={{ "--angle": "11deg" }}>
//         <Image className={styles.cardImg} src={ChildrenPhoto4} alt="iHELP. Children 4th photo" />
//         <div className={styles.cardData}>
//           <span className={styles.cardNum}>4/5</span>
//           <footer>
//             <label htmlFor="radio-3" aria-label="Previous">
//               &#10094;
//             </label>
//             <label htmlFor="radio-5" aria-label="Next">
//               &#10095;
//             </label>
//           </footer>
//         </div>
//       </article>

//       <input type="radio" id="radio-5" name="radio-card" />
//       <article className={styles.card} style={{ "--angle": "13deg" }}>
//         <Image className={styles.cardImg} src={ChildrenPhoto5} alt="iHELP. Children 5th photo" />
//         <div className={styles.cardData}>
//           <span className={styles.cardNum}>5/5</span>
//           <footer>
//             <label htmlFor="radio-4" aria-label="Previous">
//               &#10094;
//             </label>
//             <label htmlFor="radio-1" aria-label="Next">
//               &#10095;
//             </label>
//           </footer>
//         </div>
//       </article>
//     </div>
//   );
// }

// export default ChildrenCards;

// -------- Initial variant --------
// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// import * as styles from "./ChildrenCards.module.scss";

// import ChildrenPhoto1 from "../../../public/assets/images/children-1.jpg";
// import ChildrenPhoto2 from "../../../public/assets/images/children-2.jpg";
// import ChildrenPhoto3 from "../../../public/assets/images/children-3.jpg";
// import ChildrenPhoto4 from "../../../public/assets/images/children-4.jpg";
// import ChildrenPhoto5 from "../../../public/assets/images/children-5.jpg";
// // import ChildrenPhoto6 from "../../../public/assets/images/children-6.jpg";
// // import ChildrenPhoto7 from "../../../public/assets/images/children-7.jpg";

// function ChildrenCards() {
//   return (
//     <div className={styles.cards}>
//       <input type="radio" id="radio-1" name="radio-card" defaultChecked />
//       <article className={styles.card} style={{ "--angle": "4deg" }}>
//         <Image className={styles.cardImg} src={ChildrenPhoto1} alt="iHELP. Children 1st photo" />
//         <div className={styles.cardData}>
//           <span className={styles.cardNum}>1/5</span>
//           {/* <h2>Alejandro Escamilla</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex
//             voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!
//           </p> */}
//           <footer>
//             <label htmlFor="radio-5" aria-label="Previous">
//               &#10094;
//             </label>
//             <label htmlFor="radio-2" aria-label="Next">
//               &#10095;
//             </label>
//           </footer>
//         </div>
//       </article>

//       <input type="radio" id="radio-2" name="radio-card" />
//       <article className={styles.card} style={{ "--angle": "-8deg" }}>
//         <Image className={styles.cardImg} src={ChildrenPhoto2} alt="iHELP. Children 2nd photo" />
//         <div className={styles.cardData}>
//           <span className={styles.cardNum}>2/5</span>
//           {/* <h2>Shyamanta Baruah</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex
//             voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!
//           </p> */}
//           <footer>
//             <label htmlFor="radio-1" aria-label="Previous">
//               &#10094;
//             </label>
//             <label htmlFor="radio-3" aria-label="Next">
//               &#10095;
//             </label>
//           </footer>
//         </div>
//       </article>

//       <input type="radio" id="radio-3" name="radio-card" />
//       <article className={styles.card} style={{ "--angle": "-7deg" }}>
//         <Image className={styles.cardImg} src={ChildrenPhoto3} alt="iHELP. Children 3rd photo" />
//         <div className={styles.cardData}>
//           <span className={styles.cardNum}>3/5</span>
//           {/* <h2>Luke Chesser</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex
//             voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!
//           </p> */}
//           <footer>
//             <label htmlFor="radio-2" aria-label="Previous">
//               &#10094;
//             </label>
//             <label htmlFor="radio-4" aria-label="Next">
//               &#10095;
//             </label>
//           </footer>
//         </div>
//       </article>

//       <input type="radio" id="radio-4" name="radio-card" />
//       <article className={styles.card} style={{ "--angle": "11deg" }}>
//         <Image className={styles.cardImg} src={ChildrenPhoto4} alt="iHELP. Children 4th photo" />
//         <div className={styles.cardData}>
//           <span className={styles.cardNum}>4/5</span>
//           {/* <h2>Ilham Rahmansyah</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex
//             voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!
//           </p> */}
//           <footer>
//             <label htmlFor="radio-3" aria-label="Previous">
//               &#10094;
//             </label>
//             <label htmlFor="radio-5" aria-label="Next">
//               &#10095;
//             </label>
//           </footer>
//         </div>
//       </article>

//       <input type="radio" id="radio-5" name="radio-card" />
//       <article className={styles.card} style={{ "--angle": "13deg" }}>
//         <Image className={styles.cardImg} src={ChildrenPhoto5} alt="iHELP. Children 5th photo" />
//         <div className={styles.cardData}>
//           <span className={styles.cardNum}>5/5</span>
//           {/* <h2>petradr</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex
//             voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!
//           </p> */}
//           <footer>
//             <label htmlFor="radio-4" aria-label="Previous">
//               &#10094;
//             </label>
//             <label htmlFor="radio-1" aria-label="Next">
//               &#10095;
//             </label>
//           </footer>
//         </div>
//       </article>

//       {/* <input type="radio" id="radio-6" name="radio-card" />
//       <article className={styles.card} style={{ "--angle": "-17deg" }}>
//         <Image className={styles.cardImg} src={ChildrenPhoto6} alt="iHELP. Children 6th photo" />
//         <div className={styles.cardData}>
//           <span className={styles.cardNum}>6/7</span>
//           <h2>Caleb George</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex
//             voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!
//           </p>
//           <footer>
//             <label htmlFor="radio-5" aria-label="Previous">
//               &#10094;
//             </label>
//             <label htmlFor="radio-7" aria-label="Next">
//               &#10095;
//             </label>
//           </footer>
//         </div>
//       </article> */}

//       {/* <input type="radio" id="radio-7" name="radio-card" />
//       <article className={styles.card} style={{ "--angle": "20deg" }}>
//         <Image className={styles.cardImg} src={ChildrenPhoto7} alt="iHELP. Children 7th photo" />
//         <div className={styles.cardData}>
//           <span className={styles.cardNum}>7/7</span>
//           <h2>Austin Ban</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex
//             voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!
//           </p>
//           <footer>
//             <label htmlFor="radio-6" aria-label="Previous">
//               &#10094;
//             </label>
//             <label htmlFor="radio-1" aria-label="Next">
//               &#10095;
//             </label>
//           </footer>
//         </div>
//       </article> */}
//     </div>
//   );
// }

// export default ChildrenCards;
