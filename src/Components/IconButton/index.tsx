import { IconButtonProps } from "../../Assets";
import { CustomButton, IconButtonWrapper } from "./styles";

const IconButton = ({
	icon,
	color,
	width,
	height,
	onClick,
	onHover,
}: IconButtonProps) => {
	return (
		<IconButtonWrapper>
			<CustomButton
				color={color}
				width={width}
				height={height}
				onHover={onHover}
				onClick={onClick}>
				{icon}
			</CustomButton>
		</IconButtonWrapper>
	);
};

export { IconButton };
