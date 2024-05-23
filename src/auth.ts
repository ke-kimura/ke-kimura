import NextAuth, {NextAuthConfig} from "next-auth";
import Github from "next-auth/providers/google";

export const config: NextAuthConfig = {
  providers: [
    Github({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      })
  ],
  basePath: "/api/auth",
  callbacks: {
    authorized({request, auth}) {
      try {
        const { pathname } = request.nextUrl;
        if (pathname === "/protected-page") return !!auth;
        return true;
      } catch (err) {
        console.log(err);
      }
    },
    jwt({ token, trigger, session }) {
      if(trigger === "update") token.name = session.user.name;
      return token;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
