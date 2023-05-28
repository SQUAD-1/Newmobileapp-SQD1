import styled from "styled-components";
import theme from "../../styles/theme";

interface TypesButton {
	color?: string;
	bg?: string;
	colorBorder?: string;
}

export const ButtonContainer = styled.button<TypesButton>`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ bg }) => (bg ? bg : theme.colors.green[185])};
	color: ${({ color }) => (color ? color : theme.colors.neutral.white)};
	border-radius: 10rem;
	border: ${({ colorBorder }) =>
		colorBorder ? `1px solid ${colorBorder}` : "none"};
	width: 112px;
	height: 40px;
	font-size: 1.4rem;

	&:disabled {
		border: none;
		background: rgba(28, 27, 31, 0.12);
		color: #1c1b1f;
	}
`;
