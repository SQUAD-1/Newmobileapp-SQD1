import {
    ButtonAction,
    ButtonActionContainer,
    ImageMapContainer,
    Title,
    TypeFile,
} from "./styles";
import iconFileImage from "./svg/background.svg";
import iconRestart from "./svg/Restart.svg";
import iconTrash from './svg/Trash.svg'

export const ImageMapComponent = () => {
    return (
        <ImageMapContainer>
            <TypeFile>
                <img src={iconFileImage} alt="Pegar arquivo" />
            </TypeFile>
            <Title>foto_chamado_00213</Title>
            <ButtonActionContainer>
                <ButtonAction radiusRightTop="10px">
                    <img src={iconRestart} alt="Botão para atualizar" />
                </ButtonAction>
                <ButtonAction
                    radiusRightBottom="10px"
                    borderTop="#000"
                    alignItems="flex-end"
                ><img src={iconTrash} alt="Botão para Excluir" /></ButtonAction>
            </ButtonActionContainer>
        </ImageMapContainer>
    );
};
