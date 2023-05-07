import { OptionMenuProps } from "../../../Assets";
import homeBlack from "../../../Assets/Images/HomeBlack.png";
import homeWhite from "../../../Assets/Images/HomeWhite.png";
import callsBlack from "../../../Assets/Images/CallsBlack.png";
import callsWhite from "../../../Assets/Images/CallsWhite.png";
import requestBlack from "../../../Assets/Images/RequestsBlack.png";
import requestWhite from "../../../Assets/Images/RequestsWhite.png";
import settingsBlack from "../../../Assets/Images/SettingsBlack.png";
import settingsWhite from "../../../Assets/Images/SettingsWhite.png";

const navigationOptions: OptionMenuProps[] = [
    {
        name: "Home",
        path: "/Home",
        alt: "Ícone de casa",
        iconUnselect: homeBlack,
        iconSelect: homeWhite,
    },
    {
        name: "Chamados",
        path: "/Calls",
        alt: "Ícone de chamados",
        iconUnselect: callsBlack,
        iconSelect: callsWhite,
    },
    {
        name: "Solicitações",
        path: "",
        alt: "Ícone de solicitações",
        iconUnselect: requestBlack,
        iconSelect: requestWhite,
    },
    {
        name: "Configurações",
        path: "",
        alt: "Ícone de configurações",
        iconUnselect: settingsBlack,
        iconSelect: settingsWhite,
    },
];

export default navigationOptions;
