import { useState } from "react";
import {
    ContainerMenu,
    IconArea,
    MenuList,
    OptionMenu,
    TextMenu,
} from "./styles";
import homeBlack from "../../Assets/Images/HomeBlack.png";
import homeWhite from "../../Assets/Images/HomeWhite.png";
import callsBlack from "../../Assets/Images/CallsBlack.png";
import callsWhite from "../../Assets/Images/CallsWhite.png";
import setingsBlack from "../../Assets/Images/SettingsBlack.png";
import setingsWhite from "../../Assets/Images/SettingsWhite.png";
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
            <MenuList color="#D2F4B7">
                <Link to="/Home">
                    <OptionMenu>
                        <IconArea
                            isClicked={selectedOption === "home"}
                            onClick={() => {
                                handleOptionClick("home");
                            }}
                        >
                            {selectedOption === "home" ? (
                                <img src={homeWhite} alt="Icon Home" />
                            ) : (
                                <img src={homeBlack} alt="Icon Home" />
                            )}
                        </IconArea>
                        <TextMenu
                            isClicked={selectedOption === "home"}
                            onClick={() => {
                                handleOptionClick("home");
                            }}
                        >
                            Home
                        </TextMenu>
                    </OptionMenu>
                </Link>

                <Link to="/Calls">
                    <OptionMenu>
                        <IconArea
                            isClicked={selectedOption === "calls"}
                            onClick={() => {
                                handleOptionClick("calls");
                            }}
                        >
                            {selectedOption === "calls" ? (
                                <img src={callsWhite} alt="Icon Calls" />
                            ) : (
                                <img src={callsBlack} alt="Icon Calls" />
                            )}
                        </IconArea>
                        <TextMenu
                            isClicked={selectedOption === "calls"}
                            onClick={() => {
                                handleOptionClick("calls");
                            }}
                        >
                            Chamados
                        </TextMenu>
                    </OptionMenu>
                </Link>
                {/* <Link to="/Settings"> */}
                <Link to="/Requests">
                    <OptionMenu>
                        <IconArea
                            isClicked={selectedOption === "settings"}
                            onClick={() => {
                                handleOptionClick("settings");
                            }}
                        >
                            {selectedOption === "settings" ? (
                                <img src={setingsWhite} alt="Icon Settings" />
                            ) : (
                                <img src={setingsBlack} alt="Icon Settings" />
                            )}
                        </IconArea>
                        <TextMenu
                            isClicked={selectedOption === "settings"}
                            onClick={() => {
                                handleOptionClick("settings");
                            }}
                        >
                            Solicitações
                        </TextMenu>
                    </OptionMenu>
                </Link>

                {/* </Link> */}
            </MenuList>
        </ContainerMenu>
    );
};
