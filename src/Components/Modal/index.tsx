import { MessageSuccess, ModalContainer, ModalContet } from "./styles";
import imageContiner from "../../Images/MicrosoftTeams-image.png";
// import successImage from "../../Assets/successImage.svg";

interface ModalProps {
	isTrue: boolean;
}

export const Modal = ({ isTrue }: ModalProps) => {
	if (!isTrue) return null;
	return (
		<ModalContainer isTrue={isTrue}>
			<ModalContet>
				<img
					src={imageContiner}
					alt="Fundo branco centralzado"
					width={96}
					height={96}
				/>
				<MessageSuccess>
					Chamado registrado <br /> com sucesso
				</MessageSuccess>
			</ModalContet>
		</ModalContainer>
	);
};
