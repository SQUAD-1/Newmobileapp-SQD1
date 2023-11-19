import { OptionMenuProps } from "@/assets";
import homeBlack from "@/assets/Images/HomeBlack.png";
import homeWhite from "@/assets/Images/HomeWhite.png";
import callsBlack from "@/assets/Images/CallsBlack.png";
import callsWhite from "@/assets/Images/CallsWhite.png";
import requestBlack from "@/assets/Images/RequestsBlack.png";
import requestWhite from "@/assets/Images/RequestsWhite.png";
import settingsBlack from "@/assets/Images/SettingsBlack.png";
import settingsWhite from "@/assets/Images/SettingsWhite.png";

const navigationOptions: OptionMenuProps[] = [
	{
		name: "Iniciar",
		path: "/",
		alt: "Ícone de casa",
		iconUnselect: homeBlack,
		iconSelect: homeWhite,
	},
	{
		name: "Chamados",
		path: "",
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
