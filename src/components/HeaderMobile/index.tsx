import { LogoFC } from "@/assets/Icons";
import addButtonAlt from "@/assets/Images/AddButtonAlt.png";
import {
	UserName,
	UserText,
	PageTitle,
	TittleText,
	HeaderHome,
	FirstSection,
	SecondSection,
} from "./styles";
import { IconButton } from "../Buttons";
import { useMemo } from "react";
import { Row } from "@/styles";

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
	const greetingMessage = useMemo(() => {
		const hour = new Date().getHours();
		return hour > 5 && hour < 12
			? "Bom dia"
			: hour >= 12 && hour < 18
			? "Boa tarde"
			: hour >= 18 && hour < 24
			? "Boa noite"
			: "Boa madrugada";
	}, []);
	return (
		<HeaderHome>
			<FirstSection>
				<Row>
					<LogoFC />
				</Row>
				<Row>
					<UserName>
						<UserText>
							{greetingMessage}, {userName}!
						</UserText>
					</UserName>
				</Row>
			</FirstSection>
			<SecondSection>
				<PageTitle>
					<TittleText>{pageTittle}</TittleText>
					{issueQuantify > 4 ? (
						<IconButton
							path={"/abrir-chamado"}
							icon={addButtonAlt}
						/>
					) : null}
				</PageTitle>
			</SecondSection>
		</HeaderHome>
	);
};
