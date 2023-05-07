import { LogoFC } from "../../../Assets/Icons";
import addButtonAlt from "../../../Assets/Images/AddButtonAlt.png";
import { IconButton } from "../../IconButton";
import {
	UserName,
	UserText,
	PageTitle,
	TittleText,
	HeaderHome,
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
	return (
		<HeaderHome>
			<LogoFC />
			<UserName>
				<UserText>Bom dia, {userName}!</UserText>
			</UserName>
			<PageTitle>
				<TittleText>{pageTittle}</TittleText>
				{issueQuantify > 4 ? <IconButton icon={addButtonAlt} /> : null}
			</PageTitle>
		</HeaderHome>
	);
};
