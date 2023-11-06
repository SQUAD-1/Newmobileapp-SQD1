import Image from "next/image";
import { CustomLink, IconArea, TextMenu } from "../styles";
import { OptionMenuProps } from "@/assets";

const OptionMenu = ({
	name,
	iconUnselect,
	iconSelect,
	path,
	alt,
	onClick,
	$isSelected,
}: OptionMenuProps) => {
	return (
		<button onClick={onClick}>
			<CustomLink href={path}>
				<IconArea $isClicked={$isSelected}>
					{$isSelected ? (
						<Image
							src={iconSelect}
							alt={alt}
						/>
					) : (
						<Image
							src={iconUnselect}
							alt={alt}
						/>
					)}
				</IconArea>
				<TextMenu $isClicked={$isSelected}>{name}</TextMenu>
			</CustomLink>
		</button>
	);
};

export default OptionMenu;
