import React from "react";
import Head from "next/head";

import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";
import { supabase } from "../../../lib/supabaseClient";

import * as styles from "./BlogPost.module.scss";

export default function BlogPost({ post }) {
  const router = useRouter();
  const { t } = useTranslation("common");

  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }

  const locale = router.locale || "ua";

  const translation = post.translations?.[locale] || post.translations?.ua;

  return (
    <>
      <Head>
        <title>{translation.title}</title>

        <meta name="description" content={translation.description} />
      </Head>

      <main className={styles.blogPost}>
        {router.isFallback ? (
          <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
          </div>
        ) : (
          <article className={styles.article}>
            <div className={styles.content}>
              <h1 className={styles.title}>{translation.title}</h1>

              <div className={styles.imageWrapper}>
                <img src={post.img} alt={translation.title} className={styles.image} />
              </div>

              <div className={styles.description}>
                {translation.description.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        )}
      </main>
    </>
  );
}

// 3. Add getStaticPaths HERE

export async function getStaticPaths() {
  const { data: posts, error } = await supabase.from("posts").select("id");

  if (error) {
    console.error("Error fetching post IDs:", error.message);
  }

  const paths = (posts || []).map((post) => ({
    params: {
      id: String(post.id),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

// 4. Add getStaticProps HERE

export async function getStaticProps({ params, locale }) {
  const { data: post, error } = await supabase.from("posts").select("*").eq("id", params.id).single();

  if (error || !post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home", "payment", "contactForm"])),
      post,
    },

    revalidate: 60,
  };
}
