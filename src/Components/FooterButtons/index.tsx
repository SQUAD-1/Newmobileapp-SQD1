import { Link } from "react-router-dom";
import { BackButton, ButtonsContainer, NextButton } from "./styles";

interface FooterButtonsProps {
    LastPage: string;
    NextPage: string;
}
export const FooterButtons = ({ LastPage, NextPage }: FooterButtonsProps) => {
    return (
        <ButtonsContainer>
            <BackButton>
                <Link to={LastPage}>Voltar</Link>
            </BackButton>
            <Link to={NextPage}>
                <NextButton>Próximo</NextButton>
            </Link>
        </ButtonsContainer>
    );
};
