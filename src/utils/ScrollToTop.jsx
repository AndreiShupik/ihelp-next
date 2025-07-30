// useEffect(() => {   Help finding errors [Object object]
//   const observer = new MutationObserver(() => {
//     document.querySelectorAll("img, a").forEach((el) => {
//       const attr = el.tagName === "IMG" ? "src" : "href";
//       const val = el.getAttribute(attr);
//       if (val && val.includes("[object Object]")) {
//         console.error("❌ Invalid", attr, "on element:", el);
//       }
//     });
//   });

//   observer.observe(document.body, { childList: true, subtree: true });

//   return () => observer.disconnect();
// }, []);

// src/components/helpers/ScrollToTop.jsx
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ScrollToTop() {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
// React ScrollToTop -------
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     // Scroll to top when pathname changes
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

// export default ScrollToTop;
