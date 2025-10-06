import { useState, useRef, useEffect } from "react";

import useIsMobile from "@/utils/useIsMobile";
import styles from "./MediaCarousel.module.scss";

import Image from "next/image";
import Link from "next/link";

// import media1st from "../../../public/assets/images/media/media-1.png";
// import media2nd from "../../../public/assets/images/media/media-2.png";
// import media3rd from "../../../public/assets/images/media/media-3.png";
// import media4th from "../../../public/assets/images/media/media-4.png";
// import media5th from "../../../public/assets/images/media/media-5.png";
// import media6th from "../../../public/assets/images/media/media-6.png";
// import media7th from "../../../public/assets/images/media/media-7.png";
// import media8th from "../../../public/assets/images/media/media-8.png";
// import media9th from "../../../public/assets/images/media/media-9.png";

import play from "../../../public/assets/icons/play.png";
import pause from "../../../public/assets/icons/pause.png";
import rewindForward from "../../../public/assets/icons/rewind-forward.png";
import rewindBack from "../../../public/assets/icons/rewind-back.png";

function MediaCarousel({ media }) {
  const [isRunning, setIsRunning] = useState(true);
  const [offset, setOffset] = useState(0);
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);
  const trackRef = useRef(null);

  const slideWidth = 160; // must match SCSS
  const isSmallScreen = useIsMobile(525); // 👈 true if <= 525px
  const rewindStep = isSmallScreen ? 1 : 3; // 👈 dynamic step

  // ✅ Duplicate media array for seamless infinite loop
  const slides = [...media, ...media];

  // Animation loop
  const animate = (time) => {
    if (previousTimeRef.current !== null && isRunning) {
      const deltaTime = time - previousTimeRef.current;
      setOffset((prev) => {
        const trackWidth = trackRef.current.scrollWidth / 2; // width of one set
        let next = prev + deltaTime * 0.05; // speed factor
        next = next % trackWidth; // wrap seamlessly
        return next;
      });
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isRunning]);

  // Controls
  const handleStopPlay = () => setIsRunning((prev) => !prev);

  const handleRewindLeft = () => {
    const trackWidth = trackRef.current.scrollWidth / 2;
    setOffset((prev) => (prev + slideWidth * rewindStep) % trackWidth);
  };

  const handleRewindRight = () => {
    const trackWidth = trackRef.current.scrollWidth / 2;
    setOffset((prev) => (prev - slideWidth * rewindStep + trackWidth) % trackWidth);
  };

  return (
    <section className={styles.mediaSection}>
      <h3 className={styles.mediaHeader}>Про нас пишуть</h3>
      <p>
        Ми відкрито ділимося результатами своєї роботи, і про нас говорять у медіа. Так ми доводимо: прозорість та
        довіра — основа нашої діяльності.
      </p>

      <div
        className={styles.slider}
        onMouseEnter={() => setIsRunning(false)} // pause on hover
        onMouseLeave={() => setIsRunning(true)} // resume on leave
      >
        <div ref={trackRef} className={styles.slideTrack} style={{ transform: `translateX(-${offset}px)` }}>
          {slides.map((item, index) => (
            <Link
              href={item.link || "#"}
              className={styles.slide}
              key={`${item.id}-${index}`}
              aria-label={`${item.name} — стаття про нас`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.logoWrapper}>
                <Image src={item.logo} alt={item.name} width={160} height={80} className={styles.logoImage} />
              </div>
            </Link>
          ))}
        </div>

        {/* controls */}
        <div className={styles.controls}>
          <button className={styles.controlBtn} onClick={handleRewindLeft}>
            <Image src={rewindForward} alt="Rewind Left" />
          </button>
          <button className={styles.controlBtn} onClick={handleStopPlay}>
            <Image src={isRunning ? pause : play} alt={isRunning ? "Pause" : "Play"} />
          </button>
          <button className={styles.controlBtn} onClick={handleRewindRight}>
            <Image src={rewindBack} alt="Rewind Right" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default MediaCarousel;

// function MediaCarousel(media) {
//   const [isRunning, setIsRunning] = useState(true);
//   const [offset, setOffset] = useState(0);
//   const requestRef = useRef(null);
//   const previousTimeRef = useRef(null);
//   const trackRef = useRef(null);

//   const slideWidth = 160; // must match SCSS
//   const isSmallScreen = useIsMobile(525); // 👈 will be true if <= 525px
//   const rewindStep = isSmallScreen ? 1 : 3; // 👈 dynamic value

//   const mediaSources = [
//     { id: 1, name: "Bloomberg", logo: media1st },
//     { id: 2, name: "Forbes", logo: media2nd },
//     { id: 3, name: "New York Post", logo: media3rd },
//     { id: 4, name: "The Washington Post", logo: media4th },
//     { id: 5, name: "The Guardian", logo: media5th },
//     { id: 6, name: "The New York Post", logo: media6th },
//     { id: 7, name: "USA Today", logo: media7th },
//     { id: 8, name: "Los Angeles Times", logo: media8th },
//     { id: 9, name: "The Miami Herald", logo: media9th },
//   ];

//   // duplicate once for seamless looping
//   const slides = [...mediaSources, ...mediaSources];

//   // Animation loop
//   const animate = (time) => {
//     if (previousTimeRef.current !== null && isRunning) {
//       const deltaTime = time - previousTimeRef.current;
//       setOffset((prev) => {
//         const trackWidth = trackRef.current.scrollWidth / 2; // one set width
//         let next = prev + deltaTime * 0.05; // speed factor
//         // 👇 wrap seamlessly instead of jumping
//         next = next % trackWidth;
//         return next;
//       });
//     }
//     previousTimeRef.current = time;
//     requestRef.current = requestAnimationFrame(animate);
//   };

//   useEffect(() => {
//     requestRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(requestRef.current);
//   }, [isRunning]);

//   // Controls
//   const handleStopPlay = () => setIsRunning((prev) => !prev);

//   const handleRewindLeft = () => {
//     const trackWidth = trackRef.current.scrollWidth / 2;
//     setOffset((prev) => (prev + slideWidth * rewindStep) % trackWidth);
//   };

//   const handleRewindRight = () => {
//     const trackWidth = trackRef.current.scrollWidth / 2;
//     setOffset((prev) => (prev - slideWidth * rewindStep + trackWidth) % trackWidth);
//   };

//   return (
//     <section className={styles.mediaSection}>
//       <h3 className={styles.mediaHeader}>Про нас пишуть</h3>
//       <p>
//         Ми відкрито ділимося результатами своєї роботи, і про нас говорять у медіа. Так ми доводимо: прозорість та
//         довіра — основа нашої діяльності.
//       </p>
//       <div
//         className={styles.slider}
//         onMouseEnter={() => setIsRunning(false)} // pause on hover
//         onMouseLeave={() => setIsRunning(true)} // resume on leave
//       >
//         <div ref={trackRef} className={styles.slideTrack} style={{ transform: `translateX(-${offset}px)` }}>
//           {slides.map((media, index) => (
//             <Link
//               href="#"
//               className={styles.slide}
//               key={`${media.id}-${index}`}
//               aria-label={`${media.name} — стаття про нас`}
//             >
//               <div className={styles.logoWrapper}>
//                 {" "}
//                 <Image src={media.logo} alt={media.name} className={styles.logoImage} />
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* controls */}
//         <div className={styles.controls}>
//           <button className={styles.controlBtn} onClick={handleRewindLeft}>
//             <Image src={rewindForward} alt="Rewind Left" />
//           </button>
//           <button className={styles.controlBtn} onClick={handleStopPlay}>
//             <Image src={isRunning ? pause : play} alt={isRunning ? "Pause" : "Play"} />
//           </button>
//           <button className={styles.controlBtn} onClick={handleRewindRight}>
//             <Image src={rewindBack} alt="Rewind Right" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default MediaCarousel;
