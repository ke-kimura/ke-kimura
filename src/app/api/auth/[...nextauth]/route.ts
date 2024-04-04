import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
export const runtime = "experimental-edge";

const handler = NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
		}),
	],
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			const allowedEmails = process.env.LOGIN_ADDRESS;
			//指定したアカウントのみログイン許可
			if (user.email && user.email == allowedEmails) {
				return true;
			}
			return false;
		},
	},
});
export { handler as GET, handler as POST };
