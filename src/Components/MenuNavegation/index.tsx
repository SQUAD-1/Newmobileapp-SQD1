import { ContainerMenu, MenuList } from "./styles";
import OptionMenu from "./OptionMenu";
import navigationOptions from "./data";
import { useState } from "react";

export const NavigationBar = () => {
	const [selectedOption, setSelectedOption] = useState<string | null>(null);
	return (
		<ContainerMenu>
			<MenuList>
				{navigationOptions.map((option) => {
					return (
						<OptionMenu
							key={option.name}
							name={option.name}
							path={option.path}
							alt={option.alt}
							iconUnselect={option.iconUnselect}
							iconSelect={option.iconSelect}
							onClick={() => setSelectedOption(option.name)}
							isSelected={option.name === selectedOption}
						/>
					);
				})}
			</MenuList>
		</ContainerMenu>
	);
};
