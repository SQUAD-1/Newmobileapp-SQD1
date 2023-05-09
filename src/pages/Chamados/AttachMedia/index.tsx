import { useState, useEffect } from "react";
import { ToolsComponent } from "../../../Components/ToolsComponent";
import { Button } from "../../../Components/Button";
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
import theme from "../../../styles/theme";

export const AttachMidia = () => {
    const [image, setImage] = useState<[string]>([""]);

    const getImage = (imageUrl: [string]) => {
        setImage(imageUrl);
    };

    console.log(image);

    useEffect(() => {
        getImage(image);
    }, [getImage, image]);

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
                <h1>loading</h1>
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
