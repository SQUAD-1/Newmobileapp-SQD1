import { Container, ImgBackIcon, TextBack } from "./styles";
import ArrowLeft from "../../Images/arrowLeft.png";
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
			<ImgBackIcon src={ArrowLeft} />
			{
			// adicionar renderização condicional assim que a ArrowLeftRed for exportada do Figma corretamente
			/* {actionText === "Login" ? (
				<ImgBackIcon src={ArrowLeftRed} />
			) : (
				<ImgBackIcon src={ArrowLeft} />
			)} */}
			<TextBack
				fontWeight={fontWeight}
				color={color}>
				{actionText}
			</TextBack>
		</Container>
	);
};
