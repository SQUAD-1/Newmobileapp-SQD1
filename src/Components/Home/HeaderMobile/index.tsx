import { LogoFC } from "../../../Assets/Icons";
import addButtonAlt from "../../../Assets/Images/AddButtonAlt.png";
import {
	UserName,
	UserText,
	PageTitle,
	TittleText,
	HeaderHome,
	ButtonImge,
} from "./styles";

export type HeaderMobileProps = {
	userName: string;
	pageTittle: string;
	issueQuantify: number;
};

export const HeaderMobile = ({
	userName,
	pageTittle,
	issueQuantify,
}: HeaderMobileProps) => {
	const hours = new Date().getHours();

	const timeOfDay = () => {
		if (hours > 12 && hours < 18) {
			return "Boa tarde";
		} else if (hours > 18 || hours < 0) {
			return "Boa noite";
		} else {
			return "Bom dia";
		}
	};

	console.log("hours", hours);
	return (
		<HeaderHome>
			<LogoFC />
			<UserName>
				<UserText>
					{timeOfDay()}, {userName}!
				</UserText>
			</UserName>
			<PageTitle>
				<TittleText>{pageTittle}</TittleText>
				{issueQuantify > 4 ? (
					<ButtonImge
						onClick={() => (window.location.href = "/OpenCall")}
						src={addButtonAlt}
					/>
				) : null}
			</PageTitle>
		</HeaderHome>
	);
};
