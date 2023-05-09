import styled from "styled-components";
import theme from "../../styles/theme";

interface TypesButton {
	color?: string;
	bg?: string;
	colorBorder?: string;
}

export const ButtonContainer = styled.section<TypesButton>`
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
