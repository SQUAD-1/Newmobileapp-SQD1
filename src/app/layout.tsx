import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/utils/providers/registry";
import { AppProviders } from "../utils/providers/providers";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "FC Services",
	description: "Generated by create next app",
	applicationName: "FC Services",
	creator: "SQUAD 1 by Senac PE X Porto Digital",
	authors: [
		{ name: "Wellington Braga" },
		{ name: "Larissa Ferreira" },
		{ name: "Alisson Assunção" },
		{ name: "Pedro Mendonça" },
		{ name: "Cleyton Cabral" },
	],
	category: "Helpdesk",
	icons:
		"https://fercos-s3-ecommerce.s3.amazonaws.com/favicon/apple-touch-icon.png",
	manifest: "/manifest.json",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br">
			<body className={inter.className}>
				<StyledComponentsRegistry>
					<AppProviders>
						<Suspense fallback={<Loading />}>{children}</Suspense>
					</AppProviders>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
