import { CustomLink, IconArea, OptionContainer, TextMenu } from "../styles";
import { OptionMenuProps } from "../../../Assets";

const OptionMenu = ({
	name,
	iconUnselect,
	iconSelect,
	path,
	alt,
	onClick,
	isSelected,
}: OptionMenuProps) => {
	return (
		<OptionContainer onClick={onClick}>
			<CustomLink to={path}>
				<IconArea isClicked={isSelected}>
					{isSelected ? (
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
				<TextMenu isClicked={isSelected}>{name}</TextMenu>
			</CustomLink>
		</OptionContainer>
	);
};

export default OptionMenu;
