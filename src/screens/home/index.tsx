import { ButtonNew } from "@/components/Buttons";
import { IssueMobile } from "@/components/CalledMobile";
import { HeaderMobile } from "@/components/HeaderMobile";
import { NavigationBar } from "@/components/MenuNavegation";
import {
	ButtonWrapper,
	HeaderContent,
	MainMobile,
	OverflowDiv,
	ScreenContainer,
} from "./styles";
import { issueMobileData, headerMobileData } from "./data";
const Homepage = () => {
	const issuesNumber = 1; // issueMobileData.length;
	return (
		<ScreenContainer>
			<MainMobile>
				<HeaderMobile
					userName="colaborador"
					pageTittle={headerMobileData.pageTittle}
					issueQuantify={issuesNumber}
				/>
				<OverflowDiv>
					<HeaderContent>
						{/* {issueMobileData.map((issue) => {
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
						})} */}
					</HeaderContent>
					<ButtonWrapper>
						{issuesNumber < 4 ? <ButtonNew /> : null}
					</ButtonWrapper>
				</OverflowDiv>
			</MainMobile>
			<NavigationBar />
		</ScreenContainer>
	);
};

export default Homepage;
