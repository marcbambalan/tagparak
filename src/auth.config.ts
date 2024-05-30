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

      if (isOnDashboard && !isLoggedIn) {
        return false; // Redirect unauthenticated users to login page
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
