import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

import Image from "next/image";
import Link from "next/link";

import useIsMobile from "@/utils/useIsMobile";
import * as styles from "./BlogSection.module.scss";

export default function BlogSection({ posts }) {
  const { t, i18n } = useTranslation("home");
  const locale = i18n.language;
  const [visibleCount, setVisibleCount] = useState(4);
  const isMobile = useIsMobile(767);

  const getShortDescription = (description, maxLength = 120) => {
    if (description.length <= maxLength) {
      return description;
    }

    return `${description.slice(0, maxLength)}...`;
  };

  // Format posts with date formatting
  const formattedPosts = posts.map((post) => {
    const hasTranslation = post.translations && post.translations[locale];

    const title = hasTranslation ? post.translations[locale].title : post.title;
    const description = hasTranslation ? post.translations[locale].description : post.description;

    return {
      ...post,
      title,
      description,
      date: new Date(post.created_at).toLocaleDateString("uk-UA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
      // link: "#",
    };
  });

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
        <h3>{t("blog.title")}</h3>
        <p className={styles.description}>{t("blog.subtitle")}</p>

        <div className={styles.blogs}>
          {topPosts.length > 0 && (
            <div className={styles.topPosts}>
              {/* ✅ Main Post */}
              {/* <a href={topPosts[0].link} className={styles.mainPost}>
                <Image src={topPosts[0].img} alt={topPosts[0].title} width={600} height={400} priority />
                <h4>{topPosts[0].title}</h4>
                <p>{topPosts[0].description}</p>
                <span>{topPosts[0].date}</span>
              </a> */}

              {/* MAIN POST LAST-------
              <div className={styles.mainPost}>
                <Image src={topPosts[0].img} alt={topPosts[0].title} width={600} height={400} priority />
                <h4>{topPosts[0].title}</h4>
                <p>{topPosts[0].description}</p>
                <span>{topPosts[0].date}</span>
              </div> */}

              <Link href={`/blog/${topPosts[0].id}`} className={styles.mainPost}>
                <Image src={topPosts[0].img} alt={topPosts[0].title} width={600} height={400} priority />

                <h4>{topPosts[0].title}</h4>

                <p>
                  {getShortDescription(topPosts[0].description)}
                  {/* {" "}<span className={styles.learnMore}>{t("blog.learnMore")}</span> */}
                </p>

                <span>{topPosts[0].date}</span>
              </Link>

              {/* ✅ Show sidePosts only on desktop */}
              {!isMobile && (
                <div className={`${styles.secondaryPosts} ${styles.sidePosts}`}>
                  {topPosts.slice(1).map((post) => (
                    // <a href={post.link} key={post.id} className={styles.sidePost}>
                    //   <Image src={post.img} alt={post.title} width={300} height={200} />
                    //   <h4>{post.title}</h4>
                    //   <p>{post.description}</p>
                    //   <span>{post.date}</span>
                    // </a>
                    <Link href={`/blog/${post.id}`} key={post.id} className={styles.sidePost}>
                      <Image src={post.img} alt={post.title} width={300} height={200} />
                      <h4>{post.title}</h4>
                      <p>
                        {getShortDescription(post.description)}
                        {/* {" "}<span className={styles.learnMore}>{t("blog.learnMore")}</span> */}
                      </p>
                      <span>{post.date}</span>
                    </Link>
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
                // <a
                //   href={post.link}
                //   key={post.id}
                //   className={`${styles.post} ${shouldAnimate ? styles.animated : ""}`}
                //   style={shouldAnimate ? { animationDelay: `${index * 0.1}s` } : {}}
                // >
                //   <Image src={post.img} alt={post.title} width={300} height={200} />
                //   <h4>{post.title}</h4>
                //   <p>{post.description}</p>
                //   <span>{post.date}</span>
                // </a>
                <Link
                  href={`/blog/${post.id}`}
                  key={post.id}
                  className={`${styles.post} ${shouldAnimate ? styles.animated : ""}`}
                  style={shouldAnimate ? { animationDelay: `${index * 0.1}s` } : {}}
                >
                  <Image src={post.img} alt={post.title} width={300} height={200} />
                  <h4>{post.title}</h4>
                  <p>
                    {getShortDescription(post.description)}
                    {/* {" "}<span className={styles.learnMore}>{t("blog.learnMore")}</span> */}
                  </p>
                  <span>{post.date}</span>
                </Link>
              );
            })}
          </div>

          {/* ✅ Load More Button */}
          {visibleCount < formattedPosts.length && (
            <span className={styles.loadMore} onClick={() => setVisibleCount((prev) => prev + 4)}>
              {t("blog.moreNews")}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
