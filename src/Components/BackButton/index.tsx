import { Container, ImgBackIcon, ImgBackIconRed, TextBack } from "./styles";
import ArrowLeft from "../../Images/arrowLeft.png";
import ArrowLeftRed from "../../Assets/Images/BackIconRed.png";
export interface BackButtonProps {
	actionText?: string;
	color?: string;
	fontWeight?: string;
}

export const BackButton = ({
	actionText,
	color,
	fontWeight,
}: BackButtonProps) => {
	return (
		<Container>
			{actionText === "Login" ? (
				<ImgBackIconRed src={ArrowLeftRed} />
			) : (
				<ImgBackIcon src={ArrowLeft} />
			)}
			<TextBack
				fontWeight={fontWeight}
				color={color}>
				{actionText}
			</TextBack>
		</Container>
	);
};
