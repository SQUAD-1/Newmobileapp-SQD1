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
import { GlobalStyle } from "../../styles/global-styles";

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
        <>
        <GlobalStyle />
        <ContainerMenu>
            <MenuList>
                <OptionMenu href="/">
                    <IconArea
                        isClicked={selectedOption === "home"}
                        onClick={() => handleOptionClick("home")}
                    >
                        {selectedOption === "home" ? (
                            <img src={homeWhite} alt="IconHome"></img>
                        ) : (
                            <img src={homeBlack} alt="IconHome"></img>
                        )}
                    </IconArea>
                    <TextMenu
                        isClicked={selectedOption === "home"}
                        onClick={() => handleOptionClick("home")}
                    >
                        Home
                    </TextMenu>
                </OptionMenu>

                <OptionMenu href="/Chamados">
                    <IconArea
                        isClicked={selectedOption === "calls"}
                        onClick={() => handleOptionClick("calls")}
                    >
                        {selectedOption === "calls" ? (
                            <img src={callsWhite} alt="IconCalls"></img>
                        ) : (
                            <img src={callsBlack} alt="IconCalls"></img>
                        )}
                    </IconArea>
                    <TextMenu
                        isClicked={selectedOption === "calls"}
                        onClick={() => handleOptionClick("calls")}
                    >
                        Chamados
                    </TextMenu>
                </OptionMenu>
                <OptionMenu>
                    <IconArea
                        isClicked={selectedOption === "settings"}
                        onClick={() => handleOptionClick("settings")}
                    >
                        {selectedOption === "settings" ? (
                            <img src={setingsWhite} alt="IconSetings"></img>
                        ) : (
                            <img src={setingsBlack} alt="IconSetings"></img>
                        )}
                    </IconArea>
                    <TextMenu
                        isClicked={selectedOption === "settings"}
                        onClick={() => handleOptionClick("settings")}
                    >
                        Configurações
                    </TextMenu>
                </OptionMenu>
            </MenuList>
        </ContainerMenu></>
    );
};
