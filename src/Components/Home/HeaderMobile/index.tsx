import { LogoFC } from "../../../Assets/Icons";
import addButtonAlt from "../../../Assets/Images/AddButtonAlt.png";
import {
	UserName,
	UserText,
	PageTitle,
	TittleText,
	HeaderHome,
	ButtonImage,
} from "./styles";

export type HeaderMobileProps = {
	userName: string;
	pageTittle: string;
	issueQuantify?: number;
};

export const HeaderMobile = ({
	userName,
	pageTittle,
	issueQuantify = 0,
}: HeaderMobileProps) => {
	const hours = new Date().getHours();

	const timeOfDay = () => {
		if (hours > 12 && hours < 18) {
			return "Boa tarde";
		} else if (hours > 18 || hours < 4) {
			return "Boa noite";
		} else {
			return "Bom dia";
		}
	};
	return (
		<HeaderHome>
			<LogoFC />
			<UserName>
				<UserText>
					{timeOfDay()}, {userName.split(" ")[0]}!
				</UserText>
			</UserName>
			<PageTitle>
				<TittleText>{pageTittle}</TittleText>
				{issueQuantify >= 4 ? (
					<ButtonImage
						onClick={() => (window.location.href = "/AbrirChamado")}
						src={addButtonAlt}
					/>
				) : null}
			</PageTitle>
		</HeaderHome>
	);
};
