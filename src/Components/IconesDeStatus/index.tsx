import { useState } from "react";
import { CheckedVermelho } from "./components/CheckedVermelho";
import { Comentario } from "./components/Comentario";
import { Reticencias } from "./components/Reticencias";
import { ContainerReiniciar, ContianerPlay, IconeDeStatusContainer, IconeDeStatusContainerGenreal } from "./styles";
import { Play } from "./components/Play";
import { Reiniciar } from "./components/Reiniciar";

type ObjectHistory = {
	idRegistroAtividade: number;
	horarioUltimo: string;
	informaoUltima: string;
};
interface IconeDeStatusProps {
  registroAtividade?: [ObjectHistory];
}


export const IconeDeStatus = ({registroAtividade}: IconeDeStatusProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const idRegistroAtividade = registroAtividade?.forEach(item => item?.idRegistroAtividade);
	const horarioUltimo = registroAtividade?.forEach(item => item?.horarioUltimo);
	const informaoUltima = registroAtividade?.forEach(item => item?.informaoUltima);

	console.log(idRegistroAtividade, horarioUltimo, informaoUltima);

	const [isShowPLay/* , setIsShowPLay */] = useState<boolean>(true);


	return (
		<IconeDeStatusContainerGenreal>

			<ContianerPlay showPlay={isShowPLay}>
				<Play />
			</ContianerPlay>

			<IconeDeStatusContainer>
				<CheckedVermelho visibleIcon={isOpen} />
				<Comentario visibleIcon={isOpen} />
				<Reticencias clickShowIcons={setIsOpen}/>
			</IconeDeStatusContainer>

			<ContainerReiniciar>
				<Reiniciar />
			</ContainerReiniciar>

		</IconeDeStatusContainerGenreal>
	);
};
