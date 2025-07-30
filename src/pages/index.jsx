import React from "react";
import HomePage from "../features/home/HomePage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { supabase } from "../../lib/supabaseClient";

export default function Home({ posts }) {
  return <HomePage posts={posts} />;
}

export async function getStaticProps({ locale }) {
  // ✅ Fetch posts from Supabase
  const { data: posts, error } = await supabase.from("posts").select("*").order("created_at", { ascending: false });

  if (error) {
    console.error("❌ Error fetching posts:", error.message);
  }

  // ✅ Debug log
  // console.log("✅ Fetched posts from Supabase:", posts);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      posts: posts || [],
    },
    revalidate: 60,
  };
}
