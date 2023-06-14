import { PlayContainer } from "./styles";
import IconePlay from "../svg/play.svg";

interface PlayProps{
  visibleIcon?: boolean;
}

export const Play = ({visibleIcon}: PlayProps) => {

	if(!visibleIcon) return null;
	return (
		<PlayContainer>
			<img
				src={IconePlay}
				alt="Icone Checked"
				width={50}
				height={50}
			/>
		</PlayContainer>
	);
};
