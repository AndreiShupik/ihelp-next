// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname, search, origin } = request.nextUrl;
  // 1) If it’s already under /ua/ or a Next.js internal route, do nothing:
  if (pathname.startsWith("/en") || pathname.startsWith("/_next") || pathname.includes(".")) {
    return;
  }

  // 2) Check the Accept-Language header for Ukrainian (“uk”):
  const al = request.headers.get("accept-language") || "";
  if (al.toLowerCase().includes("en")) {
    const url = new URL(origin + "/en" + pathname + search);
    return NextResponse.redirect(url);
  }
}

// middleware.js
// import { NextResponse } from "next/server";

// export function middleware(request) {
//   const { pathname, search, origin } = request.nextUrl;

//   // Ignore Next internals, static files, and already-localized paths
//   if (pathname.startsWith("/en") || pathname.startsWith("/_next") || pathname.includes(".")) {
//     return;
//   }

//   const acceptLanguage = request.headers.get("accept-language") || "";

//   // If user prefers English → redirect to /en
//   if (acceptLanguage.toLowerCase().includes("en")) {
//     const url = new URL(origin + "/en" + pathname + search);
//     return NextResponse.redirect(url);
//   }

//   // Otherwise → Ukrainian stays on root
//   return;
// }

// import { NextResponse } from "next/server";

// export function middleware(request) {
//   const { pathname, search, origin } = request.nextUrl;

//   // Ignore already localized paths, Next internals, or static files
//   if (pathname.startsWith("/en") || pathname.startsWith("/_next") || pathname.includes(".")) {
//     return;
//   }

//   const acceptLanguage = request.headers.get("accept-language") || "";

//   // Redirect to /en ONLY if browser explicitly prefers English and NOT Ukrainian
//   if (acceptLanguage.toLowerCase().includes("en") && !acceptLanguage.toLowerCase().includes("uk")) {
//     const url = new URL(origin + "/en" + pathname + search);
//     return NextResponse.redirect(url);
//   }

//   // Default: Ukrainian stays on root
//   return;
// }
