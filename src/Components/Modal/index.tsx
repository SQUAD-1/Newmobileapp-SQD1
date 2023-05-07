import { MessageSuccess, ModalContainer, ModalContet } from "./styles";
// import image from "../../../public/image.jpeg";

interface ModalProps {
	isTrue: boolean;
}

export const Modal = ({ isTrue }: ModalProps) => {
	return (
		<ModalContainer isTrue={isTrue}>
			<ModalContet>
				{/* <img
                    src={image}
                    alt="Fundo branco centralzado"
                    width={96}
                    height={96}
                /> */}
				<MessageSuccess>
					Chamado registrado <br /> com sucesso
				</MessageSuccess>
			</ModalContet>
		</ModalContainer>
	);
};
