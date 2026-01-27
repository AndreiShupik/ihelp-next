import React from "react";
import Head from "next/head";

import { useTranslation } from "next-i18next";
import HomePage from "../features/home/HomePage";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { supabase } from "../../lib/supabaseClient";

import { useRouter } from "next/router";

export default function Home({ posts, media }) {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="en" href="https://theihelp.org/" />
        <link rel="alternate" hrefLang="ua" href="https://theihelp.org/ua" />

        <meta name="description" content={t("meta.home.description")} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />

        <meta property="og:title" content={t("meta.home.title")} />
        <meta property="og:description" content={t("meta.home.description")} />
        <meta property="og:url" content="https://theihelp.org/" />

        <meta name="twitter:title" content={t("meta.home.title")} />
        <meta name="twitter:description" content={t("meta.home.description")} />

        <title>{t("meta.home.title")}</title>
        <link rel="canonical" href={locale === "ua" ? "https://theihelp.org/ua" : "https://theihelp.org/"} />
      </Head>

      <HomePage posts={posts} media={media} />
    </>
  );
}

export async function getStaticProps({ locale }) {
  // ✅ Fetch posts from Supabase
  const { data: posts, error: postsError } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (postsError) {
    console.error("❌ Error fetching posts:", postsError.message);
  }

  // ✅ Fetch media from Supabase
  const { data: media, error: mediaError } = await supabase.from("media").select("*").order("id", { ascending: false });

  if (mediaError) {
    console.error("❌ Error fetching media:", mediaError.message);
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home", "payment", "contactForm"])),
      posts: posts || [],
      media: media || [],
    },
    revalidate: 60,
  };
}

// export default function Home({ posts }) {
//   return <HomePage posts={posts} />;
// }

// export async function getStaticProps({ locale }) {
//   // ✅ Fetch posts from Supabase
//   const { data: posts, error } = await supabase.from("posts").select("*").order("created_at", { ascending: false });

//   if (error) {
//     console.error("❌ Error fetching posts:", error.message);
//   }

//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//       posts: posts || [],
//     },
//     revalidate: 60,
//   };
// }
