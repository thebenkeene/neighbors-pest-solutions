import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { isAllowedGoogleProfile } from "@/lib/auth-policy";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  pages: {
    signIn: "/team/sign-in",
    error: "/team/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge: 8 * 60 * 60,
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider !== "google" || !profile) return false;
      return isAllowedGoogleProfile({
        email: typeof profile.email === "string" ? profile.email : null,
        email_verified:
          typeof profile.email_verified === "boolean"
            ? profile.email_verified
            : null,
      });
    },
    async session({ session, token }) {
      if (session.user && typeof token.email === "string") {
        session.user.email = token.email;
      }
      return session;
    },
  },
  trustHost: true,
});
