import { ComentarioContainer } from "./styles";
import comentario from "../svg/comentario.svg";

interface ComentarioProps{
  visibleIcon: boolean;
}

export const Comentario = ({visibleIcon}:ComentarioProps ) => {

	if(!visibleIcon) return null;
	return (
		<ComentarioContainer>
			<img
				src={comentario}
				alt="Icone de comentário"
				width={50}
				height={50}
			/>
		</ComentarioContainer>
	);
};
