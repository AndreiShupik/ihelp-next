// // src/pages/_app.jsx
// import "../styles/main.scss";
// import { rubik, chivo } from "@/components/layout/Fonts";
// import { appWithTranslation } from "next-i18next";
// //-------- PhotoOfCHanges styles --------
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "../features/home/PhotoOfChanges.scss";
// //-------

// import DefaultLayout from "../components/layout/DefaultLayout";

// export default function App({ Component, pageProps }) {
//   const getLayout = Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

//   // return <main className={`${chivo.className} ${rubik.className}`}>{getLayout(<Component {...pageProps} />)}</main>;
//   return <main className={rubik.className}>{getLayout(<Component {...pageProps} />)}</main>;
// }

// src/pages/_app.jsx
import "../styles/main.scss";
// import { rubik, chivo } from "@/components/layout/Fonts";
import { appWithTranslation } from "next-i18next";
//-------- PhotoOfCHanges styles --------
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../features/home/PhotoOfChanges.scss";
//-------

import DefaultLayout from "../components/layout/DefaultLayout";

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  // return <main className={rubik.className}>{getLayout(<Component {...pageProps} />)}</main>;
  return <main>{getLayout(<Component {...pageProps} />)}</main>;
}

// Wrap and export with appWithTranslation
export default appWithTranslation(App);
