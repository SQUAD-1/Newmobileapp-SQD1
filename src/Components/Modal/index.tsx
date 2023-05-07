import { MessageSuccess, ModalContainer, ModalContet } from "./styles";
// import successImage from "../../Assets/successImage.svg";

interface ModalProps {
    isTrue: boolean;
}

export const Modal = ({ isTrue }: ModalProps) => {
    if (!isTrue) return null;
    return (
        <ModalContainer isTrue={isTrue}>
            <ModalContet>
                {/* Todas as vezes que baixamos uma imagem ela não vem o ícone certo, por isso deixei comentado para facilitar. */}
                {/* <img
                    src={successImage}
                    alt="Fundo branco centralzado"
                    width={96}
                    height={96}
                /> */}
                <MessageSuccess>
                    Chamado registrado <br /> com sucesso!
                </MessageSuccess>
            </ModalContet>
        </ModalContainer>
    );
};
