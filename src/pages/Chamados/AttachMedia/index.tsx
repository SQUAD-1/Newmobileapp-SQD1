import { useState, useCallback } from "react";
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
import { ImageMapComponent } from "../../../Components/ImageMapComponent";

export const AttachMidia = () => {
	const [image, setImage] = useState<Array<string>>([]);

	const getImage = useCallback(
		(imageUrl: Array<string>) => {
			setImage(imageUrl);
		},
		[setImage]
	);

	return (
		<AttachMediaContainerGeneral>
			<TitlePage>
				<img
					src={backIcon}
					alt="Botão de voltar"
				/>{" "}
				O que aconteceu?
			</TitlePage>
			<InformationToAttach>Anexar mídia</InformationToAttach>
			{!image.length ? (
				<CentralContainer>
					<img
						src={notMedia}
						alt="sem Mídia"
					/>
					<TextContainerCentral>Não há mídias no momento</TextContainerCentral>
				</CentralContainer>
			) : (
				image.map((img, index) => (
					<ImageMapComponent
						img={img}
						key={`${img} # ${index}`}
					/>
				))
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
