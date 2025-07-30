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
        <title>{t("meta.about.title")}</title>
        <meta name="description" content={t("meta.about.description")} />
      </Head>
      {locale === "ua" ? <AboutPageUa /> : <AboutPageEn />}
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
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
