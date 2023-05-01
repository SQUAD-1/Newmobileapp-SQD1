import { Link } from "react-router-dom";
import { BackButton, ButtonsContainer, NextButton } from "./styles";
import { Dispatch, SetStateAction } from "react";

interface FooterButtonsProps {
    LastPage: string;
    NextPage?: string;
    closeModal?: (isFalseModal: boolean) => void;
    OpenModal?: (isTrueModal: boolean) => void;
}
export const FooterButtons = ({
    LastPage,
    NextPage,
    closeModal,
    OpenModal,
}: FooterButtonsProps) => {
    const verifyModal = () => {
        if (OpenModal) {
            OpenModal(true);
        }
    };

    return (
        <ButtonsContainer>
            <BackButton>
                <Link to={LastPage}>Voltar</Link>
            </BackButton>
            {/* <Link to={NextPage}> */}
            <NextButton onClick={verifyModal}>Próximo</NextButton>
            {/* </Link> */}
        </ButtonsContainer>
    );
};
