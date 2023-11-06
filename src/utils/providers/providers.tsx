"use client";

import { GlobalStyle } from "@/styles";
import theme from "@/styles/theme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";

const AppProviders = ({ children }: any & ReactNode) => {
	return (
		<SWRConfig>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{children}
			</ThemeProvider>
		</SWRConfig>
	);
};

export { AppProviders };
