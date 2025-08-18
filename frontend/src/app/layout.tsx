import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ 
	subsets: ["latin"],
	display: 'swap',
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: "Scamproof - AI-Powered Scam Awareness Training",
	description: "Learn to spot and avoid scams with interactive lessons and AI-powered training simulations",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.variable}>
			<body className="bg-[#0B0F14] text-[#E8EEF6] antialiased">
				<Navbar />
				<main className="min-h-screen">
					{children}
				</main>
			</body>
		</html>
	);
}
