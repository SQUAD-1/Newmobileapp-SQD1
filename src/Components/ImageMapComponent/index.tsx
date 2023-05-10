import { useEffect, useState } from "react";
import {
	ButtonAction,
	ButtonActionContainer,
	FileContainer,
	IconCloseContent,
	ImageMapContainer,
	Title,
	TypeFile,
} from "./styles";
// import iconFileImage from "./svg/background.svg";
import iconRestart from "./svg/Restart.svg";
import iconTrash from "./svg/Trash.svg";
import close from "./svg/Close.svg";

interface ImageMapComponentProps {
	img: File;
}

export const ImageMapComponent = ({ img }: ImageMapComponentProps) => {
	const [openImage, setOpenImage] = useState<boolean>(false);

	useEffect(() => {
		const escDown = (event: KeyboardEvent) => {
			if (event.keyCode === 27) setOpenImage(false);
		};

		window.addEventListener("keyup", escDown);
	}, [setOpenImage]);

	const image = URL.createObjectURL(img as unknown as Blob);

	return (
		<ImageMapContainer>
			<FileContainer onClick={() => setOpenImage(true)}>
				<TypeFile showImage={openImage}>
					<IconCloseContent onClick={() => setOpenImage(false)}>
						<img
							src={close}
							alt="Fechar imagem"
						/>
					</IconCloseContent>
					<img
						src={image}
						width={350}
						height={170}
						alt="Pegar arquivo"
					/>
				</TypeFile>
			</FileContainer>
			<Title>{img.name}</Title>
			<ButtonActionContainer>
				<ButtonAction radiusRightTop="10px">
					<img
						src={iconRestart}
						alt="Botão para atualizar"
					/>
				</ButtonAction>
				<ButtonAction
					radiusRightBottom="10px"
					borderTop="#000"
					alignItems="flex-end"
					onClick={() => img.slice()}>
					<img
						src={iconTrash}
						alt="Botão para Excluir"
					/>
				</ButtonAction>
			</ButtonActionContainer>
		</ImageMapContainer>
	);
};
