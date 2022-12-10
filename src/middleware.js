import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
  const { cookies, url } = req;

  const authToken = cookies.get("userAuthToken");

  if (authToken === undefined) {
    const urlToRedirect = new URL("/login", url);

    return NextResponse.redirect(urlToRedirect);
  }

  try {
    await jwtVerify(authToken, new TextEncoder().encode("secret"));

    return NextResponse.next();
  } catch (error) {
    console.error(error);

    const urlToRedirect = new URL("/login", url);
    return NextResponse.redirect(urlToRedirect);
  }
}

export const config = {
  matcher: ["/", "/create", "/:id"]
};
