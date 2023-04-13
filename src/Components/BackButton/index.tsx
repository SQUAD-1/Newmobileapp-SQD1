import { Container, ImgBackIcon, TextBack } from "./styles";
import ArrowLeft from "../../images/arrowLeft.png";

interface BackButton {
    actionText: string;
}
export const BackButton = ({ actionText }: BackButton) => {
    return (
        <Container>
            <ImgBackIcon src={ArrowLeft} />
            <TextBack>{actionText}</TextBack>
        </Container>
    );
};
