import { NextAuthConfig } from "next-auth";

const dashboardPages = ["/scheduler", "/users"];

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = dashboardPages.includes(nextUrl.pathname);

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/users", nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
