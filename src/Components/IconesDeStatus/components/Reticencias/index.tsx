import { ReticenciasContainer } from "./styles";
import reticencias from "../svg/reticencias.svg";
import { Dispatch, SetStateAction } from "react";

interface ReticenciasProps{
  clickShowIcons: Dispatch<SetStateAction<boolean>>;
}

export const Reticencias = ({clickShowIcons}: ReticenciasProps) => {
	return (
		<ReticenciasContainer onClick={() => clickShowIcons(true)}>
			<img
				src={reticencias}
				alt="Icone de reticências"
				width={50}
				height={50}
			/>
		</ReticenciasContainer>
	);
};
