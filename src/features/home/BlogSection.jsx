import React, { useState, useEffect } from "react";
import Image from "next/image";
import * as styles from "./BlogSection.module.scss";

// ✅ Custom hook to detect mobile screen
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export default function BlogSection({ posts }) {
  const [visibleCount, setVisibleCount] = useState(4);
  const isMobile = useIsMobile();

  // Format posts with date formatting
  const formattedPosts = posts.map((post) => ({
    ...post,
    date: new Date(post.created_at).toLocaleDateString("uk-UA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
    link: "#", // you can update this if you have post pages
  }));

  // ✅ Format posts with custom date format (dd/mm/yyyy)
  // const formattedPosts = posts.map((post) => {
  //   const dateObj = new Date(post.created_at);
  //   const day = String(dateObj.getDate()).padStart(2, "0");
  //   const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  //   const year = dateObj.getFullYear();

  //   return {
  //     ...post,
  //     date: `${day}/${month}/${year}`,
  //     link: "#", // you can update this if you have individual post pages
  //   };
  // });

  // ✅ Determine visible posts
  const visiblePosts = formattedPosts.slice(0, visibleCount);
  const topPosts = visiblePosts.slice(0, 4);
  const restPosts = visiblePosts.slice(4);

  // ✅ Combine posts for mobile view (sidePosts + additionalPosts together)
  const mobileCombinedPosts = isMobile ? [...topPosts.slice(1), ...restPosts] : restPosts;

  return (
    <section className={styles.blogSection}>
      <div className={styles.wrapper}>
        <h3>Останні новини</h3>
        <p className={styles.description}>
          Блог iHELP — це місце для щирих історій, новин про проєкти, порад і натхнення. Ми пишемо про виклики й щоденні
          зусилля, що нас гартують та перемоги, які мотивують до невпинного руху вперед.
        </p>

        <div className={styles.blogs}>
          {topPosts.length > 0 && (
            <div className={styles.topPosts}>
              {/* ✅ Main Post */}
              <a href={topPosts[0].link} className={styles.mainPost}>
                <Image src={topPosts[0].img} alt={topPosts[0].title} width={600} height={400} priority />
                <h4>{topPosts[0].title}</h4>
                <p>{topPosts[0].description}</p>
                <span>{topPosts[0].date}</span>
              </a>

              {/* ✅ Show sidePosts only on desktop */}
              {!isMobile && (
                <div className={`${styles.secondaryPosts} ${styles.sidePosts}`}>
                  {topPosts.slice(1).map((post) => (
                    <a href={post.link} key={post.id} className={styles.sidePost}>
                      <Image src={post.img} alt={post.title} width={300} height={200} />
                      <h4>{post.title}</h4>
                      <p>{post.description}</p>
                      <span>{post.date}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ✅ Remaining posts (merged on mobile) */}
          <div className={`${styles.secondaryPosts} ${styles.additionalPosts}`}>
            {mobileCombinedPosts.map((post, index) => {
              // Only animate posts that are NOT the first 3 sidePosts on mobile
              const shouldAnimate = !isMobile || index >= topPosts.slice(1).length;

              return (
                <a
                  href={post.link}
                  key={post.id}
                  className={`${styles.post} ${shouldAnimate ? styles.animated : ""}`}
                  style={shouldAnimate ? { animationDelay: `${index * 0.1}s` } : {}}
                >
                  <Image src={post.img} alt={post.title} width={300} height={200} />
                  <h4>{post.title}</h4>
                  <p>{post.description}</p>
                  <span>{post.date}</span>
                </a>
              );
            })}
          </div>

          {/* ✅ Load More Button */}
          {visibleCount < formattedPosts.length && (
            <span className={styles.loadMore} onClick={() => setVisibleCount((prev) => prev + 4)}>
              Більше новин
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

// import blogFirstPhoto from "../../../public/assets/images/blog-1.webp";
// import blogSecondPhoto from "../../../public/assets/images/blog-2.webp";
// import blogThirdPhoto from "../../../public/assets/images/blog-3.jpg";
// import blogFourthPhoto from "../../../public/assets/images/blog-4.jpg";

// const allPosts = [
//   {
//     id: 1,
//     title: "500 зимових наборів доставлено до Миколаївської області",
//     image: blogFirstPhoto,
//     excerpt:
//       "У наборах — теплі ковдри, термобілизна, засоби гігієни та продукти тривалого зберігання. Це критично важлива допомога для людей, які залишились без стабільного опалення в умовах холодної зими...",
//     date: "1/1/2025",
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "Як ваші пожертви допомогли відновити школу у Херсоні",
//     image: blogSecondPhoto,
//     excerpt:
//       "Після звільнення Херсона багато навчальних закладів залишилися пошкодженими. Завдяки вашим пожертвам нам вдалося закупити необхідні матеріали для ремонту, відновити вікна та електропостачання в одній із міських шкіл...",
//     date: "1/1/2025",
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Історії волонтерів: робота на передовій",
//     image: blogThirdPhoto,
//     excerpt:
//       "Щодня наші волонтери ризикують життям, доставляючи допомогу у прифронтові зони. Один із таких героїв — Олексій, який уже понад рік перевозить медикаменти та продукти в найнебезпечніші райони...",
//     date: "1/1/2025",
//     link: "#",
//   },
//   {
//     id: 4,
//     title: "До Херсону доставлена екстрена допомога",
//     image: blogFourthPhoto,
//     excerpt:
//       "Нещодавно до Херсону прибула чергова партія екстреної допомоги. У вантажі — генератори, питна вода, медикаменти та набори першої необхідності. Це стало можливим завдяки оперативному реагуванню партнерських організацій і волонтерів...",
//     date: "1/1/2025",
//     link: "#",
//   },
//   {
//     id: 5,
//     title: "Як ваші пожертви допомогли відновити школу у Херсоні",
//     image: blogSecondPhoto,
//     excerpt:
//       "Після звільнення Херсона багато навчальних закладів залишилися пошкодженими. Завдяки вашим пожертвам нам вдалося закупити необхідні матеріали для ремонту, відновити вікна та електропостачання в одній із міських шкіл...",
//     date: "1/1/2025",
//     link: "#",
//   },
//   {
//     id: 6,
//     title: "Історії волонтерів: робота на передовій",
//     image: blogThirdPhoto,
//     excerpt:
//       "Щодня наші волонтери ризикують життям, доставляючи допомогу у прифронтові зони. Один із таких героїв — Олексій, який уже понад рік перевозить медикаменти та продукти в найнебезпечніші райони...",
//     date: "1/1/2025",
//     link: "#",
//   },
//   {
//     id: 7,
//     title: "До Херсону доставлена екстрена допомога",
//     image: blogFourthPhoto,
//     excerpt:
//       "Нещодавно до Херсону прибула чергова партія екстреної допомоги. У вантажі — генератори, питна вода, медикаменти та набори першої необхідності. Це стало можливим завдяки оперативному реагуванню партнерських організацій і волонтерів...",
//     date: "1/1/2025",
//     link: "#",
//   },
//   {
//     id: 8,
//     title: "Як ваші пожертви допомогли відновити школу у Херсоні",
//     image: blogSecondPhoto,
//     excerpt:
//       "Після звільнення Херсона багато навчальних закладів залишилися пошкодженими. Завдяки вашим пожертвам нам вдалося закупити необхідні матеріали для ремонту, відновити вікна та електропостачання в одній із міських шкіл...",
//     date: "1/1/2025",
//     link: "#",
//   },
// ];

// export default function BlogSection({ posts }) {
//   const [visibleCount, setVisibleCount] = useState(4);

//   // ✅ Log fetched data
//   console.log("📌 Posts from DB:", posts);

//   const handleLoadMore = () => {
//     setVisibleCount((prev) => prev + 4);
//   };

//   const visiblePosts = allPosts.slice(0, visibleCount);
//   const topPosts = visiblePosts.slice(0, 4);
//   const restPosts = visiblePosts.slice(4);

//   return (
//     <section className={styles.blogSection}>
//       <div className={styles.wrapper}>
//         <h3>Останні новини</h3>
//         <p className={styles.description}>
//           Блог iHELP — це місце для щирих історій, новин про проєкти, порад і натхнення. Ми пишемо про виклики й щоденні
//           зусилля, що нас гартують та перемоги, які мотивують до невпинного руху вперед.
//         </p>
//         <div className={styles.blogs}>
//           <div className={styles.topPosts}>
//             <a href={topPosts[0]?.link} className={styles.mainPost}>
//               <Image src={topPosts[0]?.image} alt={topPosts[0]?.title} />
//               <h4>{topPosts[0]?.title}</h4>
//               <p>{topPosts[0]?.excerpt}</p>
//               <span>{topPosts[0]?.date}</span>
//             </a>
//             <div className={`${styles.secondaryPosts} ${styles.sidePosts}`}>
//               {topPosts.slice(1).map((post) => (
//                 <a href={post.link} key={post.id} className={styles.sidePost}>
//                   <Image src={post.image} alt={post.title} />
//                   <h4>{post.title}</h4>
//                   <p>{post.excerpt}</p>
//                   <span>{post.date}</span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div className={`${styles.secondaryPosts} ${styles.additionalPosts}`}>
//             {restPosts.map((post, index) => (
//               <a
//                 href={post.link}
//                 key={post.id}
//                 className={`${styles.post} ${styles.appear}`}
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <Image src={post.image} alt={post.title} />
//                 <h4>{post.title}</h4>
//                 <p>{post.excerpt}</p>
//                 <span>{post.date}</span>
//               </a>
//             ))}
//           </div>

//           {visibleCount < allPosts.length && (
//             <span className={styles.loadMore} onClick={handleLoadMore}>
//               Більше новин
//             </span>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
