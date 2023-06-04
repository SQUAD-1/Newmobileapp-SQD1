import styled from "styled-components";
import { PageStructProps } from "../MenuNavegation";

export const FlexContainer = styled.div<PageStructProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100vw;
	height: 93vh;
	gap: 0.4rem;
	padding: 2.4rem 2.4rem 0 2.4rem;
	background-color: ${(props) => props.backgroundColor || "#fff"};
`;

export const PageContainer = styled.div<{
	justifyContent?: "flex-start" | "center" | "flex-end";
}>`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	justify-content: ${({ justifyContent }) => justifyContent ?? "center"};
	align-items: center;
`;
