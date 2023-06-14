import { CheckedVermelhoContainer } from "./styles";
import checkedVermelho from "../svg/checkedVermelho.svg";

interface CheckedVermelhoProps{
  visibleIcon: boolean;
}

export const CheckedVermelho = ({visibleIcon}: CheckedVermelhoProps) => {

	if(!visibleIcon) return null;
	return (
		<CheckedVermelhoContainer>
			<img
				src={checkedVermelho}
				alt="Icone Checked"
				width={50}
				height={50}
			/>
		</CheckedVermelhoContainer>
	);
};
