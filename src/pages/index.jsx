import React from "react";
import HomePage from "../features/home/HomePage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { supabase } from "../../lib/supabaseClient";

export default function Home({ posts, media }) {
  return <HomePage posts={posts} media={media} />;
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
      ...(await serverSideTranslations(locale, ["common"])),
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
