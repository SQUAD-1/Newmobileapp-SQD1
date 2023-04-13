import { useState } from "react";
import {
    ContainerMenu,
    IconArea,
    MenuList,
    OptionMenu,
    TextMenu,
} from "./styles";
import { HomeIcon } from "./Icons/Home";
import { CallsIcon } from "./Icons/Calls";
import { SettingsIcon } from "./Icons/Settings";
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
    // const [isClickedHome, setIsClickedHome] = useState(false);
    // const [isClickedCalls, setIsClickedCalls] = useState(false);
    // const [isClickedSettings, setIsClickedSettings] = useState(false);
    // const handleHomeClick = () => {
    //     setIsClickedHome(!isClickedHome);
    //   };
    //   const handleCallsClick = () => {
    //     setIsClickedCalls(!isClickedCalls);
    //   };
    //   const handleSettingsClick = () => {
    //     setIsClickedSettings(!isClickedSettings);
    //   };

    return (
        <ContainerMenu>
            <MenuList>
                <Link to="/Home">
                    <OptionMenu>
                        <IconArea
                            isClicked={selectedOption === "home"}
                            onClick={() => handleOptionClick("home")}
                        >
                            <HomeIcon
                                width="24"
                                height="24"
                                color={
                                    selectedOption === "home"
                                        ? "#ffffff"
                                        : "#352F2F"
                                }
                            ></HomeIcon>
                        </IconArea>
                        <TextMenu
                            isClicked={selectedOption === "home"}
                            onClick={() => handleOptionClick("home")}
                        >
                            Home
                        </TextMenu>
                    </OptionMenu>
                </Link>
                <Link to="/Chamados">
                    <OptionMenu>
                        <IconArea
                            isClicked={selectedOption === "calls"}
                            onClick={() => handleOptionClick("calls")}
                        >
                            <CallsIcon
                                width="24"
                                height="24"
                                color={
                                    selectedOption === "calls"
                                        ? "#ffffff"
                                        : "#352F2F"
                                }
                            ></CallsIcon>
                        </IconArea>
                        <TextMenu
                            isClicked={selectedOption === "calls"}
                            onClick={() => handleOptionClick("calls")}
                        >
                            Chamados
                        </TextMenu>
                    </OptionMenu>
                </Link>
                <Link to="/Settings">
                    <OptionMenu>
                        <IconArea
                            isClicked={selectedOption === "settings"}
                            onClick={() => handleOptionClick("settings")}
                        >
                            <SettingsIcon
                                width="24"
                                height="24"
                                color={
                                    selectedOption === "settings"
                                        ? "#ffffff"
                                        : "#352F2F"
                                }
                            ></SettingsIcon>
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
