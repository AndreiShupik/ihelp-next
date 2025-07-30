// // src/pages/_document.jsx
// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document(props) {
//   const lang = props.__NEXT_DATA__?.locale || "en";

//   return (
//     <Html lang={lang}>
//       <Head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  const lang = props.__NEXT_DATA__?.locale || "en";
  return (
    <Html lang={lang}>
      <Head>
        {/* Preload improves early fetching */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
          as="style"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
