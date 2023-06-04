import styled from "styled-components";
import { BoxEmptyProps } from "../../Assets";

export const RequestsEmpty = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: .6rem;
`;

export const RequestsTitle = styled.div<BoxEmptyProps>`
	font-family: Inter;
	font-size: ${({ fontSize }) => fontSize ?? "24px"};
	font-weight: 700;
	line-height: 29px;
	letter-spacing: -0.005em;
	text-align: center;
	word-wrap: break-word;
	color: ${({ color }) => color ?? "#494949"};
`;
