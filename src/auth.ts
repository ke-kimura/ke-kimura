import NextAuth, {NextAuthConfig} from "next-auth";
import Google from "next-auth/providers/google";

export const config: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      })
  ],
  basePath: "/api/auth",
  callbacks: {
    async signIn({ user }) {
      const allowedEmails = process.env.LOGIN_ADDRESS || '';
      if (user.email && allowedEmails.includes(user.email)) {
        return true;
      }
      return '/auth/error'
    },
    async jwt({ token, trigger, session }) {
      if (trigger === 'update') {
        token.name = session.user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.name = token.name;
      }
      return session;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
