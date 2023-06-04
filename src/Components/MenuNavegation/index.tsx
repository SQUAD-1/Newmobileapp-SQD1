import { useState } from "react";
import {
    ContainerMenu,
    IconArea,
    MenuList,
    OptionMenu,
    TextMenu,
} from "./styles";
import homeBlack from "../MenuNavegation/images/HomeBlack.png";
import homeWhite from "../MenuNavegation/images/HomeWhite.png";
import callsBlack from "../MenuNavegation/images/CallsBlack.png";
import callsWhite from "../MenuNavegation/images/CallsWhite.png";
import setingsBlack from "../MenuNavegation/images/SettingsBlack.png";
import setingsWhite from "../MenuNavegation/images/SettingsWhite.png";
import { Link } from "react-router-dom";

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
