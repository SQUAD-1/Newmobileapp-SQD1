import styled from "styled-components";
import theme from "../../../styles/theme";

export const Title = styled.div`
	font-family: Inter;
	font-style: normal;
	font-size: 16px;
	font-weight: 600;
	line-height: 24px;
	letter-spacing: 0.01em;
	text-align: left;
	color: #5a8f19;
`;

export const PasswordText = styled.span`
	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 16px;
	color: #b3261e;
`;

interface ButtonSubmitProps {
	color?: string;
	bg?: string;
	colorBorder?: string;
}

export const ButtonSubmit = styled.button<ButtonSubmitProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ bg }) => (bg ? bg : theme.colors.green[185])};
	color: ${({ color }) => (color ? color : theme.colors.neutral.white)};
	border-radius: 10rem;
	border: ${({ colorBorder }) =>
		colorBorder ? `1px solid ${colorBorder}` : "none"};
	width: auto;
	padding: 1.5rem 3rem;
	font-size: 1.4rem;
`;
