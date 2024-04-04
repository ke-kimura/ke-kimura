import './globals.css';
import { Inter } from 'next/font/google';
import NextAuthProvider from '@/providers/NextAuth';

// Metadata型の定義
interface Metadata {
  title: string;
  description: string;
}


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'xxxxxxx',
	description: 'xxxxxxx',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NextAuthProvider>{children}</NextAuthProvider>
			</body>
		</html>
	);
}
