// middleware.ts
import { useUserState } from "@/zustand/user.state";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { token, isLoggedIn } = useUserState.getState();
  const { pathname } = request.nextUrl;
  console.log({
    "is logged in": isLoggedIn,
    token: token,
  });
  // Auth routes that should NOT be accessible when logged in
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
  ];
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // If trying to access auth route while logged in - redirect to dashboard
  if (token && isLoggedIn && isAuthRoute) {
    const dashboardUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  // If no token and trying to access protected route - redirect to login
  if (!token && isProtectedRoute) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"], // Run on all routes except static files
};
// export const config = {
//   matcher: [
//     "/dashboard/:path*",
//     "/profile/:path*",
//     "/courses/create/:path*",
//     "/admin/:path*",
//     "/login",
//     "/register",
//     "/forgot-password",
//     "/reset-password",
//   ],
// };
