import { Link } from "react-router-dom";
import { ButtonContainer } from "./styles";

interface TypesButton {
	text: string;
	color?: string;
	bg?: string;
	colorBorder?: string;
	nextPage?: string;
	onClick?: () => void;
	disabled?: boolean;
}

export const Button = ({
	text,
	bg,
	color,
	colorBorder,
	nextPage,
	disabled,
	onClick,
}: TypesButton) => {
	return (
		<Link
			to={nextPage as string}
			onClick={onClick}>
			<ButtonContainer
				disabled={disabled}
				color={color}
				bg={bg}
				colorBorder={colorBorder}>
				{text}
			</ButtonContainer>
		</Link>
	);
};
