import { Link } from "react-router-dom";
import { ButtonContainer } from "./styles";

interface TypesButton {
	text: string;
	color?: string;
	bg?: string;
	colorBorder?: string;
	nextPage?: string;
	onClick?: () => void;
}

export const Button = ({
	text,
	bg,
	color,
	colorBorder,
	nextPage,
	onClick,
}: TypesButton) => {
	return (
		<Link
			to={nextPage as string}
			onClick={onClick}>
			<ButtonContainer
				color={color}
				bg={bg}
				colorBorder={colorBorder}>
				{text}
			</ButtonContainer>
		</Link>
	);
};
