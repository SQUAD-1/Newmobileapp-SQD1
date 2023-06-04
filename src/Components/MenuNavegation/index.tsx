import { ContainerMenu, MenuList } from "./styles";
import OptionMenu from "./OptionMenu";
import navigationOptions from "./data";
import { useState } from "react";

export type PageStructProps = {
	backgroundColor?: string;
};

export const NavigationBar = ({ backgroundColor }: PageStructProps) => {
	const [selectedOption, setSelectedOption] = useState<string | null>(null);
	return (
		<ContainerMenu backgroundColor={backgroundColor}>
			<MenuList backgroundColor={backgroundColor}>
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
							backgroundColor={backgroundColor}
						/>
					);
				})}
			</MenuList>
		</ContainerMenu>
	);
};
