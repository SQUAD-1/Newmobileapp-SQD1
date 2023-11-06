"use client";
import Homepage from "@/screens/home";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export default function Home() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Homepage />
			</ThemeProvider>
		</>
	);
}
