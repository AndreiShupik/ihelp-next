import React, { useState, useEffect } from "react";
import Image from "next/image";

import * as styles from "./ChildrenCards.module.scss";

import ChildrenPhoto1 from "../../../public/assets/images/children-1.jpg";
import ChildrenPhoto2 from "../../../public/assets/images/children-2.jpg";
import ChildrenPhoto3 from "../../../public/assets/images/children-3.jpg";
import ChildrenPhoto4 from "../../../public/assets/images/children-4.jpg";
import ChildrenPhoto5 from "../../../public/assets/images/children-5.jpg";
// import ChildrenPhoto6 from "../../../public/assets/images/children-6.jpg";
// import ChildrenPhoto7 from "../../../public/assets/images/children-7.jpg";

function ChildrenCards() {
  return (
    <div className={styles.cards}>
      <input type="radio" id="radio-1" name="radio-card" defaultChecked />
      <article className={styles.card} style={{ "--angle": "4deg" }}>
        <Image className={styles.cardImg} src={ChildrenPhoto1} alt="iHELP. Children 1st photo" />
        <div className={styles.cardData}>
          <span className={styles.cardNum}>1/5</span>
          {/* <h2>Alejandro Escamilla</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex
            voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!
          </p> */}
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
        <Image className={styles.cardImg} src={ChildrenPhoto2} alt="iHELP. Children 2nd photo" />
        <div className={styles.cardData}>
          <span className={styles.cardNum}>2/5</span>
          {/* <h2>Shyamanta Baruah</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex
            voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!
          </p> */}
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
        <Image className={styles.cardImg} src={ChildrenPhoto3} alt="iHELP. Children 3rd photo" />
        <div className={styles.cardData}>
          <span className={styles.cardNum}>3/5</span>
          {/* <h2>Luke Chesser</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex
            voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!
          </p> */}
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
        <Image className={styles.cardImg} src={ChildrenPhoto4} alt="iHELP. Children 4th photo" />
        <div className={styles.cardData}>
          <span className={styles.cardNum}>4/5</span>
          {/* <h2>Ilham Rahmansyah</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex
            voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!
          </p> */}
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
        <Image className={styles.cardImg} src={ChildrenPhoto5} alt="iHELP. Children 5th photo" />
        <div className={styles.cardData}>
          <span className={styles.cardNum}>5/5</span>
          {/* <h2>petradr</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex
            voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!
          </p> */}
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

      {/* <input type="radio" id="radio-6" name="radio-card" />
      <article className={styles.card} style={{ "--angle": "-17deg" }}>
        <Image className={styles.cardImg} src={ChildrenPhoto6} alt="iHELP. Children 6th photo" />
        <div className={styles.cardData}>
          <span className={styles.cardNum}>6/7</span>
          <h2>Caleb George</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex
            voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!
          </p>
          <footer>
            <label htmlFor="radio-5" aria-label="Previous">
              &#10094;
            </label>
            <label htmlFor="radio-7" aria-label="Next">
              &#10095;
            </label>
          </footer>
        </div>
      </article> */}

      {/* <input type="radio" id="radio-7" name="radio-card" />
      <article className={styles.card} style={{ "--angle": "20deg" }}>
        <Image className={styles.cardImg} src={ChildrenPhoto7} alt="iHELP. Children 7th photo" />
        <div className={styles.cardData}>
          <span className={styles.cardNum}>7/7</span>
          <h2>Austin Ban</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores accusantium cumque atque? Ex
            voluptatem quisquam temporibus. Provident rerum quae nemo eligendi fugiat!
          </p>
          <footer>
            <label htmlFor="radio-6" aria-label="Previous">
              &#10094;
            </label>
            <label htmlFor="radio-1" aria-label="Next">
              &#10095;
            </label>
          </footer>
        </div>
      </article> */}
    </div>
  );
}

export default ChildrenCards;
