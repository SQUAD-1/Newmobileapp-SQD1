import { ButtonContainer } from "./styles";

interface TypesButton {
    text: string;
    color?: string;
    bg?: string;
    colorBorder?: string;
}

export const Button = ({ text, bg, color, colorBorder }: TypesButton) => {
    return (
        <ButtonContainer color={color} bg={bg} colorBorder={colorBorder}>
            {text}
        </ButtonContainer>
    );
};
