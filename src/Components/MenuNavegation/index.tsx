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

export const NavigationBar = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionClick = (option: string) => {
        if (option !== selectedOption) {
            setSelectedOption(option);
        } else {
            setSelectedOption(null);
        }
    };
    return (
        <ContainerMenu>
            <MenuList>
                <Link to="/">
                    <OptionMenu>
                        <IconArea
                            isClicked={selectedOption === "home"}
                            onClick={() => handleOptionClick("home")}
                        >
                            {selectedOption === "home" ? (
                                <img src={homeWhite} alt="Icon Home"></img>
                            ) : (
                                <img src={homeBlack} alt="Icon Home"></img>
                            )}
                        </IconArea>
                        <TextMenu
                            isClicked={selectedOption === "home"}
                            onClick={() => handleOptionClick("home")}
                        >
                            Home
                        </TextMenu>
                    </OptionMenu>
                </Link>

                <Link to="Calls">
                    <OptionMenu>
                        <IconArea
                            isClicked={selectedOption === "calls"}
                            onClick={() => handleOptionClick("calls")}
                        >
                            {selectedOption === "calls" ? (
                                <img src={callsWhite} alt="Icon Calls"></img>
                            ) : (
                                <img src={callsBlack} alt="Icon Calls"></img>
                            )}
                        </IconArea>
                        <TextMenu
                            isClicked={selectedOption === "calls"}
                            onClick={() => handleOptionClick("calls")}
                        >
                            Chamados
                        </TextMenu>
                    </OptionMenu>
                </Link>
                <Link to="Settings">
                    <OptionMenu>
                        <IconArea
                            isClicked={selectedOption === "settings"}
                            onClick={() => handleOptionClick("settings")}
                        >
                            {selectedOption === "settings" ? (
                                <img
                                    src={setingsWhite}
                                    alt="Icon Settings"
                                ></img>
                            ) : (
                                <img
                                    src={setingsBlack}
                                    alt="Icon Settings"
                                ></img>
                            )}
                        </IconArea>
                        <TextMenu
                            isClicked={selectedOption === "settings"}
                            onClick={() => handleOptionClick("settings")}
                        >
                            Configurações
                        </TextMenu>
                    </OptionMenu>
                </Link>
            </MenuList>
        </ContainerMenu>
    );
};
