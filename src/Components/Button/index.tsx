import { Link } from "react-router-dom";
import { ButtonContainer } from "./styles";

interface TypesButton {
	text: string;
	color?: string;
	bg?: string;
	colorBorder?: string;
	nextPage?: string;
}

export const Button = ({
	text,
	bg,
	color,
	colorBorder,
	nextPage,
}: TypesButton) => {
	return (
		<Link to={nextPage as string}>
			<ButtonContainer
				color={color}
				bg={bg}
				colorBorder={colorBorder}>
				{text}
			</ButtonContainer>
		</Link>
	);
};
