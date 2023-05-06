import { CustomLink, IconArea, TextMenu } from "../styles";
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
		<button onClick={onClick}>
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
		</button>
	);
};

export default OptionMenu;
