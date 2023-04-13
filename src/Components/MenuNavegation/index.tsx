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
import homeBlack from "../MenuNavegation/images/HomeBlack.png"
import homeWhite from "../MenuNavegation/images/HomeWhite.png"
import callsBlack from "../MenuNavegation/images/CallsBlack.png"
import seetingsBlack from "../MenuNavegation/images/SettingsBlack.png"

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
             
                    <OptionMenu href="/">
                        <IconArea
                            isClicked={selectedOption === "home"}
                            onClick={() => handleOptionClick("home")}
                        >
                            {/* { 
                            selectedOption === "home" ? ( <img src={homeBlack} alt="IconHome"></img>) : ( <img src={homeWhite}></img>)  
                            } */}
                             { 
                            selectedOption === "home" ? ( <img src={homeWhite}></img>) : (<img src={homeBlack} alt="IconHome"></img>)  
                            }
                            {/* <HomeIcon
                                width="24"
                                height="24"
                                color={
                                    selectedOption === "home"
                                        ? "#ffffff"
                                        : "#352F2F"
                                }
                            ></HomeIcon> */}
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
                            <img src={callsBlack}></img>
                            {/* <CallsIcon
                                width="24"
                                height="24"
                                color={
                                    selectedOption === "calls"
                                        ? "#ffffff"
                                        : "#352F2F"
                                }
                            ></CallsIcon> */}
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
                            <img src={seetingsBlack}></img>
                            {/* <SettingsIcon
                                width="24"
                                height="24"
                                color={
                                    selectedOption === "settings"
                                        ? "#ffffff"
                                        : "#352F2F"
                                }
                            ></SettingsIcon> */}
                        </IconArea>
                        <TextMenu
                            isClicked={selectedOption === "settings"}
                            onClick={() => handleOptionClick("settings")}
                        >
                            Configurações
                        </TextMenu>
                    </OptionMenu>
            </MenuList>
        </ContainerMenu>
    );
};
