import { type NextRequest } from "next/server";
import { updateSession } from "./lib/supabase/middleware";
import { createClient } from "./lib/supabase/server";

export async function middleware(request: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isUserLoggedIn = !!user;
  const currentPath = request.nextUrl.pathname;

  const pathsToDisableForLoggedInUsers = ["/login", "/register"];
  const pathsToDisableForLoggedOutUsers = ["/dashboard"];

  if (
    isUserLoggedIn &&
    pathsToDisableForLoggedInUsers.some((path) => currentPath.startsWith(path))
  ) {
    return Response.redirect(new URL("/", request.url));
  }

  if (
    !isUserLoggedIn &&
    pathsToDisableForLoggedOutUsers.some((path) => currentPath.startsWith(path))
  ) {
    return Response.redirect(new URL("/login", request.url));
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
