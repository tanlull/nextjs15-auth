import { betterFetch } from "@better-fetch/fetch";
import type { auth } from "@/lib/auth";
import { NextResponse, type NextRequest } from "next/server";

type Session = typeof auth.$Infer.Session;

export default async function middleware(request: NextRequest) {
  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: request.nextUrl.origin,
      headers: {
        // get the cookie from the request
        cookie: request.headers.get("cookie") || "",
      },
    },
  );

  // If there's no session and the user is trying to access the home page
  if (!session && request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // If there is a session and the user is trying to access signin or signup, redirect to home
  if (
    session &&
    (request.nextUrl.pathname === "/signin" ||
      request.nextUrl.pathname === "/signup")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/signin", "/signup"],
};
