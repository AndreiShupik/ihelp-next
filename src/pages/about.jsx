import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

import AboutPageEn from "@/features/about/AboutPage.en";
import AboutPageUa from "@/features/about/AboutPage.ua";

const About = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="en" href="https://theihelp.org/about" />
        <link rel="alternate" hrefLang="ua" href="https://theihelp.org//ua/about" />

        <meta name="description" content={t("meta.about.description")} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />

        <meta property="og:title" content={t("meta.about.title")} />
        <meta property="og:description" content={t("meta.about.description")} />
        <meta property="og:url" content="https://theihelp.org/about" />

        <meta name="twitter:title" content={t("meta.about.title")} />
        <meta name="twitter:description" content={t("meta.about.description")} />

        <title>{t("meta.about.title")}</title>
        <link rel="canonical" href={locale === "ua" ? "https://theihelp.org/ua/about" : "https://theihelp.org/about"} />
      </Head>
      {locale === "ua" ? <AboutPageUa /> : <AboutPageEn />}
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about", "payment", "contactForm"])),
    },
  };
}

export default About;

// import React from "react";
// import Head from "next/head";
// import AboutPage from "@/features/about/AboutPage.en";

// const About = () => (
//   <>
//     <Head>
//       <title>About Us | iHELP</title>
//       <meta name="description" content="We support Ukraine during tough times..." />
//       {/* Add more SEO meta tags */}
//     </Head>
//     <AboutPage />
//   </>
// );

// export default About;

// import React from "react";
// import Head from "next/head";
// import AboutPageEn from "@/features/about/AboutPage.en";

// const About = () => (
//   <>
//     <Head>
//       <title>About Us | iHELP</title>
//       <meta
//         name="description"
//         content="We support Ukraine during tough times. Learn about our mission and how you can help."
//       />
//       <meta property="og:title" content="About Us | iHELP" />
//       <meta property="og:description" content="Support Ukraine with iHELP. Learn more about our impact and mission." />
//       <meta property="og:type" content="website" />
//       <meta property="og:locale" content="en" />
//     </Head>
//     <AboutPageEn />
//   </>
// );

// export default About;
