import { Container, ImgBackIcon, TextBack } from "./styles";
import ArrowLeft from "../../Images/arrowLeft.png";

interface BackButtonProps {
	actionText: string;
}

export const BackButton = ({ actionText }: BackButtonProps) => {
	return (
		<Container>
			<ImgBackIcon src={ArrowLeft} />
			<TextBack>{actionText}</TextBack>
		</Container>
	);
};
