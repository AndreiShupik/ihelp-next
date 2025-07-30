import React, { useState } from "react";
import Image from "next/image";

import blogFirstPhoto from "../../../public/assets/images/blog-1.webp";
import blogSecondPhoto from "../../../public/assets/images/blog-2.webp";
import blogThirdPhoto from "../../../public/assets/images/blog-3.jpg";
import blogFourthPhoto from "../../../public/assets/images/blog-4.jpg";

import * as styles from "./BlogSection.module.scss";

const allPosts = [
  {
    id: 1,
    title: "500 зимових наборів доставлено до Миколаївської області",
    image: blogFirstPhoto,
    excerpt:
      "У наборах — теплі ковдри, термобілизна, засоби гігієни та продукти тривалого зберігання. Це критично важлива допомога для людей, які залишились без стабільного опалення в умовах холодної зими...",
    date: "1/1/2025",
    link: "#",
  },
  {
    id: 2,
    title: "Як ваші пожертви допомогли відновити школу у Херсоні",
    image: blogSecondPhoto,
    excerpt:
      "Після звільнення Херсона багато навчальних закладів залишилися пошкодженими. Завдяки вашим пожертвам нам вдалося закупити необхідні матеріали для ремонту, відновити вікна та електропостачання в одній із міських шкіл...",
    date: "1/1/2025",
    link: "#",
  },
  {
    id: 3,
    title: "Історії волонтерів: робота на передовій",
    image: blogThirdPhoto,
    excerpt:
      "Щодня наші волонтери ризикують життям, доставляючи допомогу у прифронтові зони. Один із таких героїв — Олексій, який уже понад рік перевозить медикаменти та продукти в найнебезпечніші райони...",
    date: "1/1/2025",
    link: "#",
  },
  {
    id: 4,
    title: "До Херсону доставлена екстрена допомога",
    image: blogFourthPhoto,
    excerpt:
      "Нещодавно до Херсону прибула чергова партія екстреної допомоги. У вантажі — генератори, питна вода, медикаменти та набори першої необхідності. Це стало можливим завдяки оперативному реагуванню партнерських організацій і волонтерів...",
    date: "1/1/2025",
    link: "#",
  },
  {
    id: 5,
    title: "Як ваші пожертви допомогли відновити школу у Херсоні",
    image: blogSecondPhoto,
    excerpt:
      "Після звільнення Херсона багато навчальних закладів залишилися пошкодженими. Завдяки вашим пожертвам нам вдалося закупити необхідні матеріали для ремонту, відновити вікна та електропостачання в одній із міських шкіл...",
    date: "1/1/2025",
    link: "#",
  },
  {
    id: 6,
    title: "Історії волонтерів: робота на передовій",
    image: blogThirdPhoto,
    excerpt:
      "Щодня наші волонтери ризикують життям, доставляючи допомогу у прифронтові зони. Один із таких героїв — Олексій, який уже понад рік перевозить медикаменти та продукти в найнебезпечніші райони...",
    date: "1/1/2025",
    link: "#",
  },
  {
    id: 7,
    title: "До Херсону доставлена екстрена допомога",
    image: blogFourthPhoto,
    excerpt:
      "Нещодавно до Херсону прибула чергова партія екстреної допомоги. У вантажі — генератори, питна вода, медикаменти та набори першої необхідності. Це стало можливим завдяки оперативному реагуванню партнерських організацій і волонтерів...",
    date: "1/1/2025",
    link: "#",
  },
  {
    id: 8,
    title: "Як ваші пожертви допомогли відновити школу у Херсоні",
    image: blogSecondPhoto,
    excerpt:
      "Після звільнення Херсона багато навчальних закладів залишилися пошкодженими. Завдяки вашим пожертвам нам вдалося закупити необхідні матеріали для ремонту, відновити вікна та електропостачання в одній із міських шкіл...",
    date: "1/1/2025",
    link: "#",
  },
];

export default function BlogSection() {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const visiblePosts = allPosts.slice(0, visibleCount);
  const topPosts = visiblePosts.slice(0, 4);
  const restPosts = visiblePosts.slice(4);

  return (
    <section className={styles.blogSection}>
      <div className={styles.wrapper}>
        <h3>Останні новини</h3>
        <p className={styles.description}>
          Блог iHELP — це місце для щирих історій, новин про проєкти, порад і натхнення. Ми пишемо про виклики й щоденні
          зусилля, що нас гартують та перемоги, які мотивують до невпинного руху вперед.
        </p>
        <div className={styles.blogs}>
          <div className={styles.topPosts}>
            <a href={topPosts[0]?.link} className={styles.mainPost}>
              <Image src={topPosts[0]?.image} alt={topPosts[0]?.title} />
              <h4>{topPosts[0]?.title}</h4>
              <p>{topPosts[0]?.excerpt}</p>
              <span>{topPosts[0]?.date}</span>
            </a>
            <div className={`${styles.secondaryPosts} ${styles.sidePosts}`}>
              {topPosts.slice(1).map((post) => (
                <a href={post.link} key={post.id} className={styles.sidePost}>
                  <Image src={post.image} alt={post.title} />
                  <h4>{post.title}</h4>
                  <p>{post.excerpt}</p>
                  <span>{post.date}</span>
                </a>
              ))}
            </div>
          </div>

          <div className={`${styles.secondaryPosts} ${styles.additionalPosts}`}>
            {restPosts.map((post, index) => (
              <a
                href={post.link}
                key={post.id}
                className={`${styles.post} ${styles.appear}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image src={post.image} alt={post.title} />
                <h4>{post.title}</h4>
                <p>{post.excerpt}</p>
                <span>{post.date}</span>
              </a>
            ))}
          </div>

          {visibleCount < allPosts.length && (
            <span className={styles.loadMore} onClick={handleLoadMore}>
              Більше новин
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
