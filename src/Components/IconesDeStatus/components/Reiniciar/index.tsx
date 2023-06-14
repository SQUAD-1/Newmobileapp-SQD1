import { ReiniciarContainer } from "./styles";
import IconeReiniciar from "../svg/reiniciar.svg";

interface ReiniciarProps{
  visibleIcon?: boolean;
}

export const Reiniciar = ({visibleIcon}: ReiniciarProps) => {

	if(!visibleIcon) return null;
	return (
		<ReiniciarContainer>
			<img
				src={IconeReiniciar}
				alt="Icone Checked"
				width={50}
				height={50}
			/>
		</ReiniciarContainer>
	);
};
