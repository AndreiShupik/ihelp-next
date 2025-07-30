// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname, search, origin } = request.nextUrl;
  // 1) If it’s already under /ua/ or a Next.js internal route, do nothing:
  if (pathname.startsWith("/ua") || pathname.startsWith("/_next") || pathname.includes(".")) {
    return;
  }

  // 2) Check the Accept-Language header for Ukrainian (“uk”):
  const al = request.headers.get("accept-language") || "";
  if (al.toLowerCase().includes("uk")) {
    const url = new URL(origin + "/ua" + pathname + search);
    return NextResponse.redirect(url);
  }
}
