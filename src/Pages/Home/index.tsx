import { ButtonNew } from "../../Components/Home/ButtonNew";
import { IssueMobile } from "../../Components/Home/CalledMobile";
import { HeaderMobile } from "../../Components/Home/HeaderMobile";
import { NavigationBar } from "../../Components/MenuNavegation";
import {
	ButtonWrapper,
	HeaderContent,
	MainMobile,
	ScreenContainer,
} from "./styles";
import { issueMobileData, headerMobileData } from "./data";
export const Home = () => {
	const issuesNumber = issueMobileData.length;
	return (
		<ScreenContainer>
			<MainMobile>
				<HeaderMobile
					userName={headerMobileData.userName}
					pageTittle={headerMobileData.pageTittle}
					issueQuantify={issuesNumber}
				/>
				<HeaderContent>
					{issueMobileData.map((issue) => {
						return (
							<IssueMobile
								key={issue.id}
								id={issue.id}
								description={issue.description}
								date={issue.date}
								status={issue.status}
								isUpdated={issue.isUpdated}
								color={issue.color}
							/>
						);
					})}
				</HeaderContent>
				<ButtonWrapper>{issuesNumber < 4 ? <ButtonNew /> : null}</ButtonWrapper>
			</MainMobile>
			<NavigationBar />
		</ScreenContainer>
	);
};
