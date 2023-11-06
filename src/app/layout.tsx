import { GlobalStyle } from "@/styles";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import StyledComponentsRegistry from "@/utils/providers/registry";
import Script from "next/script";
import { SWRConfig } from "swr";
import { AppProviders } from "../utils/providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "FC Services",
	description: "Generated by create next app",
	applicationName: "FC Services",
	creator: "Wellington Braga",
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
					<AppProviders>{children}</AppProviders>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}