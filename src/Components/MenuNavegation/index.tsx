import { useState} from "react"
import { ContainerMenu, IconArea, MenuList, OptionMenu, TextMenu } from "./styles";
import { HomeIcon } from "./Icons/Home";
import { CallsIcon } from "./Icons/Calls";
import { SettingsIcon } from "./Icons/Settings";


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
                <OptionMenu>
                    <IconArea  
                    isClicked={selectedOption === "home"} 
                    onClick={() => handleOptionClick("home")}>
                    <HomeIcon width="24" height="24" color={selectedOption === "home"? "#ffffff" : "#352F2F"} />
                    </IconArea>
                   <TextMenu  isClicked={selectedOption === "home"} onClick={() => handleOptionClick("home")}>Home</TextMenu>
                </OptionMenu>
                <OptionMenu >
                    <IconArea isClicked={selectedOption === "calls"} onClick={() => handleOptionClick("calls")}>
                    <CallsIcon width="24" height="24" color={selectedOption === "calls"? "#ffffff" : "#352F2F"} />
                    </IconArea>
                   <TextMenu isClicked={selectedOption === "calls"} onClick={() => handleOptionClick("calls")}>Chamados</TextMenu> 
                </OptionMenu>
                <OptionMenu>
                    <IconArea isClicked={selectedOption === "settings"} onClick={() => handleOptionClick("settings")}>
                            <SettingsIcon width="24" height="24" color={selectedOption === "settings" ? "#ffffff" : "#352F2F"} />
                    </IconArea>
                   <TextMenu isClicked={selectedOption === "settings"} onClick={() => handleOptionClick("settings")}>Configurações</TextMenu> 
                </OptionMenu>
            </MenuList>
        </ContainerMenu>
    )

};