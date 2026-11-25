// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const user_role = request.cookies.get("user_role")?.value;
  const { pathname } = request.nextUrl;
  const authRoutes = [
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
  ];
  const isAuthRoute = authRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "?")
  );

  // Protected routes that require authentication
  const protectedRoutes = [
    "/dashboard",
    "/profile",
    "/courses/create",
    "/admin",
    "/instructor",
  ];
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // If trying to access auth route while logged in - redirect to dashboard
  // if (token && isAuthRoute) {
  //   console.log("yes token");
  //   const dashboardUrl = new URL("/dashboard", request.url);
  //   const adminUrl = new URL("/admin", request.url);
  //   const instructorUrl = new URL("/instructor", request.url);
  //   if (user_role === "admin") {
  //     return NextResponse.redirect(adminUrl);
  //   }
  //   if (user_role === "instructor") {
  //     return NextResponse.redirect(instructorUrl);
  //   }
  //   return NextResponse.redirect(dashboardUrl);
  // }

  // // If no token and trying to access protected route - redirect to login
  // if (!token && isProtectedRoute) {
  //   console.log("no token");
  //   const loginUrl = new URL("/login", request.url);
  //   loginUrl.searchParams.set("redirect", pathname);
  //   return NextResponse.redirect(loginUrl);
  // }

  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"], // Run on all routes except static files
};
