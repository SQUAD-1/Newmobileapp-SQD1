import { ToolsComponent } from "../../Components/ToolsComponent";
import { Button } from "../../Components/Button";
import {
    AttachMediaContainerGeneral,
    CentralContainer,
    ContainerButton,
    InformationToAttach,
    TextContainerCentral,
    TitlePage,
} from "./styles";
import backIcon from "./svg/backIcon.svg";
import notMedia from "./svg/notMedia.svg";
import theme from "../../styles/theme";
import { useState, useEffect } from "react";

export const AttachMedia = () => {
    const [image, setImage] = useState<string>("");

    const getImage = (imageUrl: string) => {
        setImage(imageUrl);
    };

    useEffect(() => {
        getImage(image);
    }, [getImage, image]);

    console.log(image);

    return (
        <AttachMediaContainerGeneral>
            <TitlePage>
                <img src={backIcon} alt="Botão de voltar" /> O que aconteceu?
            </TitlePage>
            <InformationToAttach>Anexar mídia</InformationToAttach>
            {!image ? (
                <CentralContainer>
                    <img src={notMedia} alt="sem Mídia" />
                    <TextContainerCentral>
                        Não há mídias no momento
                    </TextContainerCentral>
                </CentralContainer>
            ) : (
                <img
                    src={image}
                    alt="Imagem Selecionada"
                    width={200}
                    height={150}
                />
            )}

            <ToolsComponent postImage={getImage} />

            <ContainerButton>
                <Button text="Próximo" />
                <Button
                    text="Cancelar"
                    bg="transparent"
                    color={theme.colors.red[180]}
                    colorBorder={theme.colors.neutral[205]}
                />
            </ContainerButton>
        </AttachMediaContainerGeneral>
    );
};
