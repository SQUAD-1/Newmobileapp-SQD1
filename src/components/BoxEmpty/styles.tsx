import styled from "styled-components";
import { BoxEmptyProps } from "@/assets";

export const RequestsEmpty = styled.div`
	margin-top: 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;
`;

export const RequestsTitle = styled.text<BoxEmptyProps>`
	font-size: 24px;
	font-weight: 700;
	line-height: 29px;
	letter-spacing: -0.005em;
	text-align: center;
	color: ${({ color }) => color ?? "#494949"};
`;
