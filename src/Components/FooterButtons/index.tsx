import { Link } from "react-router-dom";
import { BackButton, ButtonsContainer, NextButton } from "./styles";
import { Dispatch, SetStateAction } from "react";

interface FooterButtonsProps {
    LastPage: string;
    NextPage?: string;
    OpenModal?: Dispatch<SetStateAction<boolean>>;
}
export const FooterButtons = ({
    LastPage,
    NextPage,
    OpenModal,
}: FooterButtonsProps) => {
    const verifyModal = () => {
        if (OpenModal) {
            OpenModal(true);
            setTimeout(() => {
                window.location.href = NextPage as string;
            }, 3000);
        }
    };

    return (
        <ButtonsContainer>
            <BackButton>
                <Link to={LastPage}>Voltar</Link>
            </BackButton>
            <NextButton onClick={verifyModal}>Próximo</NextButton>
        </ButtonsContainer>
    );
};
