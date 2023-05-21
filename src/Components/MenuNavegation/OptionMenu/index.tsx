import { CustomLink, IconArea, OptionContainer, TextMenu } from "../styles";
import { OptionMenuProps } from "../../../Assets";

const OptionMenu = ({
	name,
	iconUnselect,
	iconSelect,
	path,
	alt,
	onClick,
}: OptionMenuProps) => {
	const currentLocation = window.location.pathname;

	return (
		<OptionContainer onClick={onClick}>
			<CustomLink to={path}>
				<IconArea isClicked={currentLocation === path ? "#7AC143" : "#F5F5F5"}>
					{currentLocation === path ? (
						<img
							src={iconSelect}
							alt={alt}
						/>
					) : (
						<img
							src={iconUnselect}
							alt={alt}
						/>
					)}
				</IconArea>
				<TextMenu isClicked={currentLocation === path ? "#7AC143" : "#252728"}>
					{name}
				</TextMenu>
			</CustomLink>
		</OptionContainer>
	);
};

export default OptionMenu;
