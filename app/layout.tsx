import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Header } from "../components/Header";
import { AppProvider } from "@/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tech Site",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				suppressHydrationWarning={true}
				className={`${inter.className} bg-green-100 p-6`}
			>
				<AppProvider>
					<Header />
					{children}
				</AppProvider>
			</body>
		</html>
	);
}
